import React, { Component } from "react";
import "./App.css";
import Square from "./Square";

class Board extends Component {
  state = {
    squares: Array(9).fill(this.props.initialValue)
  };

  updateValue(index) {
    if (!this.props.winner) {
      const squares = this.state.squares.slice();
      squares[index] = this.props.player;
      this.setState({ squares: squares });
      this.props.updatePlayer();
      this.props.checkForWinner(squares);
    }
  }
  reset = () => {
    this.setState({ squares: Array(9).fill(this.props.initialValue) });
    this.props.resetGame();
  };

  render() {
    return (
      <div>
      <button className="btn btn-success reset-button" onClick={this.reset}>
          reset
        </button>
        <div className="flex">
          <Square
            value={this.state.squares[0]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(0)}
          />
          <Square
            value={this.state.squares[1]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(1)}
          />{" "}
          <Square
            value={this.state.squares[2]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(2)}
          />
        </div>
        <div className="flex">
          <Square
            value={this.state.squares[3]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(3)}
          />{" "}
          <Square
            value={this.state.squares[4]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(4)}
          />{" "}
          <Square
            value={this.state.squares[5]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(5)}
          />
        </div>

        <div className="flex">
          <Square
            value={this.state.squares[6]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(6)}
          />

          <Square
            value={this.state.squares[7]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(7)}
          />

          <Square
            value={this.state.squares[8]}
            initialValue={this.props.initialValue}
            updateSquare={() => this.updateValue(8)}
          />
        </div>
        <br />
        <br />
        {this.props.winner ? (
          <div>
            <h3 className={this.props.winner + "-player"}>

            {this.props.winner}
            </h3>
          </div>
        ) : null}


      </div>
    );
  }
}

export default Board;
