// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//  // States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   // Array of book items
//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   // Filter books based on search
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle BUY or SELL action
//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false); // Reset payment status
//     setFormSubmitted(false); // Reset form submission status
//     setShowSuccessMessage(false); // Reset success message visibility
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return; // Stop submission if any field is missing
//     }

//     setFormSubmitted(true);
//     setPaymentStatus(false); // Reset payment status

//     // Send transaction data to the backend
//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       if (response.data.success) {
//         setTransactions((prev) => ({
//           ...prev,
//           bought: [...prev.bought, actionDetails.book],
//         }));
//         setShowSuccessMessage(true); // Show success message after form submission
//       }
//     } catch (error) {
//       console.error("Error submitting transaction data:", error);
//     }
//   };

//   // Confirm Payment
//   const confirmPayment = () => {
//     setPaymentStatus(true);
//     setTransactions((prev) => ({
//       ...prev,
//       bought: [...prev.bought, actionDetails.book],
//     }));
//   };

//   // Add to Sold List
//   const addToSold = () => {
//     setTransactions((prev) => ({
//       ...prev,
//       sold: [...prev.sold, actionDetails.book],
//     }));
//     setActionDetails({ action: '', book: null });
//   };

//   // Reset action details
//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessMessage(false); // Hide the success message when closing the action form
//   };
// const handleClose=()=>
// {
//     setShowSuccessMessage(false); // Hide the success message when closing the action form
//     setPaymentStatus(false); // Reset payment status
//     setFormSubmitted(false); // Reset form submission status
//     setActionDetails({ action: '', book: null }); // Reset action details
// }


//   return (
//     <div>
//       {/* Search Input Field */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

// {/*       Buttons to View Transactions
//       <div className="transaction-buttons">
//         <button
//           onClick={() =>
//             alert(
//               `Bought Books: ${transactions.bought
//                 .map((b) => b.name)
//                 .join(', ')}`
//             )
//           }
//         >
//           View Bought Books
//         </button>
//         <button
//           onClick={() =>
//             alert(
//               `Sold Books: ${transactions.sold
//                 .map((b) => b.name)
//                 .join(', ')}`
//             )
//           }
//         >
//           View Sold Books */}
// {/*         </button>
//       </div> */}

//       {/* Display Books */}
//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button
//               className="buybutton"
//               onClick={() => handleAction('BUY', book)}
//             >
//               BUY
//             </button>
//             <button
//               className="sellbutton"
//               onClick={() => handleAction('SELL', book)}
//             >
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Payment or Sell Form */}
//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={userInfo.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//               />
//             </label>
//             <label>
//               Registration No:
//               <input
//                 type="text"
//                 name="regno"
//                 value={userInfo.regno}
//                 onChange={handleInputChange}
//                 placeholder="Enter your registration number"
//               />
//             </label>
//             <label>
//               Year:
//               <input
//                 type="text"
//                 name="year"
//                 value={userInfo.year}
//                 onChange={handleInputChange}
//                 placeholder="Enter your year"
//               />
//             </label>
//             <label>
//               Phone:
//               <input
//                 type="text"
//                 name="phone"
//                 value={userInfo.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter your phone number"
//               />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={handleClose} style={{backgroundColor:'red',marginLeft:'20px',}}> Close</button>
//           </div>
//         </div>
//       )}

//       {/* Show Success Message After Form Submission */}
//       {showSuccessMessage && (
//         <div className="success-message">
//           <p>Your data is successfully added!</p>
//           <p>Your book will be {actionDetails.action} within one day.</p>
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;
 























// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false);
//     setFormSubmitted(false);
//     setShowSuccessMessage(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     setFormSubmitted(true);
//     setPaymentStatus(false);

//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       if (response.data.success) {
//         setTransactions((prev) => ({
//           ...prev,
//           bought: [...prev.bought, actionDetails.book],
//         }));
//         setShowSuccessMessage(true);
//       }
//     } catch (error) {
//       console.error("Error submitting transaction data:", error);
//     }
//   };

