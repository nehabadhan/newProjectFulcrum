import React, { Component } from "react";
import Person7 from "./images/faces women 02.png";
import Person8 from "./images/faces women 03.png";
import Person9 from "./images/faces women 04.png";
import RightBar from './RightBar'
import Person10 from "./images/faces women 05.png";
import Person11 from "./images/faces women 06.png";


class LeftSideBar extends Component {
  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px"
    };
    const myApp = {
      height: "auto"
    };

    const myDesign = {
      paddingLeft: "20px",
      fontSize: "12px"
    };
    return (
     
        <div class="container card text-white box-border" style={myApp}>
          <div class="row card-header ">Popular</div>
              <div class="container cardBodyNew">
                <div class="card text-white mb-3" style={{border: "none"}}>
                  <div class="row card-header card-sub-header">Recently Used</div>
                  <RightBar />
                </div>
              </div>

              <div class="container cardBodyNew">
                <div class="card text-white mb-3" style={{height: "153px",border: "none"}}>
                  <div class="row card-header card-sub-header">
                    <span class="col">Data Dynamos</span>
                  </div>
                  <div class="row people left-menu-item" style={{fontSize: "12px"}}>
                  <span class="col-1 profile-img" ><img src={Person7} class="roundedImage"/></span>
                    <span class="col-6 menu-item-color menu-item-font" style={{}}>Alena</span>    
                    <span class="col-5 menu-item-color menu-item-small-font">300 Data Sets</span>
                  </div>
                  <div class="row people left-menu-item" style={{fontSize: "12px"}}>
                  <span class="col-1 profile-img" ><img src={Person8} class="roundedImage"/></span>
                    <span class="col-6 menu-item-color menu-item-font" style={{}}>Daemon</span>   
                    <span class="col-5 menu-item-color menu-item-small-font">180 Data Sets</span>
                  </div>
                  <div class="row people left-menu-item" style={{fontSize: "12px"}}>
                  <span class="col-1 profile-img" ><img src={Person9} class="roundedImage"/></span>
                      <span class="col-6 menu-item-color menu-item-font" style={{}}>Stephen</span>  
                      <span class="col-5 menu-item-color menu-item-small-font">120 Data Sets</span>
                  </div>  
                </div>
            </div>
          </div> 
       
      
    );
  }
}

export default LeftSideBar;
