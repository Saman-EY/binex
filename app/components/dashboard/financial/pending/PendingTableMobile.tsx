"use client";

import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import TextInfo from "@/app/components/global/TextInfo";
import Image from "next/image";
import ProfitLossContent from "../../ProfitLoss/ProfitLossContent";
import UpDownBtn from "@/app/components/global/UpDownBtn";
import Link from "next/link";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import ChevronDownIcon from "@/app/components/icons/ChevronDownIcon";
import React, { useState } from "react";
import { cn } from "@/utils";
import {routes} from "@/app/routes";

function PendingTableMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "border border-gray400 bg-white rounded-2xl px-0 pt-4 pb-5 w-full relative transition-[max-height] overflow-hidden max-h-[108px]",
          open && "max-h-[1000px] border-dark800 shadow-lg"
        )}
      >
         <div className="absolute inset-0 flex justify-center pb-1.5 items-end" onClick={(e) => setOpen(!open)}>
          <i
            className={cn("text-black  transition", open && "rotate-180")}
            
          >
            <ChevronDownIcon />
          </i>
        </div>
        <div className="flex flex-col px-3 pb-2 pt-0">
          <div className="flex items-center justify-between b border-b border-line pb-2">
            <div className="flex items-center gap-2">
              <CryptocurrencyLogo className="!p-[2px] !h-9 !w-9">
                <Image
                  src="/img/cryptocurrency/Cryptocurrency.svg"
                  alt="Cryptocurrency logo"
                  width={45}
                  height={45}
                />
              </CryptocurrencyLogo>
              <NameCryptocurrency parentClassName="flex-col items-end">
                <span className="font-semibold">
                  {"BTC"}
                </span>
                <span className="text-gray800 text-xs  mt-1">{"بیت کوین"}</span>
              </NameCryptocurrency>
            </div>
            <div className="flex flex-col gap-1 items-end justify-end">
              <UpDownBtn className="text-nowrap !text-[10px] px-3 !py-2 !bg-blue">
                {"در انتظار پرداخت"}
              </UpDownBtn>
            </div>
          </div>

          <div className="flex items-center justify-between flex-col w-full gap-2 mt-2">
            <div className="w-full">
              <ProfitLossContent
                parentclassName="flex-row items-center justify-between gap-2 py-1 w-full"
                title="آخرین مهلت پرداخت"
                className="!text-dark"
              >
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-gray900">{"1402/11/16"}</span>
                  <span className="text-gray800 text-[11px]">{"(14:45)"}</span>
                </TextInfo>
              </ProfitLossContent>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between flex-col w-full gap-2 px-4">
          <div className="flex items-center justify-between flex-col w-full gap-2">
            <div className="w-full">
              <ProfitLossContent
                parentclassName="flex-row items-center justify-between gap-2 py-1 w-full py-1"
                title="مبلغ "
                className="!text-dark"
              >
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-gray900 font-bold">
                    {"14.4145"}
                  </span>
                  <span className="text-gray800 text-[11px]">{"(تومان)"}</span>
                </TextInfo>
              </ProfitLossContent>
            </div>
            <div className="w-full">
              <ProfitLossContent
                parentclassName="flex-row items-center justify-between gap-2 py-1 w-full py-1"
                title="موضوع  "
                className="!text-dark"
              >
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-dark font-semibold">
                    {"تمدید اشتراک ربات "}
                  </span>
                </TextInfo>
              </ProfitLossContent>
            </div>
            <div className="w-full  z-[20]">
              <Link href={routes.dashboard.subscription.purchase1} className="w-full">
                <ButtonBinex className="!bg-dark800 !py-2 ">
                  <span className="flex items-center gap-1 justify-center">
                    پرداخت
                  </span>
                </ButtonBinex>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingTableMobile;
