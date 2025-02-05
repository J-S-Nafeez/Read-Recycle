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
