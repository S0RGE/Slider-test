import React from "react";
// Styles
import "./style.scss";

const Image = ({ image }) => {
  const backgroundImageStyle = {
    background: `url(${image}) center/contain no-repeat`,
  };

  return (   
      <div className="image__style" style={backgroundImageStyle}></div>  
  );
};

export default Image;
