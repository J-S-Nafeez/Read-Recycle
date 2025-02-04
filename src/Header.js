
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ setSearchTerm }) => {
  return (
    <div>
      <header className="header-container">
        
        {/* Navigation Menu */}
        <ul className="header-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/body">Buy & Sell</Link></li>
          <li><Link to='/lostfound'>Lost & Found</Link></li>
          <li><Link to="/ride">Ride</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">LogIn</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
