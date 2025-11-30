import React from 'react'
import CloseBtn from '../global/CloseBtn';
import WarningIcon from '../icons/WarningIcon';
export type TErrorBox = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title : string;

}
function ErrorBox({title,}:TErrorBox) {
  return (
    <>
    <div className="flex items-center justify-between bg-down/15 rounded-2xl px-2 py-1 w-1/2">
        <div className="flex items-center gap-1">
           <i className="text-down">
                <WarningIcon />
           </i>
            <span className="text-xs lg:text-sm text-down">{title}</span>
        </div>
        <CloseBtn/>
    </div>
    </>
  )
}

export default ErrorBox