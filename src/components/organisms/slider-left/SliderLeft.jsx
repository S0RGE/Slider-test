import React from "react";

import "./style.scss";
import logo from "./../../../icons/logo.svg";

const SliderLeft = ({ title, description }) => {
  return (
    <div className="slider--left">
      <img className="slider__logo" src={logo} alt="" />
      <div className="slider--left--text">
        <h2 className="slider--left--title">{title}</h2>
        <div className="slider--left--inner">
          <div className="slider--title--stripe"></div>
          <div className="slider--title--text">
            <p className="slider--title--paragraph">
              {description}
            </p>
            <button className="slider--left--button">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderLeft.defaultProps = {
  title: "Возьми ctihl - почувствуй мощь!",
  description: "Промо текст, почувствуй мощь"
};

export default SliderLeft;
