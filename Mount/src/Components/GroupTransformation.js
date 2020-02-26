import React, { Component } from "react";
import Collapsible from 'react-collapsible';

class GroupTransformation extends Component {
  render() {
    const pad ={
      paddingLeft:"15px"
 };
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
          <Collapsible trigger="Feature Engineering" class="collapseul">
                <ul class="list">
                 <Collapsible trigger="Rolling Window" ><ul class="list">
                   <li>Aggregarte Column</li> 
                   <li>Partition Column</li>
                   <li>Window Duration</li>
                   <li>Order by Date/Column</li></ul>
                 </Collapsible>
                  <li>Label Encoding</li>
                  <li>One Hot Encoding</li>
                  <li>Pivot</li>
                </ul>
              </Collapsible>
           
           
              <Collapsible trigger="Group Functions">
                <ul class="list">
                  <li>Group Count</li>
                  <li>Group Sum</li>
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

export default GroupTransformation;
