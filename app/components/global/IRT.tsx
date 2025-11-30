import clsx from 'clsx';
import React from 'react'
export type TIRT = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Amount: number;
  ClassName ? : string;
  ClassNameT ? : string;
}
function IRT({ Amount, ClassName, ClassNameT }: TIRT) {
  return (
    <>
      <div className="flex items-center gap-1">
        <span className={clsx(ClassName,'text-gary900')}>
          {Amount.toLocaleString()}
        </span>
        <span className={clsx(ClassNameT,"text-black lg:text-base text-sm")}>تومان</span>
      </div>
    </>
  )
}

export default IRT