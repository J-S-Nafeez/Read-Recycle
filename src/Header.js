// // import React from 'react'
// // import './Header.css';
// // import { Link } from 'react-router-dom';


// // const Header = () => {
// //   return (
// //     <div>
// //         <div>
// //             <ul className="header">
// //                 <li><Link to="/">Home</Link></li>
// //                 <li><Link to="/about">AboutUs</Link></li>
// //                 <li> <Link to='/lostfound'>Lost & Found</Link></li>
// //                 <li><Link to="/ride">Ride</Link></li>
// //                 <li><Link to="/body">Buy&Sell</Link></li>
                
// //             </ul>
// //             <div className="Searchbar">
// //                 <input style={{borderRadius:'30px',height:'30px'}}type="text" placeholder="Search" />
// //                 <button style={{backgroundColor:'blue',borderRadius:'10px',width:'70px'}}>Search</button>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }
// // export default Header;



















// // import React, { useState } from 'react';
// // import './Header.css';
// // import { Link } from 'react-router-dom';

// // const Header = ({ setSearchTerm }) => {
// //   const handleSearchChange = (event) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <ul className="header">
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/about">About Us</Link></li>
// //         <li><Link to='/lostfound'>Lost & Found</Link></li>
// //         <li><Link to="/ride">Ride</Link></li>
// //         <li><Link to="/body">Buy & Sell</Link></li>
// //       </ul>
// //       <div className="Searchbar">
// //         <input
// //           style={{ borderRadius: '30px', height: '30px' }}
// //           type="text"
// //           placeholder="Search"
// //           onChange={handleSearchChange}
// //         />
// //         <button style={{ backgroundColor: 'blue', borderRadius: '10px', width: '70px' }}>Search</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;










// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import download from './download.png';

// const Header = ({ setSearchTerm }) => {
//   // Function to handle the search input change
//   // c:\Users\USER\Downloads\download (9).png

//   return (
//     <div>
//       <ul className="header">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to='/lostfound'>Lost & Found</Link></li>
//         <li><Link to="/ride">Ride</Link></li>
//         <li><Link to="/body">Buy & Sell</Link></li>
//         <li><Link to="/login">LogIn</Link></li>
//         {/* <img style={{height:'80px',width:'90px',borderRadius:'30px',}} src={download} alt="error" /> */}
//       </ul>
//       {/* <img src={ReadImg} alt="error" /> */}
//       {/* <div className="Searchbar">
//         <input
//           style={{ borderRadius: '30px', height: '30px' }}
//           type="text"
//           placeholder="Search for a book..."
//           onChange={handleSearchChange} 
//         /> */}
//         {/* <button style={{ backgroundColor: 'blue', borderRadius: '10px', width: '70px' }}>Search</button> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default Header;

























// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';
// import Fotter from './Fotter'; // Import the Fotter component
// import download from './download.png';

// const Header = ({ setSearchTerm }) => {
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <ul className="header">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/lostfound">Lost & Found</Link></li>
//         <li><Link to="/ride">Ride</Link></li>
//         <li><Link to="/body">Buy & Sell</Link></li>
//         <img style={{ height: '80px', width: '90px', borderRadius: '30px' }} src={download} alt="Logo" />
//       </ul>

//       <div className="Searchbar">
//         <input
//           style={{ borderRadius: '30px', height: '30px' }}
//           type="text"
//           placeholder="Search for a book..."
//           onChange={handleSearchChange}
//         />
//         <button style={{ backgroundColor: 'blue', borderRadius: '10px', width: '70px' }}>Search</button>
//       </div>

//       {/* Include the footer */}
//       <Fotter />
//     </div>
//   );
// };

// export default Header;






















import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import download from './download.png';

const Header = ({ setSearchTerm }) => {
  return (
    <div>
      <header className="header-container">
        {/* Logo (Optional) */}
        {/* <div className="header-logo">
          <img style={{ height: '50px', width: '60px', borderRadius: '10px' }} src={download} alt="Logo" />
        </div> */}

        {/* Navigation Menu */}
        <ul className="header-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to='/lostfound'>Lost & Found</Link></li>
          <li><Link to="/ride">Ride</Link></li>
          <li><Link to="/body">Buy & Sell</Link></li>
          <li><Link to="/login">LogIn</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
