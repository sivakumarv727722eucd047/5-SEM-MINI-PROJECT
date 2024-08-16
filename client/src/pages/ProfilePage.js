import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../resources/profilepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Parse the user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('expensetracker-dev-user'));
    if (storedUserData) {
      setUserData(storedUserData);
      setNewUsername(storedUserData.name);
    }
  }, []);

  const handleEditUsername = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/users/edit-username', {
        email: userData.email,
        newName: newUsername,
      });
      alert('Username updated successfully');
      // Update localStorage
      const updatedUserData = { ...userData, name: newUsername };
      localStorage.setItem('expensetracker-dev-user', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
    } catch (error) {
      console.error('Failed to update username:', error.response?.data || error.message);
      alert('Failed to update username');
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/users/update-password', {
        email: userData.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      });
      alert('Password updated successfully');
    } catch (error) {
      console.error('Failed to update password:', error.response?.data || error.message);
      alert('Failed to update password');
    }
  };

  const handleTerminateAccount = async () => {
    try {
      await axios.delete('/api/users/terminate-account', {
        data: { email: userData.email },
      });
      alert('Account deleted successfully');
      localStorage.removeItem('expensetracker-dev-user');
      window.location.href = '/'; // Redirect to homepage or login
    } catch (error) {
      console.error('Failed to delete account:', error.response?.data || error.message);
      alert('Failed to delete account');
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    handleTerminateAccount();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!userData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
    <Navbar/>
    <div className="profile-background">
      <div className="profile-container">
        <h2 className="welcome-message">Welcome, {userData.name}!</h2>
        <h2 className="profile-title">Edit Profile</h2>
        <form className="profile-form" onSubmit={handleEditUsername}>
          <label htmlFor="new-username" className="form-label">New Username</label>
          <input
            type="text"
            id="new-username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Current Username"
            className="form-input"
          />
          <button type="submit" className="form-button">Save Username</button>
        </form>

        <h2 className="profile-title">Change Password</h2>
        <form className="profile-form" onSubmit={handleUpdatePassword}>
          <label htmlFor="old-password" className="form-label">Current Password</label>
          <input
            type="password"
            id="old-password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Current Password"
            className="form-input"
          />
          <label htmlFor="new-password" className="form-label">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="form-input"
          />
          <button type="submit" className="form-button">Update Password</button>
        </form>

        <h2 className="profile-title">Terminate Account</h2>
        <button onClick={showModal} className="delete-button">Delete Account</button>

        {isModalVisible && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="modal-close" onClick={handleCancel}>&times;</span>
              <p className="modal-text">This action cannot be undone. Do you really want to delete your account?</p>
              <div className="modal-buttons">
                <button onClick={handleOk} className="modal-button modal-confirm">Yes, Delete</button>
                <button onClick={handleCancel} className="modal-button modal-cancel">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProfilePage;
