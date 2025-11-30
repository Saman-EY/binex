"use client";
import { useState } from "react";
import LoginInput from "./LoginInput";
import AcceptTermsBinex from "./AcceptTermsBinex";
import ButtonPrimary from "../global/button/ButtonPrimary";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import NotAccount from "./NotAccount";
import { routes } from "@/app/routes";
import Link from "next/link";
import DisposableCode from "./DisposableCode";
import BinexMessage from "./BinexMessage";
import LogoBinex from "../icons/LogoBinex";
import LoginSignupHeader from "./LoginSignupHeader";

const RegisterPage = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <div className="flex items-center justify-center gap-4 w-full flex-col">
                <LoginSignupHeader title="ثبت نام" />

                {step === 1 && (
                    <div className="w-full">
                        <form action="" className="flex flex-col gap-6">
                            <div className="">
                                <LoginInput
                                    label="شماره موبایل خود را وارد نمایید"
                                    className="text-end"
                                    placeholder="+98"
                                ></LoginInput>
                            </div>
                            <div className="">
                                <LoginInput
                                    label="رمز عبور خود را وارد نمایید"
                                    className="text-end"
                                    placeholder=""
                                    eye
                                    type="password"
                                ></LoginInput>
                            </div>
                            <div className="flex flex-col gap-2">
                                <LoginInput
                                    label="رمز عبور خود را مجددا وارد نمایید"
                                    className="text-end"
                                    placeholder=""
                                    eye
                                    type="password"
                                ></LoginInput>
                                <AcceptTermsBinex />
                            </div>

                            <div className="flex flex-col gap-1">
                                <ButtonPrimary
                                    className="~lg:!py-3"
                                    onClick={() => setStep(2)}
                                >
                                    <span className="gap-1 flex items-center justify-center">
                                        تایید و ادامه
                                        <i>
                                            <ArrowLeftIcon />
                                        </i>
                                    </span>
                                </ButtonPrimary>

                                <NotAccount title="حساب کاربری دارید؟">
                                    <Link
                                        href={routes.auth.login}
                                        className="text-blue-light lg:font-semibold text-xs"
                                    >
                                        ورود
                                    </Link>
                                </NotAccount>
                            </div>
                        </form>
                    </div>
                )}
                {step === 2 && (
                    <div className="flex fle-col w-full mt-6">
                        <form action="" className="w-full">
                            <div className="mb-1">
                                <LoginInput
                                    label="رمز یکبار مصرف ارسالی به شماره 989142314568+ را وارد نمایید"
                                    className="text-right"
                                    placeholder="رمز یکبار مصرف"
                                ></LoginInput>
                            </div>
                            <div className="mb-8">
                                <DisposableCode />
                            </div>
                            <div className="flex flex-col gap-1">
                                <ButtonPrimary
                                    className=" ~lg:!py-3"
                                    onClick={() => setStep(3)}
                                >
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
                                        className="text-xs lg:text-sm lg:font-semibold"
                                    >
                                        ورود
                                    </Link>
                                </NotAccount>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            {/* step 3 */}
            {step === 3 && (
                <div className="">
                    <BinexMessage
                        title=" ثبت نام شما با موفقیت در باینکس انجام شد."
                        text="شما می‌توانید با استفاده از شماره موبایل و رمزعبور وارد شده، وارد داشبورد اختصاصی خود شوید."
                    >
                        <LogoBinex />
                    </BinexMessage>
                </div>
            )}
        </>
    );
};

export default RegisterPage;
