import React, { Component } from "react";
import Title from "./Title";
import LeftBar from "./LeftBar";
import Example from "./Example";
import Description from "./Description";
import DescriptionCustomer from "./DescriptionCustomer";
import DynamicTable from "./DynamicTable";
import CustomerList from "./CustomerList";
import CardsList from "./CardsList";
import AssetList from "./AssetList";
import SnowFlakeList from "./SnowFlakeList";
// import TableColumn from "./TableColumn";
import { Route } from "react-router-dom";

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

        <Route path="/CustomerListScreen" component={CustomerList} />

        <Route path="/CardsListScreen" component={CardsList} />

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
