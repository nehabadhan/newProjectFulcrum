import React, { Component } from "react";
import Title from "./Title";
import LeftBar from "./LeftBar";
import Example from "./Example";
import Description from "./Description";
import DescriptionCustomer from "./DescriptionCustomer";
import SaveColumn from "./SaveColumn";
import CustomerList from './CustomerList'
import CardsList from './CardsList'
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
              <Title title={"FULCRUM"} />
              <LeftBar />
            </div>
          )}
        />

        {/* <Route
          path="/AddTransform"
          render={() => (
            <div>
              <Example />
            </div>
          )}
        /> */}

<Route
          path="/AddTransform"
          render={() => (
            <div>
              <Description />
              {/* <DescriptionCustomer /> */}
            </div>
          )}
        />
        <Route
          path="/CustomerListScreen"
          render={() => (
            <div>
              <CustomerList />
              {/* <DescriptionCustomer /> */}
            </div>
          )}
        />
         <Route
          path="/CardsListScreen"
          render={() => (
            <div>
              <CardsList />
              {/* <DescriptionCustomer /> */}
            </div>
          )}
        />
        <Route
          path="/AddOverviewScreen"
          render={() => (
            <div>
              <DescriptionCustomer />
            </div>
          )}
        />
<Route
          path="/AddWorkbench"
          render={() => (
            <div>
              <Example />
            </div>
          )}
        />

<Route
          path="/saveTransaction"
          render={() => (
            <div>
              <SaveColumn />
            </div>
          )}
        />

<Route
          path="/Financial"
          render={() => (
            <div>
              <Example />
            </div>
          )}
        />

<Route
          path="/BackDashboard"
          render={() => (
            <div>
                 <Title title={"FULCRUM"} />
               <LeftBar />
            </div>
          )}
        />

        
<Route
          path="/DailyTransaction"
          render={() => (
            <div>
                    <Title title={"FULCRUM"} />
              <LeftBar />
            </div>
          )}
        />
        
      </div>
    );
  }
}

export default Main;
