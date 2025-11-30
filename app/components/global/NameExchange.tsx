import clsx from 'clsx'
import React from 'react'
export type TNameExchange = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
  parentClassName?: string
}
function NameExchange({ children, parentClassName = '' }: TNameExchange) {
  return (
    <>
      <div className={clsx(parentClassName, "flex")}>
        {children}
      </div>
    </>
  )
}

export default NameExchange