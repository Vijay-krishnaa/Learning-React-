import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>classprops</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.props.name}</h1>
      </div>
    );
  }
}

export default ClassProps;
