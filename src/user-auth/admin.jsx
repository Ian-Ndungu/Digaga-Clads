import React, { useState } from "react";
import "./authentication.css";

const Admin = ({ onAdminLogin }) => {
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdminCredentials({ ...adminCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdminLogin(adminCredentials);
  };

  return (
    <div className="container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={adminCredentials.username}
            onChange={handleChange}
            required
            />
            <input
            type="password"
            name="password"
            placeholder="Admin Password"
            value={adminCredentials.password}
            onChange={handleChange}
            required
            />
            <button type="submit">Login as Admin</button>
        </form>
    </div>
  );
};

export default Admin;
