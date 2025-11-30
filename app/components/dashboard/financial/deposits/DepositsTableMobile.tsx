import TextInfo from '@/app/components/global/TextInfo'
import UpDownBtn from '@/app/components/global/UpDownBtn'
import React from 'react'
import TableContent from '../../TablesDash/TableContent'

function DepositsTableMobile() {
    return (
        <>
            <div className="bg-white rounded-2xl flex flex-col p-4 w-full">
                <TableContent title='مبلغ :' className='text-xs !text-dark' parentClassName='!py-2'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                        <span className="text-xs text-gray900 font-semibold">{" 475,000  "}</span>
                        <span className="text-xs text-gray900 font-semibold">{" تومان"}</span>

                    </TextInfo>
                </TableContent>
                <TableContent title='زمان ثبت:' className='text-xs !text-dark' parentClassName='!py-2'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                        <span className="text-xs text-gray900 font-semibold">{" 4  بهمن 1402   "}</span>
                        <span className="text-xs text-gray900 font-semibold">{"18:55:13"}</span>

                    </TextInfo>
                </TableContent>
                <TableContent title='بانک:' className='text-xs !text-dark' parentClassName='!py-2'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                        <span className="text-xs text-gray900 font-semibold">{" زرین‌پال"}</span>

                    </TextInfo>
                </TableContent>
                <TableContent title='شماره فیش:' className='text-xs !text-dark' parentClassName='!py-2'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                        <span className="text-xs text-gray900 font-semibold">{" 49941182501 "}</span>

                    </TextInfo>
                </TableContent>
                <TableContent title='شماره پرداخت:' className='text-xs !text-dark' parentClassName='!py-2'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                        <span className="text-xs text-gray900 font-semibold">{" 463229"}</span>
                    </TextInfo>
                </TableContent>
                <TableContent title='وضعیت:' className='text-xs !text-dark' parentClassName='!py-2 !border-b-0'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                        <UpDownBtn className="bg-up text-center min-w-[68px]">{"واریز شد"}</UpDownBtn>
                    </TextInfo>
                </TableContent>
            </div>
        </>
    )
}

export default DepositsTableMobile
