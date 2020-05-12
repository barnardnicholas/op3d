import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Help({ toggleHelp }) {
  return (
    <div className="help-overlay" onClick={toggleHelp}>
      <div className="help-blackout"></div>
      <div className="help-modal flex-row justify-center">
        <Container fluid className="w-100 h-100">
          <Row>
            <Col>
              <section>
                <h3 className="aviera-bold">Old Photos 3D</h3>
                <p>
                  OP3D is an experimental pseudo-3D photo viewer by Nick Barnard
                </p>
                <p>
                  OP3D takes an array of PNG images, arranges them in a stack
                  and uses jQuery and CSS to offset their positions and apply
                  perspective warping for each one, based on cursor position
                  (desktop) or touch-drag(mobile).
                </p>
                <p>
                  <strong>Github:</strong>{" "}
                  <a
                    href="https://github.com/barnardnicholas/op3d"
                    target="_blank"
                  >
                    https://github.com/barnardnicholas/op3d
                  </a>
                </p>
              </section>
            </Col>
            <Col>
              <section>
                <h4 className="aviera-regular">Instructions</h4>
                <p>Click an image in the Nav bar to load</p>
                <p>
                  <strong>Desktop users:</strong> Move the mouse around the
                  screen to tilt the photo in 3D
                </p>
                <p>
                  <strong>Mobile users:</strong> Touch & drag the photo to tilt
                  in 3D
                </p>
              </section>
            </Col>
            <Col>
              <section>
                <h4>Attribution</h4>
                <p>
                  <strong>Photographs:</strong>{" "}
                  <a href="https://unsplash.com" target="_blank">
                    https://unsplash.com
                  </a>
                  <br />
                  <strong>Photographs:</strong>{" "}
                  <a href="https://nypl.getarchive.net" target="_blank">
                    https://nypl.getarchive.net
                  </a>
                </p>
                <p>
                  <strong>Textures:</strong>{" "}
                  <a href="https://www.photoshopsupply.com" target="_blank">
                    https://www.photoshopsupply.com
                  </a>
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
