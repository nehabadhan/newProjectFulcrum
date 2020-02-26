import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import GroupTransformation from "./GroupTransformation";
import Preview from "./Preview";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import axios from 'axios';

function Example(props) {
  if (props.location.aboutProps.name.backButton !== undefined) {
    var dataMap =
      props.location.aboutProps.name.backButton.location.aboutProps.name
        .dataMap;
  } else {
    var x = props.location.aboutProps;
    var tableData = x.name.send.posts;
    var checkData = x.name.send.checkboxMark;

    if (
      x.name.send.cardsValue !== undefined && x.name.send.cardsValue.location.aboutProps!== undefined &&
      x.name.send.cardsValue.location.aboutProps.storage.customerColumnList
        .location.aboutProps.name.logTable.random.location !== undefined
    ) {
      var statusChecked =
        x.name.send.cardsValue.location.aboutProps.storage.customerColumnList
          .location.aboutProps.name.logTable.random.location.aboutProps.load.z;
    }
  }

  if (checkData !== undefined) {
    for (var i = 0; i < checkData.length; i++) {
      if (checkData[i].dbtype == "mongodb") {
        let arraySort = [
          tableData[0].Customer_ID,
          tableData[0].Business_Date,
          tableData[0].Card_Type,
          tableData[0].Spend_Amount,
          tableData[0].Paid_Amount
        ];
        checkData[i].column = arraySort[i];
      } else if (checkData[i].dbtype == "mariadb") {
        let arraySort = [
          tableData[0].Customer_ID,
          tableData[0].DOB,
          tableData[0].Marital_Status,
          tableData[0].Postal_Code,
          tableData[0].Self_Employed
        ];
        checkData[i].column = arraySort[i];
      }
    }
  }

  var arr = [];
  if (checkData !== undefined) {
    for (var i = 0; i < checkData.length; i++) {
      if (checkData[i].isChecked) {
        arr.push({
        //  id: checkData[i].id,
          desc: checkData[i].desc,
          description: checkData[i].description,
        //  usedIn: checkData[i].usedIn,
        isChecked: checkData[i].isChecked,
          dbtype: checkData[i].dbtype,
          table: checkData[i].table,
          column: checkData[i].column,
          colT4mtn: checkData[i].colT4mtn,
        });
      }
      var loadStorage = arr;
    }
  }
  var z = loadStorage;
  if (z !== undefined) {
    var dataMap = [...z];
  }
  if (statusChecked !== undefined) {
    var dataMap = [...z, ...statusChecked];
  }

  var postData = {attributes:[]};
  for(var i=0; i < dataMap.length; i++){
    if(dataMap[i].isChecked){
    postData.attributes.push({
         desc: dataMap[i].desc,
         dbtype: dataMap[i].dbtype,
         table: dataMap[i].table,
         column: dataMap[i].column,
         colT4mtn: dataMap[i].colT4mtn,
      })
    }
//postData.attributes.push(attributes);
  // postData.push(arrobj);
  }

  //console.log(arrObj);


function postDataHandler(){
       axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    .then(response =>{
      console.log(response);
    });
  }
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Title title={"FULCRUM"} />
      <div class="transPush">
        <i
          class="fa fa-angle-double-left"
          style={{ fontSize: "18px", paddingRight: "5px" }}
        ></i>
        <Link
          className="push"
          style={{ color: "white" }}
          to={{
            pathname: "/DailyTransaction",
            aboutProps: {
              load: { z }
            }
          }}
        >
          BACK
        </Link>
      </div>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div>
              <h4 class="card-title" style={{ fontSize: "18px" }}>
                My WorkBench
              </h4>
            </div>
            <div>
              <table class="table table table-bordered table-striped">
                <thead class="tableTransform">
                  <tr>
                    <th>Source</th>
                    <th>Feature</th>
                    <th>Description</th>
                    <th>Sample Values</th>
                    <th>Apply f(x)</th>
                  </tr>
                </thead>
                <tbody>
                  {dataMap.map(check => (
                    <tr>
                      {/* <td>{check.isChecked && check.dbtype}</td>
                      <td>{check.isChecked && check.desc}</td>
                      <td>{check.isChecked && check.description}</td>
                      <td>{check.isChecked && check.column}</td> */}
                      <td>{check.dbtype}</td>
                      <td>{check.desc}</td>
                      <td>{check.description}</td>
                      <td>{check.column}</td>
                      <td>
                        {/* {check.isChecked && ( */}
                          <a href="url" data-toggle="modal" data-target="#flip">
                            f(x)
                          </a>
                        {/* )} */}
                      </td>

                      <Preview />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="button"
              class="transPop"
              data-toggle="modal"
              data-target="#flipFlop"
            >
              Summary f(x)
            </button>
            <GroupTransformation />

            <Link
              className="pop"
              id="buttonAlignOne" 
              onClick={postDataHandler}
              to={{
                pathname: "/saveTransaction",
                aboutProps: {
                  name: { dataMap }
                }
              }}
            >
              View DataSet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
            
}

export default Example;
