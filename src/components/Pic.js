import React, { Component } from "react";
import SlimHeader from "./SlimHeader";
import $ from "jquery";

export default class Pic extends Component {
  state = {
    frameWidth: 0,
    frameHeight: 0,
    parallaxDistance: 40,
    perspectiveAngle: 5,
    mouseX: 0,
    mouseY: 0,
    offsetX: 0,
    offsetY: 0,
    mirrorOffsetX: 0,
    mirrorOffsetY: 0,
    frameX: 0,
    frameY: 0,
    centerX: 0,
    centerY: 0,
    perspectiveX: 0,
    perspectiveY: 0,
    effectEnabled: false,
  };

  handleMouseMove = (event) => {
    // Define center of frame
    let centerX = Math.floor(this.state.frameWidth / 2);
    let centerY = Math.floor(this.state.frameHeight / 2);

    // Define mouse coords within picture frame
    let frameOffsetTop = 0;
    let frameOffsetLeft = 0;
    if ($(".picture-frame").offset()) {
      frameOffsetTop = $(".picture-frame").offset().top;
      frameOffsetLeft = $(".picture-frame").offset().left;
    }
    let frameX = Math.floor(event.pageX - frameOffsetLeft);
    let frameY = Math.floor(event.pageY - frameOffsetTop);
    if (frameX < 0) frameX = 0;
    if (frameX > this.state.frameWidth) frameX = this.state.frameWidth;
    if (frameY < 0) frameY = 0;
    if (frameY > this.state.frameHeight) frameY = this.state.frameHeight;

    // Define mouse offset from center
    let offsetX = Math.floor(frameX - centerX);
    let offsetY = Math.floor(frameY - centerY);

    // Define max parallax offset based on parallaxDistance
    let mirrorOffsetX = Math.floor(
      offsetX * (this.state.parallaxDistance / (this.state.frameWidth / 2)) * -1
    );
    let mirrorOffsetY = Math.floor(
      offsetY * (this.state.parallaxDistance / (this.state.frameWidth / 2))
    );

    // Define Perspective angle
    let perspectiveY =
      this.state.perspectiveAngle *
      (this.state.mirrorOffsetX / this.state.parallaxDistance);
    let perspectiveX =
      this.state.perspectiveAngle *
      (this.state.mirrorOffsetY / this.state.parallaxDistance);

    // Only execute if effectEnabled is true
    if (this.state.effectEnabled) {
      this.setState({
        mouseX: event.pageX,
        mouseY: event.pageY,
        frameX,
        frameY,
        centerX,
        centerY,
        offsetX,
        offsetY,
        mirrorOffsetX,
        mirrorOffsetY,
        perspectiveX,
        perspectiveY,
      });
    }
  };

  calculateFrameDimensions = () => {
    const { dimX, dimY } = this.props.pic;
    let frameWidth;
    let frameHeight;
    if (dimX / dimY > window.innerWidth / window.innerHeight) {
      // Frame aspect is wider than window
      frameWidth = Math.floor(window.innerWidth * 0.8);
      frameHeight = Math.floor(dimY * (frameWidth / dimX));
    } else {
      // Frame aspect is narrower than window
      frameHeight = Math.floor(window.innerHeight * 0.8);
      frameWidth = Math.floor(dimX * (frameHeight / dimY));
    }
    this.setState({
      frameWidth,
      frameHeight,
    });
  };

  setParallaxDistance = () => {
    this.setState({
      parallaxDistance: this.props.pic.parallaxDistance,
      perspectiveAngle: this.props.pic.perspectiveAngle,
    });
  };

  displayDebug = () => {
    return (
      <div className="h-100 flex-col justify-center">
        <div className="flex-row justify-center">
          <div className="debug">
            <h4>Debug Mode</h4>
            <p>{`Mouse X: ${this.state.mouseX}`}</p>
            <p>{`Mouse Y: ${this.state.mouseY}`}</p>
            <p>{`Frame X: ${this.state.frameX}`}</p>
            <p>{`Frame Y: ${this.state.frameY}`}</p>
            <p>{`Offset X: ${this.state.offsetX}`}</p>
            <p>{`Offset Y: ${this.state.offsetY}`}</p>
            <p>{`Mirror Offset X: ${this.state.mirrorOffsetX}`}</p>
            <p>{`Mirror Offset Y: ${this.state.mirrorOffsetY}`}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { pic } = this.props;
    const frameStyling = {
      width: `${this.state.frameWidth}px`,
      height: `${this.state.frameHeight}px`,
      transform: `rotateX(${this.state.perspectiveX}deg) rotateY(${this.state.perspectiveY}deg)`,
    };
    return (
      <>
        <SlimHeader />
        <div className="perspective-container">
          <div className="picture-frame" style={frameStyling}>
            <div className="img-container">
              {pic.img.map((img, idx) => {
                // Calculate offset per-image
                let thisOffsetX =
                  (this.state.mirrorOffsetX / pic.img.length) *
                  (pic.img.length - idx);
                let thisOffsetY =
                  (this.state.mirrorOffsetY / pic.img.length) *
                  (pic.img.length - idx);
                return (
                  <div
                    key={idx}
                    className="pic-slice"
                    style={{
                      position: "absolute",
                      top: `${thisOffsetY - this.state.parallaxDistance}px`,
                      left: `${thisOffsetX - this.state.parallaxDistance}px`,
                    }}
                  >
                    <img
                      src={img}
                      width={
                        this.state.frameWidth + this.state.parallaxDistance * 2
                      }
                      height={
                        this.state.frameHeight + this.state.parallaxDistance * 2
                      }
                    />
                  </div>
                );
              })}
            </div>
            {this.props.debug ? this.displayDebug() : null}
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    const frameCenter = $(".frame-center");
    this.setParallaxDistance();
    this.calculateFrameDimensions();
    this.setState({ effectEnabled: true });
    $(window).mousemove((event) => {
      this.handleMouseMove(event);
    });
  }

  componentWillUnmount() {
    this.setState({ effectEnabled: false });
    $(document).off("mousemove", () => {
      console.log("Mouse events off");
    });
  }
}
