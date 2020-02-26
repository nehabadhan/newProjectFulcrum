import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import DescriptionCustomer from "./DescriptionCustomer";
import hive from "./images/Apache_Hive_logo.png";
import snowflake from "./images/snowflake.png";
import s3 from "./images/s3.png";
import redshift from "./images/redshift.png";
import mongo from "./images/mongodb.png";
import output_col from "./output_col.json";
import { Link } from "react-router-dom";
class SaveColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: "Hive"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: data });
        console.log(this.state.todos);
      })
      .catch(console.log);
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
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Title title={"FULCRUM"} />
        <div class="transPush">
          <i
            class="fa fa-angle-double-left"
            style={{ fontSize: "18px", paddingRight: "5px" }}
          ></i>
          <Link className="push" to="/Financial" style={{ color: "white" }}>
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
                <h4 class="card-title" style={{ fontSize: "18px" }}>
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
                  {this.state.todos.map(todo => (
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
              {/* <div>
            <h5 class="saveAs">Save As:</h5>
            <select value={this.state.title} onChange={this.handleSelect}>
            <option>Hive</option>
            <option>Mongo</option>
            <option>RedShift</option>
                <option>SnowFlake</option>
                <option>S3</option>
                </select>
        </div> */}
              <br />
              <div>
                <ul>
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

export default SaveColumn;
