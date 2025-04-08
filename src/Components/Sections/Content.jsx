import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Content = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        // backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="p-4 p-md-5 rounded shadow w-100"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          maxWidth: "700px",
        }}
      >
        <h1 className="display-5 text-primary fw-bold mb-3">
          Smart Water, Smarter Living
        </h1>
        <p className="lead text-dark mb-4">
          Monitor your water tank in real-time, reduce waste, and take control of your water usage with intelligent IoT technology.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button className="btn btn-primary btn-lg px-4">
            Track Water Level
          </button>
          <button className="btn btn-outline-primary btn-lg px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
