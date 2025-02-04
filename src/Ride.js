// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Ride.css';

// function Ride() {
//   const [rides, setRides] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     locationFrom: '',
//     locationTo: '',
//     date: '',
//     time: '',
//     registrationNumber: '',
//     contact: '',
//     paymentMethod: ''
//   });
//   const [showRides, setShowRides] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');

//   // Fetch rides from backend
//   const fetchRides = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/getRides');
//       setRides(response.data);
//     } catch (error) {
//       console.error('Error fetching rides:', error);
//     }
//   };

//   useEffect(() => {
//     if (showRides) {
//       fetchRides();
//     }
//   }, [showRides]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/addRide', formData);
//       setRides([...rides, response.data]);

//       // Reset the form fields after successful submission
//       setFormData({
//         name: '',
//         locationFrom: '',
//         locationTo: '',
//         date: '',
//         time: '',
//         registrationNumber: '',
//         contact: '',
//         paymentMethod: ''
//       });

//       // Show success message
//       setSuccessMessage('Ride added successfully!');
//       setTimeout(() => setSuccessMessage(''), 3000);

//       // Show the upcoming rides after form submission
//       setShowRides(true);
//     } catch (error) {
//       console.error('Error adding ride:', error);
//     }
//   };

//   return (
//     <div className="ride-container">
//       <h2>LPU RIDE SHARING</h2>

//       <div className="form-and-buttons">
//         {/* Ride Form */}
//         <div className="ride-form-container">
//           <form onSubmit={handleSubmit} className="ride-form">
//             <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
//             <label>From: <input type="text" name="locationFrom" value={formData.locationFrom} onChange={handleChange} required /></label>
//             <label>To: <input type="text" name="locationTo" value={formData.locationTo} onChange={handleChange} required /></label>
//             <label>Date: <input type="date" name="date" value={formData.date} onChange={handleChange} required /></label>
//             <label>Time: <input type="time" name="time" value={formData.time} onChange={handleChange} required /></label>
//             <label>Registration Number: <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required /></label>
//             <label>Contact: <input type="text" name="contact" value={formData.contact} onChange={handleChange} required /></label>
//             <label>Payment Method:
//               <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
//                 <option value="" disabled>Select a payment method</option>
//                 <option value="Cash">Cash</option>
//                 <option value="UPI">UPI</option>
//                 <option value="Card">Card</option>
//               </select>
//             </label>
//             <button type="submit" className="submit-button">Offer Ride</button>
//           </form>
//           {successMessage && <div className="success-message">{successMessage}</div>}
//         </div>

//         {/* Button to show upcoming rides */}
//         <div className="ride-buttons">
//           <button onClick={() => setShowRides(true)} className="button">Upcoming Rides</button>
//         </div>
//       </div>

//       {/* Displaying the list of rides */}
//       {showRides && (
//         <div className="ride-posts">
//           <h3>Upcoming Rides</h3>
//           <div className="rides-list">
//             {rides.length > 0 ? (
//               rides.map((ride) => (
//                 <div key={ride._id} className="ride-post">
//                   <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
//                   <p><strong>Name:</strong> {ride.name}</p>
//                   <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
//                   <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
//                   <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
//                   <p><strong>Contact:</strong> {ride.contact}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No upcoming rides available</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Ride;














import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ride.css';

function Ride() {
  const [rides, setRides] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    locationFrom: '',
    locationTo: '',
    date: '',
    time: '',
    registrationNumber: '',
    contact: '',
    paymentMethod: ''
  });
  const [showRides, setShowRides] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch rides from backend
  const fetchRides = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getRides');
      setRides(response.data);
    } catch (error) {
      console.error('Error fetching rides:', error);
    }
  };

  // Only fetch rides when "Upcoming Rides" button is clicked
  useEffect(() => {
    if (showRides) {
      fetchRides();
    }
  }, [showRides]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addRide', formData);
      
      // Prepend the newly added ride to the top of the list in the state
      setRides([response.data, ...rides]);

      // Reset the form fields after successful submission
      setFormData({
        name: '',
        locationFrom: '',
        locationTo: '',
        date: '',
        time: '',
        registrationNumber: '',
        contact: '',
        paymentMethod: ''
      });

      // Show success message
      setSuccessMessage('Ride added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error adding ride:', error);
    }
  };

  return (
    <div className="ride-container">
      <h2>LPU RIDE SHARING</h2>

      <div className="form-and-buttons">
        {/* Ride Form */}
        <div className="ride-form-container">
          <form onSubmit={handleSubmit} className="ride-form">
            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
            <label>From: <input type="text" name="locationFrom" value={formData.locationFrom} onChange={handleChange} required /></label>
            <label>To: <input type="text" name="locationTo" value={formData.locationTo} onChange={handleChange} required /></label>
            <label>Date: <input type="date" name="date" value={formData.date} onChange={handleChange} required /></label>
            <label>Time: <input type="time" name="time" value={formData.time} onChange={handleChange} required /></label>
            <label>Registration Number: <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} required /></label>
            <label>Contact: <input type="text" name="contact" value={formData.contact} onChange={handleChange} required /></label>
            <label>Payment Method:
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                <option value="" disabled>Select a payment method</option>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
              </select>
            </label>
            <button type="submit" className="submit-button">Offer Ride</button>
          </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
        </div>

        {/* Button to show upcoming rides */}
        <div className="ride-buttons">
          <button style={{marginRight:'200px',height:'30px',backgroundColor:'red',color:'black',borderRadius:'20px',width:'200px',height:'50px',fontSize:'20px',cursor:'pointer'}}onClick={() => setShowRides(true)} className="button upcoming-rides-btn">Upcoming Ride</button>
        </div>
      </div>

      {/* Displaying the list of rides only when "Upcoming Rides" is clicked */}
      {showRides && (
        <div className="rides-display-container">
          <div className="ride-posts">
            <h3 style={{marginLeft:'150px',}}>Upcoming Rides</h3>
            <div className="rides-list">
              {rides.length > 0 ? (
                rides.map((ride) => (
                  <div key={ride._id} className="ride-post">
                    <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
                    <p><strong>Name:</strong> {ride.name}</p>
                    <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
                    <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
                    <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
                    <p><strong>Contact:</strong> {ride.contact}</p>
                  </div>
                ))
              ) : (
                <p>No upcoming rides available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ride;
