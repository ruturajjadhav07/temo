import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTankForm = () => {
  const [tank, setTank] = useState({
    name: "",
    tank: "",
  });

  let navigate = useNavigate();

  const handleSubmit = () => {
    alert(`Tank ${tank.name} added!`);
  };

  const Back = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container mt-3 col-md-4 border p-3 shadow rounded">
        <h4 className="text-center">Add Tank</h4>
        <input
          type="text"
          placeholder="Building Name"
          className="form-control mb-2"
          onChange={(e) => setTank({ ...tank, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tank No"
          className="form-control mb-2"
          onChange={(e) => setTank({ ...tank, tank: e.target.value })}
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

export default AddTankForm;
