import { cn } from '@/utils';
import React from 'react'
export type TPurchaseBoxContent = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title : string;
  className ? :string;
  parentClassName ?: string 
}
function PurchaseBoxContent({ title, children, className, parentClassName }: TPurchaseBoxContent) {
  return (
    <>
      <div className={cn(parentClassName,"flex flex-col  justify-center gap-4 ")}>
        <span className="text-dark lg:text-sm text-sm font-semibold px-2">{title}</span>
        <div className={cn(className,'')}>
          {children}
        </div>
    </div>
    </>
  )
}

export default PurchaseBoxContent