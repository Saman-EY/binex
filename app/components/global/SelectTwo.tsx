import { cn } from "@/utils";
import clsx from "clsx";
import React from "react";

export type TSelectTwo = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
  label: string;
  options: string[];
}

function SelectTwo({ className, label, options }: TSelectTwo) {
  return (
    <>
      <div className="flex items-center gap-1 w-full">
        <span className={cn("text-gray800 lg:text-sm text-xs text-nowrap", className)}>{label}</span>
        <div className="bg-line rounded-xl grow">
          <select className="select bg-transparent w-full min-h-11 h-11 rounded-[15px] px-1.5">
            {
              options?.map((q, i) => <option key={q} value={q} selected={i === 0 && true || false}>{q}</option>)
            }
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectTwo;