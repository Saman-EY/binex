"use client";

import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import Link from "next/link";
import NameCryptocurrency from "../global/NameCryptocurrency";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import { routes } from "@/app/routes";
import { useRouter } from "next/navigation";

type TTableOneProps = {
  arrow?: boolean;
  forceSign?: number;
};

const TableOne = ({ arrow, forceSign }: TTableOneProps) => {
  const router = useRouter();

  return (
    <div className="my-4">
      {/* desktop */}
      <div className="lg:block hidden">
        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead>
            <tr className="text-center border-b-0  ">
              <th className="text-dark text-base font-medium bg-head-table-color py-4 rounded-r-xl">نماد</th>
              <th className="text-dark text-base font-medium bg-head-table-color py-4">نام ارز</th>
              <th className="text-dark text-base font-medium bg-head-table-color py-4">تایم فریم</th>
              <th className="text-dark text-base font-medium bg-head-table-color py-4"> درصد سود و زیان</th>
              <th className="text-dark text-base font-medium bg-head-table-color py-4"> ربات</th>
              <th className="text-dark text-base font-medium bg-head-table-color py-4 rounded-l-xl">صفحه اختصاصی</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              let amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);
              if (forceSign && ((forceSign > 0 && amount < 0) || (forceSign < 0 && amount > 0))) {
                amount *= -1;
              }
              return (
                <tr
                  onClick={() => router.push(routes.dedicatedCurrency)}
                  key={idx}
                  className="bg-transparent cursor-pointer shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                >
                  <td className="flex justify-center">
                    <CryptocurrencyLogo>
                      <Image
                        src="/img/cryptocurrency/Cryptocurrency.svg"
                        alt="Cryptocurrency logo"
                        width={40}
                        height={40}
                      />
                    </CryptocurrencyLogo>
                  </td>
                  <td>
                    <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                      <Link href={routes.dedicatedCurrency} className="text-base text-gray900 font-semibold">
                        {"BTC"}
                      </Link>
                      <span className="text-gray800 text-sm ms-1 ">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </td>
                  <td>
                    <TimeFrame className="text-sm text-dark">{"1h"}</TimeFrame>
                  </td>
                  <td>
                    <UpDownBtn showIcon arrow={arrow} negative={amount < 0}>
                      {amount > 0 && "+"}
                      {amount}%
                    </UpDownBtn>
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <Link href={"/robot-info/neo"}>
                      <RobotName parentClassName="">
                        <Image className="size-7 ml-2" width={50} height={50} src="/img/robots/PRIME.png" alt="" />
                        <span className="text-xs text-gray900">{"پرایم"}</span>
                        <span className="text-gray800 text-xs ms-1">{"(Prime) "}</span>
                      </RobotName>
                    </Link>
                  </td>
                  <td>
                    <Link href={routes.dedicatedCurrency}>
                      <span className="text-dark text-sm font-medium">مشاهده</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <div className="lg:hidden block">
        {Array.from({ length: 10 }).map((item, idx) => {
          let amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);
          if (forceSign && ((forceSign > 0 && amount < 0) || (forceSign < 0 && amount > 0))) {
            amount *= -1;
          }
          return (
            <div
              onClick={() => router.push(routes.dedicatedCurrency)}
              key={idx}
              className="flex cursor-pointer items-center justify-between shadow-2xl bg-white rounded-xl px-3 mb-2 py-2 relative"
            >
              <div className="flex items-center gap-2">
                <CryptocurrencyLogo>
                  <Image
                    className=""
                    src="/img/cryptocurrency/Cryptocurrency.svg"
                    alt="Cryptocurrency logo"
                    width={40}
                    height={40}
                  />
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="flex-col items-start justify-center gap-1">
                  <span className="text-sm text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 text-xs">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </div>
              <div className="flex flex-col items-end justify-end ">
                <div className="flex items-center">
                  <TimeFrame className="text-sm text-dark font-semibold">{"1h"}</TimeFrame>
                  <UpDownBtn showIcon arrow={arrow} className="min-w-[64px] text-center" negative={amount < 0}>
                    {amount > 0 && "+"}
                    {amount}%
                  </UpDownBtn>
                </div>
                <div onClick={(e) => e.stopPropagation()} className="mt-1">
                  <Link className="flex items-center justify-center" href={"/robot-info/neo"}>
                    <Image className="size-7 ml-2" width={50} height={50} src="/img/robots/ASTRA.png" alt="" />
                    <span className="text-xs text-gray900">{"آسترا"}</span>
                    <span className="text-blue-light-2 text-xxs ms-1">{"(Astra) "}</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableOne;
