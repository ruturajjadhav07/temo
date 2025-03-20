import React, { useState } from "react";

const AddUserForm = () => {
  const [user, setUser] = useState({ name: "", email: "", building: "", contact: "" });

  const handleSubmit = () => {
    alert(`User ${user.name} added!`);
  };

  return (
    <div className="mt-3">
      <h4>Add User</h4>
      <input type="text" placeholder="Name" className="form-control mb-2" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="text" placeholder="Email" className="form-control mb-2" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="text" placeholder="Building" className="form-control mb-2" onChange={(e) => setUser({ ...user, building: e.target.value })} />
      <input type="text" placeholder="Contact" className="form-control mb-2" onChange={(e) => setUser({ ...user, contact: e.target.value })} />

      <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddUserForm;
