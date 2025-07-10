import React from "react";
import Border from "./common/borders/Border";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IconButton from "./common/buttons/IconButton";

const Header = () => {
  return (
    <header className="fixed z-10 w-full block">
      <div className="relative sm:flex sm:items-center sm:py-3 sm:bg-black sm:justify-around">
        <h1 className="text-white flex justify-center my-3 sm:my-0">
          <AnchorLink href="#home">
            <p>Logo</p>
          </AnchorLink>
        </h1>
        <ul className="flex items-center justify-center text-white space-x-10 pb-5 sm:mr-10 sm:pb-0">
          <AnchorLink href="#about">
            <IconButton
              iconName="about"
              text="info"
              borderColor="rgb(223,102,201,0.97)"
            />
          </AnchorLink>
          <AnchorLink href="#project">
            <IconButton
              iconName="project"
              text="project"
              borderColor="rgb(12,23,255,0.97)"
            />
          </AnchorLink>
          <AnchorLink href="#blog">
            <IconButton
              iconName="blog"
              text="blog"
              borderColor="rgb(0,222,213,0.97)"
            />
          </AnchorLink>
        </ul>
        <Border direction="bottom" />
      </div>
    </header>
  );
};

export default Header;
