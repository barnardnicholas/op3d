import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";

// Import Context
import { ContextProvider, AppContext } from "./Context";

// Import Components
import Pic from "./components/Pic";
import PerspectiveTest from "./components/PerspectiveTest";
import Home from "./components/Home";
import SlimHeader from "./components/SlimHeader";
import Nav from "./components/Nav";

// Import Styling
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

// Import image data
import pics from "./assets/img/index";

class App extends Component {
  state = {
    pic: pics.oldMenOnStep,
  };

  changePic = (pic) => {
    this.setState({ pic: pic });
  };

  render() {
    return (
      <ContextProvider>
        <AppContext.Consumer>
          {(context) => {
            return (
              <div className="App">
                <SlimHeader />
                <Container style={{ marginTop: "130px" }}>
                  <Row className="flex-row justify-center">
                    <Col>
                      <Router>
                        <PerspectiveTest path="/utils/perspective-test" />
                        <Pic debug pic={pics.testPic} path="/pics/test-pic" />
                        <Pic pic={pics.oldMenOnStep} path="/pics/old-men" />
                        <Pic
                          pic={pics.mountainside}
                          path="/pics/mountainside"
                        />
                        <Pic pic={pics.oldTeapots} path="/pics/old-teapots" />
                        <Pic pic={pics.pineBranch} path="/pics/pine-branch" />
                      </Router>

                      {/* <Pic pic={this.state.pic} /> */}
                      <Nav pics={pics} changePic={this.changePic} />
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
}

export default App;
