import React, { Component } from "react";
import Person from "./images/faces men 01.png";
import Person1 from "./images/faces men 02.png";
import Person2 from "./images/faces men 03.png";
import Person3 from "./images/faces men 04.png";
import Person4 from "./images/faces men 05.png";
import Person5 from "./images/faces men 06.png";
import Person6 from "./images/faces women 01.png";
import Person7 from "./images/faces women 02.png";

class RightBar extends Component {
  render() {
    return (
      <div class="" style={{ color: "black", paddingTop: "5px" }}>
        <div class="row recently-used-items-border recently-used-first-items-border">
          <div class="col-8 menu-item-color recently-used-items">
            <span>Customer Demography</span>
          </div>
          <div class="col-4 menu-item-color menu-item-small-font">
            <span>1 day ago</span>
          </div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items">
            <span>Capital Procurement</span>
          </div>
          <div class="col-4 menu-item-color menu-item-small-font">
            <span>2 days ago</span>
          </div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items">
            <span>Funds Maturity Analysis</span>
          </div>
          <div class="col-4 menu-item-color menu-item-small-font">
            <span>3 days ago</span>
          </div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items">
            <span>Short Term Funding Management</span>
          </div>
          <div class="col-4 menu-item-color menu-item-small-font">
            <span>4 days ago</span>
          </div>
        </div>
        <div class="row recently-used-items-border recently-used-last-items-border">
          <div class="col-8 menu-item-color recently-used-items">
            <span>Customer Income Analysis</span>
          </div>
          <div class="col-4 menu-item-color menu-item-small-font">
            <span>4 days ago</span>
          </div>
        </div>
      </div>
    );
  }
}

export default RightBar;
