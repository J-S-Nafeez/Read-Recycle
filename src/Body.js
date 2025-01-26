// import React from 'react'
// import './Body.css'

// const Body = () => {
//   return (
//     <div>
//         <div id="Box">

//        <div className="Box">
//        </div>

//        <div className="Box">
//        </div>


//        <div className="Box">
//        </div>

//        <div className="Box">
//        </div>

//        <div className="Box">
//        </div>

//        <div className="Box">
//        </div>
//        </div>

       
//     </div>
//   )
// }

// export default Body;






// import React from 'react';
// import './Body.css';

// const Body = () => {
//   return (
//     <div id="Box">
//       <div className="Box">
//         <h1>PEA306</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>

//       </div>

//       <div className="Box"><h1>PEA305</h1>
//       <button className="buybutton">BUY</button>
//       <button className="sellbutton">SELL</button>
//       </div>
     

//       <div className="Box">
//         <h1>PEV112</h1>
//         <button className="buybutton">BUY</button>
//       <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEV113</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>


//       <div className="Box">
//         <h1>PEV121</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEL132</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>


//       <div className="Box">
//         <h1>PEL125</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>


//       <div className="Box">
//         <h1>PEL130</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEL132</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>


//       <div className="Box">
//         <h1>PEL136</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEL134</h1>
//         <button className="buybutton">BUY</button>
//       <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEA307</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEA308</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//       <div className="Box">
//         <h1>PEV114</h1>
//         <button className="buybutton">BUY</button>
//         <button className="sellbutton">SELL</button>
//       </div>

//     </div>
//   );
// };

// export default Body;













// import React, { useState } from 'react';
// import './Body.css';

// const Body = () => {
//   // State to hold the search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Array of book items
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

//   // Filter the books based on the search query
//   const filteredBooks = books.filter(book =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div id="Box">
//       {/* Search Input Field */}
//       <input
//         type="text"
//         placeholder="Search for a book..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-input"
//       />

//       {/* Display filtered books */}
//       {filteredBooks.map((book) => (
//         <div className="Box" key={book.id}>
//           <h1>{book.name}</h1>
//           <button className="buybutton">BUY</button>
//           <button className="sellbutton">SELL</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Body;




























// import React, { useState } from 'react';
// import './Body.css';

// const Body = () => {
//   // State to hold the search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // State to track the selected book for buy/sell action
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });

//   // Array of book items
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

//   // Filter the books based on the search query
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle button click for BUY or SELL
//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//   };

//   // Reset action details
//   const closeForm = () => {
//     setActionDetails({ action: '', book: null });
//   };

//   return (
//     <div>
//       {/* Search Input Field */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Display filtered books */}
//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button
//               className="buybutton"
//               onClick={() => handleAction('BUY', book)}
//             >
//               BUY
//             </button>
//             <button
//               className="sellbutton"
//               onClick={() => handleAction('SELL', book)}
//             >
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Action Form */}
//       {actionDetails.book && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           <form>
//             <label>
//               Your Name:
//               <input type="text" placeholder="Enter your name" required />
//             </label>
//             <label>
//               Contact Info:
//               <input
//                 type="text"
//                 placeholder="Enter your contact details"
//                 required
//               />
//             </label>
//             <label>
//               Additional Notes:
//               <textarea placeholder="Any additional details..." />
//             </label>
//             <div className="form-buttons">
//               <button type="submit">Submit</button>
//               <button type="button" onClick={closeForm}>
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;












// import React, { useState } from 'react';
// import './Body.css';

// const Body = () => {
//   // States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);

//   // Array of book items
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

//   // Filter books based on search
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle BUY or SELL action
//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false); // Reset payment status
//   };

//   // Confirm Payment
//   const confirmPayment = () => {
//     setPaymentStatus(true);
//     setTransactions((prev) => ({
//       ...prev,
//       bought: [...prev.bought, actionDetails.book],
//     }));
//   };

