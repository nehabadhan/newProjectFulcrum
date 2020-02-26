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
import ActivityIndicator from "react-activity-indicator";

class DynamicTable extends Component {
  constructor(props) {
    super(props);
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.state = {
      rows: [...output_col],
      title: "Hive",
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    var excludeColumns = ["Customer ID"];
  }

  componentDidMount() {
    {
      setTimeout(() => {
        this.setState({ loading: true }, () => {
          fetch("http://9.195.66.138:8080/realtime-analytics/customers/")
            .then(res => res.json())
            .then(data => {
              this.setState({ loading: false, rows: data });
              console.log(this.state.rows);
            })
            .catch(console.log);
        });
      }, 8000);
    }
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
  renderTableHeader() {
    let header = Object.keys(this.state.rows[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  renderTableData() {
    return this.state.rows.map((student, index) => {
      let col = Object.keys(student);
      return (
        <tr key={student.id}>
          {col.map((val, index) => {
            return <td key={index}>{student[col[index]]}</td>;
          })}
        </tr>
      );
    });
  }

  render() {
    const { loading } = this.state;
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
                  My Workbench : Preview Data Set
                </h4>
              </div>
              <div>
                {loading ? (
                  <table
                    id="dynamic"
                    class="table table table-bordered table-striped"
                  >
                    <thead class="tableTransform">
                      <tr>
                        {this.state.rows.length > 0
                          ? this.renderTableHeader()
                          : null}
                      </tr>
                    </thead>
                    <tbody>{this.renderTableData()}</tbody>
                  </table>
                ) : (
                  <ActivityIndicator
                    style={{ position: "center" }}
                    number={23}
                    diameter={40}
                    borderWidth={1}
                    duration={300}
                    activeColor="#66D9EF"
                    borderColor="white"
                    borderWidth={5}
                    borderRadius="50%"
                  />
                )}
              </div>
              <br />
              <div>
                <ul class="save">
                  <li style={{ marginBottom: "14px" }}>
                    <label style={{ marginRight: "10px", marginLeft: "-40px" }}>
                      Save As
                    </label>
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

export default DynamicTable;
