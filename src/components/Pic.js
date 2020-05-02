import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pics from "../assets/img/index";
import $ from "jquery";

export default class Pic extends Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    offsetX: 0,
    offsetY: 0,
    frameX: 0,
    frameY: 0,
    centerX: 0,
    centerY: 0,
  };

  handleMouseMove = (event) => {
    // Define center of frame
    let centerX = Math.floor(this.props.pic.dimX / 2);
    let centerY = Math.floor(this.props.pic.dimY / 2);
    // Define mouse coords within picture frame
    const frameOffsetTop = $(".picture-frame").offset().top;
    const frameOffsetLeft = $(".picture-frame").offset().left;
    let frameX = Math.floor(event.pageX - frameOffsetLeft);
    let frameY = Math.floor(event.pageY - frameOffsetTop);
    if (frameX < 0) frameX = 0;
    if (frameX > this.props.pic.dimX) frameX = this.props.pic.dimX;
    if (frameY < 0) frameY = 0;
    if (frameY > this.props.pic.dimY) frameY = this.props.pic.dimY;

    // Define mouse offset from center
    let offsetX = Math.floor(frameX - centerX);
    let offsetY = Math.floor(frameY - centerY);

    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY,
      frameX,
      frameY,
      centerX,
      centerY,
      offsetX,
      offsetY,
    });
  };

  render() {
    const { pic } = this.props;
    const frameStyling = {
      width: `${pic.dimX}px`,
      height: `${pic.dimY}px`,
    };
    return (
      <div className="picture-frame" style={frameStyling}>
        <div className="frame-center"></div>
        <div className="readout">
          <p>{`Mouse X: ${this.state.mouseX}`}</p>
          <p>{`Mouse Y: ${this.state.mouseY}`}</p>
          <p>{`Frame X: ${this.state.frameX}`}</p>
          <p>{`Frame Y: ${this.state.frameY}`}</p>
          <p>{`Offset X: ${this.state.offsetX}`}</p>
          <p>{`Offset Y: ${this.state.offsetY}`}</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const frameCenter = $(".frame-center");
    $(window).mousemove((event) => {
      this.handleMouseMove(event);
    });
  }
}
