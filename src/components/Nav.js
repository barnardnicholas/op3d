import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default function Nav() {
  return (
    <nav>
      <Container>
        <Row>
          <Link to="/pics/test-pic">
            <h3>Test Pic</h3>
          </Link>
        </Row>
        <Row>
          <Link to="/pics/old-men">
            <h3>Old Men on Steps</h3>
          </Link>
        </Row>
      </Container>
    </nav>
  );
}
