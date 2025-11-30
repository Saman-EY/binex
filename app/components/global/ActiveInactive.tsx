import clsx from 'clsx';
import React from 'react'
export type TActiveInactive ={
    condition: string;
    className: string;
    parentClass: string
}
function ActiveInactive({condition, className='',parentClass=''}: TActiveInactive) {
  return (
    <>
    <div className={clsx(parentClass,"flex items-center gap-2 justify-center bg-green100/10 rounded-2xl px-5 py-2")}>
        <div className={clsx(className, "h-2 w-2 rounded-full bg-green200")}></div>
        <span className="text-base text-green100">{condition}</span>
       
    </div>
    </>
  )
}

export default ActiveInactive