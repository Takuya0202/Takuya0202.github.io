import React from "react";
import Button from "./Button";

const NavButton = ({ children }) => {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
};

export default NavButton;
