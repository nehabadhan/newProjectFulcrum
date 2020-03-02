import React, { Component } from "react";
import Column from "./Column";
import pic from "./images/pic.jpg";
import { Link } from "react-router-dom";
import Entity from "./Entityapi";
import Featuredata from "./Featuredata";


function CustomerColumn(props) {
  let send = props;
  return (
      <div class="row">
        <div class="col-sm-9">
      <Entity/>
      <Featuredata/>
      </div>
      <div class="col"><Column /></div>
  
      </div>
  );
}

export default CustomerColumn;
