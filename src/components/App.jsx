import React, { Component } from "react";
import "../styles/App.scss";
import Grid from "./grid";
import AllScores from "./AllScores";
import visArray from "./visArray";

class App extends Component {
  constructor() {
    super();
    // array tracking wip
    this.state = { clicks: 0, visArray: [] };
  }

  handleClick = (event) => {
    console.log(event.target.id);
    event.target.style = "background-color: greenyellow";
    console.log(event.target);
    // array tracking wip
    // visArray(event.target, this.setState((s, c)=>{this.setState(s, c)}))
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
        <AllScores />
      </>
    );
  }
}

export default App;
