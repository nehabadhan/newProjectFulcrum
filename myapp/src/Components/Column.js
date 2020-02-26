import React, { Component } from "react";

// import Person from "./images/person.png";
import Person9 from "./images/faces women 04.png";
import Person10 from "./images/faces women 05.png";
import Person11 from "./images/faces women 06.png";

class Column extends Component {
  render() {
    const myStyleOne = {
        margin: "1px",
        height: "280px"
      };
      const myDesign = {
        paddingLeft: "20px"
      };
    return (
        <div class="card text-white" style={myStyleOne}>
        <div class="card-header">Comments</div>
        <div class="card-body" >
          <div class="card text-white bg-secondary mb-3">
          <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Me</div> 
            <div style={{fontWeight: "normal", fontSize: "9px"}}><img src={Person9} class="roundedImage"/>What is the size of the graph?</div>
                </div>
            <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Daemon</div> 
            <div style={{fontWeight: "normal",fontSize: "9px"}}><img src={Person10} class="roundedImage"/>Looks like the model is off?</div>
                </div>
                <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Stephen</div> 
            <div style={{fontWeight: "normal",fontSize: "9px"}}><img src={Person11} class="roundedImage"/>Display model popup?</div>
                </div>
           </div>
        </div>
      </div>
    );
  }
}

export default Column;
