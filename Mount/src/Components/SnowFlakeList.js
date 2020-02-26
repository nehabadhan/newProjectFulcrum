import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Person from "./images/faces men 01.png";
import Person1 from "./images/faces men 02.png";
import Person2 from "./images/faces men 03.png";
import Person3 from "./images/faces men 04.png";
import Person4 from "./images/faces men 05.png";
import Person5 from "./images/faces men 06.png";
import Person6 from "./images/faces women 01.png";
import Person7 from "./images/faces women 02.png";

class SnowFlakeList extends Component {
  render() {
    const linktd = {
      fontSize:"17px"
    };
    const create ={
      paddingRight: "33px"
    }
    return (
      <div>
        <Title title={"FULCRUM"} />
        <div class="transPush">
          <i     
            class="fa fa-angle-double-left"
            style={{ fontSize: "18px", paddingRight: "5px" }}
          ></i>
          <Link
            className="push"
            to="/DailyTransaction"
            style={{ color: "white" }}
          >
            BACK
          </Link>
        </div>
        <div class="container">
          {/* <br/> */}
          <p style={{ fontSize: "14px", marginBottom: "-10px" }}>
            <b>Customer Domain</b>
          </p>
          <table class="table table-bordered table-secondary" id="tableBorder">
            <thead>
              <tr>
                <th style={{color:"black"}}>Dataset</th>
                <th style={{color:"black"}}>People</th>
                <th style={{color:"black"}}>Events</th>
              </tr>
            </thead>
            <tbody>
              <tr class="round3">
                <td>
                  <Link className="addIcon" style={linktd} to="/AddOverviewScreen">
                  Customer Demography
                  </Link>
                </td>
                <td>
                  <div>
                    <img src={Person7} class="roundedImageList" />
                    Ricky
                  </div>
                  <div>Owner</div>
                </td>
                <td>
                  <div  style={create}>Created 09/10/2019</div>
                  <div>
                    Last Modified <b>50 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                <Link
                    className="addIcon" style={linktd} to="">
                    Capital Procurement
                  </Link>
                </td>
                <td>
                  <div >
                    <img src={Person6} class="roundedImageList" />
                    Daemon
                  </div>
                  <div>Owner</div>
                </td>
                <td>
                  <div style={create}>Created 10/10/2019</div>
                  <div>
                    Last Modified <b>20 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                <Link
                    className="addIcon" style={linktd} to="">
                  Funds Maturity Analysis
                  </Link>
                </td>
                <td>
                  <div>
                    <img src={Person1} class="roundedImageList" />
                    Alena
                  </div>
                  <div>Owner</div>
                </td>
                <td>
                  <div  style={create}>Created 11/10/2019</div>
                  <div>
                    Last Modified <b>10 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                <Link
                    className="addIcon" style={linktd} to="">
                  Short Term Funding Management
                  </Link>
                </td>
                <td>
                  <div>
                    <img src={Person2} class="roundedImageList" />
                    Jeremy
                  </div>
                  <div>Owner</div>
                </td>
                <td>
                  <div  style={create}>Created 12/10/2019</div>
                  <div>
                    Last Modified <b>60 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                <Link
                    className="addIcon" style={linktd} to="">
                  Customer Income Analysis
                  </Link>
                </td>
                <td>
                  <div>
                    <img src={Person2} class="roundedImageList" />
                    Jenee
                  </div>
                  <div>Owner</div>
                </td>
                <td>
                  <div  style={create}>Created 12/10/2019</div>
                  <div>
                    Last Modified <b>60 min ago</b>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SnowFlakeList;
