import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("addUser");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const offcanvasElement = document.querySelector("#sidebarMenu");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) bsOffcanvas.hide(); 
  };

  return (
    <div className="container-fluid">
      {/* Toggler for mobile */}
      <nav className="navbar navbar-light d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Admin Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <button
            className={`btn mb-2 ${
              activeTab === "addUser" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleTabClick("addUser")}
          >
            Add User
          </button>
          <button
            className={`btn ${
              activeTab === "users" ? "btn-primary" : "btn-light"
            }`}
            onClick={() => handleTabClick("users")}
          >
            Users
          </button>
        </div>
      </div>

      {/* sidebar for medium screen */}
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
          <div
            className="d-flex flex-column p-3"
            style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
          >
            <button
              className={`btn mb-2 ${
                activeTab === "addUser" ? "btn-primary" : "btn-light"
              }`}
              onClick={() => handleTabClick("addUser")}
            >
              Add User
            </button>
            <button
              className={`btn ${
                activeTab === "users" ? "btn-primary" : "btn-light"
              }`}
              onClick={() => handleTabClick("users")}
            >
              Users
            </button>
          </div>
        </div>

        {/*Form */}
        <div className="col-md-9 col-12 p-4">
          {activeTab === "addUser" && (
            <div className="container col-md-6">
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
            <div className="container col-md-8">
              <h3 className="mb-4">Users List</h3>
              <ul className="list-group">
                <li className="list-group-item">User 1</li>
                <li className="list-group-item">User 2</li>
                <li className="list-group-item">User 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
