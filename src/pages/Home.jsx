import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import './Home.css'; 

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`); 
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.data); 
        setLoading(false);   
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);       
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>Error: {error}</div>;  
  }

  return (
    <div className="home-container">
      <h1>Users List</h1>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
