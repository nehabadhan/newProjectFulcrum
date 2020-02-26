import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import GroupTransformation from "./GroupTransformation";
import Preview from "./Preview";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import axios from "axios";

class Example extends Component {
  constructor() {
    super();
    this.state = { aggregate: "", window: "", partition: "", order: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(event) {
    var aggregate = this.state.aggregate;
    var window = this.state.window;
    var partition = this.state.partition;
    var order = this.state.order;
    event.preventDefault();
  }
  render() {
    if (this.props.location.aboutProps.name.backButton !== undefined) {
      var dataMap = this.props.location.aboutProps.name.backButton.location
        .aboutProps.name.dataMap;
    } else {
      var x = this.props.location.aboutProps;
      debugger;
      var tableData = x.name.send.posts;
      var checkData = x.name.send.checkboxMark;

      if (
        x.name.send.cardsValue !== undefined &&
        x.name.send.cardsValue.location.aboutProps !== undefined &&
        x.name.send.cardsValue.location.aboutProps.storage.customerColumnList
          .location.aboutProps.name.logTable.random.location !== undefined
      ) {
        var statusChecked =
          x.name.send.cardsValue.location.aboutProps.storage.customerColumnList
            .location.aboutProps.name.logTable.random.location.aboutProps.load
            .z;
      }
    }

    if (checkData !== undefined) {
      for (var i = 0; i < checkData.length; i++) {
        if (checkData[i].dbtype == "snowflake") {
          let arraySort = [
            tableData[0].Customer_ID,
            tableData[0].Business_Date,
            tableData[0].Card_Type,
            tableData[0].Spend_Amount,
            tableData[0].Paid_Amount
          ];
          checkData[i].column = arraySort[i];
        } else if (checkData[i].dbtype == "mariadb") {
          let arraySort = [
            tableData[0].Customer_ID,
            tableData[0].DOB,
            tableData[0].Marital_Status,
            tableData[0].Postal_Code,
            tableData[0].Self_Employed
          ];
          checkData[i].column = arraySort[i];
        }
      }
    }

    var arr = [];
    if (checkData !== undefined) {
      for (var i = 0; i < checkData.length; i++) {
        if (checkData[i].isChecked) {
          arr.push({
            desc: checkData[i].desc,
            description: checkData[i].description,
            isChecked: checkData[i].isChecked,
            dbtype: checkData[i].dbtype,
            table: checkData[i].table,
            column: checkData[i].column,
            columnValue: checkData[i].columnValue,
            colT4mtn: checkData[i].colT4mtn
          });
        }

        var loadStorage = arr;
      }
    }

    var z = loadStorage;
    if (z !== undefined) {
      var dataMap = [...z];
    }
    if (statusChecked !== undefined) {
      var dataMap = [...z, ...statusChecked];
    }

    var popup = {
      aggregate: this.state.aggregate,
      window: this.state.window,
      partition: this.state.partition,
      order: this.state.order
    };

    var postData = {
      attributes: [],
      transformations: [],
      datasetname: "sample"
    };
    for (var i = 0; i < dataMap.length; i++) {
      if (dataMap[i].isChecked) {
        postData.attributes.push({
          desc: dataMap[i].desc,
          dbtype: dataMap[i].dbtype,
          table: dataMap[i].table,
          column: dataMap[i].columnValue,
          colT4mtn: dataMap[i].colT4mtn
        });
      }
    }

    if (
      (popup.aggregate || popup.window || popup.partition || popup.order) !== ""
    ) {
      postData.transformations.push({
        DST4mtn: "RollingWindow",
        params:
          popup.aggregate +
          "," +
          popup.window +
          "," +
          popup.partition +
          "," +
          popup.order,

        colName: "Calculated_Carry_Over_Amt"
      });
    }

    function postDataHandler() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", postData)
        .then(response => {
          console.log(response);
        });
    }

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
              pathname: "/DailyTransaction",
              aboutProps: {
                load: { z }
              }
            }}
          >
            BACK
          </Link>
        </div>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div>
                <h4 class="card-title" style={{ fontSize: "18px" }}>
                  My WorkBench
                </h4>
              </div>
              <div>
                <table class="table table table-bordered table-striped">
                  <thead class="tableTransform">
                    <tr>
                      <th>Source</th>
                      <th>Feature</th>
                      <th>Description</th>
                      <th>Sample Values</th>
                      <th>Apply f(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataMap.map(check => (
                      <tr>
                        <td>{check.dbtype}</td>
                        <td>{check.desc}</td>
                        <td>{check.description}</td>
                        <td>{check.column}</td>
                        <td>
                          <a href="url" data-toggle="modal" data-target="#flip">
                            f(x)
                          </a>
                        </td>

                        <Preview />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button
                type="button"
                class="transPop"
                data-toggle="modal"
                data-target="#flipFlop"
              >
                Summary f(x)
              </button>
              <div
                class="modal fade"
                id="flipFlop"
                tabindex="-1"
                role="dialog"
                aria-labelledby="modalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5
                        class="modal-title"
                        id="modalLabel"
                        style={{ fontSize: "15px" }}
                      >
                        <b>Summary f(x)</b>
                      </h5>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <div class="row">
                        <div class="col-sm-12">
                          <Collapsible
                            trigger="Feature Engineering"
                            class="collapseul"
                          >
                            <ul class="list">
                              <Collapsible trigger="Rolling Window">
                                <ul class="list">
                                  <li>
                                    <label>
                                      Aggregate Column
                                      <input
                                        type="text"
                                        name="aggregate"
                                        style={{ marginLeft: "21px" }}
                                        onChange={this.handleChange}
                                      />
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      Window Duration
                                      <input
                                        type="text"
                                        name="window"
                                        style={{ marginLeft: "32px" }}
                                        onChange={this.handleChange}
                                      />
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      Partition Column
                                      <input
                                        type="text"
                                        name="partition"
                                        style={{ marginLeft: "36px" }}
                                        onChange={this.handleChange}
                                      />
                                    </label>{" "}
                                  </li>

                                  <li>
                                    <label>
                                      Order by Date/Column{" "}
                                      <input
                                        type="text"
                                        name="order"
                                        style={{ marginLeft: "2px" }}
                                        onChange={this.handleChange}
                                      />
                                    </label>
                                  </li>
                                </ul>
                              </Collapsible>
                              <li>Label Encoding</li>
                              <li>One Hot Encoding</li>
                              <li>Pivot</li>
                            </ul>
                          </Collapsible>
                          <Collapsible trigger="Group Functions">
                            <ul class="list">
                              <li>Group Count</li>
                              <li>Group Sum</li>
                            </ul>
                          </Collapsible>
                        </div>
                      </div>

                      <div class="modal-footer" style={{ borderTop: "0px" }}>
                        <input
                          type="submit"
                          value="Apply"
                          class="btn btn-primary"
                          data-dismiss="modal"
                        />
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <Link
                className="pop"
                id="buttonAlignOne"
                onClick={postDataHandler}
                to={{
                  pathname: "/saveTransaction",
                  aboutProps: {
                    name: { dataMap }
                  }
                }}
              >
                View DataSet
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
