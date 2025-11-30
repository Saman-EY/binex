import clsx from 'clsx';
import React from 'react'
export type THeadBox = {
  title: string;
  select: string;
  className: string;
}
function HeadBox({ title, select, className }: THeadBox) {
  return (
    <>
    <div className="flex items-center justify-between ">
        <span className={clsx(className,'text-dark text-xs')}>{title}</span>
        <span className={clsx('text-dark text-xs')}>{select}</span>
    </div>
    </>
  )
}

export default HeadBox