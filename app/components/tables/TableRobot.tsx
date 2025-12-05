"use client";
import React, { useEffect } from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import Link from "next/link";
import NameCryptocurrency from "../global/NameCryptocurrency";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import TimeFrame from "../global/TimeFrame";
import { routes } from "@/app/routes";
import Caption from "../global/Caption";
import { useRouter, useSearchParams } from "next/navigation";
import TotalProfitLoss from "../global/TotalProfitLoss";

type TTableRobotProps = {
  arrow?: boolean;
};

const TableRobot = ({ arrow = false }: TTableRobotProps) => {
  const router = useRouter();

  const params = useSearchParams();

  useEffect(() => {
    const id = params.get("scroll");
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    const offset = -80; // px from top
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, [params]);

  return (
    <div id="toScroll" className="">
      {/* desktop */}
      <div className="lg:block hidden">
        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead className="relative">
            <tr className="text-center border-b-0  ">
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4 rounded-r-xl">نماد </th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4">نام ارز</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4"> تایم فریم </th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4 rounded-l-xl">درصد سود و زیان‌</th>
            </tr>
            <span className="absolute flex size-3 top-1 left-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </thead>
          {Array.from({ length: 1 }).map((item, idx) => {
            return (
              <tr
                onClick={() => router.push("/dedicated-currency")}
                key={idx}
                className="bg-transparent cursor-pointer shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
              >
                <td className="flex justify-center items-center gap-2">
                  <CryptocurrencyLogo>
                    <Image
                      className=""
                      src="/img/cryptocurrency/3.svg"
                      alt="Cryptocurrency logo"
                      width={40}
                      height={40}
                    />
                  </CryptocurrencyLogo>
                </td>
                <td className="px-1">
                  <Link href={routes.dedicatedCurrency}>
                    <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                      <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                      <span className="text-gray800 text-sm ms-1 ">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </Link>
                </td>
                <td>
                  <TimeFrame className="text-xs text-dark">{"1h"}</TimeFrame>
                </td>

                <td className="">
                  <UpDownBtn showIcon>{"+1.05%"}</UpDownBtn>
                </td>
              </tr>
            );
          })}

          {/* divider */}
          <div className="h-[1rem]"></div>
          <div className=" w-full absolute">
            <TotalProfitLoss />
          </div>
          <div className="h-[4rem]"></div>
          {/* divider */}

          {/* head */}
          <thead>
            <tr className="text-center border-b-0  ">
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4 rounded-r-xl">نماد </th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4">نام ارز</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4"> تایم فریم </th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4 rounded-l-xl">
                درصد سود و زیان‌
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              return (
                <tr
                  onClick={() => router.push("/dedicated-currency")}
                  key={idx}
                  className="bg-transparent cursor-pointer shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                >
                  <td className="flex justify-center items-center gap-2">
                    <CryptocurrencyLogo>
                      <Image
                        className=""
                        src="/img/cryptocurrency/3.svg"
                        alt="Cryptocurrency logo"
                        width={40}
                        height={40}
                      />
                    </CryptocurrencyLogo>
                  </td>
                  <td className="px-1">
                    <Link href={routes.dedicatedCurrency}>
                      <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                        <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                        <span className="text-gray800 text-sm ms-1 ">{"(بیتکوین)"}</span>
                      </NameCryptocurrency>
                    </Link>
                  </td>
                  <td>
                    <TimeFrame className="text-xs text-dark">{"1h"}</TimeFrame>
                  </td>

                  <td className="">
                    <UpDownBtn showIcon>{"+1.05%"}</UpDownBtn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* mobile */}
      <div className="lg:hidden relative block">
        {/* divider */}
        <div className="h-[1rem]"></div>
        <div className=" w-full absolute">
          <TotalProfitLoss />
        </div>
        <div className="h-[4rem]"></div>
        {/* divider */}

        {Array.from({ length: 10 }).map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-between shadow-2xl bg-white rounded-xl px-3 mb-2 py-2 relative"
            >
              <Link href={routes.dedicatedCurrency} className={"absolute z-1 inset-0"} />
              <div className="flex items-center gap-2">
                <CryptocurrencyLogo>
                  <div className="">
                    <Image
                      className=""
                      src="/img/cryptocurrency/Cryptocurrency.svg"
                      alt="Cryptocurrency logo"
                      width={40}
                      height={40}
                    />
                  </div>
                </CryptocurrencyLogo>

                <NameCryptocurrency parentClassName="flex-col items-center justify-center gap-1">
                  <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 text-sm  ">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </div>
              <div className="flex flex-col items-end justify-end ">
                <div className="flex items-center">
                  <UpDownBtn showIcon arrow={arrow} className="!px-4">
                    {"+1.05%"}
                  </UpDownBtn>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <Caption className="text-gray800 text-xs ">{" تایم فریم"}</Caption>
                  <TimeFrame className="text-xs text-dark ">{"1h"}</TimeFrame>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableRobot;
