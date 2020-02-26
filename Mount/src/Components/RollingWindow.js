import React, { Component } from "react";

class RollingWindow extends Component {
render(){
    const pad ={
        paddingLeft:"15px"
   };
      return (

<div class="col-sm-6">
<div class="form-group" style={pad}>
  <label for="usr" style={{fontSize:"14px"}}>Window Duration</label>
  <input 
    type="text"
    class="form-control"
    id="usr"
    name="username"
    style={{width:"70%"}}
  />
   <label for="usr" style={{fontSize:"14px"}}>Aggregation Type</label>
  <input 
    type="text"
    class="form-control"
    id="usr"
    name="username"
    style={{width:"70%"}}
  />
</div>
</div>
 )}
}
export default RollingWindow;