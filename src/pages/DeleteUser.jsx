import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './DeleteUser.css';

const DeleteUser = () => {
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    if (!userId) {
      toast.error("Please enter a user ID!");
      return;
    }

    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      toast.success("User deleted successfully!");
      setUserId(''); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="delete-user-container">
      <h1>Delete User</h1>
      <input 
        type="text" 
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
        placeholder="Enter User ID" 
      />
      <button onClick={handleDelete} className="delete-button">Delete User</button>
    </div>
  );
};

export default DeleteUser;
