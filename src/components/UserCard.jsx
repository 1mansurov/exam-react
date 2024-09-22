import React from "react";
import "../components/UserCard.css";
import { Link } from "react-router-dom";
import DeleteUser from "../pages/DeleteUser";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <Link to={`/single-user/${user.id}`}>
        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      </Link>
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <p style={{marbottom: "10px"}}>Email: {user.email}</p>
      <DeleteUser user={user} />
    </div>
  );
};

export default UserCard;
