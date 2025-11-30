import TicketsTable from '@/app/components/dashboard/tickets/TicketsTable'
import TicketsTableMobile from '@/app/components/dashboard/tickets/TicketsTableMobile'
import Caption from '@/app/components/global/Caption'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import MessageNotifIcon from '@/app/components/icons/MessageNotifIcon'
import { routes } from '@/app/routes'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "داشبورد  | تیکت‌ها"
};


type TTicketsProps = {}

const Tickets = (props: TTicketsProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 m-4">
        <div className="flex items-center justify-center lg:justify-start">
          <Caption className='text-dark-black text-base'>{"درخواست های پشتیبانی من  "}</Caption>
        </div>
        <div className="lg:bg-white rounded-2xl flex flex-col gap-4   lg:px-8 lg:py-4">
          <TicketsTable/>
          
          <div className="lg:w-1/4 w-full flex items-center justify-center mx-auto">
            <Link href={routes.dashboard.support.new} className='w-full'>
              <ButtonBinex className='!bg-dark800 !py-3 '>
                <span className='flex items-center gap-1 justify-center'>
                  <i>
                    <MessageNotifIcon />
                  </i>
                  تیکت پشتیبانی جدید
                </span>
              </ButtonBinex>
            </Link>
          </div>
          
        </div>
        <div className="lg:hidden flex flex-col gap-4">
          <TicketsTableMobile />
          <TicketsTableMobile />
          <TicketsTableMobile />
          <TicketsTableMobile />
          <TicketsTableMobile />
          <TicketsTableMobile />
          <TicketsTableMobile />
        </div>
        
      </div>
    </>
  )
}

export default Tickets