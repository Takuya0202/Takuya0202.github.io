import React from "react";

const FullBorder = ({
  direction = "top",
  className = "",
  color = "rgba(143,143,143,0.97)",
}) => {
  const baseStyle = {
    background: `linear-gradient(
        ${["top", "bottom"].includes(direction) ? "90deg" : "180deg"},
        rgba(143,143,143,0.1) 0%,
        rgba(143,143,143,0.3) 25%,
        ${color} 50%,
        rgba(143,143,143,0.3) 75%,
        rgba(143,143,143,0.1) 100%
      )`,
  };

  const positionClass = {
    top: "top-0 left-0 w-full h-px",
    bottom: "bottom-0 left-0 w-full h-px",
    left: "top-0 left-0 h-full w-px",
    right: "top-0 right-0 h-full w-px",
  }[direction];

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} ${className}`}
      style={baseStyle}
    />
  );
};
export default FullBorder;
