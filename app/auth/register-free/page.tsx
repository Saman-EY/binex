import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import ArrowLeftIcon from "@/app/components/icons/ArrowLeftIcon";
import LogoBinex from "@/app/components/icons/LogoBinex";
import AcceptTermsBinex from "@/app/components/login-sign-up/AcceptTermsBinex";
import BinexMessage from "@/app/components/login-sign-up/BinexMessage";
import DisposableCode from "@/app/components/login-sign-up/DisposableCode";
import LoginInput from "@/app/components/login-sign-up/LoginInput";
import LoginSevenFree from "@/app/components/login-sign-up/LoginSevenFree";
import LoginSignupHeader from "@/app/components/login-sign-up/LoginSignupHeader";
import NotAccount from "@/app/components/login-sign-up/NotAccount";
import { routes } from "@/app/routes";
import Link from "next/link";
import React from "react";

function Page() {
    return (
        <>
            <div className="flex flex-col items-center w-full gap-8 max-w-[500px] mx-auto justify-center lg:pt-[15%]">
                <div className="flex items-center justify-center gap-4 w-full flex-col">
                    <div className="flex flex-col items-center justify-center lg:gap-5 gap-8 w-full">
                        <LoginSignupHeader title="ثبت نام"></LoginSignupHeader>
                        <div className=" mx-auto">
                            <LoginSevenFree />
                        </div>
                    </div>
                    {/* step 1 */}
                    <div className="w-full lg:mt-8 mt-4 ">
                        <form action="" className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <LoginInput
                                    label="شماره موبایل خود را وارد نمایید"
                                    className="text-end"
                                    placeholder="+98"
                                ></LoginInput>
                                <AcceptTermsBinex />
                            </div>
                            <div className="flex flex-col gap-1">
                                <ButtonPrimary className=" ~lg:!py-3">
                                    <span className=" gap-1 flex items-center justify-center">
                                        تایید و ادامه
                                        <i>
                                            <ArrowLeftIcon />
                                        </i>
                                    </span>
                                </ButtonPrimary>

                                <NotAccount title="حساب کاربری دارید؟">
                                    <Link
                                        href={routes.auth.loginFree}
                                        className="text-blue-light lg:text-sm lg:font-semibold"
                                    >
                                        ورود
                                    </Link>
                                </NotAccount>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
