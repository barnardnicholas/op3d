import React from "react";
import { Router } from "@reach/router";

// Import Context
import { ContextProvider, AppContext } from "./Context";

// Import Components
import Pic from "./components/Pic";
import PerspectiveTest from "./components/PerspectiveTest";

// Import Styling
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

// Import image data
import pics from "./assets/img/index";

function App() {
  return (
    <ContextProvider>
      <AppContext.Consumer>
        {(context) => {
          return (
            <div className="App">
              <header>
                <h1 className="aviera-bold">Old Photos 3D</h1>
                <p className="opensans-light">
                  Parallax Experiment by Nick Barnard
                </p>
              </header>
              <Container>
                <Row className="flex-row justify-center">
                  <Col>
                    <Router>
                      <PerspectiveTest path="/utils/perspective-test" />
                      <Pic pic={pics.testPic} path="/pics/test-pic" />
                      <Pic pic={pics.oldMenOnStep} path="/pics/old-men" />
                    </Router>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        }}
      </AppContext.Consumer>
    </ContextProvider>
  );
}

export default App;
