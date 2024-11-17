// import React from 'react'

// const Ride = () => {
//   return (
//     <div>
//         <h1>Ride..</h1>
//     </div>
//   )
// }

// export default Ride





/*
import React, { useState } from 'react';
import './Ride.css';

function Ride() {
  const [rides, setRides] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    locationFrom: '',
    locationTo: '',
    date: '',
    contact: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRides([...rides, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      locationFrom: '',
      locationTo: '',
      date: '',
      contact: ''
    });
  };

  // Handle delete ride
  const handleDelete = (id) => {
    setRides(rides.filter(ride => ride.id !== id));
  };

  return (
    <div className="ride-container">
      <h2>Available Rides</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          From:
          <input
            type="text"
            name="locationFrom"
            value={formData.locationFrom}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          To:
          <input
            type="text"
            name="locationTo"
            value={formData.locationTo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Information:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-button">Offer Ride</button>
      </form>

      <div className="ride-posts">
        <h3>Available Rides</h3>
        {rides.length > 0 ? (
          rides.map((ride) => (
            <div key={ride.id} className="ride-post">
              <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
              <p><strong>Name:</strong> {ride.name}</p>
              <p><strong>Date:</strong> {ride.date}</p>
              <p><strong>Contact:</strong> {ride.contact}</p>
              <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
            </div>
          ))
        ) : (
          <p>No available rides</p>
        )}
      </div>
    </div>
  );
}

export default Ride;
*/






















/*
import React, { useState } from 'react';
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
    ticketPrice: '',
    contact: '',
    paymentMethod: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRides([...rides, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      locationFrom: '',
      locationTo: '',
      date: '',
      time: '',
      registrationNumber: '',
      ticketPrice: '',
      contact: '',
      paymentMethod: ''
    });
  };

  // Handle delete ride
  const handleDelete = (id) => {
    setRides(rides.filter(ride => ride.id !== id));
  };

  return (
    <div className="ride-container">
      <h2>Available Rides</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          From:
          <input
            type="text"
            name="locationFrom"
            value={formData.locationFrom}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          To:
          <input
            type="text"
            name="locationTo"
            value={formData.locationTo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Registration Number:
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ticket Price (in ₹):
          <input
            type="number"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            required
            min="0"
          />
        </label>

        <label>
          Contact Information:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="" disabled>Select a payment method</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>
        </label>

        <button type="submit" className="submit-button">Offer Ride</button>
      </form>

      <div className="ride-posts">
        <h3>Available Rides</h3>
        {rides.length > 0 ? (
          rides.map((ride) => (
            <div key={ride.id} className="ride-post">
              <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
              <p><strong>Name:</strong> {ride.name}</p>
              <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
              <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
              <p><strong>Ticket Price:</strong> ₹{ride.ticketPrice}</p>
              <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
              <p><strong>Contact:</strong> {ride.contact}</p>
              <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
            </div>
          ))
        ) : (
          <p>No available rides</p>
        )}
      </div>
    </div>
  );
}

export default Ride;

*/




























// import React, { useState } from 'react';
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
//     ticketPrice: '',
//     contact: '',
//     paymentMethod: ''
//   });
//   const [showAvailable, setShowAvailable] = useState(true);
//   const [interestedRiders, setInterestedRiders] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission for available rides
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setRides([...rides, { ...formData, id: Date.now() }]);
//     setFormData({
//       name: '',
//       locationFrom: '',
//       locationTo: '',
//       date: '',
//       time: '',
//       registrationNumber: '',
//       ticketPrice: '',
//       contact: '',
//       paymentMethod: ''
//     });
//   };

//   // Handle delete ride
//   const handleDelete = (id) => {
//     setRides(rides.filter(ride => ride.id !== id));
//   };

//   // Toggle between Available and Interested views
//   const toggleView = (view) => {
//     setShowAvailable(view === 'available');
//   };

//   // Add interested rider
//   const handleInterested = (ride) => {
//     setInterestedRiders([...interestedRiders, { ...ride, interestedId: Date.now() }]);
//   };

//   // Delete interested rider
//   const deleteInterested = (id) => {
//     setInterestedRiders(interestedRiders.filter(rider => rider.interestedId !== id));
//   };

//   return (
//     <div className="ride-container">
//       <h2>Available Rides</h2>
//       <form onSubmit={handleSubmit} className="ride-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           From:
//           <input
//             type="text"
//             name="locationFrom"
//             value={formData.locationFrom}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           To:
//           <input
//             type="text"
//             name="locationTo"
//             value={formData.locationTo}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Time:
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Registration Number:
//           <input
//             type="text"
//             name="registrationNumber"
//             value={formData.registrationNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Ticket Price (in ₹):
//           <input
//             type="number"
//             name="ticketPrice"
//             value={formData.ticketPrice}
//             onChange={handleChange}
//             required
//             min="0"
//           />
//         </label>