//   // Add to Sold List
//   const addToSold = () => {
//     setTransactions((prev) => ({
//       ...prev,
//       sold: [...prev.sold, actionDetails.book],
//     }));
//     setActionDetails({ action: '', book: null });
//   };

//   // Reset action details
//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//   };

//   return (
//     <div>
//       {/* Search Input Field */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Buttons to View Transactions */}
//       <div className="transaction-buttons">
//         <button onClick={() => alert(`Bought Books: ${transactions.bought.map(b => b.name).join(', ')}`)}>
//           View Bought Books
//         </button>
//         <button onClick={() => alert(`Sold Books: ${transactions.sold.map(b => b.name).join(', ')}`)}>
//           View Sold Books
//         </button>
//       </div>

//       {/* Display Books */}
//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button
//               className="buybutton"
//               onClick={() => handleAction('BUY', book)}
//             >
//               BUY
//             </button>
//             <button
//               className="sellbutton"
//               onClick={() => handleAction('SELL', book)}
//             >
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Payment or Sell Form */}
//       {actionDetails.book && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           {actionDetails.action === 'BUY' ? (
//             <div>
//               <p>UPI IDs:</p>
//               <p>7995488352@axl</p>
//               <p>7995488352@ybl</p>
//               {!paymentStatus ? (
//                 <button onClick={confirmPayment}>Confirm Payment</button>
//               ) : (
//                 <p style={{ color: 'green' }}>Payment Status: Paid</p>
//               )}
//             </div>
//           ) : (
//             <div>
//               <form>
//                 <label>
//                   Additional Notes:
//                   <textarea placeholder="Enter details about the sale..." />
//                 </label>
//                 <button type="button" onClick={addToSold}>
//                   Mark as Sold
//                 </button>
//               </form>
//             </div>
//           )}
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;







































// import React, { useState } from "react";
// import "./Body.css";

// const Body = () => {
//   // States
//   const [searchQuery, setSearchQuery] = useState("");
//   const [actionDetails, setActionDetails] = useState({ action: "", book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);

//   // Array of book items
//   const books = [
//     { id: "PEA306", name: "PEA306" },
//     { id: "PEA305", name: "PEA305" },
//     { id: "PEV112", name: "PEV112" },
//     { id: "PEV113", name: "PEV113" },
//     { id: "PEV121", name: "PEV121" },
//     { id: "PEL132", name: "PEL132" },
//     { id: "PEL125", name: "PEL125" },
//     { id: "PEL130", name: "PEL130" },
//     { id: "PEL136", name: "PEL136" },
//     { id: "PEL134", name: "PEL134" },
//     { id: "PEA307", name: "PEA307" },
//     { id: "PEA308", name: "PEA308" },
//     { id: "PEV114", name: "PEV114" },
//   ];

//   // Filter books based on search
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle BUY or SELL action
//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false); // Reset payment status
//   };

//   // Confirm Payment
//   const confirmPayment = () => {
//     setPaymentStatus(true);
//     setTransactions((prev) => ({
//       ...prev,
//       bought: [...prev.bought, actionDetails.book],
//     }));
//   };

//   // Add to Sold List
//   const addToSold = () => {
//     setTransactions((prev) => ({
//       ...prev,
//       sold: [...prev.sold, actionDetails.book],
//     }));
//     setActionDetails({ action: "", book: null });
//   };

//   // Reset action details
//   const closeAction = () => {
//     setActionDetails({ action: "", book: null });
//   };

//   return (
//     <div>
//       {/* Search Input Field */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Buttons to View Transactions */}
//       <div className="transaction-buttons">
//         <button
//           onClick={() =>
//             alert(
//               `Bought Books: ${
//                 transactions.bought.length
//                   ? transactions.bought.map((b) => b.name).join(", ")
//                   : "None"
//               }`
//             )
//           }
//         >
//           View Bought Books
//         </button>
//         <button
//           onClick={() =>
//             alert(
//               `Sold Books: ${
//                 transactions.sold.length
//                   ? transactions.sold.map((b) => b.name).join(", ")
//                   : "None"
//               }`
//             )
//           }
//         >
//           View Sold Books
//         </button>
//       </div>

