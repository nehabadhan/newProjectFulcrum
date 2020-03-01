import React, { Component } from "react";
import Collapsible from "react-collapsible";
class AddList extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            designation: '',
            salary: ''
        }
    }


    nameHandler(e){
        this.setState({name: e.target.value});
    }

    designationHandler(e){
        this.setState({designation: e.target.value});
    }

    salaryHandler(e){
        this.setState({salary: e.target.value}); 
    }

    addPopChange(){
        const addInput = this.state;
        this.props.addModalDetails(addInput)
    }
  render() {
    const pad = {
      paddingLeft: "15px"
    };
    let modalValue = this.props.greet;
    return (
      <div
        class="modal fade"
        id="add"
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
                <b>Add Personal Details</b>
              </h5>
            </div>
            <div class="row">
              <div class="col-sm-6 ">
                <label for="usr" style={{ marginLeft: "20px", fontSize: "14px" }}>
                 <b>Name:</b>
                </label>
                <input
                  type="text" value={this.state.name} onChange={(e)=>this.nameHandler(e)}
                  style={{ marginLeft: "20px" }}
                  class="form-control"
                  id="usr"
                />

                <label for="usr" style={{ marginLeft: "20px", fontSize: "14px"  }}>
                <b>Designation:</b>
                </label>
                <input
                  type="text" value={this.state.designation} onChange={(e)=>this.designationHandler(e)}
                  style={{ marginLeft: "20px" }}
                  class="form-control"
                  id="usr"
                />

                <label for="usr" style={{ marginLeft: "20px", fontSize: "14px"  }}>
                <b>Salary:</b>
                </label>
                <input
                  type="text" value={this.state.salary} onChange={(e)=>this.salaryHandler(e)}
                  style={{ marginLeft: "20px" }}
                  class="form-control"
                  id="usr"
                />
              </div>
            </div>

            <div class="modal-footer" style={{ borderTop: "0px" }}>
              <button
                type="button" 
                onClick={()=>{this.addPopChange()}}
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Add
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

export default AddList;
