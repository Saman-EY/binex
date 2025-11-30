import React from "react";
import RobotName from "../../global/RobotName";
import TimeFrame from "../../global/TimeFrame";
import NameExchange from "../../global/NameExchange";
import TextInfo from "../../global/TextInfo";
import UpDownBtn from "../../global/UpDownBtn";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import Image from "next/image";
import { routes } from "@/app/routes";
import Link from "next/link";

type TableDOneProps = {
  currency?: "تتر" | "تومان";
};

function TableDOne({ currency = "تومان" }: TableDOneProps) {
  return (
    <>
      <div className="overflow-x-auto" id="TableDOne">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-b-0">
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl align-top">
                نام ارز
              </th>
              <th className=" pt-4 pb-4 text-center font-semibold bg-head-table-color">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="text-xs text-gray900">
                    {" "}
                    مجموع شروع معامله
                  </span>
                  <small className="text-xs text-gray800">({currency})</small>
                </div>
              </th>
              <th className=" pt-4 pb-4 text-center font-semibold bg-head-table-color align-top">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="text-xs text-gray900">ارزش فعلی</span>
                  <small className="text-xs text-gray800">({currency})</small>
                </div>
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color align-top">
                درصد سود و زیان
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color align-top">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="text-xs text-gray900">
                    {" "}
                    مقدار سود و زیان
                  </span>
                  <small className="text-xs text-gray800">({currency})</small>
                </div>
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color align-top">
                تایم فریم
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color align-top">
                صرافی
              </th>
              <th className="text-xs text-gray900 pt-4 pb-4 text-center font-semibold bg-head-table-color align-top  rounded-l-2xl">
                ربات
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="">
                <Link href={routes.dashboard.orders.history} className="flex gap-1 text-center">
                  <CryptocurrencyLogo>
                    <Image
                      className=""
                      src="/img/cryptocurrency/2.svg"
                      alt="Cryptocurrency logo"
                      width={30}
                      height={30}
                    />
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-start  justify-start flex-col gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-semibold">
                      {"BTC"}
                    </span>
                    <span className="text-gray800 lg:text-xs text-xs">
                      {"(بیتکوین)"}
                    </span>
                  </NameCryptocurrency>
                </Link>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-gray900 text-xs  font-semibold">
                    {"145.55"}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-up text-xs  font-bold ms-1">
                    {Number("78000000").toLocaleString()}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <UpDownBtn>{"1.2%+"}</UpDownBtn>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-up text-xs  font-bold ms-1">
                    {"24"}
                  </span>
                </TextInfo>
              </td>

              <td className="text-center">
                <TimeFrame className="text-xs text-gray900 ">{"1h"}</TimeFrame>
              </td>
              <td className="text-center">
                <NameExchange parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"Binance"}</span>
                  <span className="text-gray800 text-xs">{"(بایننس)"}</span>
                </NameExchange>
              </td>
              <td className="text-center">
                <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"نورون"}</span>
                  <span className="text-gray800 text-xs">{"(Neuron) "}</span>
                </RobotName>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td className="">
                <Link href={routes.dashboard.binanceMarket2} className="flex gap-1 text-center">
                  <CryptocurrencyLogo>
                    <Image
                      className=""
                      src="/img/cryptocurrency/2.svg"
                      alt="Cryptocurrency logo"
                      width={30}
                      height={30}
                    />
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-start  justify-start flex-col gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-semibold">
                      {"BTC"}
                    </span>
                    <span className="text-gray800 lg:text-xs text-xs">
                      {"(بیتکوین)"}
                    </span>
                  </NameCryptocurrency>
                </Link>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-gray900 text-xs  font-semibold">
                    {"14.52"}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-down text-xs  font-bold ms-1">
                    {(+"50055200").toLocaleString()}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <UpDownBtn negative>{"1.2%+"}</UpDownBtn>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-down text-xs  font-bold ms-1">
                    {"24"}
                  </span>
                </TextInfo>
              </td>

              <td className="text-center">
                <TimeFrame className="text-xs text-gray900 ">{"1h"}</TimeFrame>
              </td>
              <td className="text-center">
                <NameExchange parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"Binance"}</span>
                  <span className="text-gray800 text-xs">{"(بایننس)"}</span>
                </NameExchange>
              </td>
              <td className="text-center">
                <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"تایتان"}</span>
                  <span className="text-gray800 text-xs">{"(Titan) "}</span>
                </RobotName>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="">
                <Link href={routes.dashboard.binanceMarket2} className="flex gap-1 text-center">
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
                  <NameCryptocurrency parentClassName="items-start  justify-start flex-col gap-1">
                    <span className="lg:text-xs text-sm text-gray900 font-semibold">
                      {"BTC"}
                    </span>
                    <span className="text-gray800 lg:text-xs text-xs">
                      {"(بیتکوین)"}
                    </span>
                  </NameCryptocurrency>
                </Link>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-gray900 text-xs  font-semibold">
                    {"32.4"}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-up text-xs  font-bold ms-1">
                    {Number("2250000").toLocaleString()}
                  </span>
                </TextInfo>
              </td>
              <td className="text-center">
                <UpDownBtn>{"1.2%+"}</UpDownBtn>
              </td>
              <td className="text-center">
                <TextInfo parentClassName="flex-row items-center justify-center">
                  <span className="text-up text-xs  font-bold ms-1">
                    {"24"}
                  </span>
                </TextInfo>
              </td>

              <td className="text-center">
                <TimeFrame className="text-xs text-gray900 ">{"1h"}</TimeFrame>
              </td>
              <td className="text-center">
                <NameExchange parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"Binance"}</span>
                  <span className="text-gray800 text-xs">{"(بایننس)"}</span>
                </NameExchange>
              </td>
              <td className="text-center">
                <RobotName parentClassName="flex-row items-center gap-1 justify-center">
                  <span className="text-xs text-gray900">{"استارلت"}</span>
                  <span className="text-gray800 text-xs">{"(Starlet) "}</span>
                </RobotName>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableDOne;
