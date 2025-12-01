import { cn } from "@/utils";
import clsx from "clsx";
import React, { ComponentProps } from "react";

export type TButtonPrimary = ComponentProps<"button">;

function ButtonPrimary({ children, onClick, className = "" }: TButtonPrimary) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-white lg:text-sm text-xs bg-blue hover:brightness-90 transition duration-200 rounded-2xl py-4 px-5 w-full",
        className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