//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessMessage(false);
//     setUserInfo({ name: '', regno: '', year: '', phone: '' });
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button className="buybutton" onClick={() => handleAction('BUY', book)}>
//               BUY
//             </button>
//             <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} placeholder="Enter your name" />
//             </label>
//             <label>
//               Registration No:
//               <input type="text" name="regno" value={userInfo.regno} onChange={handleInputChange} placeholder="Enter your registration number" />
//             </label>
//             <label>
//               Year:
//               <input type="text" name="year" value={userInfo.year} onChange={handleInputChange} placeholder="Enter your year" />
//             </label>
//             <label>
//               Phone:
//               <input type="text" name="phone" value={userInfo.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="success-message">
//           <p>Your data is successfully added!</p>
//           <p>Your book will be {actionDetails.action} within one day.</p>
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;














































// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false);
//     setFormSubmitted(false);
//     setShowSuccessMessage(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     setFormSubmitted(true);
//     setPaymentStatus(false);

//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       if (response.data.success) {
//         setTransactions((prev) => ({
//           ...prev,
//           bought: [...prev.bought, actionDetails.book],
//         }));
//         setShowSuccessMessage(true); // Show success message
//       }
//     } catch (error) {
//       console.error("Error submitting transaction data:", error);
//     }
//   };

//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessMessage(false);
//     setUserInfo({ name: '', regno: '', year: '', phone: '' });
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button className="buybutton" onClick={() => handleAction('BUY', book)}>
//               BUY
//             </button>
//             <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={userInfo.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//               />
//             </label>
//             <label>
//               Registration No:
//               <input
//                 type="text"
//                 name="regno"
//                 value={userInfo.regno}
//                 onChange={handleInputChange}
//                 placeholder="Enter your registration number"
//               />
//             </label>
//             <label>
//               Year:
//               <input
//                 type="text"
//                 name="year"
//                 value={userInfo.year}
//                 onChange={handleInputChange}
//                 placeholder="Enter your year"
//               />
//             </label>
//             <label>
//               Phone:
//               <input
//                 type="text"
//                 name="phone"
//                 value={userInfo.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter your phone number"
//               />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="success-message">
//           <p>Your data is successfully added!</p>
//           <p>Your book will be {actionDetails.action} within one day.</p>
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;





























// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false);
//     setFormSubmitted(false);
//     setShowSuccessMessage(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     console.log('Form submitted, waiting for response...'); // Debugging log

//     setFormSubmitted(true);
//     setPaymentStatus(false);

//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       console.log("API response:", response); // Log API response

//       if (response.data.success) {
//         console.log("Success message will be displayed"); // Log success logic

//         setTransactions((prev) => ({
//           ...prev,
//           bought: [...prev.bought, actionDetails.book],
//         }));
//         setShowSuccessMessage(true); // Show success message
//       }
//     } catch (error) {
//       console.error("Error submitting transaction data:", error);
//     }
//   };

//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessMessage(false);
//     setUserInfo({ name: '', regno: '', year: '', phone: '' });
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button className="buybutton" onClick={() => handleAction('BUY', book)}>
//               BUY
//             </button>
//             <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} placeholder="Enter your name" />
//             </label>
//             <label>
//               Registration No:
//               <input type="text" name="regno" value={userInfo.regno} onChange={handleInputChange} placeholder="Enter your registration number" />
//             </label>
//             <label>
//               Year:
//               <input type="text" name="year" value={userInfo.year} onChange={handleInputChange} placeholder="Enter your year" />
//             </label>
//             <label>
//               Phone:
//               <input type="text" name="phone" value={userInfo.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}

//       {showSuccessMessage && (
//         <div className="success-message">
//           <p>Your data is successfully added!</p>
//           <p>Your book will be {actionDetails.action} within one day.</p>
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;























// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false);
//     setFormSubmitted(false);
//     setShowSuccessPopup(false);
//     setPopupMessage('');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     setFormSubmitted(true);
//     setPaymentStatus(false);
//     setShowSuccessPopup(false);
//     setPopupMessage('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       if (response.data.success) {
//         setTransactions((prev) => ({
//           ...prev,
//           bought: [...prev.bought, actionDetails.book],
//         }));

