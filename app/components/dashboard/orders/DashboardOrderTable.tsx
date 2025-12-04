import React from "react";
import RobotName from "../../global/RobotName";
import TimeFrame from "../../global/TimeFrame";
import NameExchange from "../../global/NameExchange";
import TextInfo from "../../global/TextInfo";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import Image from "next/image";
import CloseSquareIcon from "../../icons/CloseSquareIcon";
import Link from "next/link";
import { routes } from "@/app/routes";
import { getOrders } from "@/api/orders";
import { cn } from "@/utils";

// @ts-ignore
export const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

async function DashboardOrderTable() {
  const orders = await getOrders();
  return (
    <>
      <div className="flex w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-b-0">
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl">
                نام ارز
              </th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">
                ساعت و تاریخ معامله
              </th>

              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">قیمت آغازین</th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">پوزیشن</th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">
                مبلغ شروع معامله
              </th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">صرافی</th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">ربات</th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">تایم فریم</th>
              <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color  rounded-l-2xl">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order, i) => {
              return (
                <tr className="border-gray800 [&_td]:px-1" key={i}>
                  <td>
                    <Link
                      href={routes.dashboard.binanceMarket2}
                      className="flex gap-[2px] text-center items-center justify-center"
                    >
                      <CryptocurrencyLogo>
                        <Image src={order.currency.logo} alt="Cryptocurrency logo" width={30} height={30} />
                      </CryptocurrencyLogo>
                      <NameCryptocurrency parentClassName="items-center  justify-center flex-col gap-1 w-14">
                        <span className="lg:text-xs text-sm text-gray900 font-semibold">{order.currency.name}</span>
                        <span className="text-gray800 lg:text-xs text-xs">({order.currency.name_fa})</span>
                      </NameCryptocurrency>
                    </Link>
                  </td>
                  <td className="text-center">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                      <span className="text-xs text-gray900">{p2e(order.date.toLocaleDateString("fa"))}</span>
                      <span className="text-gray800 text-xs ms-1">({p2e(order.date.toLocaleTimeString("fa"))})</span>
                    </TextInfo>
                  </td>
                  <td>
                    <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                      <span className="text-xs text-dark-black font-semibold" dir="ltr">
                        {order.start_price}
                      </span>
                      <span className="text-gray800 text-xs">{"(تتر)"}</span>
                    </TextInfo>
                  </td>
                  <td>
                    <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                      <span
                        className={cn(
                          "text-xs  font-semibold",
                          order.start_price > 0 ? "text-success" : "text-red-500"
                        )}
                      >
                        {order.position}
                      </span>
                    </TextInfo>
                  </td>
                  <td>
                    <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                      <span className="text-xs text-dark-black font-semibold" dir="ltr">
                        {order.trade_start_price}
                      </span>
                      <span className="text-gray800 text-xs">{"(تتر)"}</span>
                    </TextInfo>
                  </td>
                  <td className="text-center">
                    <NameExchange parentClassName="flex-row items-center gap-1 justify-center">
                      <span className="text-xs text-gray900">{order.exchange.name}</span>
                      <span className="text-gray800 text-xs">({order.exchange.name_fa})</span>
                    </NameExchange>
                  </td>
                  <td className="text-center">
                    <Link href={routes.robotInfo}>
                      <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                        <Image className="" src={order.robot.image} alt="robot logo" width={35} height={35} />
                        <span className="text-xs text-gray900">{order.robot.name}</span>
                        <span className="text-gray800 text-xs">({order.robot.name_fa})</span>
                      </RobotName>
                    </Link>
                  </td>
                  <td className="text-center">
                    <TimeFrame className="text-xs text-gray900 font-semibold ">{order.timeframe}</TimeFrame>
                  </td>
                  <td className="text-center">
                    <button className="">
                      <i className="text-down">
                        <CloseSquareIcon />
                      </i>
                    </button>
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

export default DashboardOrderTable;
