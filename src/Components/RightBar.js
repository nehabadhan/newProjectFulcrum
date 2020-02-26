import React, { Component } from "react";

class RightBar extends Component {
  render() {
    return (
      <div class="" style={{color:"black",paddingTop: "5px"}}>
        {/* <p style={{fontSize: "14px"}}><b>Recently Used</b></p> */}
        <div class="row recently-used-items-border recently-used-first-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Customer Demography</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>1 day ago</span></div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Capital Procurement</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>2 days ago</span></div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Funds Maturity Analysis</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>3 days ago</span></div>
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Short Term Funding Management</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>4 days ago</span></div>
        </div>
        <div class="row recently-used-items-border recently-used-last-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Customer Income Analysis</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>4 days ago</span></div>
        </div>
      </div>
    );
  }
}

export default RightBar;
