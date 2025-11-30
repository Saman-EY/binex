'use client';
import React from 'react'
import TextInfo from '../../global/TextInfo'
import UpDownBtn from '../../global/UpDownBtn'
import TableContent from '../TablesDash/TableContent'
import {useRouter} from "next/navigation";
import {routes} from '@/app/routes';

function TicketsTableMobile() {
    const r = useRouter()
    const handleRowClick = () => {
        r.push(routes.dashboard.support.tickets + '/1');
    }
    return (
        <>
            <div className=" flex flex-col border border-gray400 bg-white rounded-2xl p-4  w-full pt-2" onClick={handleRowClick}>
                <div className="w-full border-b border-b-line pb-2">
                    <TableContent title='عنوان: ' className='text-xs !text-dark' parentClassName='!py-1 !border-b-0'>
                        <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                            <span
                                className="text-xs text-gray900 font-semibold">{" لورم ایپسوم متن ساختگی با تولید سادگی  "}</span>
                        </TextInfo>
                    </TableContent>
                </div>

                <div className="flex items-center justify-between flex-col w-full gap-2" >
                    <div className="w-full">
                        <TableContent title='زمان ثبت:' className='text-xs !text-dark'
                                      parentClassName='!py-1 !border-b-0'>
                            <div
                                className=" ">
                                <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                                    <span className="text-xs text-gray900 font-semibold">{"  4 بهمن 1402  "}</span>
                                    <span className="text-xs text-gray900 font-semibold">{"18:55:13"}</span>

                                </TextInfo>
                            </div>
                        </TableContent>
                    </div>
                    <div className="w-full">
                        <TableContent title='وضعیت:' className='text-xs !text-dark' parentClassName='!py-1 !border-b-0'>
                            <UpDownBtn className="text-nowrap !text-xs !px-4 !py-2 !bg-up">{"بسته شده"}</UpDownBtn>
                        </TableContent>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketsTableMobile