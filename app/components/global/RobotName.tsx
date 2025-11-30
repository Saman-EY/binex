
import clsx from 'clsx'
import React from 'react'
export type TRobtName = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
  parentClassName?: string
}
function RobotName({ children, parentClassName='' }: TRobtName) {
  return (
    <>
    <div className={clsx(parentClassName, "flex items-center justify-center")}>
       
      {children}
        
        
    </div>
    </>
  )
}

export default RobotName