import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "user") {
      navigate("/user");
    } else {
      alert("Select a role to proceed!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container text-center mt-5">
        <div className="card p-4 w-50 mx-auto shadow-lg">
          <h2>Login</h2>
          <select
            className="form-select mt-3"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button className="btn btn-primary mt-3" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
