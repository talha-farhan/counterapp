import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  plus = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  reset = () => {
    this.setState({
      number: 0,
    });
  };

  minus = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div className="container border p-5">
        <h3>Counter App</h3>
        <hr />
        <h1>{this.state.number}</h1>
        <div>
          <button
            className="btn btn-sm bg-success text-light m-2"
            onClick={this.plus}
          >
            Plus
          </button>
          <button
            className="btn btn-sm bg-warning text-light m-2"
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            className="btn btn-sm bg-danger text-light m-2"
            onClick={this.minus}
          >
            Minus
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
