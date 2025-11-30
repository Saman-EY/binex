import React from "react";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import ReceivedIcon from "../icons/ReceivedIcon";
import { cn } from "@/utils";

export type TUpDownBtn = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
  negative?: boolean;
  arrow?: boolean;
  showIcon?: boolean;
  parentClassName?: string;
  className?: string
};

export const Arrow = ({ negative }: { negative: boolean }) => {
  return <i className={cn("border-b scale-90", negative ? "text-down border-down" : "text-green100 border-green100")}>
    <i className={cn(negative ? "!-rotate-90 block" : "")}><ReceivedIcon /></i>
  </i>
}
export const Chevron = ({ negative }: { negative: boolean }) => {
  return <i className={cn(negative ? "text-down rotate-180 block" : "text-green100")}> <ChevronUpIcon /></i>
}

const UpDownBtn = ({ children, negative = false, arrow = false, showIcon = false, className }: TUpDownBtn) => {
  return (
    <>
      <div className="flex items-center justify-center lg:gap-2 gap-1">
        {
          showIcon ? (arrow ? <Arrow negative={negative} /> : <Chevron negative={negative} />) : undefined
        }
        <span className={cn("min-w-[84px] rounded-xl py-1 lg:px-5 px-2 text-white text-xs text-nowrap lg:text-sm !text-[11px] text-center ", negative ? "bg-down" : "bg-green100", className)} dir={"ltr"}>
          {children}
        </span>
      </div>
    </>
  )
}

export default UpDownBtn;
