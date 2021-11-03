import React from "react";

import "./style.scss";

const SliderRight = ({ title, counter, maxCounter }) => {

  return (
    <div className="slider--right">
      <div className="slider--right--container">
        <div className="slider--right--header">{title}</div>
      </div>
      <div className="slider__counter">
          {counter} <hr /> <span>{maxCounter}</span> 
      </div>
    </div>
  );
};

SliderRight.defaultProps={
    counter: 1,
    maxCounter: 10,
    title: 'Бензопилы'
}

export default SliderRight;
