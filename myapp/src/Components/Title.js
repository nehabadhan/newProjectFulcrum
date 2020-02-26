import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark">
        {/* <button type="button" class="buttonAlign">
          BACK
        </button> */}
        <span class="navbar-brand mb-0 h3">{this.props.title}</span>
      </nav>
    );
  }
}

export default Title;
