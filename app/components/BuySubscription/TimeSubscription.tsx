import React from 'react'
import { text } from 'stream/consumers';
export type TTimeSubscription ={
  amount: string;
  text: string;
}
function TimeSubscription({amount,text }: TTimeSubscription) {
  return (
    <>
    <div className="flex items-center ">
        <span className="lg:text-base text-sm text-gray900 me-2">
            {amount}
        </span>
        <span className="text-gray800 lg:text-sm text-xs">{text}</span>
    </div>
    </>
  )
}

export default TimeSubscription