'use client'
import React, { useState } from 'react'
import Caption from '@/app/components/global/Caption'
import ProfitLossFilter from '@/app/components/global/ProfitLossFilter'
import TableOneDark from '@/app/components/tables/TableOneDark'
import clsx from 'clsx'


function Page() {

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
        <div className="container lg:mx-auto px-4">
            <div className="flex lg:flex-row flex-col lg:justify-between items-center justify-center lg:my-8 my-4">
                <Caption className='text-black font-bold lg:text-xl text-base mb-4 lg:mb-0'  >
                    {"بیشترین سود و زیان روزانه"}
                </Caption>
                  <div className="lg:w-1/5 w-full">
                      <ProfitLossFilter isFirst={isShiftingToFirst} setIsFirst={changeTab} />
                  </div>
            </div>
            <div  className={clsx("lg:mx-4 mx-0 transition hidden", isFirst ? 'translate-y-0 opacity-100 left-0 ' : '-translate-y-2 opacity-0', isShiftingToFirst && '!block')}>
                <TableOneDark />
            </div>
            <div className={clsx("lg:mx-4 mx-0 transition hidden", !isFirst ? 'translate-y-0 opacity-100 left-0' : '-translate-y-2 opacity-0', !isShiftingToFirst && '!block')}>
                  <TableOneDark forceSign={-1} />
            </div>

        </div>
    </>
  )
}

export default Page