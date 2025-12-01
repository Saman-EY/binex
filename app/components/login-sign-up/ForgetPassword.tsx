"use client";

import LoginSignupHeader from "@/app/components/login-sign-up/LoginSignupHeader";
import LoginInput from "@/app/components/login-sign-up/LoginInput";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import ArrowLeftIcon from "@icons/ArrowLeftIcon";
import NotAccount from "@/app/components/login-sign-up/NotAccount";
import Link from "next/link";
import { routes } from "@/app/routes";
import DisposableCode from "@/app/components/login-sign-up/DisposableCode";
import BinexMessage from "@/app/components/login-sign-up/BinexMessage";
import React, { FormEvent, FormEventHandler, useState } from "react";

const ForgetPassword = ({}: {}) => {
    const [step, setStep] = useState(1);

    if (step === 3) {
        return (
            <BinexMessage
                title="رمز عبور شما با موفقیت تغییر کرد."
                text="اکنون می‌توانید با استفاده از شماره همراه و رمز‌عبور جدید، وارد داشبورد اختصاصی خود شوید."
            >
                <LoginSignupHeader title="" />
            </BinexMessage>
        );
    }
    return (
        <div className="flex items-center justify-center gap-4 w-full flex-col">
            <LoginSignupHeader title="فراموشی رمز عبور" />
            {/* step 1 */}
            {step === 1 ? (
                <div className="w-full mt-8 aaa ">
                    <div className="flex flex-col gap-6">
                        <LoginInput
                            label="برای تغییر رمز عبور، ایمیل خود را وارد نمایید"
                            className="text-end"
                        ></LoginInput>
                        <div className="flex flex-col gap-1">
                            <ButtonPrimary
                                className="~lg:!py-3"
                                onClick={() => setStep(2)}
                                type={"button"}
                            >
                                <span className=" gap-1 flex items-center justify-center">
                                    تایید و ادامه
                                    <i>
                                        <ArrowLeftIcon />
                                    </i>
                                </span>
                            </ButtonPrimary>

                            <NotAccount title="حساب کاربری ندارید؟">
                                <Link
                                    href={routes.auth.register}
                                    className="text-xs lg:text-sm font-semibold text-blue-light"
                                >
                                    ثبت نام
                                </Link>
                            </NotAccount>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full mt-8 ">
                    <div className="flex flex-col gap-6">
                        <div className="">
                            <LoginInput
                                label="رمز یکبار مصرف ارسالی به شماره 989142314568+ را وارد نمایید"
                                className="text-right"
                                placeholder="رمز یکبار مصرف"
                            ></LoginInput>
                            <DisposableCode />
                        </div>

                        <div className="flex flex-col gap-1">
                            <ButtonPrimary
                                className="  ~lg:!py-3"
                                onClick={() => setStep(3)}
                            >
                                <span className=" gap-1 flex items-center justify-center">
                                    تایید و ادامه
                                    <i>
                                        <ArrowLeftIcon />
                                    </i>
                                </span>
                            </ButtonPrimary>

                            <NotAccount title="حساب کاربری ندارید؟">
                                <Link
                                    href={routes.auth.register}
                                    className="text-xs lg:text-sm font-semibold text-blue-light"
                                >
                                    ثبت نام
                                </Link>
                            </NotAccount>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ForgetPassword;
