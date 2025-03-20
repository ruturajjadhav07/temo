import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddUserForm from "./AddUserForm";
// import AddBuildingForm from "./AddBuildingForm";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showUserForm, setShowUserForm] = useState(false);
  const [showBuildingForm, setShowBuildingForm] = useState(false);

  return (
    <div className="container mt-4 text-center">
      <h2>Admin Dashboard</h2>
      <button className="btn btn-success me-2" onClick={() => setShowUserForm(!showUserForm)}>Add User</button>
      <button className="btn btn-warning" onClick={() => setShowBuildingForm(!showBuildingForm)}>Add Building</button>

      {showUserForm && <AddUserForm />}
      {showBuildingForm && <AddBuildingForm />}

      <br />
      <button className="btn btn-danger mt-3" onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
