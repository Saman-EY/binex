import React from 'react'
import ChartSearchIcon from '../icons/SearchIcon'
import clsx from 'clsx'

function SearchCurrencies() {
  return (
    <>
    <div className="flex bg-white shadow-binex rounded-2xl lg:px-4 w-full py-3">
        <button className='px-2'>
            <i className=''>
                <ChartSearchIcon/>
            </i>
        </button>
        <input type="text" placeholder='نام ارز موردنظر را وارد کنید...' 
        className={clsx(' lg:placeholder:text-sm placeholder:text-xs placeholder:text-gray400','flex-grow bg-transparent border-0',
        'outline-none text-black','text-sm')} />
    </div>
    </>
  )
}

export default SearchCurrencies