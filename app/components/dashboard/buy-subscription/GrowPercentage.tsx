import clsx from 'clsx'
import React  from 'react'
export type TGrowPercentage = React.ButtonHTMLAttributes<HTMLButtonElement> & {
title :string;
parentclassName ?: string
className?: string
}
function GrowPercentage({ children, title, className, parentclassName }:TGrowPercentage) {
  return (
    <>
        <div className={clsx(parentclassName,'flex items-center gap-1')}>
        <span className={clsx(className,'text-xl font-semibold')}>{title}</span>
        <span className="">
            {children}
        </span>
    </div>
    </>
  )
}

export default GrowPercentage