//         // Show the success popup
//         setPopupMessage('Your data has been successfully stored!');
//         setShowSuccessPopup(true);
//       } else {
//         setPopupMessage('There was an error storing your data. Please try again.');
//         setShowSuccessPopup(true);
//       }
//     } catch (error) {
//       console.error("Error submitting transaction data:", error);
//       setPopupMessage('There was an error storing your data. Please try again.');
//       setShowSuccessPopup(true);
//     }
//   };

//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessPopup(false);
//     setUserInfo({ name: '', regno: '', year: '', phone: '' });
//     setPopupMessage('');
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button className="buybutton" onClick={() => handleAction('BUY', book)}>
//               BUY
//             </button>
//             <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} placeholder="Enter your name" />
//             </label>
//             <label>
//               Registration No:
//               <input type="text" name="regno" value={userInfo.regno} onChange={handleInputChange} placeholder="Enter your registration number" />
//             </label>
//             <label>
//               Year:
//               <input type="text" name="year" value={userInfo.year} onChange={handleInputChange} placeholder="Enter your year" />
//             </label>
//             <label>
//               Phone:
//               <input type="text" name="phone" value={userInfo.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}

//       {showSuccessPopup && (
//         <div className="success-popup">
//           <div className="popup-content">
//             <p>{popupMessage}</p>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;
































// import React, { useState } from 'react';
// import './Body.css';
// import axios from 'axios';

// const Body = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);
//   const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const books = [
//     { id: 'PEA306', name: 'PEA306' },
//     { id: 'PEA305', name: 'PEA305' },
//     { id: 'PEV112', name: 'PEV112' },
//     { id: 'PEV113', name: 'PEV113' },
//     { id: 'PEV121', name: 'PEV121' },
//     { id: 'PEL132', name: 'PEL132' },
//     { id: 'PEL125', name: 'PEL125' },
//     { id: 'PEL130', name: 'PEL130' },
//     { id: 'PEL136', name: 'PEL136' },
//     { id: 'PEL134', name: 'PEL134' },
//     { id: 'PEA307', name: 'PEA307' },
//     { id: 'PEA308', name: 'PEA308' },
//     { id: 'PEV114', name: 'PEV114' },
//   ];

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false);
//     setFormSubmitted(false);
//     setShowSuccessPopup(false);
//     setPopupMessage('');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     setFormSubmitted(true);
//     setPaymentStatus(false);
//     setShowSuccessPopup(false);
//     setPopupMessage('');

//     try {
//       const response = await axios.post('http://localhost:5000/api/add-transaction', {
//         name: userInfo.name,
//         regno: userInfo.regno,
//         year: userInfo.year,
//         phone: userInfo.phone,
//         action: actionDetails.action,
//         book: actionDetails.book.name,
//       });

//       if (response.data.success) {
//         // Update the transaction list based on action (BUY or SELL)
//         if (actionDetails.action === 'BUY') {
//           setTransactions((prev) => ({
//             ...prev,
//             bought: [...prev.bought, actionDetails.book],
//           }));
//         } else if (actionDetails.action === 'SELL') {
//           setTransactions((prev) => ({
//             ...prev,
//             sold: [...prev.sold, actionDetails.book],
//           }));
//         }

//         // Show success popup
//         setPopupMessage('Your data has been successfully stored!');
//         setShowSuccessPopup(true);
//       } else {
//         setPopupMessage('There was an error storing your data. Please try again.');
//         setShowSuccessPopup(true);
//       }
//     } catch (error) {
//       console.error('Error submitting transaction data:', error);
//       setPopupMessage('There was an error storing your data. Please try again.');
//       setShowSuccessPopup(true);
//     }
//   };

//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//     setShowSuccessPopup(false);
//     setUserInfo({ name: '', regno: '', year: '', phone: '' });
//     setPopupMessage('');
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button className="buybutton" onClick={() => handleAction('BUY', book)}>
//               BUY
//             </button>
//             <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {actionDetails.book && !formSubmitted && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <div>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={userInfo.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//               />
//             </label>
//             <label>
//               Registration No:
//               <input
//                 type="text"
//                 name="regno"
//                 value={userInfo.regno}
//                 onChange={handleInputChange}
//                 placeholder="Enter your registration number"
//               />
//             </label>
//             <label>
//               Year:
//               <input
//                 type="text"
//                 name="year"
//                 value={userInfo.year}
//                 onChange={handleInputChange}
//                 placeholder="Enter your year"
//               />
//             </label>
//             <label>
//               Phone:
//               <input
//                 type="text"
//                 name="phone"
//                 value={userInfo.phone}
//                 onChange={handleInputChange}
//                 placeholder="Enter your phone number"
//               />
//             </label>
//             <button onClick={handleSubmit}>Confirm</button>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}

