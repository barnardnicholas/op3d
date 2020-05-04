import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function HeroHeader() {
  return (
    <header>
      <Container>
        <Row>
          <Col>LOGO</Col>
          <Col>
            <h1 className="aviera-bold">Old Photos 3D</h1>
            <p className="opensans-light">
              Parallax Experiment by Nick Barnard
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
