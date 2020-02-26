import React, { Component } from "react";
import Title from "./Title";
import Column from "./Column";
import CustomerColumn from "./CustomerColumn";
import pic from "./images/pic.jpg";
import { Link } from "react-router-dom";
import data from "./data.json";

class DescriptionCustomer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [...data],
      checkbox: [
        {
          id: "1",
          table: "demographics",
          desc: "Customer Identifier",
          description:
            "Unique ID assigned to Customer across all Premier and Standard Cards",
          usedIn: "Attrition Model Data",
          isChecked: false,
          dbtype: "mariadb",
          columnValue: "Customer_Id",
          colT4mtn: "NA"
        },
        {
          id: "2",
          table: "demographics",
          desc: "Date of Birth",
          description: "Date of Birth",
          usedIn: "Marketing  Summary, Customer Analysis",
          isChecked: false,
          dbtype: "mariadb",
          columnValue: "DOB",
          colT4mtn: "NA"
        },
        {
          id: "3",
          table: "demographics",
          desc: "Marital Status",
          description: "Marital Status Customer",
          usedIn: "Spend Analytics, Marketing Summary",
          isChecked: false,
          dbtype: "mariadb",
          columnValue: "Marital_Status",
          colT4mtn: "NA"
        },
        {
          id: "4",
          table: "demographics",
          desc: "Postal Code",
          description: "Postal Code of Permanent Address",
          usedIn: "Marketing  Summary, Customer Analysis",
          isChecked: false,
          dbtype: "mariadb",
          columnValue: "Postal_Code",
          colT4mtn: "NA"
        },
        {
          id: "5",
          table: "demographics",
          desc: "Self Employed or Not",
          description: "Indicates if Self Employed or Salaried",
          usedIn: "Marketing  Summary, Customer Analysis",
          isChecked: false,
          dbtype: "mariadb",
          columnValue: "Self_Employed",
          colT4mtn: "NA"
        }
      ]
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(postRemoved, e) {
    let checkbox = this.state.checkbox;
    postRemoved.isChecked = e.target.checked;
    this.setState({ checkbox });
  }

  render() {
    return (
      <div>
        <Title title={"FULCRUM"} />
        <div class="transPush">
          <i
            class="fa fa-angle-double-left"
            style={{ fontSize: "18px", paddingRight: "5px" }}
          ></i>
          <Link className="push" to="/BackDashboard" style={{ color: "white" }}>
            BACK
          </Link>
        </div>
        <CustomerColumn
          posts={this.state.posts}
          checkboxMark={this.state.checkbox}
          onRemovePhoto={this.handleChecked}
          cardsValue={this.props}
        />
      </div>
    );
  }
}

export default DescriptionCustomer;
