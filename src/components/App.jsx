import React, { Component } from "react";
import "../styles/App.scss";
import Grid from "./grid";
import AllScores from "./AllScores";

class App extends Component {
  constructor() {
    super();
    this.visible = [];
    this.state = { clicks: 1 };
  }

  updateVisibility = (tile) => {
      // if (tile.style === "background-color: blue"){
      // }
  };

  Visibility = (tile) => {
    if (this.visible.length === 2) {
      this.visible.shift();
    }
    this.visible.push({ id: tile.id, element: tile });
    this.updateVisibility();
  };

  handleClick = (event) => {
    console.log(`you've clicked ${this.state.clicks} times`);
    this.Visibility(event.target);
    this.setState((state) => {
      return (state.clicks += 1);
    });
  };

  render() {
    return (
      <>
        <h1>hello world</h1>
        <Grid tileEvent={this.handleClick} />
        <AllScores />
      </>
    );
  }
}

export default App;
