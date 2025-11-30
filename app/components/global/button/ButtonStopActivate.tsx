import clsx from 'clsx';
import React, { ComponentProps } from 'react'

export type TButtonStopActivate = ComponentProps<'button'> & {
    amount: string;
} 
function ButtonStopActivate({children, className, onClick, amount}: TButtonStopActivate) {
  return (
    <>
    <button onClick={onClick}  className={clsx(className, 'rounded-2xl  lg:py-2 py-3 text-white text-base',' w-full gap-1 flex items-center justify-center')}>
        
      
        <i>
            {children}
        </i>

       <span >{amount}</span>
    </button>
    </>
  )
}

export default ButtonStopActivate