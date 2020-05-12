import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default function SlimHeader({ toggleHelp }) {
  return (
    <header className="slim-header">
      <Container fluid>
        <Row className="flex-row justify-space-between">
          <Col xs={2}>
            {/* <img src={logo} alt="Home" height="80px" width="auto" /> */}
            <Link to="/">
              <div className="slim-logo"></div>
            </Link>
          </Col>
          <Col xs={8} className="flex-row justify-center">
            <div className="w-100">
              <h1 className="aviera-bold">Old Photos 3D</h1>
              <p className="slim-subtitle opensans-light">
                Experimental Pseudo-3D Photo Viewer
              </p>
            </div>
          </Col>
          <Col xs={2}>
            <div className="slim-help" onClick={toggleHelp}></div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
