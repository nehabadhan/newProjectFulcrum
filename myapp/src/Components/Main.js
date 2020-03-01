import React, { Component } from "react";
import Title from "./Title";
import CardsList from './CardsList'
import { Route } from "react-router-dom";

class Main extends Component {

  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <CardsList/>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
