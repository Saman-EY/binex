"use client";

import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import RobotName from "@/app/components/global/RobotName";
import TimeFrame from "@/app/components/global/TimeFrame";
import UpDownBtn, { Chevron } from "@/app/components/global/UpDownBtn";
import Image from "next/image";
import React, { useState } from "react";
import ProfitLossContent from "../../ProfitLoss/ProfitLossContent";
import TextInfo from "@/app/components/global/TextInfo";
import ChevronDownIcon from "@/app/components/icons/ChevronDownIcon";
import { cn } from "@/utils";
import Link from "next/link";
import { routes } from "@/app/routes";

function OrderHistoryBox() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "border border-gray400 bg-white rounded-2xl px-2 py-4 w-full relative transition-[max-height] overflow-hidden max-h-[7.5rem]",
          open && "max-h-[1000px] border-dark800 shadow-lg"
        )}
      >
        <div
          className="absolute inset-[50%_0_0_0] flex justify-center pb-1.5 items-end"
          onClick={(e) => setOpen(!open)}
        >
          <i className={cn("text-black  transition scale-[1.6]", open && "rotate-180")}>
            <ChevronDownIcon />
          </i>
        </div>
        <div className="flex flex-col px-3 pb-0.5 pt-0">
          <div className="flex w-full justify-between items-center  border-b border-line pb-2">
            <Link href={routes.dashboard.binanceMarket2} className="flex items-center gap-2">
              <CryptocurrencyLogo className="!p-[2px] !h-11 !w-11">
                <div className="">
                  <Image
                    className=""
                    src="/img/cryptocurrency/Cryptocurrency.svg"
                    alt="Cryptocurrency logo"
                    width={45}
                    height={45}
                  />
                </div>
              </CryptocurrencyLogo>
              <NameCryptocurrency parentClassName="flex-col items-end">
                <span className="text-[18px] text-dark-black font-semibold">{"LTD"}</span>
                <span className="text-gray800 text-xs  mt-1">{"Binance"}</span>
              </NameCryptocurrency>
            </Link>
            <div className="flex flex-col gap-2 items-end justify-end">
              <div className="flex items-center gap-1 ">
                <TimeFrame className="text-sm font-semibold text-dark ">{"1h"}</TimeFrame>
                <UpDownBtn className="text-nowrap !text-xxs px-8 !py-2 !bg-up">{"موفق"}</UpDownBtn>
              </div>
              <div className="">
                <RobotName parentClassName="flex ">
                  <Image
                    className="object-cover"
                    src={"/img/robots/NEXUS.png"}
                    alt="robot logo"
                    width={38}
                    height={38}
                  />
                  <span className="text-base text-dark-black font-semibold">{"Nexus"}</span>
                  {/* <span className="text-gray800 text-xxs ms-1">{"(Nexus) "}</span> */}
                </RobotName>
              </div>
            </div>
          </div>
          <div className="w-full pt-2 ">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 py-1 w-full"
              title="ساعت و تاریخ معامله "
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px] text-xxs">
                <span className="text-gray900">{"1402/11/16"}</span>
                <span className="text-gray800">{"(14:45)"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
        </div>

        <div className="flex items-center justify-between flex-col w-full  p-3 pt-0">
          <div className="w-full">
            <ProfitLossContent parentclassName="flex-row items-center justify-between gap-2 w-full py-1" title="پوزیشن">
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-xs text-success font-bold">{"Buy"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
          <div className="w-full">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
              title="مبلغ شروع معامله"
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-xs text-gray900 font-bold">{"150"}</span>
                <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
          <div className="w-full">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
              title="قیمت شروع"
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-xs text-gray900 font-bold">{"13.25"}</span>
                <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
          <div className="w-full">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
              title="قیمت پایان"
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-xs text-gray900 font-bold">{"12.25"}</span>
                <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
          <div className="w-full">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
              title="درصد سود و زیان"
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-sm text-down font-semibold flex items-center gap-2">
                  {"4.05%"}- <Chevron negative={true} />
                </span>
              </TextInfo>
            </ProfitLossContent>
          </div>
          <div className="w-full">
            <ProfitLossContent
              parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
              title="مبلغ سود و زیان"
            >
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="text-xs text-down font-semibold">{"1"}</span>
                <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
              </TextInfo>
            </ProfitLossContent>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistoryBox;
