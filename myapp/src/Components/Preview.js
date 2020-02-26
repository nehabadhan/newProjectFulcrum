import React, { Component } from "react";
import Collapsible from 'react-collapsible';



class Preview extends Component {
  render() {
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
               <b>Apply</b>
              </h5>
           
            </div>
            <div class="row">
            <div class="col-sm-6">
              <Collapsible trigger="Date and Time Functions">
                <ul class="list">
                  <li>ADD TO DATE</li>
                  <li>AFTER</li>
                  <li>ASDATE</li>
                  <li>BEFORE</li>
                </ul>
              </Collapsible>
           
              <Collapsible trigger="Text Functions">
                <ul class="list">
                  <li>CHAR</li>
                  <li>CODE</li>
                  <li>CONCAT</li>
                  <li>CONTAINS</li>
                </ul>
              </Collapsible>

              <Collapsible trigger="General">
                <ul class="list">
                  <li>Rolling Window</li>
                </ul>
              </Collapsible>
              </div>
           
          
           
            <div class="col-sm-6">
            <div class="form-group">
              <label for="usr" style={{fontSize:"14px"}}><b>Window Duration</b></label>
              <input
                type="text"
                class="form-control"
                id="usr"
                name="username"
              />
               <label for="usr" style={{fontSize:"14px"}}><b>Aggregation Type</b></label>
              <input
                type="text"
                class="form-control"
                id="usr"
                name="username"
              />
            </div>
            </div>
            </div>
           

            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
