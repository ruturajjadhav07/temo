import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm";
// import AddBuildingForm from "./AddBuildingForm";

const AdminDashboard = () => {
  const navigate = useNavigate();
  // const [showUserForm, setShowUserForm] = useState(false);
  // const [showBuildingForm, setShowBuildingForm] = useState(false);

  const showUserForm = (e) => {
    e.preventDefault();
    navigate("/form");
  };

  const showBuildingForm = (e) => {
    e.preventDefault();
    navigate("/tank-form");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container mt-4 text-center">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-success me-2" onClick={showUserForm}>
          Add User
        </button>
        <button className="btn btn-warning" onClick={showBuildingForm}>
          Add Building
        </button>

        <br />
        <button className="btn btn-danger mt-3" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
