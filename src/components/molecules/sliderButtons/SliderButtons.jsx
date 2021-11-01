import React from "react";
import "./style.scss";
import MainButton from "../../atoms/main-button/MainButton.jsx";
import ProgressBar from "../../atoms/progress-bar/Progressbar.jsx";

const SliderButtons = ({onLeftClick, onRightClick, stripePercent }) => {
  

  return (
    <>
    <div className="slider__buttons--stripe">
        <ProgressBar bgcolor="rgb(248, 129, 1)" completed={stripePercent}/>
    </div>
      <div className="slider__buttons">
        <MainButton onClick={onLeftClick}>Left</MainButton>
        <MainButton onClick={onRightClick}>Right</MainButton>
      </div>
    </>
  );
};

export default SliderButtons;
