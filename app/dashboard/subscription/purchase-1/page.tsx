"use client";

import PurchaseBox from '@/app/components/dashboard/buy-subscription/purchase/PurchaseBox'
import PurchaseBoxMobile from '@/app/components/dashboard/buy-subscription/purchase/PurchaseBoxMobile'
import PurchaseComplete from '@/app/components/dashboard/buy-subscription/purchase/PurchaseComplete'
import Caption from '@/app/components/global/Caption'
import { Metadata } from 'next'
import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {}

function SubscriptionPurchase({}: Props) {
  const params = useSearchParams()
  const isRenew = !!params.get('renewal')
  return (
    <>
    <div className="flex flex-col lg:gap-4 gap-2 m-4 ">
        <div className="flex items-center justify-center lg:justify-start  ">
          <Caption className='text-dark-black lg:text-xl text-base'>{isRenew?"تمدید اشتراک":"خرید اشتراک "}</Caption>
        </div>
        {/* mobile */}
        <div className="flex flex-col lg:hidden w-full gap-1">
            <PurchaseBoxMobile/>
            <PurchaseBoxMobile />
            <PurchaseBoxMobile />
        </div>
        <div className="bg-white rounded-2xl py-6 px-4 flex  gap-4">
            <div className="grid grid-cols-8 lg:gap-9 w-full items-center">
              <div className="lg:col-span-5 col-span-8">
                {/* desktop */}
                <div className="lg:flex flex-col gap-2 lg:min-h-[380px] lg:max-h-[380px] lg:overflow-y-scroll hidden ">
                  <PurchaseBox/>
                  <PurchaseBox />
                  <PurchaseBox />
                </div>
               
              </div>
              <div className="lg:col-span-3 col-span-8">
                  <div className="">
                    <PurchaseComplete/>
                  </div>
              </div>
            </div>
        </div>
        <div className="flex flex-col lg:items-start items-start gap-4 mt-4">
          <div className="">
            <span className="text-dark text-base font-bold">
                 نکات مهم
            </span>
          </div>
         <div className="flex flex-col items-start gap-5">
            <div className="px-4 flex items-center gap-2 relative">
              <div className="after:h-[8px] after:w-[8px] after:bg-blue after:rounded-full
           after:absolute after:content-['']  after:top-2 after:right-2"></div>
              <p className="text-gray900 font-semibold lg:text-sm text-[11px] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className="px-4 flex items-center gap-2 relative">
              <div className="after:h-[8px] after:w-[8px] after:bg-blue after:rounded-full
           after:absolute after:content-['']  after:top-2 after:right-2"></div>
              <p className="text-gray900 font-semibold lg:text-sm text-[11px] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className="px-4 flex items-center gap-2 relative">
              <div className="after:h-[8px] after:w-[8px] after:bg-blue after:rounded-full
           after:absolute after:content-['']  after:top-2 after:right-2"></div>
              <p className="text-gray900 font-semibold lg:text-sm text-[11px] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default SubscriptionPurchase