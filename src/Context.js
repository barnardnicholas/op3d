import React, { Component } from "react";

export const AppContext = React.createContext();

export class ContextProvider extends Component {
  state = {};

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }

  componentDidMount() {}
}
