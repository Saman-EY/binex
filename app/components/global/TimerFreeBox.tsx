
import { cn } from "@/utils";
import React from "react"

export type TTimerFreeBox = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  source: "profile" | "auth";
  danger?: boolean;
}

function TimerFreeBox({ children, source, danger }: TTimerFreeBox) {
  return (
    <>
      <div className={cn("flex items-end justify-between gap-2 w-full",
        source === "profile" && "flex-col-reverse md:flex-row"
      )}>
        <div className={cn(source === "profile" && "w-full md:w-auto")}>
          {children}
        </div>
        <div className={cn("flex lg:flex-row items-center lg:border gap-2 lg:py-2 lg:px-4 lg:rounded-2xl justify-between",
          source === "auth" && "flex-col" || "border border-gray900 rounded-2xl py-2 px-4 w-full md:w-auto",
          danger && "lg:border-down" || "lg:border-gray900"
        )}>
          <span className="text-xss lg:text-xs text-gray900">
            زمان باقی مانده:
          </span>
          <span className={cn("text-xxs lg:text-xs text-dark",
            source === "auth" && "~lg:border ~lg:border-gray900 ~lg:rounded-t-2xl ~lg:px-4 ~lg:py-1 ~lg:font-bold"
          )}>
            5 روز , 23ساعت
          </span>
        </div>
      </div>
    </>
  )
}

export default TimerFreeBox