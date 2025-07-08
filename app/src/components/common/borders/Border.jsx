import React from "react";

const Border = ({
  direction = "top",
  className = "",
  color = "rgba(143,143,143,0.97)",
}) => {
  const baseStyle = {
    background: `linear-gradient(
      ${["top", "bottom"].includes(direction) ? "90deg" : "180deg"},
      rgba(0,0,0,0) 0%,
      ${color} 50%,
      rgba(0,0,0,0) 100%
    )`,
  };

  const positionClass = {
    top: "top-0 left-1/2 w-2/3 h-px -translate-x-1/2",
    bottom: "bottom-0 left-1/2 w-2/3 h-px -translate-x-1/2",
    left: "top-1/2 left-0 h-2/3 w-px -translate-y-1/2",
    right: "top-1/2 right-0 h-2/3 w-px -translate-y-1/2",
  }[direction];

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} ${className}`}
      style={baseStyle}
    />
  );
};

export default Border;
