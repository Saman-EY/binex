import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import Link from "next/link";
import NameCryptocurrency from "../global/NameCryptocurrency";
import Image from "next/image";
import UpDownBtn from "../global/UpDownBtn";
import { routes } from "@/app/routes";

type TTableOneDarkProps = {
  forceSign?: number;
};

const TableOneDark = (props: TTableOneDarkProps) => {
  return (
    <div className="my-4">
      {/* desktop */}
      <div className="lg:block hidden">
        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead>
            <tr className="text-center border-b-0  ">
              <th className="text-white text-base font-medium bg-dark800 py-4 rounded-r-xl">نماد</th>
              <th className="text-white text-base font-medium bg-dark800 py-4">نام ارز</th>
              <th className="text-white text-base font-medium bg-dark800 py-4">تایم فریم</th>
              <th className="text-white text-base font-medium bg-dark800 py-4"> درصد سود</th>
              <th className="text-white text-base font-medium bg-dark800 py-4"> ربات</th>
              <th className="text-white text-base font-medium bg-dark800 py-4 rounded-l-xl">صفحه اختصاصی</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              const value = Math.ceil(Math.random() * 100) * (props.forceSign ?? 1);

              return (
                <tr
                  key={idx}
                  className=" shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                >
                  <td className="bg-dark flex justify-center rounded-r-2xl">
                    <CryptocurrencyLogo>
                      <Image
                        className=""
                        src="/img/cryptocurrency/Cryptocurrency.svg"
                        alt="Cryptocurrency logo"
                        width={40}
                        height={40}
                      />
                    </CryptocurrencyLogo>
                  </td>
                  <td className="bg-dark">
                    <Link href={routes.dedicatedCurrency}>
                      <NameCryptocurrency parentClassName="items-center justify-center">
                        <span className="text-base text-white font-semibold">{"BTC"}</span>
                        <span className="text-gray400 text-sm ms-1">{"(بیتکوین)"}</span>
                      </NameCryptocurrency>
                    </Link>
                  </td>
                  <td className="bg-dark">
                    <TimeFrame className="text-sm text-white">{"1h"}</TimeFrame>
                  </td>
                  <td className="bg-dark">
                    <UpDownBtn showIcon arrow>
                      {value}
                    </UpDownBtn>
                  </td>
                  <td className="bg-dark">
                    <RobotName parentClassName="">
                      <Image className="size-7 ml-2" width={50} height={50} src="/img/robots/NUCLEUS.png" alt="" />
                      <span className=" lg:text-sm text-xs text-white">{"نوکلئوس"}</span>
                      <span className="text-gray400  lg:text-sm text-xs ms-1">{"(Nucleus) "}</span>
                    </RobotName>
                  </td>
                  <td className="bg-dark  rounded-l-2xl">
                    <Link href={routes.dedicatedCurrency}>
                      <span className="text-white text-sm font-medium">مشاهده</span>
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
          const value = (Math.ceil(Math.random() * 100) / 10) * (props.forceSign ?? 1);
          return (
            <div
              key={idx}
              className="flex items-center justify-between shadow-2xl bg-dark rounded-xl px-3 mb-2 py-3 relative"
            >
              <Link href={routes.dedicatedCurrency} className={"absolute z-1 inset-0"} />

              <div className="flex items-center gap-2">
                <CryptocurrencyLogo className="!p-[1px]">
                  <div className="">
                    <Image
                      className=""
                      src="/img/cryptocurrency/Cryptocurrency.svg"
                      alt="Cryptocurrency logo"
                      width={38}
                      height={38}
                    />
                  </div>
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="flex-col items-center justify-center">
                  <span className="text-sm text-white font-semibold">{"BTC"}</span>
                  <span className="text-gray400 text-sm mt-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </div>
              <div className="flex flex-col items-end justify-end ">
                <div className="flex items-center">
                  <TimeFrame className="text-xs text-dark ">{"1h"}</TimeFrame>
                  <UpDownBtn showIcon arrow negative={value < 0}>
                    {value} %
                  </UpDownBtn>
                </div>
                <div className="mt-1">
                  <RobotName parentClassName="">
                    <span className="text-xs text-white">{"اج3"}</span>
                    <span className="text-gray400 text-xs ms-1">{"(Edge3) "}</span>
                  </RobotName>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableOneDark;
