import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '', // Name is only needed for registration
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Updated hook

  // Email validation function
  const validateEmail = (email) => {
    if (!email.includes('@')) {
      return 'Email must contain an "@" symbol.';
    }
    return '';
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      return 'Password is required.';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    if (!passwordRegex.test(password)) {
      return 'Password must contain at least one uppercase letter, one number, and one special character.';
    }
    return '';
  };

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

    const { email, password, name } = formData;

    // Validate fields before submitting
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    if (emailError || passwordError) {
      setErrorMessage(emailError || passwordError);
      setLoading(false);
      return;
    }

    if (isLogin) {
      // Dummy login validation for demonstration
      if (email === 'user@example.com' && password === 'password123') {
        navigate('/dashboard'); // Updated navigation method
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
        setLoading(false);
      }
    } else {
      // Dummy registration validation for demonstration
      if (name && email && password) {
        // Simulate successful registration
        navigate('/login'); // Redirect to login after successful registration
      } else {
        setErrorMessage('Please fill in all fields.');
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-navyBlue mb-6 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h1>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-500 text-white py-3 px-6 rounded-lg mb-6 text-center">
            {errorMessage}
          </div>
        )}

        {/* Login or Register Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </div>
          )}

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
            disabled={loading}
          >
            {loading ? 'Submitting...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setIsLogin((prevState) => !prevState);
              setErrorMessage(''); // Clear error message when toggling
              setFormData({ email: '', password: '', name: '' });
            }}
            className="text-deepGreen hover:underline"
          >
            {isLogin ? "Don't have an account? Register here" : 'Already have an account? Login here'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
