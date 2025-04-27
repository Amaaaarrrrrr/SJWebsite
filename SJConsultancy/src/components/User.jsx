import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      
      <div>
        <p><strong>Full Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Phone Number:</strong> +254 700 123456</p>
      </div>

      <div>
        <h3>Account Settings</h3>
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
