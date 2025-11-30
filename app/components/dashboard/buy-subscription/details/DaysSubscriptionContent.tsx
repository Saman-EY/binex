import clsx from 'clsx'
import React from 'react'
export type TDaysSubscription = React.ButtonHTMLAttributes<HTMLButtonElement> &{
  parentClassName ? :string;

}
function DaysSubscriptionContent({ parentClassName, children }:TDaysSubscription) {
  return (
    <>
    <div className={clsx(parentClassName," rounded-2xl px-4 py-2 relative")}>
        {children}
    </div>
    </>
  )
}

export default DaysSubscriptionContent