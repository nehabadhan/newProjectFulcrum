import React, { Component } from "react";
import Collapsible from "react-collapsible";
class Remove extends Component {
    agreeHandler(){
        let modalIndex = this.props.deleteGreet;
        this.props.deleteModalDetails(modalIndex)
    }
   
  render() {
    const pad = {
      paddingLeft: "15px"
    };
   
 
    return (
      <div
        class="modal fade"
        id="pop"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="modalLabel"
                style={{ fontSize: "15px" }}
              >
                <b>Delete Personal Details</b>
              </h5>
            </div>

            <div class="row">
              <div class="col-sm-12 ">
                  <p style={{ marginLeft: "20px" }}>Are you sure you want to delete this row?</p>
              </div>
            </div>

            <div class="modal-footer" style={{ borderTop: "0px" }}>
              <button
                type="button"  onClick={() => this.agreeHandler()} 
                class="btn btn-primary"
                data-dismiss="modal"
              >
                OK
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Remove;
