import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useHistory for navigation

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useNavigate(); // For navigation after successful login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Dummy login validation for demonstration
    const { email, password } = formData;

    if (email === 'user@example.com' && password === 'password123') {
      // Successful login, redirect to the dashboard or home page
      history.push('/dashboard');  // Replace with your desired route
    } else {
      // Show error message if login fails
      setErrorMessage('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-navyBlue mb-6 text-center">Login</h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-500 text-white py-3 px-6 rounded-lg mb-6 text-center">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
            />
          </div>

          <button
            type="submit"
            className="bg-deepGreen text-white py-3 px-6 rounded-full hover:bg-teal transition w-full"
            disabled={loading}  // Disable button during loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-deepGreen hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
