"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import TextInfo from "../../global/TextInfo";
import ButtonSellBuy from "../../global/button/ButtonSellBuy";
import UpDownBtn from "../../global/UpDownBtn";
import { cn } from "@/utils";
import {routes} from "@/app/routes";

type TTableDThreeProps = {};

const TableDThree = (props: TTableDThreeProps) => {

  return (
    <>
      <div
        className={cn(
          "min-h-[250px] overflow-x-scroll"
        )}
      >
        {/* desktop */}
        <div className="lg:block hidden">
          <table className="table border-spacing-y-2 border-separate">
            {/* head */}
            <thead>
              <tr className="text-center border-b-0  ">
                <th className="text-white text-sm font-medium bg-dark800  rounded-r-xl">
                  نماد و نام ارز
                </th>
                <th className="text-white text-sm font-medium bg-dark800 ">
                  {" "}
                  تاریخ
                </th>
                <th className="text-white text-sm font-medium bg-dark800 ">
                  {" "}
                  قیمت آغازین
                </th>
                <th className="text-white text-sm font-medium bg-dark800 ">
                  قیمت پایانی
                </th>
                <th className="text-white text-sm font-medium bg-dark800 ">
                  {" "}
                  پوزیشن
                </th>
                <th className="text-white text-sm font-medium bg-dark800  rounded-l-xl">
                  درصد سود و زیان‌
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {Array.from({ length: 10 }).map((item, idx) => {
                return (
                  <tr key={idx} className=" border-b-0 text-center ">
                    <td className="bg-white rounded-r-xl">
                      <Link href={routes.dashboard.binanceMarket2} className="flex justify-center items-center gap-2 ">
                        <CryptocurrencyLogo>
                          <Image
                            className=""
                            src="/img/cryptocurrency/3.svg"
                            alt="Cryptocurrency logo"
                            width={40}
                            height={40}
                          />
                        </CryptocurrencyLogo>
                        <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                          <span className="text-base text-gray900 font-semibold">
                            {"BTC"}
                          </span>
                          <span className="text-gray800 text-sm ms-1 ">
                            {"(بیتکوین)"}
                          </span>
                        </NameCryptocurrency>
                      </Link>
                    </td>
                    <td className="bg-white">
                      <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-gray900">
                          {"1402/11/16"}
                        </span>
                        <span className="text-gray800 text-xs ms-1">
                          {"(14:45)"}
                        </span>
                      </TextInfo>
                    </td>
                    <td className="bg-white">
                      <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-gray900">
                          {"145,145,541"}
                        </span>
                        <span className="text-gray800 text-xs ms-1">
                          {"(تتر)"}
                        </span>
                      </TextInfo>
                    </td>
                    <td className="bg-white">
                      <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-gray900">
                          {"145,145,541"}
                        </span>
                        <span className="text-gray800 text-xs ms-1">
                          {"(تتر)"}
                        </span>
                      </TextInfo>
                    </td>
                    <td className="bg-white">
                      <div className="flex justify-center items-center">
                        <Link href={"#"} className="w-full">
                          <ButtonSellBuy sell={idx % 2 === 0} />
                        </Link>
                      </div>
                    </td>
                    <td className="bg-white rounded-l-xl">
                      <UpDownBtn showIcon>{"+1.05%"}</UpDownBtn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* mobile */}
        <div className="lg:hidden block">
          <table className="table border-spacing-y-2 border-separate">
            {/* head */}
            <thead>
              <tr className="text-center border-b-0  ">
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1 rounded-r-xl">
                  نام ارز
                </th>
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1">
                  تاریخ
                </th>
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1">
                  قیمت آغازین
                </th>
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1">
                  قیمت پایانی
                </th>
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1">
                  پوزیشن
                </th>
                <th className="whitespace-break-spaces text-gray900 text-xs font-medium bg-head-table-color py-3 px-1 rounded-l-xl">
                  درصد سود و زیان‌
                </th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {Array.from({ length: 10 }).map((item, idx) => {
                return (
                  <tr
                    key={idx}
                    className="bg-transparent shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                  >
                    <td className="bg-white rounded-r-xl px-1">
                      <Link href={routes.dashboard.binanceMarket2} className=" flex justify-center items-center gap-2 ">
                        <NameCryptocurrency parentClassName="flex-col items-center justify-center ">
                          <span className="text-sm text-gray900 font-semibold">
                            {"BTC"}
                          </span>
                          <span className="text-gray800 text-[11px]">
                            {"(بیتکوین)"}
                          </span>
                        </NameCryptocurrency>
                      </Link>
                    </td>
                    <td className="bg-white px-0">
                      <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                        <span className="text-[11px] text-gray900">
                          {"1402/11/16"}
                        </span>
                        <span className="text-gray800 text-[11px]">
                          {"(14:45)"}
                        </span>
                      </TextInfo>
                    </td>
                    <td className="bg-white px-1">
                      <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                        <span className="text-[11px] text-gray900">
                          {"14.41"}
                        </span>
                        <span className="text-gray800 text-[11px]">
                          {"(تتر)"}
                        </span>
                      </TextInfo>
                    </td>
                    <td className="bg-white px-1">
                      <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                        <span className="text-[11px] text-gray900">
                          {"15.21"}
                        </span>
                        <span className="text-gray800 text-[11px]">
                          {"(تتر)"}
                        </span>
                      </TextInfo>
                    </td>

                    <td className="bg-white px-0">
                      <div className=" flex justify-center items-center">
                        <Link href={"#"} className="w-full">
                          <ButtonSellBuy
                            className="!px-0 text-bold "
                            sell={idx % 3 === 0}
                          />
                        </Link>
                      </div>
                    </td>
                    <td className="bg-white px-1 rounded-l-xl">
                      <UpDownBtn className="!min-w-[64px]">{"+1.05%"}</UpDownBtn>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableDThree;
