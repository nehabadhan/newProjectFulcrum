import React, { Component } from "react";
import Title from "./Title";
import hive from "./images/Apache_Hive_logo.png";
import snowflake from "./images/snowflake.png";
import s3 from "./images/s3.png";
import redshift from "./images/redshift.png";
import mongo from "./images/mongodb.png";
import output_col from "./output_col.json";
import {Link} from "react-router-dom";
import ReactTable from 'react-table-6';

class DynamicTable extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      rows: [],
      title: "Hive",
      isLoaded:false,
      seconds: 0 ,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger;
    this.interval = setInterval(() => this.tick(), 1000);
    fetch("http://9.195.66.138:8080/realtime-analytics/customers/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          //isLoaded:true,
           rows: data,
          });
        console.log(this.state.rows);
        
      })
      .catch(console.log);
  }
 
  componentWillUnmount() {
    
    clearInterval(this.interval);
  }
  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You chose the ${this.state.size} DB.`);
  }

  tick() {
    debugger;
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }
  load(){
    debugger;
    var i = this.state.seconds;
    if(i === 0){
      return <pre>Retrieving Dataset Metadata *& Policies</pre>; 
    }else if(i === 1){
      return<pre>{`Creating Data Pipeline Components and DSL Syntax


    Completed:
      1.Retrieving Dataset Metadata *& Policies
        `}</pre> ;
    }else if(i === 2){
      return <pre>{`Calling Data  Microservices


    Completed:
      1.Retrieving Dataset Metadata *& Policies
      2.Creating Data Pipeline Components and DSL Syntax
        `} </pre>;
    }else if(i === 3){
      return <pre>{`Connecting to data sources


    Completed:
      1.Retrieving Dataset Metadata *& Policies
      2.Creating Data Pipeline Components and DSL Syntax
      3.Calling Data  Microservices
     `} </pre>;
    }else if(i === 4 ){
      return<pre>{`Creating Data Set


    Completed:
      1.Retrieving Dataset Metadata *& Policies
      2.Creating Data Pipeline Components and DSL Syntax
      3.Calling Data  Microservices
      4.Connecting to data sources
      `}</pre>;
    }else if(i === 5){
      return <pre>{`Process Complete


      Completed:
        1.Retrieving Dataset Metadata *& Policies
        2.Creating Data Pipeline Components and DSL Syntax
        3.Calling Data  Microservices
        4.Connecting to data sources
        5.Creating Data Set
        `} </pre>
    }else{
      this.setState({isLoaded:true})
      return <pre>Please wait...</pre>
      

    }
  }
  render() {
var {isLoaded,rows}=this.state;
if(!isLoaded){
  return <div class="boxes" style={{marginTop:"300px",marginLeft:"750px"}}>
  <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
  <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
  </div>
 <div style={{transform: "rotate(315deg)",paddingRight: "1000px",fontWeight:"800",
    fontSize: "x-large"}}>
     <div>{this.load()}
     </div>
      </div>
</div>
}
else{
  const data = this.state.rows
console.log(data)
data.forEach(function(row){
  console.log(row)
  row._id="" 
  row.refresh_date = Date(row.refresh_date)
})
    const columns = Object.keys(data[0]).map((key, id)=>{ 
      return {
        Header: key.toUpperCase().replace('_'," "),
        accessor: key,
 
      }
    })
   
    var backButton = this.props;
    return (
      <div style={{ backgroundColor: "white" }}>
        <Title title={"FULCRUM"} />
        <div class="transPush">
          <i
            class="fa fa-angle-double-left"
            style={{ fontSize: "18px", paddingRight: "5px" }}
          ></i>
          <Link
            className="push"
            style={{ color: "white" }}
            to={{
              pathname: "/Financial",
              aboutProps: {
                name: { backButton }
              }
            }}
          >
            BACK
          </Link>
        </div>
        <div class="container" style={{ margin: "0px" }}>
          <div class="cardDynamic">
        
            <div class="card-body">
              <div>
                <h4 class="card-title" style={{ fontSize: "18px" }}>
                  My Workbench :Preview Data Set
                </h4>
              </div>  
        <div>        
        <ReactTable
        getTheadTrProps={(state, data, column) => {
          return {
            style: {
              background: "#3787d8",
              fontSize:"14px",
              color:"white"
            }
          }
        }}
      
           data =  { data }
           columns = { columns }
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>  
      
              <br />
              <div>
                <ul class="save">
                  <li style={{ marginBottom: "14px" }}>
                    <label style={{ marginRight: "10px" }}>Save As</label>
                    <label>
                      <input
                        type="text"
                        value={this.state.size}
                        checked={this.state.size === ""}
                        onChange={this.handleChange}
                      />
                    </label>
                  </li>
                 < li class="radio">
                    <label>
                      <input
                        type="radio"
                        value="SnowFlake"
                        checked={this.state.size === "SnowFlake"}
                        onChange={this.handleChange}
                      />
                      <img src={snowflake} class="ddimg" />
                      SnowFlake
                    </label>
                  </li>

                  <li class="radio">
                    <label>
                      <input
                        type="radio"
                        value="RedShift"
                        checked={this.state.size === "RedShift"}
                        onChange={this.handleChange}
                      />
                      <img src={redshift} class="ddimg" />
                      RedShift
                    </label>
                  </li>
                 
                  <li class="radio">
                    <label>
                      <input
                        type="radio"
                        value="S3"
                        checked={this.state.size === "S3"}
                        onChange={this.handleChange}
                      />
                      <img src={s3} class="ddimg" />
                      S3
                    </label>
                  </li>

                  <li class="radio">
                    <label>
                      <input
                        type="radio"
                        value="Mongo"
                        checked={this.state.size === "Mongo"}
                        onChange={this.handleChange}
                      />
                      <img src={mongo} class="ddimg" />
                      MongoDB
                    </label>
                  </li>

                  <li class="radio">
                    <label>
                      <input
                        type="radio"
                        value="Hive"
                        checked={this.state.size === "Hive"}
                        onChange={this.handleChange}
                      />
                      <img src={hive} class="ddimg" />
                      Hive
                    </label>
                  </li>

                  
                </ul>
                <br />
                <div>
                  <button
                    type="button"
                    class="buttonSaveCancel"
                    onClick={this.handleSubmit}
                  >
                    Save
                  </button>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>

    );
  }
}
}

export default DynamicTable;
