import React, { Component } from "react";
import Person9 from "./images/faces women 02.png";
import Person10 from "./images/faces women 05.png";
import Person11 from "./images/faces women 06.png";

class CardRightBar extends Component {
  render() {
    const myStyleOne = {
        margin: "1px",
        height: "265px"
      };
      const myDesign = {
        paddingLeft: "20px"
      };
      const pstyle ={
        display: "inline",
        fontSize: "10px"
      };
    return (
        <div class="card text-white" style={myStyleOne}>
        <div class="card-header">Comments</div>
        <div class="card-body" >
          <div class="card text-white bg-secondary mb-3">
          <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Me</div> 
            <div style={{fontWeight: "normal", fontSize: "9px"}}><img src={Person9} class="roundedImage"/><p style={pstyle}>What is the size of the graph?</p></div>
                </div>
            <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Nancy</div> 
            <div style={{fontWeight: "normal",fontSize: "9px"}}><img src={Person10} class="roundedImage"/><p style={pstyle}>Looks like the model is off?</p></div>
                </div>
                <div class="card-header" style={{backgroundColor:"#c1d0f0"}}>  
            <div>Olivia</div> 
            <div style={{fontWeight: "normal",fontSize: "9px"}}><img src={Person11} class="roundedImage"/><p style={pstyle}>Does it include US Sonus cards?</p></div>
                </div>
           </div>
        </div>
      </div>
    );
  }
}

export default CardRightBar;
