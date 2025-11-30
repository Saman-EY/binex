import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
export type TUpDownBtnThree = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
  parentClassName?: string
}
function UpDownBtnThree({children,className,parentClassName=''}:TUpDownBtnThree) {
  return (
    <>
        
      <div className={clsx(parentClassName,"flex  rounded-xl px-4 py-1 " )}>
        <span className={clsx(className,'text-white text-sm')}>{children}</span>
          
      </div>
        
        
    </>
  )
}

export default UpDownBtnThree