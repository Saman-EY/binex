import React from 'react'
export type TNotAccount = React.ButtonHTMLAttributes<HTMLButtonElement> & {
 title : string;   
}
function NotAccount({ title, children } : TNotAccount) {
  return (
    <>
    <div className="flex items-center justify-center gap-1 ">
        <span className="text-xs lg:text-sm text-gray800">{title}</span>
        {children}
    </div>
    </>
  )
}

export default NotAccount