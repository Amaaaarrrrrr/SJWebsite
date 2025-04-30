import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: 'Kuriamat',
    email: 'john.doe@example.com',
    profilePicture: '/profile.png',
  });

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    profilePicture: userData.profilePicture,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
  };

  const handleLogout = () => {
    setUserData({});
    navigate('/login');
  };

  const goToAccountSettings = () => {
    navigate('/account-settings');
  };

  return (
    <section className="user-profile-section bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="user-profile-container max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="user-profile-title text-3xl font-bold text-navyBlue mb-6 text-center">User Profile</h1>

        {/* Profile Section */}
        <div className="user-profile-info text-center mb-8">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="user-profile-picture w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="user-profile-name text-2xl font-semibold text-deepGreen">{userData.name}</h2>
          <p className="user-profile-email text-gray-700 mb-4">{userData.email}</p>
        </div>

        {/* Edit Profile and Account Settings Buttons */}
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="user-profile-edit-button bg-teal text-white py-2 px-6 rounded-full hover:bg-deepGreen transition w-full mb-4"
            >
              Edit Profile
            </button>
            <button
              onClick={goToAccountSettings}
              className="user-profile-settings-button bg-deepGreen text-white py-2 px-6 rounded-full hover:bg-teal transition w-full mb-4"
            >
              Account Settings
            </button>
          </>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="user-profile-logout-button bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition w-full"
        >
          Logout
        </button>

        {/* Profile Edit Form */}
        {isEditing && (
          <form onSubmit={handleSubmit} className="user-profile-edit-form">
            <div className="user-profile-form-group mb-4">
              <label className="user-profile-form-label block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="user-profile-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <div className="user-profile-form-group mb-4">
              <label className="user-profile-form-label block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="user-profile-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <div className="user-profile-form-group mb-4">
              <label className="user-profile-form-label block text-gray-700 mb-2">Profile Picture URL</label>
              <input
                type="text"
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
                className="user-profile-form-input w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
            </div>

            <button
              type="submit"
              className="user-profile-save-button bg-deepGreen text-white py-3 px-6 rounded-full hover:bg-teal transition w-full"
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