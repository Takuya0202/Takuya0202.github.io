import React from "react";
import Button from "./Button";

const NavButton = ({ icon, text }) => {
  return (
    <Button className={"flex items-center space-x-5"}>
      {icon}
      {text}
    </Button>
  );
};

export default NavButton;
