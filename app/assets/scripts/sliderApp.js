import React from 'react';
//Props:
//id - the id of the slider container
//cardWidth - the width of each individual card
class ASlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCard: Math.floor(this.props.children.length / 2) };
    this.move = this.move.bind(this);
    this.displayChildren = this.displayChildren.bind(this);
  }
  componentDidMount() {
    //Listen for and respond to key presses to move the slider
    document.addEventListener("keydown", e => {
      if (e.code === "ArrowRight" || e.code === "KeyL" || e.code === "KeyD") {
        this.move(1);
      } else if (
        e.code === "ArrowLeft" ||
        e.code === "KeyJ" ||
        e.code === "KeyA"
      ) {
        this.move(-1);
      }
    });
    //If move buttons exist, add onClick listeners to them
    if (this.props.buttonLeft) {
      document
        .querySelector(".aSliderButtonLeft")
        .addEventListener("click", e => {
          e.preventDefault();
          this.move(-1);
        });
    }
    if (this.props.buttonRight) {
      document
        .querySelector(".aSliderButtonRight")
        .addEventListener("click", e => {
          e.preventDefault();
          this.move(1);
        });
    }
  }
  move(number) {
    //Actually move the container
    if (
      this.state.currentCard + number < this.props.children.length &&
      this.state.currentCard + number >= 0
    ) {
      let sliderContainer = document.querySelector(".aSliderContainer");
      sliderContainer.style.right =
        parseInt(sliderContainer.style.right) +
        number *
          parseInt(this.props.cardWidth + 2 * parseInt(this.props.cardMargin)) +
        "px";
      //Remove active from all cards
      document.querySelectorAll(".card").forEach(node => {
        node.classList.remove("active");
      });
      //Change current card to active
      let currentCard = this.state.currentCard + number;
      console.log(currentCard);
      document
        .querySelector(".aSliderContainer")
        .children[currentCard].classList.add("active");
      console.log(
        document.querySelector(".aSliderContainer").children[currentCard]
      );
      //Set state to portray current card
      this.setState(() => ({ currentCard }));
    }
  }

  displayChildren() {
    let cardArr = this.props.children.map(child => {
      return (
        <div
          key={this.props.children.indexOf(child)}
          className="card"
          style={{
            width: this.props.cardWidth + "px",
            margin: this.props.cardMargin + "px"
          }}
          onClick={() => {
            this.move(
              this.props.children.indexOf(child) - this.state.currentCard
            );
          }}
        >
          {child}
        </div>
      );
    });
    return cardArr;
  }
  displayRadioButtons() {
    if (this.props.radio) {
      let radioArr = [],
        i = 0;
      for (let i = 0; i < this.props.children.length; i++) {
        radioArr.push(
          <div
            key={i}
            className={"radioButton radioButton-" + i}
            type="radio"
            name="sliderRadio"
            onClick={() => {
              this.move(i - this.state.currentCard);
              document.querySelectorAll(".radioButton").forEach(element => {
                element.classList.remove("radioActive");
              });
              document
                .querySelector(`.radioButton-${i}`)
                .classList.add("radioActive");
            }}
          />
        );
      }
      return <div className="sliderRadio">{radioArr}</div>;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div>
        <div
          className="aSliderCardHolder"
          style={{
            width: this.props.containerWidth + "px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              right:
                Math.ceil(
                  (this.props.children.length -
                    this.props.containerWidth / this.props.cardWidth) /
                    2
                ) *
                  (this.props.cardWidth + this.props.cardMargin * 2) +
                "px" /*(number of children - number of shown children) / 2*/,
              display: "flex",
              position: "relative"
            }}
            className="aSliderContainer"
          >
            {this.displayChildren()}
          </div>
        </div>
        {this.displayRadioButtons()}
        {this.props.buttonLeft ? (
          <div className="aSliderButtonLeft">{this.props.buttonLeft}</div>
        ) : (
          false
        )}
        {this.props.buttonRight ? (
          <div className="aSliderButtonRight">{this.props.buttonRight}</div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default ASlider;
