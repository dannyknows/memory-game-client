import React, { Component } from "react";
import "../styles/App.scss";
import Grid from "./grid";
import AllScores from "./AllScores";

class App extends Component {
  constructor() {
    super();
    this.state = { clicks: 0, visible: [] };
  }
  visArray = (tileId) => {
    console.log("in vis array");
    this.setState((s) => {
      if (s.visible.length === 2) {
        s.visible.shift();
        s.visible.push(tileId);
      } else {
        s.visible.push(tileId);
      }
    });
    console.log(this.state.visible);
  };

  handleClick = (event) => {
    console.log(event.target.id);
    event.target.style = "background-color: greenyellow";
    console.log(event.target);
    this.visArray(event.target.id);
    this.setState((state) => {
      return (state.clicks += 1);
    });
  };

  render() {
    console.log(this.state);
    console.log("in render");
    return (
      <>
        <h1>hello world</h1>
        <Grid tileEvent={this.handleClick} />
        <AllScores/>
      </>
    );
  }
}

export default App;
