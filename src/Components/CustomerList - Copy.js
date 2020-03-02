import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import pic from "./images/pic.jpg";
import Person from "./images/faces men 01.png";
import Person1 from "./images/faces men 02.png";
import Person2 from "./images/faces men 03.png";
import Person3 from "./images/faces men 04.png";
import Person4 from "./images/faces men 05.png";
import Person5 from "./images/faces men 06.png";
import Person6 from "./images/faces women 01.png";
import Person7 from "./images/faces women 02.png";

class CustomerList extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
    };
    fetchUsers() {
      fetch('http://localhost:8080/entity/getEntityByFeatureGroup/2')
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
    var customerColumnList = this.props;
    const ImageSquare = this.props;
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
         <Title title={"DICE - Banking"} />
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
  <label>description</label>
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
          const { entityName,entityDataStartDate,entityCreatedDate, owner } = user;
        
          var path = owner.imagePath;
          console.log(path);
          return (
            
            <tr class="round3">
            <td>
               {entityName}
            </td>
            <td>
            <img src={owner.imagePath} alt="Smiley face" height="42" width="42"/>  {owner.ownerFirstName}
            </td>
            <td>
              
     
            StartDate:  {entityDataStartDate}
            <br/>
            CreatedDate:  {entityCreatedDate}
             
               
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
