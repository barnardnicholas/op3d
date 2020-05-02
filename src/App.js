import React from "react";

// Import Context
import { ContextProvider, AppContext } from "./Context";

// Import Components
import Pic from "./components/Pic";

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
                <h1>OP3D</h1>
                <h2>Old Photos in 3D</h2>
              </header>
              <Container>
                <Row className="flex-row justify-center">
                  <Col>
                    <Pic pic={pics.testPic} />
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
