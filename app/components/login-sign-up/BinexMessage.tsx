import React from 'react'
import LocationTickIcon from '../icons/LocationTickIcon'
import Link from 'next/link';
import ButtonPrimary from '../global/button/ButtonPrimary';
import { routes } from '@/app/routes';
export type TBinexMessage = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title : string;
    text : string;
}
function BinexMessage({text, title, children}: TBinexMessage) {
  return (
    <>
    <div className="flex flex-col w-full gap-5 items-center justify-center">
        <div className="">
            {children}
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-start gap-0">
                <i className=""><LocationTickIcon /></i>
                <span className="text-up text-sm text-center ~lg:font-bold">
                   {title}
                </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-black text-xs text-center ~lg:font-semibold">{text}</span>
                <Link href={routes.dashboard.binanceMarket} className='w-full'>
                    <ButtonPrimary className=' ~lg:!py-3 '>
                        <span className=' gap-1 flex items-center justify-center'>
                            ورود به داشبورد
                        </span>
                    </ButtonPrimary>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default BinexMessage