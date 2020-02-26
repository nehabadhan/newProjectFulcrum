import React, { Component } from "react";
import Collapsible from 'react-collapsible';

class GroupTransformation extends Component {
  render() {
  
    return (
        
        <div
        class="modal fade"
        id="flipFlop"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalLabel" style={{fontSize:"15px"}}>
                <b>Summary f(x)</b>
              </h5>
           
            </div>
            <div class="row">
            <div class="col-sm-6">
              <Collapsible trigger="Feature Engineering">
                <ul class="list">
                  <li>Label Encoding</li>
                  <li>One Hot Encoding</li>
                  <li>Pivot</li>
                </ul>
              </Collapsible>
           
           
              <Collapsible trigger="Group Functions">
                <ul class="list">
                  <li>Label Encoding</li>
                  <li>One Hot Encoding</li>
                  <li>Pivot</li>
                </ul>
              </Collapsible>
              </div>
           
          
           
            <div class="col-sm-6">
            <div class="form-group">
              <label for="usr" style={{fontSize:"14px"}}><b>Parameters:</b></label>
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

export default GroupTransformation;
