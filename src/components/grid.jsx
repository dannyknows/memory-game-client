import React, { Component } from "react";
import Tile from "./tile";
import RandColour from "./randColour";
class Grid extends Component {

  render() {
    let tiles = new Array(8).fill("");
    // create tile pairs
    tiles = tiles.map((n, i) => {
      // const col = RandColour;
      // TODO fix unique colour rendering
      return ["", ""].map(() => {
        return <Tile colour={"pink"} pairId={i + 1} event={this.props.tileEvent} />;
      });
    });

    return (
      <div id="grid" className="container">
        {tiles}
      </div>
    );
  }
}

export default Grid;
