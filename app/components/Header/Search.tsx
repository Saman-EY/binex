'use client'
import React, {createRef, useRef} from 'react'
import Image from "next/image";
import clsx from 'clsx';
import CloseIcon from '../icons/CloseIcon';


function Search() {
  const [value, setValue] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const searchRef = createRef<HTMLInputElement>()
  return (
    <>
      <div className="lg:flex items-center mx-3 hidden grow relative">
        <button className='items-center border-0' onClick={() => {searchRef.current?.focus()}}>
          <Image
            className=""
            src="/img/icone/search-status.svg"
            alt="binex Logo"
            width={24}
            height={24}
          />
        </button>
        <input type="text"
               ref={searchRef}
          placeholder='جست‌وجو...'
          className='focus:outline-none text-dark-black ms-2 hidden lg:block grow placeholder:text-xs'
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={e => setOpen(false)}
          onFocus={e => setOpen(true)}
        />
       {open && value ? <button className='absolute left-2 top-2' onClick={e => setValue('')}>
          <CloseIcon />
        </button>: undefined}
        <div className={clsx('absolute top-[120%] w-full min-h-20 p-4 rounded-b-xl border-t-[2px] border-neutral-900 bg-white shadow-lg transition ', open?'opacity-100':'opacity-0 pointer-events-none')}>
          <small className='text-gray800'>موردی یافت نشد</small> 
        </div>
      </div>
    </>
  )
}

export default Search
