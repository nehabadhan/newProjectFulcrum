import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Feature extends React.Component {state = {
  isLoading: true,
  features: [],
  error: null,
  entityID: null
  };
  componentDidMount() {
    fetch('http://9.199.250.92:8080/feature/getFeatureByEntityID/'+this.entityID)
    .then(response => response.json())
    .then(data =>
     this.setState({
     features: data,
     isLoading: false,
  })
    ).catch(error => this.setState({ error, isLoading: false }));
  }
  
  render() {
    var customerColumnList = this.props;
	  //this.entityID = customerColumnList.location.aboutProps.id.entityID;
	  //console.log(this.entityID);
  const { isLoading, features, error } = this.state;

  
  return (
  <React.Fragment>
        
            <div class="container">
              <div class="card">
                <div class="card-body">
  
  {error ? <p>{error.message}</p> : null}
     {!isLoading ? (
       
  <table className="table table table-bordered table-striped" id="tableBorder">
          <thead className="tableTransform">
            <tr>
              {features.map(feature => (
                <th key={feature.featureName} style={{ color: "white" }}>
                  {feature.featureName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["featureTechDescription", "sourceSystem", "sampleValues"].map(
              key => (
                <tr key={key}>
                  {features.map(feature => (
                    <td key={feature.featureName}>{feature[key]}</td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
        ) : (<h3>Loading...</h3>)    
     }
        
  </div>
  </div>
  </div>

  </React.Fragment>
     );
  }
  }
export default Feature;