//         <label>
//           Contact Information:
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Payment Method:
//           <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
//             <option value="" disabled>Select a payment method</option>
//             <option value="Cash">Cash</option>
//             <option value="UPI">UPI</option>
//             <option value="Card">Card</option>
//           </select>
//         </label>

//         <button type="submit" className="submit-button">Offer Ride</button>
//       </form>

//       <div className="button-group">
//         <button onClick={() => toggleView('available')} className={showAvailable ? 'active' : ''}>
//           Available Rides
//         </button>
//         <button onClick={() => toggleView('interested')} className={!showAvailable ? 'active' : ''}>
//           Interested Riders
//         </button>
//       </div>

//       <div className="ride-posts">
//         {showAvailable ? (
//           <div>
//             <h3>Available Rides</h3>
//             {rides.length > 0 ? (
//               rides.map((ride) => (
//                 <div key={ride.id} className="ride-post">
//                   <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
//                   <p><strong>Name:</strong> {ride.name}</p>
//                   <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
//                   <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
//                   <p><strong>Ticket Price:</strong> ₹{ride.ticketPrice}</p>
//                   <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
//                   <p><strong>Contact:</strong> {ride.contact}</p>
//                   <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
//                   <button onClick={() => handleInterested(ride)} className="interested-button">I'm Interested</button>
//                 </div>
//               ))
//             ) : (
//               <p>No available rides</p>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h3>Interested Riders</h3>
//             {interestedRiders.length > 0 ? (
//               interestedRiders.map((rider) => (
//                 <div key={rider.interestedId} className="ride-post">
//                   <h4>Interested in Ride from {rider.locationFrom} to {rider.locationTo}</h4>
//                   <p><strong>Name:</strong> {rider.name}</p>
//                   <p><strong>Date:</strong> {rider.date} at {rider.time}</p>
//                   <p><strong>Contact:</strong> {rider.contact}</p>
//                   <button onClick={() => deleteInterested(rider.interestedId)} className="delete-button">Remove</button>
//                 </div>
//               ))
//             ) : (
//               <p>No interested riders</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Ride;





























// import React, { useState } from 'react';
// import './Ride.css';

// function Ride() {
//   const [rides, setRides] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     locationFrom: '',
//     locationTo: '',
//     date: '',
//     time: '',
//     registrationNumber: '',
//     contact: '',
//     paymentMethod: ''
//   });
//   const [showAvailable, setShowAvailable] = useState(true);
//   const [interestedRiders, setInterestedRiders] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission for available rides
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setRides([...rides, { ...formData, id: Date.now() }]);
//     setFormData({
//       name: '',
//       locationFrom: '',
//       locationTo: '',
//       date: '',
//       time: '',
//       registrationNumber: '',
//       contact: '',
//       paymentMethod: ''
//     });
//   };

//   // Handle delete ride
//   const handleDelete = (id) => {
//     setRides(rides.filter(ride => ride.id !== id));
//   };

//   // Toggle between Available and Interested views
//   const toggleView = (view) => {
//     setShowAvailable(view === 'available');
//   };

//   // Add interested rider
//   const handleInterested = (ride) => {
//     setInterestedRiders([...interestedRiders, { ...ride, interestedId: Date.now() }]);
//   };

//   // Delete interested rider
//   const deleteInterested = (id) => {
//     setInterestedRiders(interestedRiders.filter(rider => rider.interestedId !== id));
//   };

//   return (
//     <div className="ride-container">
//       <h2>Available Rides</h2>
//       <form onSubmit={handleSubmit} className="ride-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           From:
//           <input
//             type="text"
//             name="locationFrom"
//             value={formData.locationFrom}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           To:
//           <input
//             type="text"
//             name="locationTo"
//             value={formData.locationTo}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Time:
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Registration Number:
//           <input
//             type="text"
//             name="registrationNumber"
//             value={formData.registrationNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Contact Information:
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Payment Method:
//           <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
//             <option value="" disabled>Select a payment method</option>
//             <option value="Cash">Cash</option>
//             <option value="UPI">UPI</option>
//             <option value="Card">Card</option>
//           </select>
//         </label>

//         <button type="submit" className="submit-button">Offer Ride</button>
//       </form>

