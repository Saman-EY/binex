import clsx from 'clsx';
import React from 'react'
export type TTableContent = {
  children: React.ReactNode;
  className?: string;
  title: string;
  parentClassName: string
}
function TableContent({ children, className = '', title, parentClassName = '' }: TTableContent) {
  return (
    <>
      <div className={clsx(parentClassName, "flex items-center justify-between py-2 border-b border-line")}>
        <span className={clsx(className, 'lg:text-sm text-xs text-gray900 font-[600]')}>{title}</span>
        {children}
      </div>
    </>
  )
}

export default TableContent