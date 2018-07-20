import React, { Component } from "react";
import "./App.css";
import Form from "./userInput";
import Users from "./displayUsers";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      users: [],
      disabled: false
    };
  }
  handleChanges = value => {
    this.setState({
      value: value
    });
  };

  handleSubmits = () => {
    const url = "https://api.github.com/users/" + this.state.value;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        if (!myJson.hasOwnProperty("message")) {
          document.getElementById("userNotFound").innerHTML = "";
          this.setState(prevState => ({
            value: "",
            users: Array.from(
              new Set([...prevState.users, myJson].map(JSON.stringify))
            ).map(JSON.parse)
          }));
        } else {
          if (myJson.message.startsWith("API rate limit exceeded ")) {
            document.getElementById("userNotFound").innerHTML =
              myJson.message + "Input field has been disabled";
            this.setState(prevState => ({
              value: "",
              disabled: true
            }));
          } else {
            document.getElementById(
              "userNotFound"
            ).innerHTML = `No git hub account for " ${this.state.value} "`;
            this.setState(prevState => ({
              value: ""
            }));
          }
        }
      });
  };
  render() {
    return (
      <div className="App">
        <Form
          disabled={this.state.disabled}
          value={this.state.value}
          handleSubmits={this.handleSubmits}
          handleChanges={this.handleChanges}
        />{" "}
        <Users usersInfo={this.state.users} />{" "}
      </div>
    );
  }
}

export default App;
