import React, { useState } from "react";
// Style import
import "./style.scss";
// Components import
import SliderLeft from "../../organisms/slider-left/SliderLeft.jsx";
import SliderRight from "../../organisms/slider-right/SliderRight.jsx";
import SliderButtons from "../../molecules/sliderButtons/SliderButtons.jsx";

const Slider = () => {
  const [state, setstate] = useState(0);

  const onLeftClick = () => {
    console.log("Left click");
  };
  const onRightClick = () => {
    console.log("Right click");
  };

  return (
    <div className="slider__main">
      <SliderLeft />
      <SliderRight />
      <div className="slider__buttons--main">
        <SliderButtons
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          stripePercent="60"
        />
      </div>
    </div>
  );
};

export default Slider;
