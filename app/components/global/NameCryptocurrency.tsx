import clsx from 'clsx'
import React, { Children } from 'react'
export type TNameCryptocurrency = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
  parentClassName?:string
}
function NameCryptocurrency({ children, parentClassName=''  }:TNameCryptocurrency) {
  return (
    <>
      <div className={clsx(parentClassName, "flex")}>
          {children}
      </div>
    </>
  )
}

export default NameCryptocurrency