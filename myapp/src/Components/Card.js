import React, { Component } from "react";
// import Person from "./images/person.png";
import Person from "./images/faces men 01.png";
import Person1 from "./images/faces men 02.png";
import Person2 from "./images/faces men 03.png";
import Person3 from "./images/faces men 04.png";
import Person4 from "./images/faces men 05.png";
import Person5 from "./images/faces men 06.png";
import Person6 from "./images/faces women 01.png";
import Person7 from "./images/faces women 02.png";
import Person8 from "./images/faces women 03.png";
import Person9 from "./images/faces women 04.png";
import Person10 from "./images/faces women 05.png";
import Person11 from "./images/faces women 06.png";
import Example from "./Example";

class Card extends Component {
  render() {
    const myStyleOne = {
      margin: "10px",
      height: "520px"
    };
    const myDesign = {
      paddingLeft: "20px",
      fontSize:"12px"
    };

    return (
      <div class="card text-white" style={myStyleOne}>
        <div class="card-header">Activity Feed</div>
        <div style={{ paddingLeft: "20px", paddingTop: "10px",color: "black", fontSize:"14px"}}><b>Today</b></div>
        <div class="card-body" >
          <div class="card text-white mb-3" style={{backgroundColor:"#ffbb99"}}>
            <div class="card-header" style={{fontSize: "14px"}}>Salesforce_EMEA</div>

            <div style={{fontSize: "12px"}}>
              <img src={Person} class="roundedImage"/>
              Smith added 10 min ago
            </div>
           
            <div style={myDesign}>
              <img src={Person1} class="roundedImage"/>
              John commented 2 hrs ago
            </div>
            <div style={myDesign}>
              <img src={Person2} class="roundedImage"/>
              Nicole commented 3 hrs ago
            </div>
          </div>


          <div class="card text-white mb-3" style={{backgroundColor:"#ffbb99"}}>
            <div class="card-header" style={{fontSize: "14px"}}>Evaluation_EMEA</div>
            <div style={{fontSize: "12px"}}>
              <img src={Person3} class="roundedImage"/>
              Brett added 10 min ago
            </div>
           
            <div style={myDesign}>
              <img src={Person4} class="roundedImage"/>
              Lee commented 2 hrs ago
            </div>
            <div style={myDesign}>
              <img src={Person5} class="roundedImage"/>
              Adam commented 3 hrs ago
            </div>
          </div>


          <div class="card text-white mb-3" style={{backgroundColor:"#ffbb99"}}>
            <div class="card-header" style={{fontSize: "14px"}}>Salesforce</div>
            <div style={{fontSize: "12px"}}>
              <img src={Person6} class="roundedImage"/>
              Brian added 10 min ago
            </div>
           
            <div style={myDesign}>
              <img src={Person7} class="roundedImage"/>
              Mathew commented 2 hrs ago
            </div>
            <div style={myDesign}>
              <img src={Person8} class="roundedImage"/>
              Neil commented 3 hrs ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
