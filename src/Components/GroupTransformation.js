import React, { Component } from "react";
import Collapsible from 'react-collapsible';

class GroupTransformation extends Component {
  constructor() {
    super();
    this.state = {aggregate: '', window:'', partition:'', order:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
   alert('A name was submitted: ' + this.state.aggregate);
    alert('A name was submitted: ' + this.state.window);
    alert('A name was submitted: ' + this.state.partition);
    alert('A name was submitted: ' + this.state.order);
    event.preventDefault();
  }
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
            <form onSubmit={this.handleSubmit}>
            <div class="row" >
            <div class="col-sm-12">
          <Collapsible trigger="Feature Engineering">
                <ul class="list">
                 <Collapsible trigger="Sliding Window" class="slidingWindowbull">
      <ul class="list" >
                   <li><label>Aggregarte Column
                     <input type="text" name="aggregate" style={{marginLeft:"28px"}} 
                     onChange={this.handleChange} /></label></li> 
                   <li><label>Window Duration  
                     <input type="text" name="window" style={{marginLeft:"42px"}} 
                    onChange={this.handleChange} 
                   /></label></li>
                   <li><label>Partition Column  
                     <input type="number" name="partition" style={{marginLeft:"47px"}}
                     onChange={this.handleChange} /></label> </li>
                   
                   <li><label>Order by Date/Column <input type="text" name="order" style={{marginLeft:"2px"}} 
                    onChange={this.handleChange}/></label></li>
                   </ul>
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
             <input type="submit" value="Apply" class="btn btn-primary"/>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> 
            </form>
          </div>
          
        </div>
      </div>
   
  
    );
  }
}

export default GroupTransformation;
