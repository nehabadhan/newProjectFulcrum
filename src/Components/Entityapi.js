import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { Link } from "react-router-dom";

class Entity extends React.Component {
state = {
isLoading: true,
users: [],
error: null
};
componentDidMount() {
  fetch('http://localhost:8080/entity/getEntity/4')
  .then(response => response.json())
  .then(data =>
   this.setState({
   users: data,
   isLoading: false,
})
  ).catch(error => this.setState({ error, isLoading: false }));
}

render() {
const { isLoading, users, error } = this.state;

return (
<React.Fragment>
          <div class="container">
            <div class="card">
              <div class="card-body">
                <p class="card-title" style={{ fontSize: "14px" }}>
                  <b>Customer Demography</b>
                </p>
                <Link className="alignment" to={{ pathname: "/AddWorkbench" }}> Go to Workbench  </Link>
<table class="table table-bordered table-secondary" id="tableBorder">
<thead class="first">
   <tr>
      <th style={{ color: "black" }}>Database Name</th>
      <th style={{ color: "black" }}>Entity Grain:</th>
      <th style={{ color: "black" }}>Frequency:</th>
   </tr>
</thead>
   {error ? <p>{error.message}</p> : null}
   {!isLoading ? (
   users.map(user => {
   const { databaseName,entityType,entityGrain,refreshFrequency } = user; 
   return (
         <tr class="round3">
            <td><p> {entityType.entityTypeName} </p>
            <img  class="roundedImageList" src={entityType.entityimagePath} alt="Smiley face" height="80" width="80"/>
            </td>
            <td>{entityGrain} </td>
            <td>{refreshFrequency}</td>
         </tr>
        );
       })
      ) : (<h3>Loading...</h3>)} 
   </table> 

   {error ? <p>{error.message}</p>: null}
   {!isLoading ? (
   users.map(user => {
   const { dateUpdateTimeStamp,dateLoadTimeStamp,entityLongDescription } = user; 
   return (
   <div>
   <table class="table table-bordered table-secondary" id="tableBorder">
   <thead class="first">
   <tr>
      <th style={{ color: "black" }}>Dates</th>
      <th style={{ color: "black" }}>Rates</th>
      <th style={{ color: "black" }}>Records</th>
      <th style={{ color: "black" }}>Cache</th>
   </tr>
   </thead>
         <tr class="round3">
            <td><p> {dateLoadTimeStamp} </p>
               {dateUpdateTimeStamp}
            </td>
            <td></td>
            <td></td>
            <td>{entityLongDescription}</td>
            </tr>
   </table> 
</div>
     );
   })
   ) : ( <h3>Loading...</h3>)} 
         
</div>
</div>
</div>

</React.Fragment>
);
}
}

export default Entity;