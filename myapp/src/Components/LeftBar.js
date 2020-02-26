import React, { Component } from "react";
import Greet from './Greet'
import LeftSideBar from './LeftSideBar'
import Card from './Card'

class LeftBar extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
         <LeftSideBar/>
          </div>
          <div class="col-6">
              <Greet/>
          </div>
          <div class="col">
           <Card/>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftBar;
