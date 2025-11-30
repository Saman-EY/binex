import clsx from 'clsx';
import React from 'react'
export type TTotalProfitLoss = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
    title : string;
    amount : string;
    type : string;
    parentClassName?: string;
}
function TotalProfitLoss({ title, amount, type, parentClassName='',className }:TTotalProfitLoss) {
  return (
    <>
          <div className={clsx(parentClassName,"flex flex-col items-center justify-center lg:gap-5 gap-2 bg-white rounded-2xl lg:py-8 py-4 px-4 ")}>
            <span className="text-dark lg:text-base text-sm font-bold" >{title}</span>
            <div className="flex items-center gap-1">
                  <span className={clsx(className,'text-gray900 lg:text-base text-sm font-bold')}>{amount}</span>
                <small className='text-gray900 lg:text-sm text-xs '>
                    {type}
                </small>
            </div>
        </div>
    </>
  )
}

export default TotalProfitLoss