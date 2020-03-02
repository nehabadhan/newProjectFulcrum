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
 
          <span class="col navbar-brand mb-0 h3" style={{paddingLeft: "27px",fontSize: "23px"}}>
          <span>{this.props.title}</span>
        {  /*   <span ><img style={myIcon} src={`${require('./images/fulcrumgreen.png')}`} /></span>*/}
            { <span style={{float:"right",  margin:"5px 0"}}><h6> FULCRUM - Machine Learning Feature Store</h6></span>}
          </span>
     
      </nav>
    );
  }
}

export default Title;
