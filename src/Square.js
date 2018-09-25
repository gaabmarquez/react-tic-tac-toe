import React, { Component } from "react";
import "./App.css";

class Square extends Component {
  render() {
    return (
      <div className="min-w-20 c-square" onClick={this.props.updateSquare}>
        <h1
          className={
            this.props.value === this.props.initialValue
              ? "initial"
              : this.props.value + "-player"
          }
        >
          {this.props.value}
        </h1>
      </div>
    );
  }
}

export default Square;
