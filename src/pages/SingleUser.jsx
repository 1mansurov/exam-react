import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/SingleUser.css';

export default function SingleUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-container">
      <img className="user-avatar" src={user.avatar} alt={user.first_name} />
      <h3 className="user-name">
        {user.first_name} {user.last_name}
      </h3>
      <p className="user-email">{user.email}</p>
    </div>
  );
}
