import TopCurrencies from '@/app/components/dashboard/buy-subscription/TopCurrencies'
import AllMyCurrencies from '@/app/components/dashboard/buy-subscription/details/AllMyCurrencies'
import DaysSubscription from '@/app/components/dashboard/buy-subscription/details/DaysSubscription'
import RobotPerformance from '@/app/components/dashboard/buy-subscription/details/RobotPerformance'

import Caption from '@/app/components/global/Caption'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "داشبورد  | جزئیات اشتراک"
};

type Props = {}

function SubscriptionDetails({ }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 m-4">
        <div className="flex lg:hidden items-center  justify-center">
          <Caption className='text-dark-black  text-base'>{"جزییات اشتراک"}</Caption>
        </div>
        <div className="flex items-center  justify-start">
          <Caption className='text-dark-black lg:text-xl text-xs'>{"ارزهای برتر من"}</Caption>
        </div>
        <TopCurrencies />

        <AllMyCurrencies />
        
        <RobotPerformance />
      </div>
    </>
  )
}

export default SubscriptionDetails