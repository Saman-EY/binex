import React from 'react'
import IRT from '../global/IRT'
import ButtonBinex from '@/app/components/global/button/ButtonBinex';
import Link from 'next/link';
import { routes } from '@/app/routes';

function ContinueShopping() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between mt-4 ">
        <div className="flex items-center justify-center ~lg:mb-4">
          <span className="text-dark lg:text-xl text-base me-3">قیمت نهایی:</span>
          <IRT Amount={3600000} ClassName='text-dark text-3xl lg:text-4xl font-bold '></IRT>
        </div>
        <div className="lg:w-1/4 w-full">
          <Link href={routes.dashboard.subscription.purchase1}>
            <ButtonBinex className='bg-dark800'>
              {"ثبت و ادامه خرید"}
            </ButtonBinex>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ContinueShopping