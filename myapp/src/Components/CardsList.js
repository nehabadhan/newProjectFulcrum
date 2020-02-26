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

class CardsList extends Component {
  render() {
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
            <b>Cards Domain</b>
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
                  <Link className="addIcon" to="/AddTransform">
                  Card Daily Transactions
                  </Link>
                </td>
                <td>
                  <div>Owner</div>
                  <div>
                    <img src={Person7} class="roundedImage" />
                    Ricky
                  </div>
                </td>
                <td>
                  <div>Created 09/10/2019</div>
                  <div>
                    Last Modified <b>50 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="addIcon" to="/AddTransform">
                    {" "}
                    Card Deliquency Analysis
                  </Link>
                </td>
                <td>
                  <div>Owner</div>
                  <div>
                    <img src={Person6} class="roundedImage" />
                    Daemon
                  </div>
                </td>
                <td>
                  <div>Created 10/10/2019</div>
                  <div>
                    Last Modified <b>20 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="addIcon" to="/AddTransform">
                  Card Debt Collections
                  </Link>
                </td>
                <td>
                  <div>Owner</div>
                  <div>
                    <img src={Person1} class="roundedImage" />
                    Alena
                  </div>
                </td>
                <td>
                  <div>Created 11/10/2019</div>
                  <div>
                    Last Modified <b>10 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="addIcon" to="/AddTransform">
                  Card Propsects
                  </Link>
                </td>
                <td>
                  <div>Owner</div>
                  <div>
                    <img src={Person2} class="roundedImage" />
                    Jeremy
                  </div>
                </td>
                <td>
                  <div>Created 12/10/2019</div>
                  <div>
                    Last Modified <b>60 min ago</b>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <Link className="addIcon" to="/AddTransform">
                  Card Spend location trends
                  </Link>
                </td>
                <td>
                  <div>Owner</div>
                  <div>
                    <img src={Person2} class="roundedImage" />
                    Jeremy
                  </div>
                </td>
                <td>
                  <div>Created 12/10/2019</div>
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

export default CardsList;
