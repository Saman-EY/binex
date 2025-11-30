import Link from 'next/link';
import React from 'react'
import clsx from 'clsx';
import ChevronDownIcon from '../icons/ChevronDownIcon';

type PaginationProps = {
  count: number;
  perPage?: number;
  currentPage?: number;
}
function Pagination({
  count = 1, perPage = 9, currentPage = 1
}: PaginationProps) {

  const pageCount = count / perPage + 1
  return (
    <>
      <div className="bg-white p-2 flex justify-between items-center shadow-binex rounded-full gap-16 max-w-96">
        <Link href={`?page=${currentPage + 1}`} className={currentPage >= pageCount ? "pointer-events-none opacity-50 " : ""}>
          <i className='block -rotate-90'><ChevronDownIcon /></i>
        </Link>
        <div className="flex gap-4 items-center" dir="ltr">
          {
            Array.from({ length: pageCount }).map((_, idx) => {
              return <Link key={idx} href={`?page=${idx+1}`}
                className={clsx("rounded-full text-xs grid place-items-center w-[28px] h-[28px]", 
                  (idx + 1) === currentPage? "text-white bg-blue":"")}>
                    {idx+1}
                  </Link>
            })
          }
        </div>
        <Link href={`?page=${currentPage - 1}`} className={currentPage < 2 ? "pointer-events-none opacity-50" : ""}>
          <i className='block rotate-90'><ChevronDownIcon /></i>
        </Link>
        
      </div>
    </>
  )
}

export default Pagination