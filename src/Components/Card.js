import React, { Component } from "react";
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
      height: "auto"
    };
    const myDesign = {
      paddingLeft: "20px",
      fontSize: "12px"
    };

    return (
      <div class="container card text-white box-border" style={myStyleOne}>
        <div class="row card-header ">
          <span>
            <i class="fa fa-bars fa-1x icon-size"></i>
          </span>
          <span class="" style={{ paddingLeft: "5px" }}>
            Activity Feed
          </span>
        </div>
        <div
          style={{
            paddingTop: "5px",
            color: "#5e5a5a",
            fontSize: "15px",
            fontWeight: "500"
          }}
        >
          Today
        </div>
        <div class="container cardBodyNew">
          <div class="card text-white mb-3" style={{ border: "none" }}>
            <div class="row card-header card-sub-header">
              <span class="col">IFRS9 EMEA 0220</span>
            </div>

            <div class="row people left-menu-item" style={{ fontSize: "12px" }}>
              <span class="col-1 profile-img">
                <img src={Person} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Smith</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                added 10 min ago
              </span>
            </div>
            <div
              class="row people left-menu-item"
              style={{ fontSize: "12px", marginLeft: "28px" }}
            >
              <span class="col-1 profile-img">
                <img src={Person1} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">John</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                commented 2 hrs ago
              </span>
            </div>
            <div
              class="row people left-menu-item"
              style={{ fontSize: "12px", marginLeft: "28px" }}
            >
              <span class="col-1 profile-img">
                <img src={Person2} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Nicole</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                ranked dataset 3 hrs ago
              </span>
            </div>
          </div>

          <div class="card text-white mb-3" style={{ border: "none" }}>
            <div class="row card-header card-sub-header">
              <div class="col">Activity Based Costing Analysis</div>
            </div>
            <div class="row people left-menu-item" style={{ fontSize: "12px" }}>
              <span class="col-1 profile-img">
                <img src={Person3} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Brett</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                added 10 min ago
              </span>
            </div>
            <div
              class="row people left-menu-item"
              style={{ fontSize: "12px", marginLeft: "28px" }}
            >
              <span class="col-1 profile-img">
                <img src={Person5} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Adam</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                commented 3 hrs ago
              </span>
            </div>
          </div>

          <div class="card text-white mb-3" style={{ border: "none" }}>
            <div class="row card-header card-sub-header">
              <div class="col">Channel Attribution</div>
            </div>
            <div class="row people left-menu-item" style={{ fontSize: "12px" }}>
              <span class="col-1 profile-img">
                <img src={Person6} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Brian</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                added 10 min ago
              </span>
            </div>
            <div
              class="row people left-menu-item"
              style={{ fontSize: "12px", marginLeft: "28px" }}
            >
              <span class="col-1 profile-img">
                <img src={Person7} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Mathew</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                commented 2 hrs ago
              </span>
            </div>
            <div
              class="row people left-menu-item"
              style={{ fontSize: "12px", marginLeft: "28px" }}
            >
              <span class="col-1 profile-img">
                <img src={Person8} class="roundedImage" />
              </span>
              <span class="col-4 menu-item-color menu-item-font">Neil</span>
              <span class="col-7 menu-item-color menu-item-small-font">
                commented 3 hrs ago
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
