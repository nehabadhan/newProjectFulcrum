import React, { Component } from "react";
import RightBar from './RightBar'
import CustomerList from './CustomerList'
import CardsList from './CardsList'
import {Link} from 'react-router-dom'
import Collapsible from 'react-collapsible';
// import Search from "./search.png";

class Greet extends Component {
  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px"
    };

    function clickHandler(){
        alert('Button click')
    }
    return (
      <form>
        <div class="input-group">
        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
          <input
            id="search"
            type="search" 
            class="form-control" 
            style={myStyle} 
            name="search"
            placeholder="Search Datasets, Features, People" 
          />
        </div>
  
        <div class="card" id="middle">
          <div class="card-header">Discover by Domain</div>
          <div class="card-body">
            <div class="container">
              <div class="card-deck">
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <Link className="addIcon" to="/CustomerListScreen" style={{fontSize: "12px", color:"#46d246"}}>Customers</Link>
                    
           
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <Link className="addIcon" to="/CardsListScreen" style={{fontSize: "11px",color:"#46d246"}}>Cards</Link>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#46d246",padding: "4px"}}>Mortgages</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>current Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#46d246", padding: "4px"}}>Current and Saving Accounts</p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#46d246", padding: "4px"}}>Loans</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#46d246",padding: "4px"}}>Transaction Categorization</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#46d246", padding: "4px"}}>Channel Interactions</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#c1f0f0"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>current Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#46d246",padding: "4px"}}>Customer Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" id="middle">
          <div class="card-header">Discover by Function</div>
          <div class="card-body">
            <div class="container">
              <div class="card-deck" id="centerShift">
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Asset and Liability Management</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Profitability</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Risk Management</p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Regulatory Compliance</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Relationship Management</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ee"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#cc0000"}}>Investment Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" id="middle">
          <div class="card-header">Discover by Source Type</div>
          <div class="card-body">
            <div class="container">
              <div class="card-deck" id="centerShift">
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px", color:"#003399"}}>AWS S3</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#003399"}}>AWS Redshift</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#003399"}}>Google Big Query</p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Mortgages</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#003399"}}>Hive</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Saving Account</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#003399"}}>Mongo DB</p>
                  </div>
                </div>
                <div class="card" style={{backgroundColor:"#ffe6ff"}}>
                  <div class="card-body text-center" id="alignmentCenter">
                    {/* <p class="card-text" onClick={clickHandler}>Fixed Deposit</p> */}
                    <p onClick={clickHandler} style={{fontSize: "11px",color:"#003399"}}>Snow Flake DB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* <br/> */}
        <RightBar/>
      </form>
    );
  }
}

export default Greet;
