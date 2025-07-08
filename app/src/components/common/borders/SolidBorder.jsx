import React from "react";

const SolidBorder = ({
  direction = "top",
  className = "",
  color = "rgba(143,143,143,0.97)",
}) => {
  const positionClass = {
    top: "top-0 left-1/2 w-2/3 h-px -translate-x-1/2",
    bottom: "bottom-0 left-1/2 w-2/3 h-px -translate-x-1/2",
    left: "top-1/2 left-0 h-2/3 w-px -translate-y-1/2",
    right: "top-1/2 right-0 h-2/3 w-px -translate-y-1/2",
  }[direction];

  return (
    <div
      className={`pointer-events-none absolute ${positionClass} ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default SolidBorder;
