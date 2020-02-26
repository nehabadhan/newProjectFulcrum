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
      <div class="" style={{color:"black",paddingTop: "5px"}}>
        {/* <p style={{fontSize: "14px"}}><b>Recently Used</b></p> */}
        <div class="row recently-used-items-border recently-used-first-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Customer Demography</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>1 day ago</span></div>
          {/*<div class="col-4 recently-used-items-col-border">
            <div class="recently-used-items recently-used-bold-text">
              <img src={Person7} class="roundedImage"/>
            </div>
            <div class="recently-used-bold-text menu-item-color">Ricky</div>
            <div class="">Owner</div>
          </div>
          <div class="col-5">
            <div class="recently-used-items">Created</div>
            <div class="font-14">
              <div>09/10/2019</div>
              <div>Last Modified</div>
              <div>50 min ago</div>
            </div>
          </div>*/}
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Capital Procurement</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>2 days ago</span></div>
          {/*<div class="col-4 recently-used-items-col-border">
            <div class="recently-used-items recently-used-bold-text">
              <img src={Person6} class="roundedImage"/>
            </div>
            <div class="recently-used-bold-text menu-item-color">Daemon</div>
            <div class="">Owner</div>
          </div>
          <div class="col-5">
            <div class="recently-used-items">Created</div>
            <div class="font-14">
              <div>10/10/2019</div>
              <div>Last Modified</div>
              <div class="font-bold">20 min ago</div>
            </div>
        </div>*/}
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Funds Maturity Analysis</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>3 days ago</span></div>
          {/*<div class="col-4 recently-used-items-col-border">
            <div class="recently-used-items recently-used-bold-text">
              <img src={Person5} class="roundedImage"/>
            </div>
            <div class="recently-used-bold-text menu-item-color">Alena</div>
            <div class="">Owner</div>
          </div>
          <div class="col-5">
            <div class="recently-used-items">Created</div>
            <div class="font-14">
              <div>11/10/2019</div>
              <div>Last Modified</div>
              <div class="font-bold">10 min ago</div>
            </div>
          </div>*/}
        </div>
        <div class="row recently-used-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Short Term Funding Management</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>4 days ago</span></div>
          {/*<div class="col-4 recently-used-items-col-border">
            <div class="recently-used-items recently-used-bold-text">
              <img src={Person4} class="roundedImage"/>
            </div>
            <div class="recently-used-bold-text menu-item-color">Jeremy</div>
            <div class="">Owner</div>
          </div>
          <div class="col-5">
            <div class="recently-used-items">Created</div>
            <div class="font-14">
              <div>12/10/2019</div>
              <div>Last Modified</div>
              <div class="font-bold">60 min ago</div>
            </div>
          </div>*/}
        </div>
        <div class="row recently-used-items-border recently-used-last-items-border">
          <div class="col-8 menu-item-color recently-used-items"><span>Customer Income Analysis</span></div>
          <div class="col-4 menu-item-color menu-item-small-font"><span>4 days ago</span></div>
          {/*<div class="col-4 recently-used-items-col-border">
            <div class="recently-used-items recently-used-bold-text">
              <img src={Person3} class="roundedImage"/>
            </div>
            <div class="recently-used-bold-text menu-item-color">Stephen</div>
            <div class="">Owner</div>
          </div>
          <div class="col-5">
            <div class="recently-used-items">Created</div>
            <div class="font-14">
              <div>01/10/2019</div>
              <div>Last Modified</div>
              <div class="font-bold">50 min ago</div>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default RightBar;
