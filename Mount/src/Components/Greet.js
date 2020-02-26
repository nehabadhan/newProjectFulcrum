import React, { Component } from "react";
import RightBar from "./RightBar";
import CustomerList from "./CustomerList";
import CardsList from "./CardsList";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

class Greet extends Component {
  render() {
    const myStyle = {
      borderRadius: "20px",
      margin: "10px",
      paddingLeft: "40px",
      fontSize: "0.9rem"
    };
    var logTable = this.props;
    function clickHandler() {
      alert("Button click");
    }

    return (
      <form>
        <div class="input-group">
          <input
            id="search"
            type="search"
            class="form-control"
            style={myStyle}
            name="search"
            placeholder="Search Datasets, Features, People"
          />
          <i
            class="fa fa-search"
            style={{ position: "absolute", margin: "23px" }}
          ></i>
        </div>

        <div class="card box-border" id="middle">
          <div class="card-header">Discover by Domain</div>
          <div class="card-body">
            <div class="">
              <div class="card-deck">
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <div>
                      <img
                        class="cardpics"
                        src={`${require("./images/customers03.png")}`}
                      />
                    </div>
                    <Link
                      className="addIcon card-text green-color"
                      to={{
                        pathname: "/CustomerListScreen",
                        aboutProps: {
                          name: { logTable }
                        }
                      }}
                    >
                      Customers
                    </Link>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <div>
                      <img
                        class="cardpics"
                        src={`${require("./images/cards 02.png")}`}
                      />
                    </div>
                    <Link
                      className="addIcon card-text green-color"
                      to={{
                        pathname: "/CardsListScreen",
                        aboutProps: {
                          name: { logTable }
                        }
                      }}
                    >
                      Cards
                    </Link>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <div>
                      <img
                        class="cardpics"
                        src={`${require("./images/mortgage 02.png")}`}
                      />
                    </div>
                    <p onClick={clickHandler} class="card-text green-color">
                      Mortgages
                    </p>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Current & Savings Accounts 02.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text green-color">
                      Current and Saving Accounts
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/loans 01.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text green-color">
                      Loans
                    </p>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Transactions 02.png")}`}
                    />
                    <p class="card-text green-color" onClick={clickHandler}>
                      Transaction Categorization
                    </p>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics1"
                      src={`${require("./images/Channel interactions 03.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text green-color">
                      Channel Interactions
                    </p>
                  </div>
                </div>
                <div class="col card green-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Customer Journey 01.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text green-color">
                      Customer Journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card box-border" id="middle">
          <div class="card-header">Discover by Function</div>
          <div class="card-body">
            <div class="">
              <div class="card-deck" id="centerShift">
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Asset and Liability Management 01.png")}`}
                    />
                    <br />
                    <p class="card-text">
                      <Link
                        className="addIcon card-text orange-color"
                        to="/AssetListScreen"
                      >
                        Asset and Liability Management
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Profitability 03.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text orange-color">
                      Profitability
                    </p>
                  </div>
                </div>
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Risk Management 02.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text orange-color">
                      Risk Management
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Regulatory Compliance 02.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text orange-color">
                      Regulatory Compliance
                    </p>
                  </div>
                </div>
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Relationship Management 03.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text orange-color">
                      Relationship Management
                    </p>
                  </div>
                </div>
                <div class="col card orange-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Investment Management 01.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text orange-color">
                      Investment Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card box-border" id="middle">
          <div class="card-header">Discover by Source Type</div>
          <div class="card-body">
            <div class="container">
              <div class="card-deck" id="centerShift">
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/snowflake.png")}`}
                    />
                    <br />
                    <p class="card-text blue-color">
                      <Link
                        className="addIcon blue-color"
                        to="/SnowFlakeListScreen"
                      >
                        Snow Flake DB
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/redshift.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text blue-color">
                      AWS Redshift
                    </p>
                  </div>
                </div>
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/bigquery.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text blue-color">
                      Google Big Query
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div class="card-deck" id="shift">
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/Apache_Hive_logo.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text blue-color">
                      Hive
                    </p>
                  </div>
                </div>
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/kafka.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text blue-color">
                      Kafka
                    </p>
                  </div>
                </div>
                <div class="card blue-card-style">
                  <div class="card-body text-center" id="alignmentCenter">
                    <img
                      class="cardpics"
                      src={`${require("./images/s3.png")}`}
                    />
                    <p onClick={clickHandler} class="card-text blue-color">
                      AWS S3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Greet;
