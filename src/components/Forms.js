import React, { Component } from "react";
import "./Stylesheet.css";

export class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      email: " ",
      contact: " ",
      message: " ",
      gender: " ",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleContactChange = (event) => {
    this.setState({
      contact: event.target.value,
    });
  };
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };
  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      username: " ",
      email: " ",
      contact: " ",
      message: " ",
      gender: " ",
    });
    event.preventDefault();
  };
  render() {
    return (
      <form className="header" onSubmit={this.handleSubmit}>
        <div>
          <label className="primary">Name :</label>

          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div>
            <label className="primary">E-mail :</label>
          </div>

          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="xyz@gmail.com "
            />
          </div>

          <div>
            <label className="primary">Contact Number :</label>
          </div>

          <div>
            <input
              type="tel"
              value={this.state.contact}
              onChange={this.handleContactChange}
            />
          </div>

          <div>
            <label className="primary">Message :</label>
          </div>

          <div>
            <textarea
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
          </div>
        </div>
        <div>
          <label className="primary">Gender :</label>
        </div>
        <select onChange={this.genderhandler} defaultValue="Select Gender">
          <option defaultValue>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Forms;
