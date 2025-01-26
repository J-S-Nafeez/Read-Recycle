// import React from 'react';
// import './Fotter.css';

// const Fotter = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <h3>Read & Recycle</h3>
//         <p>Empowering students to buy, sell, and recycle within the campus.</p>
//         <ul className="footer-links">
//           <li><a href="/about">About Us</a></li>
//           <li><a href="/contact">Contact</a></li>
//           <li><a href="/faq">FAQ</a></li>
//           <li><a href="/privacy">Privacy Policy</a></li>
//         </ul>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Read & Recycle. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Fotter;













import React from 'react';
import './Fotter.css';

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Read & Recycle</h3>
        <p>Empowering students to buy, sell, and recycle within the campus.</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Read & Recycle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Fotter;
