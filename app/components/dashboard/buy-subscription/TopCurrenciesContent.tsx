import React from 'react'
export type TTopCurrenciesContent = React.ButtonHTMLAttributes<HTMLButtonElement> & {

}
function TopCurrenciesContent({title, children}:TTopCurrenciesContent) {
  return (
    <>
        
        <div className="flex flex-col lg:items-center lg:justify-center justify-start gap-4">
        <div className="items-center gap-1 justify-center lg:flex hidden">
                <div className="h-2 w-2 rounded-full bg-green100"></div>
                <span className="text-dark text-sm  ">{title}</span>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    
    </>
  )
}

export default TopCurrenciesContent