import Caption from "@/app/components/global/Caption"
import PasswordRecovery from "@/app/components/icons/PasswordRecovery"
import React from "react"
import DashboardInput from "../../../components/DashboardInput"
import ButtonBinex from "@/app/components/global/button/ButtonBinex"
import EditIcon from "@/app/components/icons/EditIcon"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "داشبورد  | تغییر رمز عبور"
};


function Page() {
    return (
        <>
            <div className="m-4 flex flex-col gap-4">
                <div className="flex items-center justify-center lg:justify-start">
                    <Caption className="text-dark-black text-base">{"تغییر رمز عبور "}</Caption>
                </div>
                <div className="bg-white rounded-2xl flex flex-col gap-4 lg:px-8 px-2 py-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="lg:col-span-1 col-span-2">
                            <form action={"#"} className="flex flex-col lg:gap-6 gap-4">
                                <DashboardInput label="رمز عبور جدید" classNameLabel="text-sm" type="password" />
                                <DashboardInput label=" تکرار رمز عبور جدید" classNameLabel="text-sm" type="password" />
                                <ButtonBinex className="!bg-dark800 ">
                                    <span className="flex items-center gap-1 justify-center">
                                        <i>
                                            <EditIcon />
                                        </i>
                                        ذخیره
                                    </span>
                                </ButtonBinex>
                            </form>
                        </div>
                        <div className="lg:col-span-1 col-span-2 flex items-center justify-center mx-auto h-full">
                            <PasswordRecovery />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page