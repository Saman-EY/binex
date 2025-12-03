import React from "react";

function AnimateSpin({ dir }: { dir: string }) {
  return (
    <span className={`absolute flex size-3  ${dir === "left" ? "top-1 left-1" : "right-1 top-1"}`}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  );
}

export default AnimateSpin;
