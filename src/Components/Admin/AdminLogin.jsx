import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (email === "admin" && password === "admin") {
      navigate("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 p-4 mx-auto shadow-lg">
          <h2 className="text-center">Admin Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button className="btn btn-info mt-3 w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
