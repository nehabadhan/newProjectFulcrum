import React, { Component } from "react";
import Title from "./Title";
import Column from "./Column";
import pic from "./images/pic.jpg";
import {Link} from 'react-router-dom'

class DescriptionCustomer extends Component {
  render() {
    return (
        <div>
        <Title title={"FULCRUM"} />
        {/* <br/> */}
        <div class="transPush"><i class="fa fa-angle-double-left" style={{fontSize:"18px",paddingRight: "5px"}}></i>
        <Link className="push" to="/BackDashboard" style={{color:"white"}}>BACK
        </Link>
        </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="container">
              <div class="card">
                <div class="card-body">
                  <div>View</div>
                  <h4 class="card-title" style={{fontSize: "14px"}}><b>CUSTOMER DEMOGRAPHY</b></h4>
                  <i className="fa fa-lock icon" id="iconTwo"></i>
                  {/* <button type="button" class="alignment">
                    Go to Workbench
                  </button> */}
                  <Link className="alignment" to="/AddWorkbench">Go to Workbench</Link>
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
                        <td>Mongo DB <i className="fa fa-database"></i></td>
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
                  <div style={{ fontSize: "12px", width: "60%"}}>
                  Customer Demographics is a comprehensive table for Customer Persona which combines attributes avaiable across source sytems.
Covers all Active Customers across UK Retail Business including card cutomers

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
                        <img class="imgPfl" src={pic} alt="pflpic"/>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <b> Sou Welbing Jr</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 class="card-title" style={{fontSize: "14px"}}>Table Preview</h4>
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
                        <td>
                          <b>Description:</b> Unique ID assigned to Customer across all Premier and Standard Cards
                        </td>
                        <td>
                        <b>Description:</b>Date of Birth
                        </td>
                        <td>
                        <b>Description:</b> Marital Status Customer
                        </td>
                        <td>
                        <b>Description:</b> Potal Code of Permanent Adress
                        </td>
                        <td>
                        <b>Description:</b> Indicates if Self Emplyed or Salaried
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Used In:</b>Attrition Model Data  
                        </td>
                        <td><b>Used In:</b>Marketing  Summary, Customer Analysis </td>
                        <td><b>Used In:</b>Spend Analytics, Marketing Summary</td>
                        <td><b>Used In:</b>Marketing  Summary, Customer Analysis </td>
                        <td><b>Used In:</b> Marketing  Summary, Customer Analysis </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="defaultChecked2"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="defaultChecked2"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td> <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="defaultChecked2"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="defaultChecked2"
                              ></label>
                            </div>
                          </div></td>
                        <td> <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="defaultChecked2"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="defaultChecked2"
                              ></label>
                            </div>
                          </div></td>
                        <td> <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="defaultChecked2"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="defaultChecked2"
                              ></label>
                            </div>
                          </div></td>
                        <td> <div>
                            <b>Add to Workbench</b>
                          </div>
                          <div>
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="defaultChecked2"
                                checked
                              />
                              <label
                                class="custom-control-label"
                                for="defaultChecked2"
                              ></label>
                            </div>
                          </div></td>
                      </tr>
                      <tr> 
                        <td><b>32453233</b></td>
                        <td><b>19-10-1994</b></td>
                        <td><b>M</b></td>
                        <td><b>560045</b></td>
                        <td><b>No</b></td>
                      </tr>
                      <tr>
                        <td><b>32453234</b></td>
                        <td><b>12-08-1996</b></td>
                        <td><b>S</b></td>
                        <td><b>281001</b></td>
                        <td><b>No</b></td>
                      </tr>
                      <tr>
                        <td><b>32453235</b></td>
                        <td><b>31-05-1995</b></td>
                        <td><b>S</b></td>
                        <td><b>700112</b></td>
                        <td><b>Yes</b></td>
                      </tr>
                      <tr>
                        <td><b>32453236</b></td>
                        <td><b>31-12-1989</b></td>
                        <td><b>M</b></td>
                        <td><b>700112</b></td>
                        <td><b>Yes</b></td>
                      </tr>
                      <tr>
                        <td><b>32453237</b></td>
                        <td><b>21-04-1993</b></td>
                        <td><b>D</b></td>
                        <td><b>700115</b></td>
                        <td><b>No</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
           <Column/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default DescriptionCustomer;
