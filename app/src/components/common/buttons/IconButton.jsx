import React from "react";
import { icons } from "../../../icons/index";
import Border from "../borders/Border";

const IconButton = ({
  iconName,
  text,
  className,
  borderColor = "rgba(143,143,143,0.97)",
  iconColor,
  ...props
}) => {
  const Icon = icons[iconName];
  return (
    <button
      className={`relative bg-[#070707] shadow-inset-bottom p-2 hover:scale-110 rounded-md ${className}`}
      {...props}
    >
      <div className="flex items-center space-x-2">
        <Icon
          style={{ display: "block", color: iconColor ? iconColor : "#fff" }}
        />
        <span>{text}</span>
      </div>
      <Border direction="bottom" color={borderColor} />
    </button>
  );
};

export default IconButton;
