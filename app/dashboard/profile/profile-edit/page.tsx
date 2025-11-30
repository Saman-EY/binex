import Caption from "@/app/components/global/Caption"
import React from "react"
import DashboardInput from "../../../components/DashboardInput"
import ButtonBinex from "@/app/components/global/button/ButtonBinex"
import EditIcon from "@/app/components/icons/EditIcon"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "داشبورد | ویرایش اطلاعات کاربری"
};


function Page() {
    return (<>
        <div className="flex flex-col gap-4 m-4">
            <div className="flex items-center justify-center lg:justify-start">
                <Caption className="text-dark-black text-base">{"ویرایش اطلاعات کابری"}</Caption>
            </div>
            <div className="bg-white rounded-2xl flex flex-col gap-4 lg:p-8 p-4">
                <div className="grid-cols-2 grid gap-6">
                    <div className="lg:col-span-1 col-span-2">
                        <div className="flex flex-col gap-4">
                            <DashboardInput label="نام:" classNameLabel="text-sm" />
                            <DashboardInput label="ایمیل:" classNameLabel="text-sm" className="text-left" dir="ltr"/>
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                        <div className="flex flex-col gap-4">
                            <DashboardInput label="نام خانوادگی:" classNameLabel="text-sm" />
                            <DashboardInput label="شماره تماس:" placeholder="+989141234567" className="!bg-[#ddd] placeholder:text-left text-left pointer-events-none" dir="ltr" disabled classNameLabel="text-sm" />
                            <ButtonBinex className="!bg-dark800">
                                <span className="flex items-center gap-1 justify-center">
                                    <i className="text-white">
                                        <EditIcon />
                                    </i>
                                    ذخیره
                                </span>
                            </ButtonBinex>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Page