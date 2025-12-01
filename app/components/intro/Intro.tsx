import React from "react";
import Image from "next/image";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import Link from "next/link";
import { routes } from "@/app/routes";

function Intro() {
  return (
    <div className="container mx-auto">
      <h6 className="text-3xl font-lily text-center font-semibold block lg:hidden mt-5">Number Never Lie</h6>
      <div className="lg:flex-row flex flex-col-reverse items-center justify-between mt-8 lg:mx-8 mx-4 mb-20 gap-y-8">
        <div className="~lg:w-full">
          <h6 className="text-2xl font-lily text-center font-semibold hidden lg:block">Number Never Lie</h6>
          <div className="flex items-center">
            <div className="">
              <Image
                className="mobile:w-14"
                src="/img/icone/binex-robot.png"
                alt="binex Logo"
                width={80}
                height={108}
              />
            </div>

            <div className="flex flex-col lg:items-start items-start gap-y-3">
              <span className="lg:text-2xl text-nowrap text-xs text-blue900 order-2 lg:order-1">
                <b className="font-bold">باینکس،</b> پلتفرم ربات‌های معامله‌گر بازار کریپتو
              </span>
              <span className="text-dark text-2xl lg:text-[45px] font-black order-1 lg:order-2">
                ربات‌های تریدر باینکس
              </span>
            </div>
          </div>
          <div className="flex items-center w-full gap-2 lg:mt-6 mt-4">
            <Link href={routes.auth.loginFree} className="basis-1/2 grow">
              <ButtonPrimary className="px-0 bg-yellow text-dark font-extrabold leading-4">
                نسخه دمو
              </ButtonPrimary>
            </Link>
            <Link href={routes.auth.register} className="basis-1/2 grow ">
              <ButtonBinex className="px-0">{"ثبت نام"}</ButtonBinex>
            </Link>
          </div>
        </div>

        <div className="flex items-end">
          <Image className="object-cover" src="/img/landing.png" alt="binex Logo" width={400} height={340} />
        </div>
      </div>
    </div>
  );
}

export default Intro;
