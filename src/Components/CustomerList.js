import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

class CustomerList extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
    customerID: null
    };
    componentDidMount() {

      fetch('http://9.199.250.92:8080/entity/getEntityByFeatureGroup/'+this.customerID)
      .then(response => response.json())
      .then(data =>
       this.setState({
       users: data,
       isLoading: false,
    })
      ).catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
      var customerColumnList = this.props;
	  this.customerID = customerColumnList.location.aboutProps.id.featureGroupID;
	  console.log(this.customerID);
	  var headerName = customerColumnList.location.aboutProps.name.logTable.headerName;

      const linktd = {
      fontSize:"14px"
	};
	var logTable = this.props;
    const create ={ paddingRight: "33px" }
    const { isLoading, users, error } = this.state;
    return (

    
<React.Fragment>
	<Title title={"DICE - Banking"} />
	<div class="transPush">
			<i class="fa fa-angle-double-left" style={{ fontSize: "18px", paddingRight: "5px" }}></i>
			<Link className="push" to="/DailyTransaction" style={{ color: "white" }}> BACK </Link>
		</div>
	<div class="container">
	<div class="records" >
		<table cellspacing="0" cellpadding="0" style={{ fontSize: "15px",   margin: "0px 0px 20px 0px", width: "35%" ,float: "left" }} class="" id="tableBorder">
			<tbody>
				<tr class="round3">
					<td> <p style={{ fontSize: "16px", marginBottom: "0.5rem" ,float: "left" }}>
						  Domain: <br/></p>
					</td>
					<td>  <label> Customer </label>
					</td>
				</tr>
				<tr class="round3">
					<td><p style={{ fontSize: "16px", marginBottom: "0.5rem",   float: "left" }}>
						Feature Group: <br/></p>
					</td>
					<td> <label> {headerName} </label>
					</td>
				</tr>
				<tr class="round3">
					<td><p style={{ fontSize: "16px", marginBottom: "0px" ,float: "left" }}>
							Description:<br/></p>
					</td>
					<td> <label> Demographics for Retail </label>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
  
    {error ? <p>{error.message}</p> : null}
    {!isLoading ? (
		<table class="table table table-bordered table-striped" id="tableBorderentity">

			<thead style={{backgroundColor:"#3787d8",color:"white"}}>
				<tr>
					<th>Dataset</th>
					<th>People</th>
					<th>Events</th>
				</tr>
			</thead>
        {
          users.map(user => {
          const {entityID,entityName,entityDataStartDate,entityCreatedDate,dateUpdateTimeStamp, owner } = user;
        
          var path = owner.imagePath;
          console.log(path);
          return (
            
            
			<tr class="round3">
				<td>
					<div class="Entitylink">


<Link className="push" to={{pathname:"/AddOverviewScreen", aboutProps: { name: { logTable }, id: { entityID } }}}  >
                        {entityName}
                  </Link>
					</div>
				</td>
				<td>
					<div class="dip">
			
						<img  class="roundedImageList" src={owner.imagePath} alt="Smiley face" height="60" width="60"/>
						
						<br/>
							<b> {owner.ownerFirstName}</b>
							
							</div>
				</td>
				<td>
					<div class="Entitylink"> 
     
            Created Date:  {entityCreatedDate}
            
						<br/>
            Last Modified: 
						<b> {dateUpdateTimeStamp} </b>
					</div>
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
  
 

  } 
}

export default CustomerList;
