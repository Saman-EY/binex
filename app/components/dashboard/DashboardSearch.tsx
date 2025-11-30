"use client";

import React, { createRef, useEffect, useRef, useState } from 'react'
import SearchStatusIcon from '../icons/SearchStatusIcon'
import { cn } from '@/utils';
import CloseIcon from '../icons/CloseIcon';

function DashboardSearch() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const ref = createRef<HTMLInputElement>()
  useEffect(() => {
    if(open && ref.current) ref.current.focus() 
  }, [open])
  return (
    <>
    <div className="flex items-center lg:bg-head-table-color rounded-2xl lg:px-4 py-0.5">
        <input type="text" className='flex-grow bg-transparent placeholder:text-xs outline-none ~lg:hidden' placeholder='جست وجو...' />
        <i className='~lg:hidden'><SearchStatusIcon /></i>
        <div className={cn("dropdown h-7 lg:hidden")}>
          
          <div tabIndex={0} role="button" className="relative btn m-1 p-0 bg-transparent h-6 border-0 min-h-[unset] z-[2]" onClick={e => setOpen(!open)}>
            <SearchStatusIcon />
          </div>

          <div tabIndex={0}  className="dropdown-content bg-white rounded-box z-[1] py-2  w-[calc(100vw-80px)] left-0 top-0 h-full flex items-center gap-x-2 ">
            <i onClick={_ => setSearch('')}>
              <CloseIcon />
            </i>
            <input ref={ref} type="text" placeholder='جستجو...' className='text-rtl grow placeholder:text-xs text-center text-xs outline-none' value={search} onChange={e => setSearch(e.target.value)}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default DashboardSearch