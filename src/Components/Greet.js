import React, { Component } from "react"
import {Link} from 'react-router-dom'
import Title from "./Title";

class Greet extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
  };
  
  componentDidMount() {
    //fetch('http://9.199.250.92:8080/featureGroup/getAll')
    fetch('http://9.85.104.242/featureGroup/getAll')
      .then(response => response.json())
   
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px",
      paddingLeft: "40px",
      fontSize: "0.9rem",
      borderColor:"#004085"
    };
    var logTable = this.props;

    const { isLoading, users, error } = this.state;

    return (
      <form>
        <div class="input-group">
          <input id="search" type="search" class="form-control"  style={myStyle} name="search" placeholder="Search Datasets, Features, People" />
          <i class="fa fa-search" style={{position: "absolute",margin: "23px",color:"#004085"}}></i>
        </div>
      <React.Fragment>
      <div class="card box-border" id="middle">   
      <div class="card-header">Discover by domain</div> 
      <div class="card-body">
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, groupName,groupcategory,featureGroupID } = user; 
            return (
                    user.groupcategory === 'Domain' ?   
                    <div class="col col-md-3 card2 green-card-style" >                     
                    <Link className="push" to={{pathname:"/Customers", aboutProps: { name: { logTable }, id: { featureGroupID } }}}  >
                    <div key={username} class="icon-tab">
                    <div class={groupName}  id="alignmentCenter"> </div>
                    <a  class="icon-tab-text addIcon card-text green-color"  > {groupName}</a>           
                    </div>
                    </Link>
                    </div> : null
                   );
          })
        ) : (<h3>Loading...</h3> )
        }    
      </div>
      </div>
      </React.Fragment>
      
      <React.Fragment>
      <div class="card box-border" id="middle">
      <div class="card-header">Discover by Function</div> 
      <div class="card-body">
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, groupName, groupcategory } = user; 
            return (
              user.groupcategory === 'Function' ? 
              <div class="col col-md-4 card2 green-card-style" >
              <Link className="push" to={{pathname:"/Customers", aboutProps: { name: { logTable },}}}  style={{ color: "white" }}>
              <div key={username} class="icon-tab">
              <div class={groupName} id="alignmentCenter"> </div>
              <a id={groupName} class="icon-tab-text addIcon card-text green-color"> {groupName}</a>           
              </div>
              </Link>
              </div> : null
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}    
     </div>
     </div>
     </React.Fragment>

     <React.Fragment>
     <div class="card box-border" id="middle">
     <div class="card-header">Discover by Source</div> 
     <div class="card-body">
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, groupName, groupcategory } = user; 
            return (
              user.groupcategory === 'Source' ? 
              <div class="col col-md-4 card2 green-card-style" >
              <Link className="push" to={{pathname:groupName, aboutProps: { name: { logTable }, }}}  style={{ color: "white" }}>
              <div key={username} class="icon-tab">
              <div class={groupName} id="alignmentCenter"> </div>
              <a id={groupName} class="icon-tab-text addIcon card-text green-color"> {groupName}</a>           
              </div>
              </Link>
              </div> : null
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}    
     </div>
     </div>
     </React.Fragment>
      </form>
    );
 }
}


export default Greet;
