import React, { Component } from "react";

export class Child1 extends Component {
  constructor() {
    super();
    this.count = 0;
  }
  increment = () => {
    this.count = this.count + 1;
  };
  decrement = () => {
    this.count = this.count - 1;
  };
  render() {
    return (
      <>
        <button onClick={this.increment}></button>
        <b>{this.count}</b>
        <button onClick={this.decrement}></button>
      </>
    );
  }
}

export default Child1;
