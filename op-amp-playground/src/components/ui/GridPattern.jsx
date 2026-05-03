import React from 'react';

export const GridPattern = ({ width = 40, height = 40, className = '' }) => {
  return (
    <div className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid-pattern" width={width} height={height} patternUnits="userSpaceOnUse">
            <path d={`M.5 ${height}V.5H${width}`} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      {/* Radial fade out so the grid disappears at edges */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
    </div>
  );
};
