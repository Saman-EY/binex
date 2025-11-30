"use client";

import React from "react";
import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import TableContent from "../../TablesDash/TableContent";
import Image from "next/image";
import NameExchange from "@/app/components/global/NameExchange";
import TextInfo from "@/app/components/global/TextInfo";
import TimeFrame from "@/app/components/global/TimeFrame";
import { cn } from "@/utils";
import ChevronDownIcon from "@/app/components/icons/ChevronDownIcon";
import {CurrencyItem} from "@/api/types";

type TProps = {
  active: CurrencyItem;
  open: CurrencyItem | undefined;
  setActive: React.Dispatch<CurrencyItem>;
  setOpen: React.Dispatch<CurrencyItem | undefined>;
  currencies: CurrencyItem[]
};
function AccordionAllMyCurrencies({
  active,
  setActive,
  open,
  setOpen,
  currencies
}: TProps) {
  return (
    <>
      {currencies.map((curr) => {
        return (
          <div
            className={cn(
              "bg-white border border-line transition-[max-height] overflow-hidden rounded-2xl",
              open?.id === curr.id ? "max-h-[800px]" : "max-h-[58px]"
            )}
            key={curr.id}
            onClick={(_) => setActive(curr)}
          >
            <div
              role="button"
              className={cn(
                "text-xl font-medium p-2 rounded-t-2xl",
                active.id === curr.id
                  ? "bg-line border border-line"
                  : "rounded-b-2xl"
              )}
            >
              <div className="flex items-center gap-1">
                {curr.icon && <CryptocurrencyLogo>
                  <Image
                      className="w-[32px] aspect-square"
                      src={curr.icon}
                      alt="Cryptocurrency logo"
                      width={100}
                      height={100}
                  />
                </CryptocurrencyLogo>}
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-sm text-gray900 font-semibold">
                    {curr.name}
                  </span>
                </NameCryptocurrency>
                <i
                  className={cn(
                    "ms-auto transition",
                    open?.id === curr.id && "rotate-180"
                  )}
                  onClick={() => setOpen(open?.id === curr.id ? undefined : curr)}
                >
                  <ChevronDownIcon />
                </i>
              </div>
            </div>
            <div className={cn("p-2", active.id === curr.id && "bg-line")}>
              <div className="py-2">
                <div className="">
                  <TableContent
                    title="نام ارز:"
                    className=""
                    parentClassName="!py-1 !border-b-gray400"
                  >
                    <div className="flex lg:flex-row ">
                      <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                        <span className="lg:text-sm text-sm text-dark font-semibold">
                          {curr.name}
                        </span>
                        <span className="text-gray900  text-xs ms-1">
                          ({curr.name_fa})
                        </span>
                      </NameCryptocurrency>
                    </div>
                  </TableContent>
                </div>
                <div className="">
                  <TableContent
                    title="نام صرافی:"
                    className=""
                    parentClassName="!py-1 !border-b-gray400"
                  >
                    <div className="flex lg:flex-row ">
                      <div className="flex items-center gap-1">
                        <NameExchange parentClassName="flex-row items-center gap-1">
                          <span className="lg:text-base text-sm text-dark font-semibold">
                            {"Binance"}
                          </span>
                          <span className="text-gray900 lg:text-sm text-xs">
                            {"(بایننس)"}
                          </span>
                        </NameExchange>
                      </div>
                    </div>
                  </TableContent>
                </div>
                <div className="">
                  <TableContent
                    title="نام ربات:"
                    className=""
                    parentClassName="!py-1 !border-b-gray400"
                  >
                    <div className=" ">
                      <TextInfo parentClassName="flex-row items-center justify-center gap-4">
                        <span className="text-sm text-dark">{" همه"}</span>
                      </TextInfo>
                    </div>
                  </TableContent>
                </div>
                <div className="">
                  <TableContent
                    title="تایم فریم:"
                    className=""
                    parentClassName="!py-1 !border-b-gray400"
                  >
                    <div className="flex items-center gap-1">
                      <TimeFrame className="text-xs text-dark ">
                        {"1h"}
                      </TimeFrame>
                      <TimeFrame className="text-xs text-dark ">
                        {"15m"}
                      </TimeFrame>
                    </div>
                  </TableContent>
                </div>
                <div className="">
                  <TableContent
                    title="مدت زمان:"
                    className=""
                    parentClassName="!py-1 !border-b-0"
                  >
                    <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                      <span className="text-xs text-dark font-semibold">
                        {"15"}
                      </span>
                      <span className="text-gray900 text-xs">{"(روز)"}</span>
                    </TextInfo>
                  </TableContent>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AccordionAllMyCurrencies;

