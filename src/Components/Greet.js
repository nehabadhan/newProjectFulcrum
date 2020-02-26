import React, { Component } from "react"
import PostData  from '../data/posts.json'
import {Link} from 'react-router-dom'
import axios from "axios"

class Greet extends Component {
  constructor(props){
    super(props)
    this.state = {
      customer: []
    }

  }

  componentDidMount(){
    debugger;
  // axios.get('http://9.199.250.92:8080/featureGroup/getAll')
  axios.get('http://9.199.250.92:8080/featureGroup/getAll')
   .then(response =>{
     console.log(response);
   })
  }


  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px",
      paddingLeft: "40px",
      fontSize: "0.9rem",
      borderColor:"#004085"
    };
    var logTable = this.props;
    function clickHandler(){
        alert('Button click')
    }
        return(
      <form>
        <div class="input-group">
          <input
            id="search"
            type="search" 
            class="form-control" 
            style={myStyle} 
            name="search"
            placeholder="Search Datasets, Features, People" />
          <i class="fa fa-search" style={{position: "absolute",margin: "23px",color:"#004085"}}></i>
        </div>

         
        <div class="card box-border" id="middle">
          <div class="card-header">Discover by Domain</div>         
          <div class="card-body">
            {PostData.map((featureGroup, index)=>{ return (       
            featureGroup.groupcategory === 'Domain' ? 
            <div class="col col-md-3 card2 green-card-style" >
            <Link  className="push" to={featureGroup.groupName}   style={{ color: "white" }}>
              <div class="icon-tab">  
                <div class={featureGroup.groupName} id="alignmentCenter"> </div>
                   <a class="icon-tab-text addIcon card-text green-color"> {featureGroup.groupName}
                   </a>           
                  </div>
                  </Link> 
                </div> : null)
              })}     
              </div>     
            </div>
            <div class="card box-border" id="middle">
          <div class="card-header">Discover by Function</div>         
          <div class="card-body">
            {PostData.map((featureGroup, index)=>{ return (       
            featureGroup.groupcategory === 'Function' ? 
            <div class="col col-md-4 card2 green-card-style" >
            <Link  className="push" to={featureGroup.groupName}   style={{ color: "white" }}>
              <div class="icon-tab">  
                <div class={featureGroup.groupName} id="alignmentCenter"> </div>
                   <a class="icon-tab-text addIcon card-text green-color"> {featureGroup.groupName}
                   </a>           
                  </div>
                  </Link> 
                </div> : null)
              })}     
              </div>     
            </div>
            <div class="card box-border" id="middle">
          <div class="card-header">Discover by Source Type</div>         
          <div class="card-body">
            {PostData.map((featureGroup, index)=>{ return (       
            featureGroup.groupcategory === 'Source Type' ? 
            <div class="col col-md-4 card2 green-card-style" >
            <Link  className="push" to={featureGroup.groupName}   style={{ color: "white" }}>
              <div class="icon-tab">  
                <div class={featureGroup.groupName} id="alignmentCenter"> </div>
                   <a class="icon-tab-text addIcon card-text green-color"> {featureGroup.groupName}
                   </a>           
                  </div>
                  </Link> 
                </div> : null)
              })}     
              </div>     
            </div>
      </form>
    );
  }
}
export default Greet;