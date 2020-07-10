import React, { useState } from "react";

const Tile = (props) => {
  const [colour, setColour] = useState(props.colour);
  const { pairId } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "150px",
        backgroundColor: "red",
      }}
      onClick={props.event}
      id={pairId}
      className="tile"
    ></div>
  );
};

export default Tile;
