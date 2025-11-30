import DepositsTable from '@/app/components/dashboard/financial/deposits/DepositsTable'
import DepositsTableMobile from '@/app/components/dashboard/financial/deposits/DepositsTableMobile'
import Caption from '@/app/components/global/Caption'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "داشبورد | مالی | واریزها"
};


type TDeposits = {}
function Deposits({ } : TDeposits) {
  return (
    <>
      <div className="flex flex-col gap-4 mx-4 ">
        <div className="flex items-center justify-center lg:justify-start  mt-4 ">
          <Caption className='text-dark-black lg:text-xl text-base'>{" جزییات واریزها  "}</Caption>
        </div>
        {/* desktop */}
        <div className="bg-white rounded-2xl lg:flex hidden flex-col gap-2  my-4 px-4">
          <div className="flex items-center justify-center lg:justify-start  mt-4">
            <Caption className='text-gray900 text-base'>{"لیست واریزهای ‌شما "}</Caption>
          </div>
          <div className="">
            <DepositsTable />
          </div>
        </div>
        {/* mobile */}
        <div className="lg:hidden flex flex-col gap-4">
          <DepositsTableMobile/>
          <DepositsTableMobile/>
          <DepositsTableMobile/>
          <DepositsTableMobile/>
          <DepositsTableMobile/>
          <DepositsTableMobile/>
        </div>
      </div>
    </>
  )
}

export default Deposits