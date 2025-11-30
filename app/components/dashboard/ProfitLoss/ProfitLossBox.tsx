import React from 'react'
import CryptocurrencyLogo from '../../global/CryptocurrencyLogo'
import Image from 'next/image'
import NameCryptocurrency from '../../global/NameCryptocurrency'
import TimeFrame from '../../global/TimeFrame'
import UpDownBtn from '../../global/UpDownBtn'
import ProfitLossContent from './ProfitLossContent'
import TextInfo from '../../global/TextInfo'
import RobotName from '../../global/RobotName'
import Link from 'next/link'
import {routes} from '@/app/routes'

function ProfitLossBox() {
    return (
        <div className=" flex flex-col border border-gray400 bg-white rounded-2xl p-4  w-full ">
            <div className="flex items-center justify-between b border-b border-line pb-2">
                <Link href={routes.dashboard.orders.history} className="flex items-center gap-2">
                    <CryptocurrencyLogo className='!p-[2px] !h-11 !w-11'>
                        <Image
                            className=""
                            src="/img/cryptocurrency/Cryptocurrency.svg"
                            alt="Cryptocurrency logo"
                            width={45}
                            height={45}

                        />
                    </CryptocurrencyLogo>
                    <NameCryptocurrency parentClassName='flex-col items-end'>
                        <span className="text-sm text-dark-black font-semibold">{"LTD"}</span>
                        <span className="text-gray800 text-xs  mt-1 font-semibold">{"Binance"}</span>
                    </NameCryptocurrency>
                </Link>
                <div className="flex flex-col gap-1 items-end justify-end">
                    <div className="flex items-center gap-1 ">
                        <TimeFrame className='text-sm font-semibold text-dark '>{"1h"}</TimeFrame>
                        <UpDownBtn className="text-nowrap !px-4" showIcon>{"+1.05%"}</UpDownBtn>
                    </div>
                    <RobotName parentClassName='flex '>
                        <span className="text-xs text-dark-black">{"فلیپر"}</span>
                        <span className="text-gray800 text-xs ms-1">{"(Flipper) "}</span>
                    </RobotName>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <ProfitLossContent parentclassName='flex-col items-start justify-start gap-2 py-1'
                                   className='!text-dark-black' title='مجموع شروع معامله'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-black font-semibold">{"14.41"}</span>
                        <span className="text-gray900 text-[11px]">{"(تومان)"}</span>
                    </TextInfo>
                </ProfitLossContent>
                <ProfitLossContent parentclassName='flex-col items-end justify-end gap-2 py-1'
                                   className='!text-dark-black' title='ارزش فعلی'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-up font-semibold">{"14.4145"}</span>
                        <span className="text-gray900 text-[11px]">{"(تومان)"}</span>
                    </TextInfo>
                </ProfitLossContent>
            </div>
        </div>
    )
}

export default ProfitLossBox