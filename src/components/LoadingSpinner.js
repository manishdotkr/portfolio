import React from "react";
import "../assets/css/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader">
      <div className="container">
        <div className="spinner"></div>
        <span className="text">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
