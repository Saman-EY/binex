'use client'
import React, { useState } from 'react'
import TableOne from '@/app/components/tables/TableOne';
import ButtonBinex from '@/app/components/global/button/ButtonBinex';
import ProfitLossFilter from '@/app/components/global/ProfitLossFilter';
import Caption from '@/app/components/global/Caption';
import Link from 'next/link';
import clsx from 'clsx';
import { routes } from '@/app/routes';



function ThirtyDaysProfitLoss() {
  const [isFirst, setIsFirst] = useState(true)
  const [isShiftingToFirst, setIsShiftingToFirst] = useState(true)
  const changeTab = (_isFirst: boolean) => {
    setIsShiftingToFirst(_isFirst)
    setTimeout(() => {
      setIsFirst(_isFirst)
    }, 100)
  }
  return (
    <>
      <div className="lg:container lg:mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-between mx-4 mt-9">
          <Caption className='text-dark font-bold lg:text-xl text-base mb-4 lg:mb-0'>
            {"بیشترین سود و زیان 30 روز اخیر"}
          </Caption>
         <div className="lg:w-1/5 w-full">
            <ProfitLossFilter isFirst={isShiftingToFirst} setIsFirst={changeTab} />
         </div>
        </div>
        <div className={clsx("mx-4 transition hidden", isFirst ? 'translate-y-0 opacity-100 left-0 ' : '-translate-y-2 opacity-0', isShiftingToFirst && '!block')}>
          <TableOne arrow forceSign={1} />
        </div>
        <div className={clsx("mx-4 transition hidden", !isFirst ? 'translate-y-0 opacity-100 left-0' : '-translate-y-2 opacity-0', !isShiftingToFirst && '!block')}>
          <TableOne arrow  forceSign={-1}/>
        </div>
        <div className="mb-4 mt-3  mx-4">
          <Link href={routes.maximumMonthly}>
            <ButtonBinex className='bg-dark800'>
              {" بررسی سود و زیان تمام رمزارزها"}
            </ButtonBinex>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ThirtyDaysProfitLoss