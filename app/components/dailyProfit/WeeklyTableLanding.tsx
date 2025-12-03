"use client";
import React from "react";
import DailyProfit from "./DailyProfit";
import DailyLoss from "./DailyLoss";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import NameCryptocurrency from "../global/NameCryptocurrency";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import clsx from "clsx";
import Link from "next/link";
import ButtonPrimary from "../global/button/ButtonPrimary";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import { routes } from "@/app/routes";

const profits = [1, 2, 3, 4];

function WeeklyTableLanding() {
  const { matches } = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      <section className="w-[85%] mx-auto ">
        <div className="flex lg:flex-row flex-col lg:justify-between items-start mb-4">
          <span className="text-lg text-dark font-bold lg:text-xl ">{"بیشترین سود و زیان هفتگی"}</span>
          <div className="lg:block hidden">
            <Link href={routes.dailyProfitLoss}>
              <span className="bg-blue text-sm text-white rounded-2xl py-2 px-8 font-medium block">{"مشاهده همه"}</span>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden flex-col gap-4 mb-40">
          {/* daily up table  */}
          <div className="bg-[#011e2d] rounded-2xl p-4">
            <div className="grid grid-cols-4 gap-4">
              {profits.map((item, idx) => {
                return (
                  <div className={clsx("col-span-1 py-4", idx > 0 && "border-r border-r-1 pr-2")} key={item}>
                    <DailyProfit />
                  </div>
                );
              })}
            </div>
          </div>
          {/* daily down table  */}
          <div className="bg-[#011e2d] rounded-2xl p-4">
            <div className="grid grid-cols-4 gap-4">
              {profits.map((item, idx) => {
                return (
                  <div className={clsx("col-span-1 py-4", idx > 0 && "border-r border-r-1 pr-2")} key={item}>
                    <DailyLoss />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}
      <div className="overflow-hidden lg:px-4 px-2 bg-gray-200 ~lg:pt-1">
        <div className="lg:hidden min-w-full overflow-x-scroll flex flex-col select-none">
          {/* daily up table  */}
          <div className=" flex items-center gap-2">
            {Array.from({ length: 4 }).map((_, idx) => {
              const amount = +String(Math.random() * 10).slice(0, 5);

              return (
                <Link
                  key={idx}
                  href={routes.dedicatedCurrency}
                  className="flex items-center sm:!min-w-[340px] mobile:min-w-[85%] justify-between bg-dark rounded-2xl px-3 mb-2 py-4"
                >
                  <div className="flex items-center gap-2">
                    <CryptocurrencyLogo className="!p-[2px] !h-9 !w-9">
                      <Image
                        className=""
                        src="/img/cryptocurrency/Cryptocurrency.svg"
                        alt="Cryptocurrency logo"
                        width={45}
                        height={45}
                      />
                    </CryptocurrencyLogo>
                    <NameCryptocurrency parentClassName="flex-col item-end">
                      <span className="text-sm text-white font-semibold">{"BTC"}</span>
                      <span className="text-gray400 text-xs  mt-1">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </div>
                  <div className="flex flex-col items-end justify-end ">
                    <div className="flex items-center">
                      <TimeFrame className="text-xs text-white ">{"1h"}</TimeFrame>
                      <UpDownBtn showIcon arrow className="text-center min-w-[64px] rounded-lg" negative={amount < 0}>
                        {amount > 0 && "+"}
                        {amount}%
                      </UpDownBtn>
                    </div>
                    <div className="mt-1">
                      <RobotName parentClassName="">
                        <Image className="size-7 ml-1" width={50} height={50} src="/img/robots/PRIME.png" alt="" />
                        <div className=" flex flex-col justify-center min-w-[4rem]">
                          <span className="text-xs text-white text-center">{"پرایم"}</span>
                          <span className="text-gray400 text-xs  text-center ">{"(Prime) "}</span>
                        </div>
                      </RobotName>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* daily down table  */}
          <div className=" flex items-center gap-2">
            {Array.from({ length: 4 }).map((_, idx) => {
              return (
                <Link
                  key={idx}
                  href={routes.dedicatedCurrency}
                  className="flex  items-center sm:!min-w-[340px] mobile:min-w-[85%] justify-between  bg-dark rounded-2xl px-3 mb-2 py-4"
                >
                  <div className="flex items-center gap-2">
                    <CryptocurrencyLogo className="!p-[2px] !h-9 !w-9">
                      <Image
                        className=""
                        src="/img/cryptocurrency/Cryptocurrency.svg"
                        alt="Cryptocurrency logo"
                        width={45}
                        height={45}
                      />
                    </CryptocurrencyLogo>
                    <NameCryptocurrency parentClassName="flex-col item-end">
                      <span className="text-sm text-white font-semibold">{"BTC"}</span>
                      <span className="text-gray400 text-xs  mt-1">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </div>
                  <div className="flex flex-col items-end justify-end ">
                    <div className="flex items-center">
                      <TimeFrame className="text-xs text-white ">{"1h"}</TimeFrame>
                      <UpDownBtn showIcon arrow className="text-center min-w-[64px] rounded-lg" negative>
                        {"-1.05%"}
                      </UpDownBtn>
                    </div>
                    <div className="mt-1">
                      <RobotName parentClassName="">
                        <Image className="size-7 ml-1" width={50} height={50} src="/img/robots/NUCLEUS.png" alt="" />
                        <div className="flex flex-col justify-center  min-w-[4rem]">
                          <span className="text-xs text-white text-center">{"نوکلئوس"}</span>
                          <span className="text-gray400 text-xs text-center">{"(Nucleus) "}</span>
                        </div>
                      </RobotName>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="p-4 lg:hidden">
          <Link href={routes.dailyProfitLoss}>
            <ButtonPrimary className="rounded-lg text-sm">{"مشاهده همه"}</ButtonPrimary>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WeeklyTableLanding;
