import React from "react";
import Border from "./common/borders/Border";

const Footer = () => {
  return (
    <footer className="relative h-16 w-full bg-black mt-5">
      <Border direction="top" />
      <div className="flex items-center justify-center">
        <p className="text-white text-sm">
          <small>Takuya0202</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
