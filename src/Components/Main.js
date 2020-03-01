import React, { Component } from "react";
import LeftBar from "./LeftBar";
import Example from "./Example";
import Description from "./Description";
import DescriptionCustomer from "./DescriptionCustomer";
import DynamicTable from "./DynamicTable";
import CustomerList from "./CustomerList";
import CardsList from "./CardsList";
import AssetList from "./AssetList";
import MariaList from "./MariaList";
import SnowFlakeList from "./SnowFlakeList";
import { Route } from "react-router-dom";
import Title from "./Title";

class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"FULCRUM"} Icon="f50b" />

              <LeftBar />
            </div>
          )}
        />

        <Route path="/AddTransform" component={Description} />


        <Route path="/Customers" component={CustomerList} />

<Route path="/Cards" component={CardsList} />

        <Route
          path="/AssetListScreen"
          render={() => (
            <div>
              <AssetList />
            </div>
          )}
        />
        <Route
          path="/SnowFlakeListScreen"
          render={() => (
            <div>
              <SnowFlakeList />
            </div>
          )}
        />
         <Route path="/MariaListScreen" component={MariaList} />

        <Route path="/AddOverviewScreen" component={DescriptionCustomer} />

        <Route path="/AddWorkbench" component={Example} />

        <Route path="/saveTransaction" component={DynamicTable} />

        <Route path="/Financial" component={Example} />

        <Route
          path="/BackDashboard"
          render={() => (
            <div>
              <Title title={"FULCRUM"} />
              <LeftBar />
            </div>
          )}
        />

        <Route path="/DailyTransaction" component={LeftBar} />
      </div>
    );
  }
}

export default Main;