//       <div className="button-group">
//         <button onClick={() => toggleView('available')} className={showAvailable ? 'active' : ''}>
//           Available Rides
//         </button>
//         <button onClick={() => toggleView('interested')} className={!showAvailable ? 'active' : ''}>
//           Interested Riders
//         </button>
//       </div>

//       <div className="ride-posts">
//         {showAvailable ? (
//           <div>
//             <h3>Available Rides</h3>
//             {rides.length > 0 ? (
//               rides.map((ride) => (
//                 <div key={ride.id} className="ride-post">
//                   <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
//                   <p><strong>Name:</strong> {ride.name}</p>
//                   <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
//                   <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
//                   <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
//                   <p><strong>Contact:</strong> {ride.contact}</p>
//                   <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
//                   <button onClick={() => handleInterested(ride)} className="interested-button">I'm Interested</button>
//                 </div>
//               ))
//             ) : (
//               <p>No available rides</p>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h3>Interested Riders</h3>
//             {interestedRiders.length > 0 ? (
//               interestedRiders.map((rider) => (
//                 <div key={rider.interestedId} className="ride-post">
//                   <h4>Interested in Ride from {rider.locationFrom} to {rider.locationTo}</h4>
//                   <p><strong>Name:</strong> {rider.name}</p>
//                   <p><strong>Date:</strong> {rider.date} at {rider.time}</p>
//                   <p><strong>Contact:</strong> {rider.contact}</p>
//                   <button onClick={() => deleteInterested(rider.interestedId)} className="delete-button">Remove</button>
//                 </div>
//               ))
//             ) : (
//               <p>No interested riders</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Ride;




































// import React, { useState } from 'react';
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
//   const [showAvailable, setShowAvailable] = useState(true);
//   const [interestedRiders, setInterestedRiders] = useState([]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission for available rides
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setRides([...rides, { ...formData, id: Date.now() }]);
//     setFormData({
//       name: '',
//       locationFrom: '',
//       locationTo: '',
//       date: '',
//       time: '',
//       registrationNumber: '',
//       contact: '',
//       paymentMethod: ''
//     });
//   };

//   // Handle delete ride
//   const handleDelete = (id) => {
//     setRides(rides.filter(ride => ride.id !== id));
//   };

//   // Toggle between Available and Interested views
//   const toggleView = (view) => {
//     setShowAvailable(view === 'available');
//   };

//   // Add interested rider
//   const handleInterested = (ride) => {
//     setInterestedRiders([...interestedRiders, { ...ride, interestedId: Date.now() }]);
//   };

//   // Delete interested rider
//   const deleteInterested = (id) => {
//     setInterestedRiders(interestedRiders.filter(rider => rider.interestedId !== id));
//   };

//   return (
//     <div className="ride-container">
//       <h2>Available Rides</h2>
//       <form onSubmit={handleSubmit} className="ride-form">
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           From:
//           <input
//             type="text"
//             name="locationFrom"
//             value={formData.locationFrom}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           To:
//           <input
//             type="text"
//             name="locationTo"
//             value={formData.locationTo}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Date:
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Time:
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Registration Number:
//           <input
//             type="text"
//             name="registrationNumber"
//             value={formData.registrationNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Contact Information:
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </label>

//         <label>
//           Payment Method:
//           <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
//             <option value="" disabled>Select a payment method</option>
//             <option value="Cash">Cash</option>
//             <option value="UPI">UPI</option>
//             <option value="Card">Card</option>
//           </select>
//         </label>

//         <button type="submit" className="submit-button">Offer Ride</button>
//       </form>

//       <div className="button-group">
//         <button onClick={() => toggleView('available')} className={showAvailable ? 'active' : ''}>
//           Available Rides
//         </button>
//         <button onClick={() => toggleView('interested')} className={!showAvailable ? 'active' : ''}>
//           Interested Riders
//         </button>
//       </div>

//       <div className="ride-posts">
//         {showAvailable ? (
//           <div>
//             <h3>Available Rides</h3>
//             {rides.length > 0 ? (
//               rides.map((ride) => (
//                 <div key={ride.id} className="ride-post">
//                   <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
//                   <p><strong>Name:</strong> {ride.name}</p>
//                   <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
//                   <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
//                   <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
//                   <p><strong>Contact:</strong> {ride.contact}</p>
//                   <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
//                   <button onClick={() => handleInterested(ride)} className="interested-button">I'm Interested</button>
//                 </div>
//               ))
//             ) : (
//               <p>No available rides</p>
//             )}
//           </div>
//         ) : (
//           <div>
//             <h3>Interested Riders</h3>
//             {interestedRiders.length > 0 ? (
//               interestedRiders.map((rider) => (
//                 <div key={rider.interestedId} className="ride-post">
//                   <h4>Interested in Ride from {rider.locationFrom} to {rider.locationTo}</h4>
//                   <p><strong>Name:</strong> {rider.name}</p>
//                   <p><strong>Date:</strong> {rider.date} at {rider.time}</p>
//                   <p><strong>Contact:</strong> {rider.contact}</p>
//                   <button onClick={() => deleteInterested(rider.interestedId)} className="delete-button">Remove</button>
//                 </div>
//               ))
//             ) : (
//               <p>No interested riders</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Ride;






