import React, { Component } from "react";
import Tile from "./tile";

class Grid extends Component {
  render() {
    const randCol = () => {
      let arr = ["", "", ""];
      arr = arr.map((i) => {
        // for each index in arr fill with random hex number
        return Math.floor(Math.random() * (255 - 0 + 1) + 0).toString(16);
      });
      // return string #AABBCC hex code format
      return `#${arr.join("")}`;
    };
    let arr = new Array(8).fill("");
    arr = arr.map((n, i) => {
      let tmp = ["", ""];
      let col = randCol();
      return tmp.map(() => {
        return <Tile colour={col} pairId={i} />;
      });
    });
    return <>{arr}</>;
  }
}

export default Grid;
