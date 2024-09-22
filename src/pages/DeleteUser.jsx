import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({user}) => {
  const handleDelete = async () => {
    if (!user.id) {
      toast.error('Please provide a user ID');
      return;
    }

    try {
      const response = await fetch(`https://reqres.in/api/users/${user.id}`, {
        method: 'DELETE',
      });

      if (response.status !== 204) {
        throw new Error('Failed to delete user');
      }
      toast.success(`User ${user.first_name} deleted successfully!`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  console.log(user);

  return (
    <div className="delete-user-container">
      <button onClick={handleDelete} className="submit-button">
        Delete User
      </button>
    </div>
  );
};

export default DeleteUser;
