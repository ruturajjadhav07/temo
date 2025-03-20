import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.email && credentials.password) {
      navigate("/user");
    } else {
      alert("Enter valid credentials!");
    }
  };

  return (
    <div className="container text-center mt-5">
      <div className="card p-4 w-50 mx-auto shadow-lg">
        <h2>User Login</h2>
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
        <button className="btn btn-info mt-3 w-100" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
