import React from "react";
import "./style.scss";
import MainButton from "../../atoms/main-button/MainButton.jsx";
import ProgressBar from "../../atoms/progress-bar/Progressbar.jsx";

const SliderButtons = ({onLeftClick, onRightClick, stripePercent, bgcolor }) => {
  

  return (
    <>
    <div className="slider__buttons--stripe">
        <ProgressBar bgcolor={bgcolor} completed={stripePercent}/>
    </div>
      <div className="slider__buttons">
        <MainButton onClick={onLeftClick}>Left</MainButton>
        <MainButton onClick={onRightClick}>Right</MainButton>
      </div>
    </>
  );
};

export default SliderButtons;
