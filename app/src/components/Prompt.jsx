import React, { useCallback, useEffect, useState } from "react";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import AllDirectionsFullBorder from "./common/borders/AllDirectionsFullBorder";
import IconButton from "./common/buttons/IconButton";

const Prompt = ({ tokens }) => {
  const [text, setText] = useState(0);
  const [isStop, setIsStop] = useState(true);

  // 220msごとにプロンプトを入力
  useEffect(() => {
    if (isStop) {
      const interval = setInterval(() => {
        setText((state) => Math.min(state + 1, tokens.length));
        if (text === tokens.length) {
          setIsStop(false);
        }
      }, 220);
      return () => clearInterval(interval);
    }
  }, [isStop, text, tokens.length]);

  const handleClean = useCallback(() => {
    setText(0);
    setIsStop(true);
  }, []);

  return (
    <div className="">
      <div className="relative p-4 w-[96%] bg-black my-5 mx-auto sm:w-[440px] sm:h-[302px]">
        <AllDirectionsFullBorder />
        <div className="flex items-center justify-between">
          <p className="text-white">
            <span className="text-[#98c379]">class</span>
            <span className="text-red-600 px-1.5">Takuya0202</span>
            {"{"}
          </p>
          <IconButton
            iconName="clear"
            text="clear"
            className="gradient-text-gray-to-white "
            onClick={handleClean}
          />
        </div>
        <div className="ml-3">
          {tokens.slice(0, text).map((token, i) => {
            // 現在のインデックス番号までの配列をmapする。
            // 改行
            if (token.type === "enter") {
              return <br key={i} />;
            }
            // インデント
            if (token.type === "space") {
              return <span key={i} className="inline-block px-2.5 sm:px-4" />;
            }
            // url
            if (token.type === "link") {
              return (
                <a
                  key={i}
                  href={token.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mx-0.5"
                >
                  {token.text}
                </a>
              );
            }
            // その他の出力
            const colors = {
              word: "#98c379",
              property: "#e5c07b",
              string: "#c678dd",
              symbol: "#abb2bf",
              func: "#61afef",
            };
            return (
              <span
                key={i}
                className="text-white"
                style={{
                  color: colors[token.type],
                  padding: token.pd && "0 6px 0 0",
                }}
              >
                {token.text}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prompt;
