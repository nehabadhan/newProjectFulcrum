import React, { Component } from "react";

class Title extends Component {
  render() {
    const myIcon = {
      margin: "0px",
      height: "20px",
      marginTop: "-6px",
      paddingLeft: "6px"
    };
    return (
      <nav class="navbar navbar-dark">
        {/* <button type="button" class="buttonAlign">
          BACK  
        </button> */}
        <div class="row">
          <span class="col navbar-brand mb-0 h3" style={{paddingLeft: "27px",fontSize: "23px"}}>
            <span>{this.props.title}</span>
            {/* <span><img style={myIcon} src={`${require('./images/fulcrumgreen.png')}`} /></span> */}
          </span>
        </div>
      </nav>
    );
  }
}

export default Title;
