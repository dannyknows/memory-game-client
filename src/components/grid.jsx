import React, { Component } from "react";
import Tile from "./tile";

class Grid extends Component {
  render() {
    console.log("here");
    let arr = new Array(16).fill("");
    return (
      <>
        <Tile />
        {arr.map((i) => {
          return <Tile />;
        })}
      </>
    );
  }
}

export default Grid;
