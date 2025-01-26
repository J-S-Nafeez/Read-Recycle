// import React, { useState } from 'react';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     regNo: '',
//     phone: '',
//     year: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // Add your login logic here
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F5F5F5' }}>
//       <div style={{ padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFFFF', maxWidth: '400px', width: '100%' }}>
//         <h2 style={{ textAlign: 'center', color: '#1B5E20', marginBottom: '1.5rem' }}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div style={{ marginBottom: '1rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '4px',
//                 border: '1px solid #DDD',
//                 outline: 'none',
//               }}
//             />
//           </div>

//           {/* Registration Number Field */}
//           <div style={{ marginBottom: '1rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Registration Number:</label>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter your registration number"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '4px',
//                 border: '1px solid #DDD',
//                 outline: 'none',
//               }}
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div style={{ marginBottom: '1rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Phone Number:</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               placeholder="Enter your phone number"
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '4px',
//                 border: '1px solid #DDD',
//                 outline: 'none',
//               }}
//             />
//           </div>

//           {/* Year Field */}
//           <div style={{ marginBottom: '1rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>Year:</label>
//             <select
//               name="year"
//               value={formData.year}
//               onChange={handleChange}
//               required
//               style={{
//                 width: '100%',
//                 padding: '0.75rem',
//                 borderRadius: '4px',
//                 border: '1px solid #DDD',
//                 outline: 'none',
//               }}
//             >
//               <option value="" disabled>
//                 Select your year
//               </option>
//               <option value="1st Year">1st Year</option>
//               <option value="2nd Year">2nd Year</option>
//               <option value="3rd Year">3rd Year</option>
//               <option value="4th Year">4th Year</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             style={{
//               width: '100%',
//               padding: '0.75rem',
//               borderRadius: '4px',
//               backgroundColor: '#1B5E20',
//               color: '#FFFFFF',
//               fontWeight: 'bold',
//               border: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Login
//           </button>
//         </form>
//         <p style={{ textAlign: 'center', marginTop: '1rem', color: '#555' }}>
//           Don't have an account?{' '}
//           <a href="/register" style={{ color: '#1B5E20', fontWeight: 'bold', textDecoration: 'none' }}>
//             Register
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;















import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    phone: '',
    year: '',
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully Logged in as ${formData.name}`);
    console.log('Form Data:', formData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert(`Successfully Registered as ${formData.name}`);
    console.log('Register Data:', formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#E8F5E9', marginTop: '-40px' }}>
      <div
        style={{
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#E8F5E9',
          maxWidth: '400px',
          width: '100%',
          marginTop: '-40px',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#050301', marginBottom: '1.5rem' }}>
          {isRegistering ? 'Register' : 'Login'}
        </h2>

        {isRegistering ? (
          <form onSubmit={handleRegisterSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Reg No</label>
              <input
                type="text"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                backgroundColor: '#1B5E20',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0.5rem', display: 'block' }}>Reg No</label>
              <input
                type="text"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                style={{ width: '100%', fontSize: '16px', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                backgroundColor: '#1B5E20',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </form>
        )}

        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#555' }}>
          {isRegistering ? (
            <>
              Already have an account?{' '}
              <a
                href="#"
                onClick={() => setIsRegistering(false)}
                style={{ color: '#1B5E20', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Login
              </a>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <a
                href="#"
                onClick={() => setIsRegistering(true)}
                style={{ color: '#1B5E20', fontWeight: 'bold', textDecoration: 'none' }}
              >
                Register
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
