"use client";
import React from "react";
import TimeFrame from "@/app/components/global/TimeFrame";
import UpDownBtn from "@/app/components/global/UpDownBtn";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import Image from "next/image";
import RobotName from "../../global/RobotName";
import Link from "next/link";
import { routes } from "@/app/routes";
import { useRouter } from "next/navigation";
import AnimateSpin from "@/app/ui/AnimateSpin";
function TableDTwo() {
  const r = useRouter();
  const handleRowClick = () => {
    r.push(routes.dashboard.binanceMarket2);
  };
  return (
    <>
      {/* desktop */}
      <div className=" hidden lg:block" data-table={"DTwo"}>
        <table className="table block  border-separate border-spacing-y-2">
          {/* head */}
          <thead>
            <tr className="border-b-0 my-2">
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl pl-12">
                نماد و نام ارز
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color">ربات</th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                تایم فریم{" "}
              </th>

              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color  rounded-l-2xl">
                سود و زیان روزانه
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border-b-0" onClick={handleRowClick}>
              <td className="relative text-center bg-white100 rounded-r-2xl ">
                <AnimateSpin dir="right" />
                <Link href={routes.dashboard.binanceMarket2} className="flex gap-1 items-center justify-center">
                  <CryptocurrencyLogo>
                    <div className="">
                      <Image
                        className=""
                        src="/img/cryptocurrency/2.svg"
                        alt="Cryptocurrency logo"
                        width={30}
                        height={30}
                      />
                    </div>
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-start  justify-start flex gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-bold">{"BTC"}</span>
                    <span className="text-gray800 lg:text-xs text-xs">{"(بیتکوین)"}</span>
                  </NameCryptocurrency>
                </Link>
              </td>

              <td className="text-center bg-white100 ">
                <div className="flex flex-row items-center gap-1 justify-center">
                  <Image className="" src="/img/robots/ALGORITHM.png" alt="binex Logo" width={40} height={40} />
                  <span className="text-xs text-gray900">{"الگوریتم"}</span>
                  <span className="text-gray800 text-xs">{"(Algorithm) "}</span>
                </div>
              </td>

              <td className="text-center bg-white100">
                <TimeFrame className="text-sm text-gray900 ">{"1h"}</TimeFrame>
              </td>

              <td className="text-center bg-white100 rounded-l-2xl">
                <UpDownBtn>{"1.2%+"}</UpDownBtn>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="border-b-0" onClick={handleRowClick}>
              <td className="relative text-center bg-white100 rounded-r-2xl ">
                <AnimateSpin dir="right" />
                <Link href={routes.dashboard.binanceMarket2} className="flex gap-1 items-center justify-center">
                  <CryptocurrencyLogo>
                    <div className="">
                      <Image
                        className=""
                        src="/img/cryptocurrency/2.svg"
                        alt="Cryptocurrency logo"
                        width={30}
                        height={30}
                      />
                    </div>
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-start  justify-start flex gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-bold">{"BTC"}</span>
                    <span className="text-gray800 lg:text-xs text-xs">{"(بیتکوین)"}</span>
                  </NameCryptocurrency>
                </Link>
              </td>

              <td className="text-center bg-white100">
                <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                  <Image className="" src="/img/robots/NOVA.png" alt="binex Logo" width={40} height={40} />
                  <span className="text-xs text-gray900">{"نوا"}</span>
                  <span className="text-gray800 text-xs">{"(Nova) "}</span>
                </RobotName>
              </td>

              <td className="text-center bg-white100">
                <TimeFrame className="text-sm text-gray900 ">{"1h"}</TimeFrame>
              </td>

              <td className="text-center bg-white100 rounded-l-2xl">
                <UpDownBtn>{"1.2%+"}</UpDownBtn>
              </td>
            </tr>
            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableDTwo;
