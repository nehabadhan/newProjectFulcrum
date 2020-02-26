import React, { Component } from "react";
import Title from "./Title";
import Column from "./Column";
import pic from "./images/pic.jpg";
import { Link } from 'react-router-dom'

class Description extends Component {
  constructor() {
    super();
    this.state = {
      posts:[
        {
          id: "0",
        description: "Unique ID assigned to Customer across all Premier and Standard Cards",
        usedIn: "Attrition Model Data",
        checked: false,
        uniqueOne: "32453233",
        uniqueTwo: "32453234",
        uniqueThree: "32453235",
        uniqueFour: "32453236",
        uniqueFive: "32453237",
      },
      {
        id: "1",
        description: "Date of Birth",
        usedIn: "Marketing Summary, Customer Analysis",
        checked: true,
        uniqueOne: "19-10-1994",
        uniqueTwo: "12-08-1996",
        uniqueThree: "31-05-1995",
        uniqueFour: "31-12-1989",
        uniqueFive: "21-04-1993",
      },
      {
        id: "2",
        description: "Marital Status Customer",
        usedIn: "Spend Analytics, Marketing Summary",
        checked: false,
        uniqueOne: "M",
        uniqueTwo: "S",
        uniqueThree: "S",
        uniqueFour: "M",
        uniqueFive: "D",
      },
      {
        id: "3",
        description: "Potal Code of Permanent Adress",
        usedIn: "Marketing Summary, Customer Analysis",
        checked: false,
        uniqueOne: "560045",
        uniqueTwo: "281001",
        uniqueThree: "700112",
        uniqueFour: "700112",
        uniqueFive: "700115",
      },
      {
        id: "4",
        description: "Indicates if Self Emplyed or Salaried",
        usedIn: "Marketing Summary, Customer Analysis",
        checked: false,
        uniqueOne: "No",
        uniqueTwo: "No",
        uniqueThree: "Yes",
        uniqueFour: "Yes",
        uniqueFive: "No",
      }
    ]
  }
}

// removePhoto(postRemoved) {
//   console.log(postRemoved.description)

// }

  render() {
    return (
      <div >
        <Title title={"FULCRUM"} />
        {/* <br /> */}
         <div class="transPush"><i class="fa fa-angle-double-left" style={{fontSize:"18px",paddingRight: "5px"}}></i>
        <Link className="push" to="/BackDashboard" style={{color:"white"}}>BACK
        </Link>
        </div>
        {/* <br/> */}
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="container">
                <div class="card">
                  <div class="card-body">
                    <div>View</div>
       
                    <p class="card-title" style={{fontSize: "14px"}}><b>DAILY CARD TRANSACTION SUMMARY</b></p>
                    <i className="fa fa-lock icon" id="iconOne"></i>
                  
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
                          <td>Redshift <i className="fa fa-lock"></i></td>
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
                      This table contans daily transaction aggregates for customer  across the Retail card portfolio for UK Region .
    Transactions summaries include spend amounts , any paid amounts , billing amounts and carryover balances.
    Created this data set primary for Spend Analytics use case.
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
                    <h4 class="card-title" style={{ fontSize: "14px" }}>Table Preview</h4>
                    <table class="table table table-bordered table-striped">
                      <thead class="tableTransform">
                        <tr>
                          <th>Customer Identifier</th>
                          <th>Business Date
                          </th>
                          <th>Card Type
                          </th>
                          <th>Spend Amount
                          </th>
                          <th>Paid Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.posts.map((post, index)=>(
                        <tr>
                          <td><b>Description:</b>{post.description}
                        </td>
                          <td><b>UsedIn:</b>{post.usedIn}
                        </td>
                          <td><b>{post.uniqueOne}</b>
                     </td>
                          <td><b>{post.uniqueTwo}</b></td>
                          <td>   <input
                                  type="checkbox"
                                  // id="defaultChecked2"
                                  // checked
                                /></td>
                              
                        </tr>
                            ))} 
                        {/* <tr>
                          <td><b>Used In:</b>Churn Model Data , Spend Analytics
                        </td>
                          <td><b>Used In:</b> Risk Summary, Spend
                          </td>
                          <td><b>Used In:</b> Spend Analytics, Marketing Summary
                          </td> 
                          <td><b>Used In:</b>Risk Summary, Marketing Summary
                          </td>
                          <td><b>Used In:</b> Risk Summary, Marketing Summary
                          </td>
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
                          <td><b>32453233</b>
                          </td>
                          <td><b>21-12-2019</b>
                          </td>
                          <td><b>Standard</b>
                          </td>
                          <td><b>400</b>
                          </td>
                          <td><b>340</b>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <b>32453234</b>
                          </td>
                          <td><b>21-12-2019</b>
                          </td>
                          <td><b>Premier</b>
                          </td>
                          <td><b>200</b>
                          </td>
                          <td><b>980</b>
                          </td>
                        </tr>
                        <tr>
                          <td><b>32453235</b>
                          </td>
                          <td><b>21-12-2019</b>
                          </td>
                          <td><b>Premier</b>
                          </td>
                          <td><b>700</b>
                          </td>
                          <td><b>990</b>
                          </td>
                        </tr>
                        <tr>
                          <td><b>32453236</b>
                          </td>
                          <td><b>21-12-2019</b>
                          </td>
                          <td><b>Premier</b>
                          </td>
                          <td><b>990</b>
                          </td>
                          <td><b>100</b>
                          </td>
                        </tr> */}
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
      </div>
    );
  }
}

export default Description;
