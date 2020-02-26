import React, { Component } from "react";
import Title from "./Title";
import Column from "./Column";
import TableColumn from "./TableColumn";
import pic from "./images/pic.jpg";
import { Link } from "react-router-dom";
import data from "./data.json";

class Description extends Component {
  constructor() {
    super();
    this.state = {
      posts: [...data],
      checkbox: [
        {
          id: "1",
          table: "cards",
          desc: "Customer Identifier",
          description:
            "Unique ID assigned to Customer across all Premier and Standard Cards",
          usedIn: "Churn Model Data , Spend Analytics",
          isChecked: false,
          dbtype: "snowflake",
          columnValue: "Customer_ID",
          colT4mtn: "NA"
        },
        {
          id: "2",
          table: "cards",
          desc: "Business Date",
          description: "Date of Transactions",
          usedIn: "Risk Summary, Spend",
          isChecked: false,
          dbtype: "snowflake",
          columnValue: "Business_Date",
          colT4mtn: "NA"
        },
        {
          id: "3",
          table: "cards",
          desc: "Card Type",
          description: "Indicates variant of card product Standard or Premium",
          usedIn: "Spend Analytics, Marketing Summary",
          isChecked: false,
          dbtype: "snowflake",
          columnValue: "Card_Type",
          colT4mtn: "NA"
        },
        {
          id: "4",
          table: "cards",
          desc: "Spend Amount",
          description: "Amount spent from the Card",
          usedIn: "Risk Summary, Marketing Summary",
          isChecked: false,
          dbtype: "snowflake",
          columnValue: "Spend_Amount",
          colT4mtn: "NA"
        },
        {
          id: "5",
          table: "cards",
          desc: "Paid Amount",
          description: "Any payments received for the Card",
          usedIn: "Risk Summary, Marketing Summary",
          isChecked: false,
          dbtype: "snowflake",
          columnValue: "Paid_Amount",
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
        <TableColumn
          posts={this.state.posts}
          checkboxMark={this.state.checkbox}
          onRemovePhoto={this.handleChecked}
          cardsValue={this.props}
        />
      </div>
    );
  }
}

export default Description;
