import React, { useState } from 'react';
import axios from 'axios';
import './LostFound.css';

function LostFound() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    type: 'lost', // Default to 'lost'
    itemName: '',
    description: '',
    location: '',
    contact: ''
  });
  const [filter, setFilter] = useState(''); // 'lost', 'found', or ''

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/api/lostitems', formData);
      
      // If the request is successful, update the items state
      setItems([...items, response.data]);

      // Clear the form after submission
      setFormData({
        type: 'lost',
        itemName: '',
        description: '',
        location: '',
        contact: ''
      });
    } catch (error) {
      console.error('There was an error posting the data:', error);
    }
  };

  // Handle delete post
  const handleDelete = async (id) => {
    try {
      // Send delete request to backend
      await axios.delete(`http://localhost:5000/api/lostitems/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('There was an error deleting the item:', error);
    }
  };

  // Filter items based on selected filter
  const filteredItems = filter ? items.filter(item => item.type === filter) : items;

  return (
    <div style={{ backgroundColor: '#E8F5E9', marginTop: '-40px' }}>
      <div className="lost-found-container" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="form-container">
          <h2>Lost & Found</h2>
          <form onSubmit={handleSubmit} className="lost-found-form">
            <label>
              Type:
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </label>

            <label>
              Item Name:
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
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

            <button type="submit" className="submit-button">Post</button>
          </form>
        </div>

        <div className="filter-buttons">
          <button onClick={() => setFilter('lost')} className="filter-button">Lost Items</button>
          <button onClick={() => setFilter('found')} className="filter-button">Found Items</button>
        </div>

        {/* Displaying the posts */}
        <div className="posts">
          <h3>{filter === 'lost' ? 'Lost Items' : filter === 'found' ? 'Found Items' : 'All Items'}</h3>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="post">
                <h4>{item.type === 'lost' ? 'Lost' : 'Found'} Item: {item.itemName}</h4>
                <p><strong>Description:</strong> {item.description}</p>
                <p><strong>Location:</strong> {item.location}</p>
                <p><strong>Contact:</strong> {item.contact}</p>
                <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
              </div>
            ))
          ) : (
            <p>No items to display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LostFound;
