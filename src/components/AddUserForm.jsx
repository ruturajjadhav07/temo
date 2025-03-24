import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    building: "",
    contact: "",
  });

  let navigate = useNavigate();

  const handleSubmit = () => {
    alert(`User ${user.name} added!`);
  };

  const Back = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container mt-3 col-md-4 border p-3 shadow rounded ">
        <h4 className="text-center">Add User</h4>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className="form-control mb-2"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Building"
          className="form-control mb-2"
          onChange={(e) => setUser({ ...user, building: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          className="form-control mb-2"
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
        />

        <button className="btn btn-primary mt-2 w-100" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btn btn-dark mt-2 w-100" onClick={Back}>
          Back
        </button>
      </div>
    </div>
  );
};

export default AddUserForm;
