"use client";

import React from "react";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import ArrowLeftIcon from "@/app/components/icons/ArrowLeftIcon";
import LoginInput from "@/app/components/login-sign-up/LoginInput";
import LoginSevenFree from "@/app/components/login-sign-up/LoginSevenFree";
import LoginSignupHeader from "@/app/components/login-sign-up/LoginSignupHeader";
import NotAccount from "@/app/components/login-sign-up/NotAccount";
import { routes } from "@/app/routes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Page() {
    const params = useSearchParams();
    const is_edit = params.get("isEdit");

    return (
        <>
            <div className="flex flex-col items-center w-full gap-8 max-w-[500px] mx-auto justify-center lg:pt-[15%]">
                <LoginSignupHeader
                    title={is_edit ? "اصلاح شماره موبایل" : "ورود به داشبورد"}
                />
                {/* step 1 */}
                <div className=" flex-col gap-4 w-full flex">
                    {!is_edit && (
                        <div className="mx-auto">
                            <LoginSevenFree />
                        </div>
                    )}
                    <form action="" className="w-full">
                        <div className="mb-4">
                            <LoginInput
                                label="شماره موبایل خود را وارد نمایید"
                                dir="ltr"
                                placeholder="+98"
                            ></LoginInput>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Link href={routes.auth.loginFreeCode}>
                                <ButtonPrimary className="~lg:!py-3 rounded-[20px]">
                                    <span className=" gap-1 flex items-center justify-center">
                                        تایید و ادامه
                                        <i>
                                            <ArrowLeftIcon />
                                        </i>
                                    </span>
                                </ButtonPrimary>
                            </Link>

                            <NotAccount title="حساب کاربری ندارید؟">
                                <Link
                                    href={routes.auth.registerFree}
                                    className="text-xs lg:text-sm text-blue-light font-semibold"
                                >
                                    ثبت نام
                                </Link>
                            </NotAccount>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page;
