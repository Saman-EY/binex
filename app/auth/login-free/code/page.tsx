import React from "react";
import TimerFreeBox from "@/app/components/global/TimerFreeBox";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import ArrowLeftIcon from "@/app/components/icons/ArrowLeftIcon";
import DisposableCode from "@/app/components/login-sign-up/DisposableCode";
import LoginInput from "@/app/components/login-sign-up/LoginInput";
import LoginSevenFree from "@/app/components/login-sign-up/LoginSevenFree";
import LoginSignupHeader from "@/app/components/login-sign-up/LoginSignupHeader";
import NotAccount from "@/app/components/login-sign-up/NotAccount";
import { routes } from "@/app/routes";
import Link from "next/link";

function Page() {
    return (
        <>
            <div className="flex flex-col items-center w-full gap-8 max-w-[500px] mx-auto justify-center lg:pt-[15%]">
                <LoginSignupHeader title="ورود به داشبورد" />
                {/* step 2 */}
                <div className="flex-col gap-8 w-full flex">
                    <div className="">
                        <TimerFreeBox source="auth">
                            <LoginSevenFree />
                        </TimerFreeBox>
                    </div>
                    <form action="" className="">
                        <div className="mb-1">
                            <LoginInput
                                label="رمز یکبار مصرف ارسالی به شماره 989142314568+ را وارد نمایید"
                                className="text-right"
                                placeholder="رمز یکبار مصرف"
                            ></LoginInput>
                        </div>
                        <DisposableCode />
                        <br />
                        <div className="flex flex-col gap-1">
                            <Link href={routes.dashboard.binanceMarket}>
                                <ButtonPrimary className=" ~lg:!py-3">
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
