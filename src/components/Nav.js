import React from "react";
import pics from "../assets/img/index";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";

export default function Nav() {
  const picsKeys = Object.keys(pics);
  return (
    <nav>
      <Container className="flex-row justify-center">
        <Row>
          <Container>
            {picsKeys.map((pic) => {
              return (
                <Link to={`/pics${pics[pic].path}`}>
                  <Row className="flex-row">
                    <Col>
                      <img
                        src={pics[pic].thumb}
                        alt={pics[pic].name}
                        height="80"
                        with="auto"
                        style={{ padding: "16px" }}
                      />
                    </Col>
                    <Col>
                      <h3>{pics[pic].name}</h3>
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </Container>
        </Row>
      </Container>
    </nav>
  );
}
