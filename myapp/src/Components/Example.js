import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import GroupTransformation from "./GroupTransformation";
import Preview from "./Preview";
import Collapsible from "react-collapsible";
import { Link } from 'react-router-dom'

class Example extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Title title={"FULCRUM"}/>
        <div class="transPush"><i class="fa fa-angle-double-left" style={{fontSize:"18px",paddingRight: "5px"}}></i>
        <Link className="push" to="/DailyTransaction" style={{color:"white"}}>
          BACK
        </Link>
        </div>
        {/* <br /> */}
        <div class="container">
          <div class="card">
            <div class="card-body">
              <div>
              <h4 class="card-title"style={{ fontSize: "18px" }}>
                My WorkBench
              </h4>
              </div>
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
                  <tr>
                    <td>A</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <a href="url" data-toggle="modal"
                data-target="#flip">f(x)</a>
                    </td>
                    <Preview/>
                  </tr>
                  <tr>
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
                  </tr>
                </tbody>
              </table>

              {/* <button type="button" class="transPop">Summary f(x)</button> */}

              <button
                type="button"
                class="transPop"
                data-toggle="modal"
                data-target="#flipFlop"
              >
                Summary f(x)
              </button>
              <GroupTransformation />

              {/* <button type="button" class="buttonAlign">
               Preview
              </button> */}
              <Link className="pop" to="/saveTransaction"id="buttonAlignOne">Preview</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
