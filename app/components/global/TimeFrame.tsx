import { cn } from '@/utils'
import clsx from 'clsx'
import React from 'react'
export type TTimeFrame = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
  parentClassName?: string
}
function TimeFrame({ children, className,parentClassName }: TTimeFrame) {
  return (
    <>
      <div className={cn('mx-1', parentClassName)}>
        <span className={className}>
          {children}
        </span>
      </div>
    </>
  )
}

export default TimeFrame