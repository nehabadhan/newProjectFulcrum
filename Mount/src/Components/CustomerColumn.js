import React, { Component } from "react";
import Column from "./Column";
import pic from "./images/pic.jpg";
import { Link } from "react-router-dom";
import Example from "./Example";

function CustomerColumn(props) {
  let send = props;
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div>View</div>

                <p class="card-title" style={{ fontSize: "14px" }}>
                  <b>Customer Demography</b>
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

                <table class="table table table-borderless table-size">
                  <thead>
                    <tr>
                      <th style={{ color: "black" }}>Sources</th>
                      <th style={{ color: "black" }}>Grain:</th>
                      <th style={{ color: "black" }}>Frequency:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Mongo DB <img class="cardpics" src={`${require('./images/redshift.png')}`} />
                      </td>
                      <td>Customer Identifier</td>
                      <td>Daily</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead>
                    <tr>
                      <th style={{ color: "black" }}>Dates</th>
                      <th style={{ color: "black" }}>Rates</th>
                      <th style={{ color: "black" }}>Records</th>
                      <th style={{ color: "black" }}>Cache</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          Created: <b>05/12/2019, 15:52</b>
                        </div>
                        <div>
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
                  This table contans daily transaction aggregates for customer
                  across the Retail card portfolio for UK Region . Transactions
                  summaries include spend amounts , any paid amounts , billing
                  amounts and carryover balances. Created this data set primary
                  for Spend Analytics use case.
                </div>
                <br />
                <table class="table table table-borderless  rightSide">
                  <thead>
                    <tr>
                      <th style={{ color: "black" }}>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img class="imgPfl" src={pic} alt="pflpic" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b> Sou Welbing Jr</b>
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
                      <th>Date of Birth</th>
                      <th>Marital Status</th>
                      <th>Postal Code</th>
                      <th>Self Employed or Not</th>
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
                   .map(post => (
                        <tr>
                          <td><b>{post.Customer_ID}</b>
                          </td>
                          <td><b>{post.DOB}</b>
                          </td>
                          <td><b>{post.Marital_Status}</b>
                          </td>
                          <td><b>{post.Postal_Code}</b>
                          </td>
                          <td><b>{post.Self_Employed}</b>
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
          <Column />
        </div>
      </div>
    </div>
  );
}

export default CustomerColumn;
