import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Home from './Home';
import AboutUs from './AboutUs';
import LostFound from './LostFound';
import Login from './Login';  
import Ride from './Ride';   // Import the Ride component  
import Fotter from './Fotter';  // Import the Footer component


const App = () => {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path='body' element={<Body searchTerm={searchTerm} />} />
          <Route path="lostfound" element={<LostFound />} />
          <Route path='ride' element={<Ride />} />
          <Route path="login" element={<Login></Login>}></Route>
        </Routes>
        <Fotter /> {/* Place Footer component outside Routes */}
      </BrowserRouter>
    </div>
  );
};

export default App;
