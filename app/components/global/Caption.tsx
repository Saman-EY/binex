import clsx from 'clsx'
import React from 'react'
import {className} from "postcss-selector-parser";
import {cn} from "@/utils";

export type TCaption = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &  {
  parentClassName?: string;
}
function Caption({ children, parentClassName='', className }: TCaption ) {
  return (
    <>
      <div className={clsx(parentClassName, "flex items-center")}>
        <span className={cn('text-dark-black text-base font-semibold lg:!text-lg', className)}>{children}</span>
      </div>
    </>
  )
}

export default Caption