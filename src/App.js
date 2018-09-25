import React, { Component } from "react";
import "./App.css";
import Game from "./Game";

class App extends Component {
  state = {
    title: "Welcome to this"
  };


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-md-8 offset-md-2 ">
              <Game />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
