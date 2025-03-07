import React from "react";
import spinner from "../../assets/Spinner.gif";

function Spinner() {
  return (
    <div className="h-full flex items-center justify-center bg-gray-50">
      <img src={spinner} alt="spinner.gif" />
    </div>
  );
}

export default Spinner;
