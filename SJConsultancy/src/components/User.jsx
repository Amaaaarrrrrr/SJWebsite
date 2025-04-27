import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to different routes

const UserProfile = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages

  // State to store user data (initially hardcoded, could come from an API)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: '/profile.png', // Placeholder image
  });

  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to handle form inputs during editing
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    profilePicture: userData.profilePicture,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); // Update user data with the new input values
    setIsEditing(false); // Exit editing mode
  };

  // Logout function
  const handleLogout = () => {
    // Clear user data and redirect to login page (or any other desired action)
    setUserData({});
    navigate('/login');
  };

  // Handle account settings navigation
  const goToAccountSettings = () => {
    navigate('/account-settings');
  };

  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-navyBlue mb-6 text-center">User Profile</h1>

        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-deepGreen">{userData.name}</h2>
          <p className="text-gray-700 mb-4">{userData.email}</p>
        </div>

        {/* Edit Profile and Account Settings Buttons */}
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-teal text-white py-2 px-6 rounded-full hover:bg-deepGreen transition w-full mb-4"
            >
              Edit Profile
            </button>
            <button
              onClick={goToAccountSettings}
              className="bg-deepGreen text-white py-2 px-6 rounded-full hover:bg-teal transition w-full mb-4"
            >
              Account Settings
            </button>
          </>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition w-full"
        >
          Logout
        </button>

        {/* Profile Edit Form */}
        {isEditing && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Profile Picture URL</label>
              <input
                type="text"
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-deepGreen text-white py-3 px-6 rounded-full hover:bg-teal transition w-full"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default UserProfile;