import React, { useState } from 'react';
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
  const [showAvailable, setShowAvailable] = useState(true);
  const [interestedRiders, setInterestedRiders] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for available rides
  const handleSubmit = (e) => {
    e.preventDefault();
    setRides([...rides, { ...formData, id: Date.now() }]);
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
  };

  // Handle delete ride
  const handleDelete = (id) => {
    setRides(rides.filter(ride => ride.id !== id));
  };

  // Toggle between Available and Interested views
  const toggleView = (view) => {
    setShowAvailable(view === 'available');
  };

  // Add interested rider and set the selected ride for payment options
  const handleInterested = (ride) => {
    setSelectedRide(ride); // Set the ride for which payment options are shown
    setInterestedRiders([...interestedRiders, { ...ride, interestedId: Date.now() }]);
  };

  // Delete interested rider
  const deleteInterested = (id) => {
    setInterestedRiders(interestedRiders.filter(rider => rider.interestedId !== id));
    setSelectedRide(null); // Reset selected ride
  };

  return (
    <div className="ride-container">
      <h2>Available Rides</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          From:
          <input
            type="text"
            name="locationFrom"
            value={formData.locationFrom}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          To:
          <input
            type="text"
            name="locationTo"
            value={formData.locationTo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Registration Number:
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Information:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="" disabled>Select a payment method</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>
        </label>

        <button type="submit" className="submit-button">Offer Ride</button>
      </form>

      <div className="button-group">
        <button onClick={() => toggleView('available')} className={showAvailable ? 'active' : ''}>
          Available Rides
        </button>
        <button onClick={() => toggleView('interested')} className={!showAvailable ? 'active' : ''}>
          Interested Riders
        </button>
      </div>

      <div className="ride-posts">
        {showAvailable ? (
          <div>
            <h3 style={{marginLeft:'900px',position:'absolute',top:'120px',}}>Available Ridesss</h3>
            {rides.length > 0 ? (
              rides.map((ride) => (
                <div key={ride.id} className="ride-post">
                  <h4>Ride from {ride.locationFrom} to {ride.locationTo}</h4>
                  <p><strong>Name:</strong> {ride.name}</p>
                  <p><strong>Date:</strong> {ride.date} at {ride.time}</p>
                  <p><strong>Registration Number:</strong> {ride.registrationNumber}</p>
                  <p><strong>Payment Method:</strong> {ride.paymentMethod}</p>
                  <p><strong>Contact:</strong> {ride.contact}</p>
                  <button onClick={() => handleDelete(ride.id)} className="delete-button">Delete</button>
                  <button onClick={() => handleInterested(ride)} className="interested-button">I'm Interested</button>
                </div>
              ))
            ) : (
              <p>No available rides</p>
            )}
          </div>
        ) : (
          <div>
            <h3>Interested Riders</h3>
            {interestedRiders.length > 0 ? (
              interestedRiders.map((rider) => (
                <div key={rider.interestedId} className="ride-post">
                  <h4>Interested in Ride from {rider.locationFrom} to {rider.locationTo}</h4>
                  <p><strong>Name:</strong> {rider.name}</p>
                  <p><strong>Date:</strong> {rider.date} at {rider.time}</p>
                  <p><strong>Contact:</strong> {rider.contact}</p>
                  {selectedRide && selectedRide.id === rider.id && (
                    <div className="payment-method">
                      <h5>Payment Method: {selectedRide.paymentMethod}</h5>
                      {selectedRide.paymentMethod === 'UPI' && <p>Show UPI QR Code</p>}
                      {selectedRide.paymentMethod === 'Card' && <p>Card payment options will be shown here</p>}
                      {selectedRide.paymentMethod === 'Cash' && <p>Please prepare cash for the ride</p>}
                    </div>
                  )}
                  <button onClick={() => deleteInterested(rider.interestedId)} className="delete-button">Remove</button>
                </div>
              ))
            ) : (
              <p style={{position:'relative'}}>No interested riders</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Ride;





















