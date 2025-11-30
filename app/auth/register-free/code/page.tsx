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

                    {/* step 2 */}
                    <div className="w-full mt-8 ">
                        <form action="" className="flex flex-col gap-6 w-full">
                            <div className="flex flex-col gap-2 w-full">
                                <LoginInput
                                    label="رمز یکبار مصرف ارسالی به شماره 989142314568+ را وارد نمایید"
                                    className="text-right"
                                    placeholder="رمز یکبار مصرف"
                                ></LoginInput>
                                <DisposableCode />
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
                                        href={routes.auth.login}
                                        className="text-xs lg:text-sm text-blue-light font-semibold"
                                    >
                                        ورود
                                    </Link>
                                </NotAccount>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Step 3 */}
                <BinexMessage
                    title="ثبت نام شما با موفقیت انجام شد و ۷ روز استفاده آزمایشی شما از باینکس از این لحظه آغاز شد."
                    text="شما در این ۷ روز به داشبورد اختصاصی باینکس و سایر ویژگی های آن از جمله فعال سازی ربات ها و شروع معاملات خودکار، دسترسی دارید."
                >
                    <LogoBinex />
                </BinexMessage>
            </div>
        </>
    );
}

export default Page;
