import React, { useState, useEffect } from "react";
// Style import
import "./style.scss";
// Components import
import SliderLeft from "../../organisms/slider-left/SliderLeft.jsx";
import SliderRight from "../../organisms/slider-right/SliderRight.jsx";
import SliderButtons from "../../molecules/sliderButtons/SliderButtons.jsx";

const Slider = () => {
  const [sliderCount, setSliderCount] = useState(0);
  const [sliderImage, setSliderImage] = useState([
    "./promo-01.png",
    "./promo-02.png",
    "./promo-01.png",
    "./promo-02.png",
    "./promo-01.png",
    "./promo-02.png",
  ]);

  const [sliderRightTitle, setSliderRightTitle] = useState([
    "Бензопилы",
    "Мотокосы",
    "Бензопилы",
    "Мотокосы",
    "Бензопилы",
    "Мотокосы",
  ]);

  const [sliderLeftDescription, setSliderLeftDescription] = useState([
    "Единственное условие - регистрация продукта, которая займет меньше минуты и будет сделана прямо в магазине в момент Вашей покупки",
    "Промо текст - почувствуй мощь",
    "Единственное условие - регистрация продукта, которая займет меньше минуты и будет сделана прямо в магазине в момент Вашей покупки",
    "Промо текст - почувствуй мощь",
    "Единственное условие - регистрация продукта, которая займет меньше минуты и будет сделана прямо в магазине в момент Вашей покупки",
    "Промо текст - почувствуй мощь",
  ]);

  const images = require.context("./../../../images", true);

  useEffect(() => {
    console.log('Animation')
  }, [sliderCount])


  const onLeftClick = () => {
    setSliderCount((prev) => {
      if (prev === 0) return sliderImage.length - 1;
      return --prev;
    });
  };
  const onRightClick = () => {
    setSliderCount((prev) => {
      if (prev === sliderImage.length - 1) return 0;
      return ++prev;
    });
  };

  return (
    <div className="slider__main">
      <SliderLeft description={sliderLeftDescription[sliderCount]}/>
      <SliderRight
        maxCounter={sliderImage.length}
        counter={sliderCount + 1}
        title={sliderRightTitle[sliderCount]}
      />
      <div className="slider__buttons--main">
        <SliderButtons
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          bgcolor = "rgb(248, 129, 1)"
          stripePercent={((sliderCount+1)/sliderImage.length)*100}
        />
      </div>
      <div className="slider__image">
        <img src={images(sliderImage[sliderCount]).default} alt="image" />
      </div>
    </div>
  );
};

export default Slider;
