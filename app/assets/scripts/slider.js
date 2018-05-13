import React from 'react';
import ReactDOM from 'react-dom';
import ASlider from './sliderApp'

let Slider = () => {
  return (
    <div className="slider-one">
      <ASlider
        cardWidth={965}
        cardMargin={0}
        containerWidth={965}
        radio={false}
        buttonLeft={<div className="sliderButton sliderButton__left">&lt;</div>}
        buttonRight={
          <div className="sliderButton sliderButton__right">&gt;</div>
        }
      >
        <div className="sla">
          <div>
            <h1>Some Words</h1>
            <p>Lorem Ipsum doing things that are not that fun, but create a fun result</p>
          </div>
          <img src="./assets/images/slider1.jpg" />
        </div>
        <div className="sla">
          <div>
            <h1>More Words</h1>
            <p>Lorem Ipsum doing things that are not that fun, but create a fun result</p>
          </div>
          <img src="./assets/images/slider2.jpg" />
        </div>
        <div className="sla">
          <div>
            <h1>Even More</h1>
            <p>Lorem Ipsum doing things that are not that fun, but create a fun result</p>
          </div>
          <img src="./assets/images/slider3.jpg" />
        </div>
        <div className="sla">
          <div>
            <h1>Wordyness</h1>
            <p>Lorem Ipsum doing things that are not that fun, but create a fun result</p>
          </div>
          <img src="./assets/images/slider4.jpg" />
        </div>
      </ASlider>
    </div>
  );
};

ReactDOM.render(<Slider />, document.getElementById("reactApp"));
