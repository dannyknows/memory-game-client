import React, { Component } from "react";
import Grid from "./game components/grid";

class Game extends Component {
  constructor() {
    super();
    this.visible = [];
    this.state = { clicks: 1 };
  }

  pairCheck = () => {
    if (this.visible.length === 2) {
      if (this.visible[0].id === this.visible[1].id) {
        console.log("victory");
      }
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

  render() { return <Grid tileEvent={this.handleClick} />}
}

export default Game;
