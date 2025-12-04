import React from "react";
import RobotName from "../../global/RobotName";
import TimeFrame from "../../global/TimeFrame";
import NameExchange from "../../global/NameExchange";
import TextInfo from "../../global/TextInfo";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import Image from "next/image";
import CloseSquareIcon from "../../icons/CloseSquareIcon";
import TickSquareIcon from "../../icons/TickSquareIcon";
import UpDownBtn from "../../global/UpDownBtn";
import { routes } from "@/app/routes";
import Link from "next/link";

function DashboardOrderHistoryTable() {
  return (
    <>
      <div className="flex w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-b-0">
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl">
                نام ارز
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                ساعت و تاریخ معامله
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                قیمت شروع
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                قیمت پایان
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">صرافی</th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">ربات</th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color px-2">
                تایم فریم
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                درصد سود و زیان
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color">
                مبلغ سود و زیان
              </th>
              <th className="text-xs text-dark px-0 pt-4 pb-4 text-center font-semibold bg-head-table-color  rounded-l-2xl">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className=" border-gray800 [&_td]:px-1">
              <td>
                <Link
                  href={routes.dashboard.binanceMarket2}
                  className="flex gap-[2px] text-center items-center justify-center"
                >
                  <CryptocurrencyLogo>
                    <Image src="/img/cryptocurrency/2.svg" alt="Cryptocurrency logo" width={30} height={30} />
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-center  justify-center flex-col gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-semibold">{"BTC"}</span>
                    <span className="text-gray800 lg:text-xs text-xs">{"(بیتکوین)"}</span>
                  </NameCryptocurrency>
                </Link>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-xs text-gray900">{"1402/11/16"}</span>
                  <span className="text-gray800 text-xs ms-1">{"(14:45)"}</span>
                </TextInfo>
              </td>
              <td>
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-dark-black font-semibold">{"14.41"}</span>
                  <span className="text-gray800 text-xs">{"(تتر)"}</span>
                </TextInfo>
              </td>
              <td>
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-dark-black font-semibold">{"14.56"}</span>
                  <span className="text-gray800 text-xs">{"(تتر)"}</span>
                </TextInfo>
              </td>

              <td className="text-center">
                <NameExchange parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"Binance"}</span>
                  <span className="text-gray800 text-xs">{"(بایننس)"}</span>
                </NameExchange>
              </td>
              <td className="text-center">
                <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                  <Image
                    className="object-cover"
                    src={"/img/robots/INFINIT.png"}
                    alt="robot logo"
                    width={38}
                    height={38}
                  />
                  <span className="text-sm text-gray900">{"Infinit"}</span>
                  {/* <span className="text-gray800 text-xs">{"(Infinit) "}</span> */}
                </RobotName>
              </td>
              <td className="text-center">
                <TimeFrame className="text-xs text-gray900 font-semibold ">{"1h"}</TimeFrame>
              </td>
              <td className="text-center">
                <UpDownBtn>{"1.2%+"}</UpDownBtn>
              </td>
              <td>
                <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                  <span className="text-xs text-up font-semibold">{"14.41"}</span>
                  <span className="text-gray800 text-xs">{"(تتر)"}</span>
                </TextInfo>
              </td>
              <td className="text-center">
                <button className="">
                  <i className="text-down">
                    <CloseSquareIcon />
                  </i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashboardOrderHistoryTable;
