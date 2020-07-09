import React, { Component } from "react";
import "../styles/App.scss";
import Grid from "./grid";

class App extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  handleClick = (tile) => {
    console.log(tile.target.id)
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
      </>
    );
  }
}

export default App;
