"use client";

import React from "react";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import UpDownBtn from "../../global/UpDownBtn";
import TimeFrame from "../../global/TimeFrame";
import RobotName from "../../global/RobotName";
import Image from "next/image";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import Link from "next/link";
import { routes } from "@/app/routes";
import { useRouter } from "next/navigation";
import AnimateSpin from "@/app/ui/AnimateSpin";

function MarketTableMobile() {
  const r = useRouter();
  const handleRowClick = () => {
    r.push(routes.dashboard.binanceMarket2);
  };
  return (
    <>
      {/* mobile */}
      <div className="lg:hidden block">
        <table className="table border-spacing-y-1 border-separate">
          {/* head */}
          <thead>
            <tr className="text-center border-b-0  ">
              <th className="text-gray900 text-[11.5px] font-medium bg-head-table-color py-3 px-1 rounded-r-xl">
                {" "}
                نمادو نام ارز
              </th>
              <th className="text-gray900 text-[11.5px] font-medium bg-head-table-color py-3 px-1"> تایم فریم</th>
              <th className="text-gray900 text-[11.5px] font-medium bg-head-table-color py-3 px-1"> ربات</th>
              <th className="text-gray900 text-[11.5px] font-medium bg-head-table-color py-3 px-1 rounded-l-xl">
                سود و زیان روزانه
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 5 }).map((item, idx) => {
              const amount = +String(Math.random() * 10).slice(0, 4) * (Math.random() > 0.5 ? -1 : 1);

              return (
                <tr key={idx} className="border-b-0 text-center relative" onClick={handleRowClick}>
                  <AnimateSpin dir="right" />
                  <td className="flex justify-center items-center gap-2 px-1 bg-white rounded-r-2xl">
                    <Link href={routes.dashboard.binanceMarket2} className="flex items-center">
                      <CryptocurrencyLogo>
                        <Image
                          className=""
                          src="/img/cryptocurrency/Cryptocurrency.svg"
                          alt="Cryptocurrency logo"
                          width={30}
                          height={30}
                        />
                      </CryptocurrencyLogo>
                      <NameCryptocurrency parentClassName="flex-col items-start justify-center ">
                        <span className="text-xs text-gray900 font-semibold ">{"BTC"}</span>
                        <span className="text-gray800 text-[11px]">{"(بیتکوین)"}</span>
                      </NameCryptocurrency>
                    </Link>
                  </td>
                  <td className="px-0 bg-white">
                    <div className="">
                      <TimeFrame className="text-sm font-semibold text-gray900" parentClassName="mx-0">
                        {"1h"}
                      </TimeFrame>
                    </div>
                  </td>
                  <td className="px-0 bg-white">
                    <div className="">
                      <RobotName parentClassName="">
                        <Image className="size-7 ml-3" width={50} height={50} src="/img/robots/X-DATA.png" alt="" />

                        <span className="text-[10px] text-gray900 translate-x-2 font-semibold">{"ایکس-دیتا"}</span>
                        <span className="text-gray400 text-[9px]">{"(X-Data) "}</span>
                      </RobotName>
                    </div>
                  </td>

                  <td className="px-0 bg-white rounded-l-2xl">
                    <UpDownBtn className="min-w-[68px] py-1.5 !text-sm" negative={amount < 0}>
                      {amount > 0 && "+"}
                      {amount}%
                    </UpDownBtn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MarketTableMobile;
