import IRT from '@/app/components/global/IRT'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import BagTickIcon from '@/app/components/icons/BagTickIcon'
import Link from 'next/link'
import React from 'react'

function PurchaseComplete() {
  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4">
        <div className="">
          <IRT Amount={3600000} ClassName='text-dark-black lg:text-4xl text-2xl font-bold '></IRT>
        </div>
        <div className="w-full">
          <Link href={'#'}>
            <ButtonBinex className='!bg-dark800 !py-3 '>
              <span className='flex items-center gap-1 justify-center'>
                <i className='text-white'>
                  <BagTickIcon />
                </i>
                تکمیل خرید
              </span>
            </ButtonBinex>
          </Link>
        </div>
        <div className="bg-head-table-color rounded-2xl px-2 flex items-center gap-1 w-full relative py-2">
          <div className="after:h-[8px] after:w-[8px] after:bg-green200 after:rounded-full
           after:absolute after:content-['']  after:top-3 after:right-2"></div>
          <div className="flex items-center">
            <span className="lg:text-xs text-[10px] text-green100 text-center ps-3">
              توجه : مبلغ فوق با احتساب %9 مالیات بر ارزش افزوده محاسبه شده است.  
            </span>
          </div>
        </div>
    </div>
    </>
  )
}

export default PurchaseComplete