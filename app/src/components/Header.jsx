import React from "react";
import Border from "./common/borders/Border";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IconButton from "./common/buttons/IconButton";
import Logo from "../icons/logo";

const Header = ({ isMobile }) => {
  return (
    <header className="fixed z-10 w-full block">
      <div className="relative sm:flex sm:items-center sm:py-3 sm:bg-black sm:justify-around">
        <h1 className="text-white flex my-3 sm:my-0">
          {isMobile ? (
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <AnchorLink href="#home">
                <Logo />
              </AnchorLink>
              <IconButton
                iconName="github"
                text="GitHub"
                borderColor="rgb(255,255,255,0.97)"
                onClick={() => {
                  window.open("https://github.com/Takuya0202", "_blank");
                }}
              />
            </div>
          ) : (
            <AnchorLink href="#home">
              <Logo />
            </AnchorLink>
          )}
        </h1>
        <ul className="space-x-5 flex items-center justify-center text-white sm:space-x-10 pb-5 sm:mr-10 sm:pb-0">
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
          {isMobile || (
            <IconButton
              iconName="github"
              text="GitHub"
              borderColor="rgb(255,255,255,0.97)"
              onClick={() => {
                window.open("https://github.com/Takuya0202", "_blank");
              }}
            />
          )}
        </ul>
        <Border direction="bottom" />
      </div>
    </header>
  );
};

export default Header;
