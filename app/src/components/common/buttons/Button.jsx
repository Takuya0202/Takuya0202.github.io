import React from "react";
import Border from "../borders/Border";

const Button = ({ disabledScale = false, className, children, ...props }) => {
  return (
    <button
      className={`relative bg-[#070707] shadow-inset-bottom p-3 rounded-md ${disabledScale ? "" : "hover:scale-110"}${className}`}
      {...props}
    >
      {children}
      <Border direction="bottom" />
    </button>
  );
};

export default Button;
