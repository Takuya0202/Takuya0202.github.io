import React from "react";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import Border from "./common/borders/Border";

const techs = [
  "django",
  "fastapi",
  "laravel",
  "react",
  "php",
  "docker",
  "git",
  "python",
  "typescript",
  "javascript",
];
const Stacks = () => {
  return (
    <div className="h-[302px] p-4 relative">
      <p className="ml-2 mt-2 text-white">Stacks</p>
      <AllDirectionsBorder />
      <div className="grid grid-cols-5 gap-x-5 gap-y-7">
        {techs.map((content, idx) => (
          <div
            className="bg-[#00000082] relative p-4 w-16 h-16 hover:scale-110"
            key={idx}
          >
            <img src={`https://skillicons.dev/icons?i=${content}`} alt="" />
            <Border direction="bottom" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
