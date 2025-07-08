import React from "react";
import FullBorder from "./FullBorder";

const AllDirectionsFullBorder = () => {
  return (
    <div>
      <FullBorder direction="top" />
      <FullBorder direction="right" />
      <FullBorder direction="bottom" />
      <FullBorder direction="left" />
    </div>
  );
};

export default AllDirectionsFullBorder;
