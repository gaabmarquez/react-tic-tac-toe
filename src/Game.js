import React, { Component } from "react";
import "./App.css";
import Board from "./Board";
class Game extends Component {
  constructor(props) {
    super(props);

    this.checkForMatches = this.checkForMatches.bind(this);
  }
  isFinish = false;
  players = ["X", "O"];
  initialValue = ":D";
  state = {
    currentPlayer: this.players[0],
    xWins: 0,
    oWins: 0,
    ties: 0,
    winner: undefined
  };

  resetGame = () => {
    this.setState({
      ...this.state,
      currentPlayer: this.players[0],
      winner: undefined
    });
  };
  updatePlayer = () => {
    this.setState({
      ...this.state,
      currentPlayer:
        this.state.currentPlayer === this.players[0]
          ? this.players[1]
          : this.players[0]
    });
  };

  checkForWinner = squares => {
    //check horizontal
    this.checkForMatches(squares[0], squares[1], squares[2]);
    this.checkForMatches(squares[3], squares[4], squares[5]);
    this.checkForMatches(squares[6], squares[7], squares[8]);

    //check vertical
    this.checkForMatches(squares[0], squares[3], squares[6]);
    this.checkForMatches(squares[1], squares[4], squares[7]);
    this.checkForMatches(squares[2], squares[5], squares[8]);

    //check diagonal
    this.checkForMatches(squares[0], squares[4], squares[8]);
    this.checkForMatches(squares[2], squares[4], squares[6]);


    if (!this.state.winner) {
      let clickedCounter = 0;
      for(let square of squares) {
        if (square !== this.initialValue) clickedCounter++;
      }
      if (clickedCounter === 9) {
        // tied
       let  ties = 1 + this.state.ties;
        this.setState({
          ...this.state,
          currentPlayer: this.players[0],
          ties: ties,
          winner: "Tie"
        });
      }
    }
  };

  checkForMatches(firstValue, secondValue, thirdValue) {
    if (
      firstValue === secondValue &&
      secondValue === thirdValue &&
      thirdValue !== this.initialValue
    ) {
      this.processWinning(firstValue);
    }
  }

  processWinning = winner => {
    if (winner === this.players[0]) {
      let xWins = 1 + this.state.xWins;
      this.setState({
        ...this.state,
        currentPlayer: this.players[0],
        xWins: xWins,
        winner: "The winner is " + winner
      });
    } else {
      let oWins = 1 + this.state.oWins;
      this.setState({
        ...this.state,
        currentPlayer: this.players[0],
        oWins: oWins,
        winner: "The winner is " + winner
      });
    }
  };
  render() {
    return (
      <div className="row game">
        <div className="col-md-4">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="card">
            <div className="card-body  text-center">
              <h5 className="card-title">Current Player:</h5>
              <h1 className={this.state.currentPlayer + "-player text-center"}>
                {this.state.currentPlayer}
              </h1>
            </div>
          </div>
          <br />

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Stats</h5>
              <h6 className="card-subtitle mb-2 text-muted">The mega stats</h6>
              <span>
                <h6>
                  X wins <span className="c-player">{this.state.xWins} </span>
                </h6>
              </span>
              <span>
                <h6>
                  O wins <span className="c-player">{this.state.oWins} </span>
                </h6>
              </span>

              <span>
                <h6>
                  Ties <span className="c-player">{this.state.ties} </span>
                </h6>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-center">
            <h1> TIC TAC TOE</h1>
            <h5>- The Game -</h5>
          </div>
          <div
            className="d-flex justify-content-center"
            disabled={this.isFinish}
          >
            <Board
              className="board"
              player={this.state.currentPlayer}
              updatePlayer={this.updatePlayer}
              initialValue={this.initialValue}
              checkForWinner={this.checkForWinner}
              winner={this.state.winner}
              resetGame={this.resetGame}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
