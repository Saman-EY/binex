import clsx from 'clsx'
import React from 'react'
export type TTextInfo = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> &{
    parentClassName?: string
}
function TextInfo({ children, parentClassName = '' }: TTextInfo) {
  return (
    <>
        <div className={clsx(parentClassName, "flex lg:mx-2 mx-0")}>
            {children}
        </div>
    </>
  )
}

export default TextInfo