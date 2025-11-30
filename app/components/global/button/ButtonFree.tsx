import { cn } from "@/utils";
import React from "react"

export type TButtonFree = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "lg";
}

function ButtonFree({ children, className = "", onClick, size = "lg" }: TButtonFree) {
  return (
    <>
      {
        <button className={cn("transition-all hover:brightness-90",
          "text-dark lg:text-sm text-xs font-semibold bg-yellow",
          "rounded-2xl ",
          size === "sm" ? "py-1 px-3" : "py-4 px-8 w-full",
          className
        )}
          onClick={onClick}>
          {children}
        </button>
      }
    </>
  )
}

export default ButtonFree;

