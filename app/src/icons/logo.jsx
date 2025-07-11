import React from "react";

const Logo = ({ size = 64 }) => {
  const createStarPoints = (cx, cy, spikes, outerRadius, innerRadius) => {
    const step = Math.PI / spikes;
    const points = [];
    for (let i = 0; i < 2 * spikes; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = i * step - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push({ x, y });
    }
    return points;
  };

  const starPoints = createStarPoints(100, 100, 5, 65, 30);

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className="star-cyber-advanced"
    >
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(180, 100%, 70%)" />
          <stop offset="100%" stopColor="hsl(300, 100%, 70%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="url(#neonGradient)" fill="none" filter="url(#glow)">
        {/* 星型フレーム */}
        <polygon
          points={starPoints.map((p) => `${p.x},${p.y}`).join(" ")}
          strokeWidth="2.5"
        />

        {/* 中心コア */}
        <circle cx="100" cy="100" r="8" fill="url(#neonGradient)" />

        {/* 内部六角形コア */}
        <polygon
          points="
            100,65
            125,80
            125,110
            100,125
            75,110
            75,80
          "
          strokeWidth="2"
        />

        {/* 内部構造線 */}
        <line x1="100" y1="65" x2="100" y2="125" strokeWidth="1" />
        <line x1="75" y1="80" x2="125" y2="110" strokeWidth="1" />
        <line x1="75" y1="110" x2="125" y2="80" strokeWidth="1" />

        {/* ノード（大→奇数点、小→偶数点） */}
        {starPoints.map(({ x, y }, i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 3.5 : 2}
            fill="url(#neonGradient)"
            stroke="none"
          />
        ))}

        {/* 放射トゲ */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + 12 * Math.cos(rad);
          const y1 = 100 + 12 * Math.sin(rad);
          const x2 = 100 + 25 * Math.cos(rad);
          const y2 = 100 + 25 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      <style>
        {`
          .star-cyber-advanced {
            animation: hueRotate 6s linear infinite;
          }

          @keyframes hueRotate {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
};
export default Logo;
