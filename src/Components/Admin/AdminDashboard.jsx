import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("addUser");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex flex-row align-items-start justify-content-between">
      {/* Left side navigation */}
      <div
        className="d-flex flex-column align-items-center justify-content-start p-3"
        style={{
          width: "250px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <button
          className={`border w-100 btn mb-2 ${
            activeTab === "addUser" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => handleTabClick("addUser")}
        >
          Add User
        </button>
        <button
          className={`border w-100 btn ${
            activeTab === "users" ? "btn-primary" : "btn-light"
          }`}
          onClick={() => handleTabClick("users")}
        >
          Users
        </button>
      </div>

      {/* Right side content */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-start p-5">
        {activeTab === "addUser" && (
          <div className="container col-md-4">
            <h3 className="mb-4 text-center">Add User</h3>
            <form>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Building Name"
                  name="buildingName"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        )}

        {activeTab === "users" && (
          <div className="container col-md-6">
            <h3 className="mb-4">Users List</h3>
            {/* User list */}
            <ul className="list-group">
              <li className="list-group-item">User 1</li>
              <li className="list-group-item">User 2</li>
              <li className="list-group-item">User 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
