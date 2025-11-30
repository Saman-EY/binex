
import clsx from 'clsx'
import React from 'react'

export type TCaptionThTable = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
    parentClassName?: string
}

function CaptionThTable({ children, className, parentClassName =''}:TCaptionThTable) {
  return (
    <>
        <div className={clsx(parentClassName,'flex')}>
            <div className={className} >
                {children}
            </div>
        </div>

    </>
  )
}

export default CaptionThTable