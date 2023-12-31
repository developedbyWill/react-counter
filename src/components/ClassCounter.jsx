import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrease = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase Count</button>
        <button onClick={this.handleDecrease}>Decrease Count</button>
      </div>
    );
  }
}

export default ClassCounter;