//       {/* Display Books */}
//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button
//               className="buybutton"
//               onClick={() => handleAction("BUY", book)}
//             >
//               BUY
//             </button>
//             <button
//               className="sellbutton"
//               onClick={() => handleAction("SELL", book)}
//             >
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Payment or Sell Form */}
//       {actionDetails.book && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           {actionDetails.action === "BUY" ? (
//             <div>
//               <h3>Scan the QR Code to Pay</h3>
//               <img
//                 src="/scanner.jpg" 
//                 alt="QR Code"
//                 style={{ width: "200px", height: "200px" }}
//               />
//               <p>UPI IDs:</p>
//               <p>7995488352@axl</p>
//               <p>7995488352@ybl</p>
//               {!paymentStatus ? (
//                 <button onClick={confirmPayment}>Confirm Payment</button>
//               ) : (
//                 <p style={{ color: "green" }}>Payment Status: Paid</p>
//               )}
//             </div>
//           ) : (
//             <div>
//               <form>
//                 <label>
//                   Additional Notes:
//                   <textarea placeholder="Enter details about the sale..." />
//                 </label>
//                 <button type="button" onClick={addToSold}>
//                   Mark as Sold
//                 </button>
//               </form>
//             </div>
//           )}
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;



















































import React, { useState } from 'react';
import './Body.css';
const Body = () => {
  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [actionDetails, setActionDetails] = useState({ action: '', book: null });
  const [transactions, setTransactions] = useState({ bought: [], sold: [] });
  const [paymentStatus, setPaymentStatus] = useState(false);

  // Array of book items
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

  // Filter books based on search
  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle BUY or SELL action
  const handleAction = (action, book) => {
    setActionDetails({ action, book });
    setPaymentStatus(false); // Reset payment status
  };

  // Confirm Payment
  const confirmPayment = () => {
    setPaymentStatus(true);
    setTransactions((prev) => ({
      ...prev,
      bought: [...prev.bought, actionDetails.book],
    }));
  };

  // Add to Sold List
  const addToSold = () => {
    setTransactions((prev) => ({
      ...prev,
      sold: [...prev.sold, actionDetails.book],
    }));
    setActionDetails({ action: '', book: null });
  };

  // Reset action details
  const closeAction = () => {
    setActionDetails({ action: '', book: null });
  };

  return (
    <div style={{backgroundColor:'#E8F5E9',marginTop:'-40px'}}>
      {/* Search Input Field */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Display Image */}
      {/* <div className="image-container">
        <img src={sampleImage} alt="Sample" className="header-image" />
      </div> */}

      {/* Buttons to View Transactions */}
      <div className="transaction-buttons">
        <button
          onClick={() =>
            alert(
              `Bought Books: ${transactions.bought
                .map((b) => b.name)
                .join(', ')}`
            )
          }
        >
          View Bought Books
        </button>
        <button
          onClick={() =>
            alert(
              `Sold Books: ${transactions.sold
                .map((b) => b.name)
                .join(', ')}`
            )
          }
        >
          View Sold Books
        </button>
      </div>

      {/* Display Books */}
      <div id="Box">
        {filteredBooks.map((book) => (
          <div className="Box" key={book.id}>
            <h1>{book.name}</h1>
            <button
              className="buybutton"
              onClick={() => handleAction('BUY', book)}
            >
              BUY
            </button>
            <button
              className="sellbutton"
              onClick={() => handleAction('SELL', book)}
            >
              SELL
            </button>
          </div>
        ))}
      </div>

      {/* Payment or Sell Form */}
      {actionDetails.book && (
        <div className="action-form">
          <h2>
            {actionDetails.action} Details for {actionDetails.book.name}
          </h2>
          {actionDetails.action === 'BUY' ? (
            <div>
              <p>UPI IDs:</p>
              <p>7995488352@axl</p>
              <p>7995488352@ybl</p>
              {!paymentStatus ? (
                <button onClick={confirmPayment}>Confirm Payment</button>
              ) : (
                <p style={{ color: 'green' }}>Payment Status: Paid</p>
              )}
            </div>
          ) : (
            <div>
              <form>
                <label>
                  Additional Notes:
                  <textarea placeholder="Enter details about the sale..." />
                </label>
                <button type="button" onClick={addToSold}>
                  Mark as Sold
                </button>
              </form>
            </div>
          )}
          <button onClick={closeAction}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Body;



























// import React, { useState } from 'react';
// import './Body.css';
// import sampleImage from './scanner.jpg';

// const Body = () => {
//   // States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [actionDetails, setActionDetails] = useState({ action: '', book: null });
//   const [transactions, setTransactions] = useState({ bought: [], sold: [] });
//   const [paymentStatus, setPaymentStatus] = useState(false);

//   // Array of book items
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

//   // Filter books based on search
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle BUY or SELL action
//   const handleAction = (action, book) => {
//     setActionDetails({ action, book });
//     setPaymentStatus(false); // Reset payment status
//   };

//   // Confirm Payment
//   const confirmPayment = () => {
//     setPaymentStatus(true);
//     setTransactions((prev) => ({
//       ...prev,
//       bought: [...prev.bought, actionDetails.book],
//     }));
//   };

//   // Add to Sold List
//   const addToSold = () => {
//     setTransactions((prev) => ({
//       ...prev,
//       sold: [...prev.sold, actionDetails.book],
//     }));
//     setActionDetails({ action: '', book: null });
//   };

//   // Reset action details
//   const closeAction = () => {
//     setActionDetails({ action: '', book: null });
//   };

//   return (
//     <div>
//       {/* Search Input Field */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {/* Display Image */}
//       <div className="image-container">
//         <img
//           src={sampleImage}
//           alt="Sample"
//           className={`header-image ${actionDetails.action === 'BUY' ? 'medium-image' : ''}`}
//         />
//       </div>

//       {/* Buttons to View Transactions */}
//       <div className="transaction-buttons">
//         <button
//           onClick={() =>
//             alert(
//               `Bought Books: ${transactions.bought
//                 .map((b) => b.name)
//                 .join(', ')}`
//             )
//           }
//         >
//           View Bought Books
//         </button>
//         <button
//           onClick={() =>
//             alert(
//               `Sold Books: ${transactions.sold
//                 .map((b) => b.name)
//                 .join(', ')}`
//             )
//           }
//         >
//           View Sold Books
//         </button>
//       </div>

//       {/* Display Books */}
//       <div id="Box">
//         {filteredBooks.map((book) => (
//           <div className="Box" key={book.id}>
//             <h1>{book.name}</h1>
//             <button
//               className="buybutton"
//               onClick={() => handleAction('BUY', book)}
//             >
//               BUY
//             </button>
//             <button
//               className="sellbutton"
//               onClick={() => handleAction('SELL', book)}
//             >
//               SELL
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Payment or Sell Form */}
//       {actionDetails.book && (
//         <div className="action-form">
//           <h2>
//             {actionDetails.action} Details for {actionDetails.book.name}
//           </h2>
//           {actionDetails.action === 'BUY' ? (
//             <div>
//               {/* Removed UPI IDs */}
//               {!paymentStatus ? (
//                 <button onClick={confirmPayment}>Confirm Payment</button>
//               ) : (
//                 <p style={{ color: 'green' }}>Payment Status: Paid</p>
//               )}
//             </div>
//           ) : (
//             <div>
//               <form>
//                 <label>
//                   Additional Notes:
//                   <textarea placeholder="Enter details about the sale..." />
//                 </label>
//                 <button type="button" onClick={addToSold}>
//                   Mark as Sold
//                 </button>
//               </form>
//             </div>
//           )}
//           <button onClick={closeAction}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Body;


















