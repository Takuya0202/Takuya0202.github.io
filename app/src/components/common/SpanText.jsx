import React from "react";

const SpanText = ({ size = 100, text, highlightIndices = [] }) => {
  const obj = {
    width: `${size}px`,
    height: `${size}px`,
    font: `${size}px`,
  };
  return (
    <div className="flex items-center space-x-5 ">
      {text.split("").map((char, idx) => {
        const isHighLight = highlightIndices.includes(idx + 1);
        return (
          <div key={idx} className="relative">
            {isHighLight ? (
              <div
                className={`bg-white rotate-45 flex items-center justify-center`}
                style={{ width: obj.width, height: obj.height }}
              >
                <span
                  className="absolute transform -rotate-45 gradient-text-gray-to-black"
                  style={{ fontSize: obj.font }}
                >
                  {char}
                </span>
              </div>
            ) : (
              <span
                className="gradient-text-gray-to-white"
                style={{ fontSize: obj.font }}
              >
                {char}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpanText;
