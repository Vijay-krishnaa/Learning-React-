import React, { Component } from "react";

class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      text: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  };

  // handleUsernameChange = (e) => {
  //   this.setState({ username: e.target.value });
  // };

  render() {
    // const { text, username } = this.state;

    return (
      <>
        <h1>Form</h1>
        <input
          type="text"
          id="input"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <h2>Username</h2>
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
      </>
    );
  }
}

export default Form2;
