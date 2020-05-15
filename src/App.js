import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";

// Import Context
import { ContextProvider, AppContext } from "./Context";

// Import Components
import Pic from "./components/Pic";
import Home from "./components/Home";
import SlimHeader from "./components/SlimHeader";
import Nav from "./components/Nav";
import Help from "./components/Help";

// Import Styling
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

// Import image data
import pics from "./assets/img/index";
const picsKeys = Object.keys(pics);

class App extends Component {
  state = {
    helpShowing: false,
  };
  changePic = (pic) => {};

  toggleHelp = () => {
    this.setState({ helpShowing: !this.state.helpShowing });
  };

  render() {
    return (
      <ContextProvider>
        <AppContext.Consumer>
          {(context) => {
            return (
              <div className="App">
                {this.state.helpShowing ? (
                  <Help toggleHelp={this.toggleHelp} />
                ) : null}
                <SlimHeader toggleHelp={this.toggleHelp} />
                <Container className="content">
                  <Row className="flex-row justify-center">
                    <Col
                      className="flex-col justify-center"
                      style={{ height: "70vh" }}
                    >
                      <Router>
                        <Home path="/" />
                        <Pic
                          pic={pics.op3dLogo}
                          path="/pics/op3d-logo"
                          shadow={false}
                          border={false}
                        />
                        <Pic
                          pic={pics.oldMenOnStep}
                          path="/pics/old-men"
                          shadow={true}
                          border={true}
                        />
                        <Pic
                          pic={pics.aircraftCarrier}
                          path="/pics/aircraft-carrier"
                          shadow={true}
                          border={true}
                        />
                        <Pic
                          pic={pics.railroadWagons}
                          path="/pics/railroad-wagons"
                          shadow={true}
                          border={true}
                        />
                        <Pic
                          pic={pics.mountainside}
                          path="/pics/mountainside"
                          shadow={true}
                          border={true}
                        />
                      </Router>

                      {/* <Pic pic={this.state.pic} /> */}
                    </Col>
                  </Row>
                </Container>
                <Nav pics={pics} changePic={this.changePic} />
              </div>
            );
          }}
        </AppContext.Consumer>
      </ContextProvider>
    );
  }
}

export default App;
