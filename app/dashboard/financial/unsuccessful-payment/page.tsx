import TableContent from '@/app/components/dashboard/TablesDash/TableContent'
import TextInfo from '@/app/components/global/TextInfo'
import ButtonPrimary from '@/app/components/global/button/ButtonPrimary'
import ClipboardTextIcon from '@/app/components/icons/ClipboardTextIcon'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
    title: "داشبورد | مالی | پرداخت ناموفق"
};

function Page() {
    return (
        <>
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-center mx-auto flex-col gap-4 m-4 w-[340px]">
                <div className="flex items-center justify-center">
                    <Image
                        className=""
                        src="/img/unsuccessful.png"
                        alt="binex Logo"
                        width={200}
                        height={200}

                    />

                </div>
                <div className="flex items-center justify-center">
                    <span className="text-down text-xl font-bold">
                        پرداخت شما ناموفق بود!
                    </span>
                </div>
                <div className="w-full flex flex-col px-2 gap-4">
                    <div className="">
                        <TableContent title='کدپیگیری' className='text-xs !text-gray800 ' parentClassName='!py-1 border-b-0'>
                            <div
                                className=" bg-down/10 p-1">
                                <TextInfo parentClassName='flex-row items-center justify-center gap-1'>
                                    <button>
                                        <i className="text-dark">
                                            <ClipboardTextIcon />
                                        </i>
                                    </button>
                                    <span className="text-sm text-gray900 font-semibold">{" 126559759878977989979"}</span>

                                </TextInfo>
                            </div>
                        </TableContent>
                    </div>
                    <div
                        className=" ">
                        <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                            <span className="text-[10px] text-nowrap text-dark font-semibold">{" در صورت کسر وجه،مبلغ طی 72 ساعت آینده به حساب شما بازمیگردد."}</span>

                        </TextInfo>
                    </div>
                </div>
                <div className="my-2 w-full px-2">
                    <TableContent title='مبلغ' className='!text-xl font-bold !text-gary900' parentClassName='!py-1 border-b-0'>
                        <div
                            className=" ">
                            <TextInfo parentClassName='flex-row items-center justify-center gap-1'>
                                <span className="text-2xl text-gray900 font-semibold">{"255,000,000"}</span>
                                <span className="text-base text-gray900 font-semibold">{"تومان"}</span>

                            </TextInfo>
                        </div>
                    </TableContent>
                </div>
                <div className="w-full">
                    <Link href={"#"}>
                        <ButtonPrimary className=' !py-4 !bg-down'>
                            <span className=' gap-1 flex items-center justify-center'>

                                بازگشت به صفحه اصلی
                            </span>
                        </ButtonPrimary>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page