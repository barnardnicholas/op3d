import React from "react";
import { Router } from "@reach/router";

// Import Context
import { ContextProvider, AppContext } from "./Context";

// Import Components
import Pic from "./components/Pic";
import PerspectiveTest from "./components/PerspectiveTest";
import Home from "./components/Home";

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
              <Container>
                <Row className="flex-row justify-center">
                  <Col>
                    <Router>
                      <Home path="/" />
                      <PerspectiveTest path="/utils/perspective-test" />
                      <Pic debug pic={pics.testPic} path="/pics/test-pic" />
                      <Pic pic={pics.oldMenOnStep} path="/pics/old-men" />
                      <Pic pic={pics.mountainside} path="/pics/mountainside" />
                      <Pic pic={pics.oldTeapots} path="/pics/old-teapots" />
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
