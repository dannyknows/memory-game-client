import React, { Component } from "react";
import Grid from "./game components/grid";

class Game extends Component {
  constructor() {
    super();
    this.visible = [];
    this.state = { clicks: 1, pairs: 0, name: "player" };
  }

  pairCheck = () => {
    if (this.visible.length === 2) {
      if (this.visible[0].id === this.visible[1].id && this.state.pairs < 8) {
        this.state.pairs += 1;
        console.log("pair count is  " + this.state.pairs);
      } else if (this.state.pairs === 8) {
        this.gameEnd();
      }
    }
  };

  gameEnd = () => {
    if (this.state.pairs === 8) {
      console.log("well done you got all 8 pairs in clicks:" + this.state.clicks);
    }
  };

  updateVisibility = (tile) => {
    if (tile.style["background-color"] === "blue") {
      tile.style = "background-color: pink";
    } else {
      tile.style = "background-color: blue";
    }
  };

  Visibility = (tile) => {
    if (this.visible.length === 2) {
      this.updateVisibility(this.visible[0].element);
      this.visible.shift();
    }
    this.visible.push({ id: tile.id, element: tile });
    this.updateVisibility(tile);
  };

  handleClick = (event) => {
    console.log(`you've clicked ${this.state.clicks} times`);
    this.Visibility(event.target);
    this.setState((state) => {
      return (state.clicks += 1);
    });
    this.pairCheck();
  };

  render() {
    return (
      <>
        {" "}
        <Grid tileEvent={this.handleClick} />
        <div className="scoreBox">
          {" "}
          <h2>clicks:{this.state.clicks}</h2>
        </div>{" "}
        <div className="scorePairs">
          {" "}
          <h2>pairs:{this.state.pairs}</h2>
        </div>
        <div className="container">
          <h1>What's your name??</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={this.onInputChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}

export default Game;
