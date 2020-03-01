import React, { Component } from 'react';
import ReactDOM  from 'react-dom';

class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch('http://localhost:8080/featureGroup/getAll')
      .then(response => response.json())
   
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {

    const { isLoading, users, error } = this.state;

    return (
      <React.Fragment>
      <div class="card box-border" id="middle">
    <div class="card-header">Discover by Domain</div> 
    <div class="card-body">
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, groupName, groupcategory } = user; 
            return (
      
              user.groupcategory === 'Domain' ? 
              <div class="col col-md-3 card2 green-card-style" >
              <div key={username} class="icon-tab">
              <div class={groupName} id="alignmentCenter"> </div>
                   <a id={groupName} class="icon-tab-text addIcon card-text green-color"> {groupName}
                   </a>           
     

 
          
                </div>
              </div> : null
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}    </div></div>
      </React.Fragment>
    );
 }
}


ReactDOM.render(<App />, document.getElementById("root1"));