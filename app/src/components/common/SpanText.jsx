// import React from "react";

// const SpanText = ({ text, highlightIndices = [] }) => {
//   return (
//     <div className="flex items-center space-x-2">
//       {text.split("").map((char, idx) => {
//         const isHighLight = highlightIndices.includes(idx + 1);
//         return (
//           <div key={idx} className="text-[100px]">
//             {isHighLight ? (
//               <div className="w-[100px] h-[100px] bg-white rotate-45 relative text-center">
//                 <span className="absolute text-black -rotate-45 text-center ">
//                   {char}
//                 </span>
//               </div>
//             ) : (
//               <span className="text-white">{char}</span>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SpanText;
import React from "react";

const SpanText = ({ text, highlightIndices = [] }) => {
  return (
    <div className="flex items-center space-x-5 ">
      {text.split("").map((char, idx) => {
        const isHighLight = highlightIndices.includes(idx + 1);
        return (
          <div key={idx} className="relative text-[100px]">
            {isHighLight ? (
              <div className="w-[100px] h-[100px] bg-white rotate-45 flex items-center justify-center">
                <span className="absolute text-black text-[100px] transform -rotate-45">
                  {char}
                </span>
              </div>
            ) : (
              <span className="text-white text-[100px]">{char}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SpanText;
