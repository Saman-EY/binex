import React from "react";
import LogoBinex from "../../components/icons/LogoBinex";
import LoginInput from "../../components/login-sign-up/LoginInput";
import Link from "next/link";
import ButtonBinex from "../../components/global/button/ButtonBinex";
import GoogleIcon from "../../components/icons/GoogleIcon";
import ButtonPrimary from "../../components/global/button/ButtonPrimary";
import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon";
import NotAccount from "../../components/login-sign-up/NotAccount";
import LoginSignupHeader from "@/app/components/login-sign-up/LoginSignupHeader";
import { routes } from "@/app/routes";

function Page() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-8 max-w-[500px] mx-auto justify-center lg:pt-[15%]">
        <LoginSignupHeader title="ورود به داشبورد"></LoginSignupHeader>
        <div className="w-full">
          <div className="flex flex-col">
            <div className="mb-4">
              <LoginInput
                label="شماره موبایل خود را وارد نمایید"
                placeholder="+98"
                name="mobile"
              ></LoginInput>
            </div>
            <div className="">
              <LoginInput
                label="رمز عبور خود را وارد نمایید"
                placeholder=""
                type="password"
                eye
              ></LoginInput>
            </div>
            <div className="flex items-start justify-start mt-2">
              <Link href={routes.auth.resetPassword}>
                <span className="text-xs font-semibold text-blue-light">
                  فراموشی رمز عبور
                </span>
              </Link>
            </div>
            <div className="flex flex-col w-full gap-3 lg:mt-8 mt-4">
              <div className="flex items-center gap-1 justify-center ">
                <div className="w-[200px] h-[1px] bg-line "></div>
                <span className="text-sm text-gray800">یا</span>
                <div className="w-[200px] h-[1px] bg-line "></div>
              </div>
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
                  <Link href={routes.auth.register} className="text-xs lg:text-sm lg:font-semibold text-blue-light">
                      ثبت نام
                  </Link>
                </NotAccount>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
