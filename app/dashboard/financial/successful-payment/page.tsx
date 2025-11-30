import TableContent from "@/app/components/dashboard/TablesDash/TableContent"
import TextInfo from "@/app/components/global/TextInfo"
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary"
import ClipboardTextIcon from "@/app/components/icons/ClipboardTextIcon"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
    title: "داشبورد | مالی | پرداخت"
};

function Page() {
    return (
        <>
            <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-center mx-auto flex-col gap-4 m-4 w-[340px]">
                <div className="flex items-center justify-center">
                    <Image
                        className=""
                        src="/img/successful.png"
                        alt="binex Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex items-center justify-center my-5">
                    <span className="text-dark800 text-xl font-bold">
                        پرداخت شما با موفقیت انجام شد.
                    </span>
                </div>
                <div className="w-full flex flex-col px-2">
                    <div className="">
                        <TableContent title="کدپیگیری" className="text-xs !text-gray800" parentClassName="!py-1 border-b-0">
                            <div
                                className="bg-up/10 p-1 ">
                                <TextInfo parentClassName="flex-row items-center justify-center gap-1">
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
                    <div className="">
                        <TableContent title="بانک" className="text-xs !text-gray800" parentClassName="!py-1">
                            <div
                                className=" ">
                                <TextInfo parentClassName="flex-row items-center justify-center gap-4">
                                    <span className="text-xs text-gray900 font-semibold">{" بانک سامان"}</span>

                                </TextInfo>
                            </div>
                        </TableContent>
                    </div>
                    <div className="">
                        <TableContent title="شماره کارت " className="text-xs !text-gray800" parentClassName="!py-1">
                            <div
                                className=" ">
                                <TextInfo parentClassName="flex-row items-center justify-center gap-4">
                                    <span className="text-xs text-gray900 font-semibold">{" 4584****7854895"}</span>

                                </TextInfo>
                            </div>
                        </TableContent>
                    </div>
                    <div className="">
                        <TableContent title="ایمیل" className="text-xs !text-gray800" parentClassName="!py-1 border-b-0">
                            <div
                                className=" ">
                                <TextInfo parentClassName="flex-row items-center justify-center gap-4">
                                    <span className="text-xs text-gray900 font-semibold">{" abcd1234@gmail.coms"}</span>
                                </TextInfo>
                            </div>
                        </TableContent>
                    </div>
                </div>
                <div className="my-2 w-full">
                    <TableContent title="مبلغ" className="!text-xl font-bold !text-gary900" parentClassName="!py-1 border-b-0">
                        <div
                            className=" ">
                            <TextInfo parentClassName="flex-row items-center justify-center gap-1">
                                <span className="text-2xl text-gray900 font-semibold">{"255,000,000"}</span>
                                <span className="text-base text-gray900 font-semibold">{"تومان"}</span>
                            </TextInfo>
                        </div>
                    </TableContent>
                </div>
                <div className="w-full">
                    <Link href={"#"}>
                        <ButtonPrimary className=" !py-4 ">
                            <span className=" gap-1 flex items-center justify-center">
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