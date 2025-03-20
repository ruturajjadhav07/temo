import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 w-50 mx-auto shadow-lg">
        <h2>Select Role</h2>
        <button className="btn btn-primary mt-3 w-100" onClick={() => navigate("/admin-login")}>Admin Login</button>
        <button className="btn btn-secondary mt-2 w-100" onClick={() => navigate("/user-login")}>User Login</button>
      </div>
    </div>
  );
};

export default RoleSelection;
