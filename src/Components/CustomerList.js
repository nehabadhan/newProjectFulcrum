import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
class CustomerList extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
    };
    fetchUsers() {
      fetch('http://localhost:8080/entity/getEntityByFeatureGroup/'+ '1')
      .then(response => response.json())
      .then(data =>
       this.setState({
       users: data,
       isLoading: false,
    })
      ).catch(error => this.setState({ error, isLoading: false }));
    }
    
    componentDidMount() {
      this.fetchUsers();
    }
  render() {
    debugger;
    var customerColumnList = this.props;
    //let customerID = customerColumnList.location.aboutProps.id.featureGroupID;
    var headerName = customerColumnList.location.aboutProps.name.logTable.headerName;
    const linktd = {
      fontSize:"17px"
    };
    const create ={
      paddingRight: "33px"
    }
    const { isLoading, users, error } = this.state;
    return (
    <React.Fragment>
         <Title title={"FULCRUM"} />
          <div class="container">
      
         <div class="transPush">
          <i
            class="fa fa-angle-double-left"
            style={{ fontSize: "18px", paddingRight: "5px" }}
          ></i>
          <Link
            className="push"
            to="/DailyTransaction"
            style={{ color: "white" }}
          >
            BACK
          </Link>
        </div>
        <table class="table table-bordered table-secondary" id="tableBorder">
  <tbody>
    <tr class="round3">
      <td>
      <p style={{ fontSize: "17px", marginBottom: "-10px" ,float: "left" }}>
  <label>Domain: </label>
  <br/>
</p>
      </td>
      <td>
      <b>Customer</b>
      </td>
      </tr>
      <tr class="round3">
      <td>
      <p style={{ fontSize: "17px", marginBottom: "-10px",   float: "left" }}>
  <label>Feature Name: </label>
  <br/>
</p>
      </td>
      <td>
      <b>{headerName}</b>
      </td>
      </tr>
      <tr class="round3">
      <td>
      <p style={{ fontSize: "17px", marginBottom: "-10px" ,float: "left" }}>
  <label>Description: </label>
  <br/>          
</p>
</td>
      <td>
      <b>Demographics for Retail</b>
  
      </td>
      </tr>
      </tbody>
</table>
  
    {error ? <p>{error.message}</p> : null}
    {!isLoading ? (
      <table class="table table-bordered table-secondary" id="tableBorder">
        <thead style={{backgroundColor:"#3787d8",color:"white"}}>
          <tr>
            <th>Dataset</th>
            <th>People</th>
            <th>Events</th>
          </tr>
        </thead>
        {
          users.map(user => {
          const { entityName, owner } = user;
          return (
            <tr class="round3">
            <td>
               {entityName}
               {this.props.featureGroupID}
            </td>
            <td>
               {owner.ownerFirstName}
            </td>
            <td>
               <img src={owner.imagePath} alt="Smiley face" height="42" width="42"/>
               <img class="cardpics" src={`${require('./images/Investment Management 01.png')}`} />
          
               
            </td>
         </tr>
          )
          })}
 
        </table>
        )
     : (
      <h3>Loading...</h3>
    )}
     </div>
    </React.Fragment>
  
    );
   // debugger;
 
  } 
}
export default CustomerList;