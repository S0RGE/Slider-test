import React from "react";

import "./style.scss";

const ProgressBar = ({ bgcolor, completed }) => {
  const progressStyle = {
    width: `${completed}%` || "60%",
    backgroundColor: bgcolor || "red",
  };

  return (
    <div className="containerStyle">
      <div className="fillerStyle" style={progressStyle}>
        <span className="labelStyle"> </span>
      </div>
    </div>
  );
};

export default ProgressBar;
