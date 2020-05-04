import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/site-brand/op3d-logo-512.png";

export default function HeroHeader() {
  return (
    <header>
      <Container>
        <Row className="flex-row">
          <Col>
            <img
              className="hero-logo"
              src={logo}
              alt="OP3D Logo"
              width="300px"
              height="auto"
            />
          </Col>
          <Col>
            <h1 className="hero-title aviera-bold">Old Photos 3D</h1>
            <p className="opensans-light">
              Parallax Experiment by Nick Barnard
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
