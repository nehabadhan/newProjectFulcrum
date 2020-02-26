import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import DescriptionCustomer from "./DescriptionCustomer";
import { Link } from 'react-router-dom'
class SaveColumn extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            title:"Hive"
        };
    }
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ todos: data })
          console.log(this.state.todos)
        })
        .catch(console.log)
      }
   
    handleSelect = event =>{
        this.setState({title:event.target.value});      
    }
    handleSaveAs = () =>{
        console.log(this.state);
    }
  render() {
    return (
      <div style={{backgroundColor: "white"}}>
           <Title title={"FULCRUM"}/>
           <div class="transPush"><i class="fa fa-angle-double-left" style={{fontSize:"18px",paddingRight: "5px"}}></i>
        <Link className="push" to="/Financial" style={{color:"white"}}>
          BACK
        </Link>
        </div>
        {/* <nav class="navbar">
          <span class="navbar-brand mb-0 h5">Overview</span>
        </nav> */}
       {/* <Title title={"My WorkBench"} /> */}
        {/* <br/> */}
       <div class="container">
       <div class="card">  
       {/* <Link className="alignment back" to="/AddWorkbench"><i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i>  Back</Link> */}
       <div class="card-body">
       <div>
              <h4 class="card-title"style={{ fontSize: "18px" }}>
                Financial Transactions
              </h4>
              </div>
        <table class="table table table-bordered table-striped">
          <thead class="tableTransform">
            <tr>
              <th>Column1</th>
              <th>Column2</th>
              <th>Column3</th>
              <th>Column4</th>
              <th>Column5</th>  
            </tr>
          </thead>
          <tbody>
              {this.state.todos.map((todo)=>(
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.title}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
            </tr>
              ))}
            {/* <tr>
              <td>B</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>C</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr> */}
          </tbody>
        </table>
        {/* <button type="button" class="buttonAlign alignment buttonSaveAs" onClick=
        {this.handleSaveAs}>Save As</button> */}
        <div>
            <h5 class="saveAs">Save As:</h5>
            <select value={this.state.title} onChange={this.handleSelect}>
            <option>Hive</option>
            <option>Mongo</option>
            <option>RedShift</option>
                <option>SnowFlake</option>
                <option>S3</option>
                </select>
        </div>
        <br/>
        <div >
        <button type="button" class="buttonSaveCancel" onClick=
        {this.handleSaveAs}>Save As</button>
        <button type="button" class="buttonSaveCancel" onClick=
        {this.handleSaveAs}>Cancel</button>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SaveColumn;
