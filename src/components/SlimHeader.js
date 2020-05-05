import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import logo from "../assets/site-brand/op3d-logo-512.png";

export default function SlimHeader() {
  return (
    <header>
      <Container>
        <Row className="flex-row">
          <Col xs={2}>
            <Link to="/">
              <img src={logo} alt="Home" height="80px" width="auto" />
            </Link>
          </Col>
          <Col xs={8} className="flex-row justify-center">
            <div className="w-100">
              <h1 className="aviera-bold">Old Photos 3D</h1>
              <p className="opensans-light">
                Parallax Experiment by Nick Barnard
              </p>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </header>
  );
}
