import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your phone number" />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
