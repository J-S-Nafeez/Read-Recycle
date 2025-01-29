

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     regNo: '',
//     phone: '',
//     year: '',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', formData);
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response ? error.response.data.error : 'Error occurred');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/login', formData);
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage(error.response ? error.response.data.error : 'Error occurred');
//     }
//   };

//   return (
//     <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px' }}>
//         <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>User Registration/Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//           <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Registration No" required />
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
//           <select name="year" value={formData.year} onChange={handleChange} required>
//             <option value="">Select Year</option>
//             <option value="1st Year">1st Year</option>
//             <option value="2nd Year">2nd Year</option>
//             <option value="3rd Year">3rd Year</option>
//             <option value="4th Year">4th Year</option>
//           </select>
//           <button type="submit">Register</button>
//         </form>

//         <h3 style={{ marginTop: '1rem', color: '#FF5722' }}>Login</h3>
//         <form onSubmit={handleLogin}>
//           <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Registration No" required />
//           <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
//           <button type="submit">Login</button>
//         </form>

//         <div style={{ marginTop: '1rem', color: '#4CAF50' }}>{message}</div>
//       </div>
//     </div>
//   );
// };

// export default Login;
























import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    phone: '',
    year: '',
  });

  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error occurred');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error occurred');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>{isLogin ? 'User Login' : 'User Registration'}</h2>

        <div className="toggle-buttons">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Register</button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Registration No" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} placeholder="Registration No" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <select name="year" value={formData.year} onChange={handleChange} required>
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            <button type="submit">Register</button>
          </form>
        )}

        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default Login;
