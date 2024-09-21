import React from 'react';
import '../components/UserCard.css'; 

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
