import clsx from 'clsx';
import React from 'react'

export type TButtonFilter = {
    children: React.ReactNode;
    onClick?: () => {}
}

function ButtonFilter({ children, onClick }: TButtonFilter) {
  return (
    <>
    <button onClick={onClick}
        className={clsx('bg-white text-dark lg:text-sm text-xs border border-dark rounded-2xl py-2 px-4 w-full group',
          'hover:bg-dark hover:text-white hover:border hover:border-white '
        )}>
        {children}
    </button>
    </>
  )
}

export default ButtonFilter