//       {showSuccessPopup && (
//         <div className="success-popup">
//           <div className="popup-content">
//             <p>{popupMessage}</p>
//             <button onClick={closeAction}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;










































































import React, { useState } from 'react';
import './Body.css';
import axios from 'axios';

const Body = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [actionDetails, setActionDetails] = useState({ action: '', book: null });
  const [transactions, setTransactions] = useState({ bought: [], sold: [] });
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', regno: '', year: '', phone: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const books = [
    { id: 'PEA306', name: 'PEA306' },
    { id: 'PEA305', name: 'PEA305' },
    { id: 'PEV112', name: 'PEV112' },
    { id: 'PEV113', name: 'PEV113' },
    { id: 'PEV121', name: 'PEV121' },
    { id: 'PEL132', name: 'PEL132' },
    { id: 'PEL125', name: 'PEL125' },
    { id: 'PEL130', name: 'PEL130' },
    { id: 'PEL136', name: 'PEL136' },
    { id: 'PEL134', name: 'PEL134' },
    { id: 'PEA307', name: 'PEA307' },
    { id: 'PEA308', name: 'PEA308' },
    { id: 'PEV114', name: 'PEV114' },
  ];

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAction = (action, book) => {
    setActionDetails({ action, book });
    setPaymentStatus(false);
    setFormSubmitted(false);
    setShowSuccessPopup(false);
    setPopupMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!userInfo.name || !userInfo.regno || !userInfo.year || !userInfo.phone) {
      alert('Please fill in all the fields.');
      return;
    }

    setFormSubmitted(true);
    setPaymentStatus(false);
    setShowSuccessPopup(false);
    setPopupMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/add-transaction', {
        name: userInfo.name,
        regno: userInfo.regno,
        year: userInfo.year,
        phone: userInfo.phone,
        action: actionDetails.action,
        book: actionDetails.book.name,
      });

      if (response.data.success) {
        if (actionDetails.action === 'BUY') {
          setTransactions((prev) => ({
            ...prev,
            bought: [...prev.bought, actionDetails.book],
          }));
        } else {
          setTransactions((prev) => ({
            ...prev,
            sold: [...prev.sold, actionDetails.book],
          }));
        }

        // Show the success popup
        setPopupMessage('Your data has been successfully stored!');
        setShowSuccessPopup(true);
      } else {
        setPopupMessage('There was an error storing your data. Please try again.');
        setShowSuccessPopup(true);
      }
    } catch (error) {
      console.error('Error submitting transaction data:', error);
      setPopupMessage('There was an error storing your data. Please try again.');
      setShowSuccessPopup(true);
    }
  };

  const closeAction = () => {
    setActionDetails({ action: '', book: null });
    setShowSuccessPopup(false);
    setUserInfo({ name: '', regno: '', year: '', phone: '' });
    setPopupMessage('');
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div id="Box">
        {filteredBooks.map((book) => (
          <div className="Box" key={book.id}>
            <h1>{book.name}</h1>
            <button className="buybutton" onClick={() => handleAction('BUY', book)}>
              BUY
            </button>
            <button className="sellbutton" onClick={() => handleAction('SELL', book)}>
              SELL
            </button>
          </div>
        ))}
      </div>

      {actionDetails.book && !formSubmitted && (
        <div className="action-form">
          <h2>
            {actionDetails.action} Details for {actionDetails.book.name}
          </h2>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Registration No:
              <input
                type="text"
                name="regno"
                value={userInfo.regno}
                onChange={handleInputChange}
                placeholder="Enter your registration number"
              />
            </label>
            <label>
              Year:
              <input
                type="text"
                name="year"
                value={userInfo.year}
                onChange={handleInputChange}
                placeholder="Enter your year"
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </label>
            <button onClick={handleSubmit}>Confirm</button>
            <button onClick={closeAction}>Close</button>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closeAction}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
