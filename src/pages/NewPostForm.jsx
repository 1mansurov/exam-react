import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './NewPostForm.css'; 

const NewPostForm = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !job) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, job }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      toast.success("User created successfully! ID: " + data.id);
      setName('');
      setJob('');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="new-post-container">
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter user's name" 
            required 
          />
        </div>
        <div className="input-group">
          <label>Job</label>
          <input 
            type="text" 
            value={job} 
            onChange={(e) => setJob(e.target.value)} 
            placeholder="Enter user's job" 
            required 
          />
        </div>
        <button type="submit" className="create-button">Create User</button>
      </form>
    </div>
  );
};

export default NewPostForm;
