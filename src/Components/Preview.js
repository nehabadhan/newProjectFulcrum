import React, { Component } from "react";
import Collapsible from 'react-collapsible';

class Preview extends Component {
  render() {
    const pad ={
         paddingLeft:"15px"
    };
    return (
        <div
        class="modal fade"
        id="flip"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel" style={{fontSize:"15px"}}>
               <b>Apply f(x)</b>
              </h5>
           
            </div>
            <div class="row" >
            <div class="col-sm-6 ">
            <Collapsible trigger="Date and Time Functions" isExpanded={true}>
                <ul class="list">
                  <li>ADD TO DATE</li>
                  <li>AFTER</li>
                  <li>ASDATE</li>
                  <li>BEFORE</li>
                </ul>
              </Collapsible>
           
              <Collapsible trigger="Text Functions" isExpanded={true}>
                <ul class="list">
                  <li>CHAR</li>
                  <li>CODE</li>
                  <li>CONCAT</li>
                  <li>CONTAINS</li>
                </ul>
              </Collapsible>
              </div>
            </div>
             <div class="modal-footer" style={{borderTop:"0px"}}>
             <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Apply
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
