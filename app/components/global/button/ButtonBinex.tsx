import { cn } from "@/utils";
import React, { ComponentProps } from "react";
export type TButtonBinex = ComponentProps<"button"> & {
  size?: "sm" | "lg";
};

function ButtonBinex({
  children,
  className = "",
  onClick,
  size = "lg",
}: TButtonBinex) {
  return (
    <>
      {
        <button
          className={cn(
            "transition-all hover:brightness-90",
            "text-white lg:text-sm text-xs font-medium bg-binex-color whitespace-nowrap",
            "rounded-2xl ",
            size === "sm" ? "py-1 px-3" : "py-4 px-8 w-full",
            className
          )}
          onClick={onClick}
        >
          {children}
        </button>
      }
    </>
  );
}

export default ButtonBinex;
