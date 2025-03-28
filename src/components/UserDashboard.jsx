import React from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center mt-4">
        <h2>User Dashboard</h2>
        <button className="btn btn-info mt-3">View Tanks</button>
        <br />
        <button className="btn btn-danger mt-3" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
