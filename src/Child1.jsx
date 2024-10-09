import React, { Component } from "react";

export class Child1 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.setState);
  };

  render() {
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <b> {this.state.count}</b>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Child1;
