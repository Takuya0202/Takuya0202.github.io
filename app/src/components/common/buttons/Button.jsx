import React from "react";
import Border from "../borders/Border";

const Button = ({ className , children, ...props }) => {
  return (
    <button
      className={`relative bg-[#070707] shadow-inset-bottom p-3 hover:scale-110 rounded-md ${className}`}
      {...props}
    >
      {children}
      <Border direction="bottom" />
    </button>
  );
};

export default Button;
