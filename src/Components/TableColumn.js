import React, { Component } from "react";
import CardRightBar from "./CardRightBar";
import pic from "./images/faces women 02.png";
import { Link } from "react-router-dom";
import Example from "./Example";

function TableColumn(props) {
let send = props;
  let x = props;

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div>View</div>

                <p class="card-title" style={{ fontSize: "14px" }}>
                  <b>DAILY CARD TRANSACTION SUMMARY</b>
                </p>

                <Link
                  className="alignment"
                  to={{
                    pathname: "/AddWorkbench",
                    aboutProps: {
                      name: { send }
                    }
                  }}
                >
                  Go to Workbench
                </Link>

                <table class="table table table-borderless table-size" id="cardstable">
                  <thead class="first">
                    <tr>
                      <th style={{ color: "black" }}>Sources</th>
                      <th style={{ color: "black" }}>Grain:</th>
                      <th style={{ color: "black" }}>Frequency:</th>
                    </tr>
                  </thead>
                  <tbody class="firstbody">
                    <tr>
                      <td>
                      SnowFlake <img class="snowcard" src={`${require('./images/snowflake.png')}`} />
                      </td>
                      <td>Customer Identifier</td>
                      <td>Daily</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead class="second">
                    <tr>
                      <th style={{ color: "black" }}>Dates</th>
                      <th style={{ color: "black" }}>Rates</th>
                      <th style={{ color: "black" }}>Records</th>
                      <th style={{ color: "black" }}>Cache</th>
                    </tr>
                  </thead>
                  <tbody class="secondbody">
                    <tr>
                      <td>
                        <div style={{paddingRight: "56px"}}>
                  Created: <b>05/12/2019, 15:52</b>
                        </div>
                        <div style={{paddingRight:"30px"}}>
                          Last Modified: <b>Yesterday, 15:50</b>
                        </div>
                      </td>
                      <td>
                        <div>
                          Last: <b>02/05/2019, 16:00</b>
                        </div>
                        <div>
                          Next: <b>06/05/2019, 16:00</b>
                        </div>
                      </td>
                      <td>100020</td>
                      <td style={{ color: "green" }}>Active</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ fontSize: "12px", width: "60%" }}>
                  This table contains daily transaction aggregates for customer
                  across the Retail card portfolio for UK Region . Transactions
                  summaries include spend amounts , any paid amounts , billing
                  amounts and carryover balances. Created this data set primary
                  for Spend Analytics use case.
                </div>
                <br />
                <table class="table table table-borderless  rightSide">
                  {/* <thead>
                    <tr>
                      <th style={{ color: "black" }}>Owner</th>
                    </tr>
                  </thead> */}
                  <tbody>
                    <tr>
                      <td>
                        <b style={{ marginRight: "-50px", fontSize: "14px" }}>
                          {" "}
                          Owner
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          class="imgPfl"
                          src={pic}
                          alt="pflpic"
                          style={{ marginRight: "-50px" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b style={{ marginRight: "-50px" }}>Ricky</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4 class="card-title" style={{ fontSize: "14px" }}>
                  Table Preview
                </h4>
                <table class="table table table-bordered table-striped">
                  <thead class="tableTransform">
                     <tr>
                      <th>Customer Identifier</th>
                      <th>Business Date</th>
                      <th>Card Type</th>
                      <th>Spend Amount</th>
                      <th>Paid Amount</th>
                    </tr>
                  </thead>
                   <tbody>
                        <tr>
                        {props.checkboxMark.map(check => (
                           <td><b>Description:</b>{check.description}
                        </td>
                          ))}
                         </tr>
                         
                              <tr>
                              {props.checkboxMark.map(check => (
                           <td><b>Used In:</b>{check.usedIn}
                         </td>
                           ))}
                         </tr>

                         <tr>
                         {props.checkboxMark.map(check => (
                         <td>
                          {" "}
                          <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="check">
                              <input
                                type="checkbox"
                                onChange={e => {
                                  props.onRemovePhoto(check,e);
                                }}
                              />
                            </div>
                          </div>
                        </td>
                          ))}
                      
                         </tr>
                   {props.posts
                   .slice(0,6)
                   .map(post =>(
                        <tr>
                          <td><b>{post.Customer_ID}</b>
                          </td>
                          <td><b>{post.Business_Date}</b>
                          </td>
                          <td><b>{post.Card_Type}</b>
                          </td>
                          <td><b>{post.Spend_Amount}</b>
                          </td>
                          <td><b>{post.Paid_Amount}</b>
                          </td>
                        </tr>
                      
                        ))}
                      </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <CardRightBar />
        </div>
      </div>
    </div>
  );
}

export default TableColumn;
