import React, { PureComponent } from "react";
import Tile from "./tile";
// import RandColour from "../randColour";

class Grid extends PureComponent {
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

    function shuffle(array) {
      let counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    }
    tiles = shuffle(tiles.flat(1));

    return (
      <div id="grid" className="container">
        {tiles}
      </div>
    );
  }
}

export default Grid;
