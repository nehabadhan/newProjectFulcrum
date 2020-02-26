import React, { Component } from "react";
import Person7 from "./images/faces women 02.png";
import Person8 from "./images/faces women 03.png";
import Person9 from "./images/faces women 04.png";
import Person10 from "./images/faces women 05.png";
import Person11 from "./images/faces women 06.png";


class LeftSideBar extends Component {
  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px"
    };
    const myApp = {
      height: "680px",
      margin: "10px",
    };

    const myDesign = {
      paddingLeft: "20px",
      fontSize: "12px"
    };
    return (
      <div class="container">
        {/* <button type="button" class="btn btn-primary" style={myStyle}>
          + Add New
        </button> */}

        <div class="card text-white" style={myApp}>
          <div class="card-header">Home</div>

          <div class="card-body">
            <div class="card text-white mb-3" style={{backgroundColor:"#b3d6ff"}}>
              <div class="card-header" style={{fontSize:"14px"}}>Dataset Name</div>

              <div style={{fontSize: "12px"}}>
                <img src={Person7} class="roundedImage"/>
                Alena
              </div>
              <div style={myDesign}>
                Created: <b>12/8/19</b>
              </div>
              <div style={myDesign}>
                Last Accessed: <b>March</b>
              </div>
            </div>
            <div class="card text-white mb-3" style={{backgroundColor:"#b3d6ff"}}>
              <div class="card-header" style={{fontSize:"14px"}}>Document</div>

              <div style={{fontSize: "12px"}}>
                <img src={Person8} class="roundedImage"/>
                Daemon
              </div>
              <div style={myDesign}>
                Created: <b>15/8/19</b>
              </div>
              <div style={myDesign}>
                Last Accessed: <b>Feb</b>
              </div>
            </div>
            <div class="card text-white mb-3" style={{backgroundColor:"#b3d6ff"}}>
              <div class="card-header" style={{fontSize:"14px"}}>Connection</div>

              <div style={{fontSize: "12px"}}>
                <img src={Person9} class="roundedImage"/>
                Stephen
              </div>
              <div style={myDesign}>
                Created: <b>18/8/19</b>
              </div>
              <div style={myDesign}>
                Last Accessed: <b>Jan</b>
              </div>
            </div>
            <div class="card text-white mb-3" style={{backgroundColor:"#b3d6ff"}}>
              <div class="card-header" style={{fontSize:"14px"}}>People</div>

              <div style={{fontSize: "12px"}}>
                <img src={Person10} class="roundedImage"/>
                Jeremy
              </div>
              <div style={myDesign}>
                Created: <b>20/8/19</b>
              </div>
              <div style={myDesign}>
                Last Accessed: <b>Dec</b>
              </div>
            </div>
            <div class="card text-white mb-3" style={{backgroundColor:"#b3d6ff"}}>
              <div class="card-header" style={{fontSize:"14px"}}>Sample Use Cases</div>

              <div style={{fontSize: "12px"}}>
                <img src={Person11} class="roundedImage"/>
                Klaus
              </div>
              <div style={myDesign}>
                Created: <b>28/8/19</b>
              </div>
              <div style={myDesign}>
                Last Accessed: <b>Nov</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
