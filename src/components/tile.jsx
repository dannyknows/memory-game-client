import React from "react";

const Tile = (props) => {
  const { colour } = props;
  return (
    <div style={{ "background-color": colour }} className="tile">
    </div>
  );
};

export default Tile;
