import React from "react";
import Border from "./common/borders/Border";

const Footer = () => {
  return (
    <footer className="relative h-16 w-full bg-black mt-5 flex items-center justify-center">
      <Border direction="top" />
      <div className="text-center">
        <p className="text-white text-sm">
          <small>&copy; 2025 Takuya0202. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
