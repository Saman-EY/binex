"use client";
import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import RobotName from "@/app/components/global/RobotName";
import TimeFrame from "@/app/components/global/TimeFrame";
import UpDownBtn from "@/app/components/global/UpDownBtn";
import Image from "next/image";
import ProfitLossContent from "../../ProfitLoss/ProfitLossContent";
import TextInfo from "@/app/components/global/TextInfo";
import ChevronDownIcon from "@/app/components/icons/ChevronDownIcon";
import React, { useState } from "react";
import { cn } from "@/utils";
import { routes } from "@/app/routes";
import Link from "next/link";
import { Order } from "@/api/orders";
import { p2e } from "../DashboardOrderTable";

function OrderBox({ order }: { order: Order }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "border border-gray400 bg-white rounded-2xl px-2 py-4 w-full relative transition-[max-height] overflow-hidden max-h-[8.2rem]",
        open && "max-h-[1000px] border-dark800 shadow-lg"
      )}
    >
      <div className="absolute inset-[50%_0_0_0] flex justify-center pb-1.5 items-end" onClick={(e) => setOpen(!open)}>
        <i className={cn("text-black  transition scale-[1.6]", open && "rotate-180")}>
          <ChevronDownIcon />
        </i>
      </div>
      <div className="flex flex-col px-3 pb-0.5 pt-0">
        <div className="flex w-full justify-between items-center  border-b border-line pb-2">
          <Link href={routes.dashboard.binanceMarket2} className="flex items-center gap-2">
            <CryptocurrencyLogo className="!p-[2px] !h-11 !w-11">
              <Image src={order.currency.logo} alt="Cryptocurrency logo" width={45} height={45} />
            </CryptocurrencyLogo>
            <NameCryptocurrency parentClassName="flex-col items-end">
              <span className="text-[18px] text-dark-black font-semibold">{order.currency.name_fa}</span>
              <span className="text-gray800 text-xs  mt-1">{order.currency.name}</span>
            </NameCryptocurrency>
          </Link>
          <div className="flex flex-col gap-2 items-end justify-end">
            <div className="flex items-center gap-1 ">
              <TimeFrame className="text-sm font-semibold text-dark ">{order.timeframe}</TimeFrame>
              <UpDownBtn className="text-nowrap !text-xxs px-8 !py-2 !bg-up">{"موفق"}</UpDownBtn>
            </div>
            <div className="">
              <RobotName parentClassName="flex ">
                <Image className="size-7 ml-1" width={50} height={50} src={order.robot.image} alt="" />
                <span className="text-xs text-dark-black font-semibold">{order.robot.name_fa}</span>
                <span className="text-gray800 text-xxs ms-1">({order.robot.name})</span>
              </RobotName>
            </div>
          </div>
        </div>
        <div className="w-full pt-2 ">
          <ProfitLossContent
            parentclassName="flex-row items-center justify-between gap-2 py-1 w-full"
            title="ساعت و تاریخ معامله "
          >
            <TextInfo parentClassName="flex-row items-center justify-center">
              <span className="text-xs text-gray900">{p2e(order.date.toLocaleDateString("fa"))}</span>
              <span className="text-gray800 text-xs ms-1">({p2e(order.date.toLocaleTimeString("fa"))})</span>
            </TextInfo>
          </ProfitLossContent>
        </div>
      </div>

      <div className="flex items-center justify-between flex-col w-full p-3 pt-22">
        <div className="w-full ">
          <ProfitLossContent
            parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
            title="مبلغ شروع معامله"
          >
            <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
              <span className="text-xs text-gray900 font-bold">{"1,352.25"}</span>
              <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
            </TextInfo>
          </ProfitLossContent>
        </div>
      </div>

      <div className="flex items-center justify-between flex-col w-full p-3 pt-22">
        <div className="w-full ">
          <ProfitLossContent
            parentclassName="flex-row items-center justify-between gap-2 w-full py-1"
            title="قیمت آغازین"
          >
            <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
              <span className="text-xs text-gray900 font-bold" dir="ltr">
                {order.start_price}
              </span>
              <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
            </TextInfo>
          </ProfitLossContent>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col w-full p-3 pt-0">
        <div className="w-full ">
          <ProfitLossContent parentclassName="flex-row items-center justify-between gap-2 w-full py-1" title="پوزیشن">
            <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
              <span className={cn("text-xs  font-semibold", order.start_price > 0 ? "text-success" : "text-red-500")}>
                {order.position}
              </span>
            </TextInfo>
          </ProfitLossContent>
        </div>
      </div>
    </div>
  );
}

export default OrderBox;
