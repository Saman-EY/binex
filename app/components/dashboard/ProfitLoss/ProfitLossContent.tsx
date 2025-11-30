import clsx from 'clsx';
import React from 'react'
export type TProfitLossContent = {
  children: React.ReactNode;
  title: string;
  className?: string;
  parentclassName?: string
}
function ProfitLossContent({ children, title, className = '', parentclassName = '' }: TProfitLossContent) {
  return (
    <>
      <div className={clsx(parentclassName, 'flex ')}>
        <span className={clsx(className, 'text-[10px] text-dark font-[600]')}>{title}</span>
        {children}
      </div>
    </>
  )
}

export default ProfitLossContent