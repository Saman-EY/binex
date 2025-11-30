"use client";

import { cn } from "@/utils";
import React, { useState } from "react";
import EyeIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";

export type TDashboardInput = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  className?: string;
  classNameLabel?: string;
  extraText?: string;
  classNameText?: string;
  parentClassName?: string;
  prepend?: React.ReactNode;
}
function DashboardInput({ label, className, extraText, classNameLabel, classNameText, parentClassName, placeholder = "", type,prepend,  ...props }: TDashboardInput) {
  const [currentType, setCurrentType] = useState(type);
  return (
    <>
      <div className={cn("flex flex-col items-start gap-2 relative", parentClassName)}>
        {label && <span className={cn("lg:text-sm text-xs text-gray800", classNameLabel)}>{label}</span>}
        <div className="relative w-full rounded-2xl overflow-hidden">
          <input type={currentType} placeholder={placeholder} className={cn("focus-visible:outline-green100 px-4 w-full bg-white200 rounded-2xl h-[42px] lg:h-[50px]", className)} {...props} />
          { prepend && <span className="absolute left-[1px] inset-y-[1px] grid place-items-center px-2 bg-gray-300 rounded-l-2xl"> {prepend}
            </span>}
        </div>
        {extraText && <span className={cn("lg:text-xs text-[10px]", classNameText)}>{extraText}</span>}
        {type === "password" && <div className="absolute top-1/2 left-4">
          <span onClick={() => setCurrentType(c => c === "text" ? "password" : "text")}>
            {currentType === "text" ? <EyeSlashIcon /> : <EyeIcon />}
          </span>
        </div>}
      </div>
    </>
  )
}

export default DashboardInput
