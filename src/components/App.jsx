import React, { Component } from "react";
import "../styles/App.scss";
import AllScores from "./AllScores";
import Game from "./game";
import Landing from "./landing";

class App extends Component {
  render() {
    return (
      <>
        <Landing />
        <Game />
        <AllScores />
      </>
    );
  }
}

export default App;
