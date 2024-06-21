// src/UserDashboard.js
import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
