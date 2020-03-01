import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import Preview from "./Preview";
import Remove from "./Remove";
import AddList from "./AddList";

class CardsList extends Component {
  constructor() {
    super();
    this.state = {
      requiredModal: 0,
      personalCheck: [
        {
          name: "Daemon",
          designation: "Software Developer",
          salary: "200000"
        },
        {
          name: "Stephen",
          designation: "Manager",
          salary: "1000000"
        },
        {
          name: "Jeremy",
          designation: "Senior Developer",
          salary: "8000000"
        }
      ]
    };

    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.deleteModalDetails = this.deleteModalDetails.bind(this);
    this.addModalDetails = this.addModalDetails.bind(this);
  }

  clickHandler(index) {
    this.setState({
      requiredModal: index
    });
  }

  deleteHandler(index) {
    this.setState({
      requiredModal: index
    });
  }

  deleteModalDetails(index) {
    let personalDesign = this.state.personalCheck;
    personalDesign.splice(index, 1);
    this.setState({
      personalCheck: personalDesign
    });
  }

  saveModalDetails(item) {
    const requiredModal = this.state.requiredModal;
    let personalDesign = this.state.personalCheck;
    personalDesign[requiredModal] = item;
    this.setState({
      personalCheck: personalDesign
    });
  }

  addModalDetails(add) {
    const requiredModal = this.state.requiredModal;
    let personalDesign = this.state.personalCheck;
    personalDesign.push(add);
    this.setState({
      personalCheck: personalDesign
    });
  }

  render() {
    let posts = this.state.personalCheck;
    console.log(posts);
    const requiredModal = this.state.requiredModal;
    let modalData = this.state.personalCheck[requiredModal];
    console.log(modalData);

    let remove = this.state.requiredModal;

    return (
      <div>
        <Title title={"Editable form for Personal Details"} />
        <br />
        <div class="container">
          <p style={{ fontSize: "14px", marginBottom: "-10px" }}>
            <b>Personal Information</b>
          </p>
          <table class="table table-bordered table-secondary" id="tableBorder">
            <thead>
              <tr>
                <th
                  style={{ color: "black", backgroundColor: "cornflowerblue" }}
                >
                  Name
                </th>
                <th
                  style={{ color: "black", backgroundColor: "cornflowerblue" }}
                >
                  Designation
                </th>
                <th
                  style={{ color: "black", backgroundColor: "cornflowerblue" }}
                >
                  Salary
                </th>
                <th
                  style={{ color: "black", backgroundColor: "cornflowerblue" }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr class="round3" key={index}>
                  <td>{post.name}</td>
                  <td>{post.designation}</td>
                  <td>{post.salary}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => this.clickHandler(index)}
                      class="btn btn-warning"
                      data-toggle="modal"
                      data-target="#flip"
                      style={{ margin: "10px" }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => this.deleteHandler(index)}
                      class="btn btn-info"
                      data-toggle="modal"
                      data-target="#pop"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      //  onClick={() => this.clickHandler(index)}
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#add"
                      style={{ margin: "10px" }}
                    >
                      Add new list
                    </button>
                  </td>
                  <Preview
                    greet={modalData}
                    saveModalDetails={this.saveModalDetails}
                  />
                  <Remove
                    deleteGreet={remove}
                    deleteModalDetails={this.deleteModalDetails}
                  />
                  <AddList addModalDetails={this.addModalDetails} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardsList;
