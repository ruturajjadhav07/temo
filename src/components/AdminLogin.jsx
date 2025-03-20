import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.email === "admin123" && credentials.password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 w-50 mx-auto shadow-lg">
        <h2>Admin Login</h2>
        <input
          type="email"
          className="form-control mt-3"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input
          type="password"
          className="form-control mt-3"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button className="btn btn-success mt-3 w-100" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
