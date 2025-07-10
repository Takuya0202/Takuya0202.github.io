import React from "react";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import Border from "./common/borders/Border";
import AllDirectionsFullBorder from "./common/borders/AllDirectionsFullBorder";

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

const borderColors = [
  "#0D3A2A",
  "#009688",
  "#F05340",
  "#61DAFB",
  "#777BB4",
  "#2496ED",
  "#F05032",
  "#3776AB",
  "#3178C6",
  "#F7DF1E",
];
const Stacks = () => {
  return (
    <div className="w-[96%] mx-auto sm:w-auto sm:mx-0 p-4 relative sm:h-[302px] ">
      <p className="ml-2 mt-2 text-white">Stacks</p>
      <AllDirectionsFullBorder />
      <div className="grid grid-cols-5 gap-x-5 gap-y-7">
        {techs.map((content, idx) => (
          <div
            className="relative p-2 pb-3.5 hover:scale-110 shadow-inset-bottom sm:p-4"
            key={idx}
          >
            <img src={`https://skillicons.dev/icons?i=${content}`} alt="" />
            <Border direction="bottom" color={borderColors[idx]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
