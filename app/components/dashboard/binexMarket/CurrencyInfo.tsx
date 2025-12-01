import React from "react";
import Caption from "../../global/Caption";
import CoinIcon from "../../icons/CoinIcon";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import Image from "next/image";
import MoneyTimeIcon from "../../icons/MoneyTimeIcon";
import GhostIcon from "../../icons/GhostIcon";
import RobotName from "../../global/RobotName";
import Link from "next/link";
import ButtonBinex from "../../global/button/ButtonBinex";
import BitcoinCardIcon from "../../icons/BitcoinCardIcon";
import TimeFrame from "../../global/TimeFrame";
import { routes } from "@/app/routes";

function CurrencyInfo() {
  return (
    <>
      <div className="bg-white rounded-2xl py-4 flex lg:flex-row flex-col-reverse items-center justify-center gap-y-12 gap-x-32">
        <div className="flex  flex-col items-center lg:w-1/3 w-full lg:px-0 px-4">
          <div className="bg-head-table-color border border-dark800 rounded-2xl lg:px-8 px-4 py-4  flex-col items-center gap-3 w-full">
            <div className="flex items-center justify-between border-b border-gray400 py-2">
              <Caption className="text-xs lg:text-sm text-gray800">
                <span className="flex items-center gap-1">
                  <i className="text-dark800">
                    <CoinIcon />
                  </i>
                  {"نام واطلاعات ارز :"}
                </span>
              </Caption>
              <NameCryptocurrency parentClassName="gap-1">
                <span className=" text-sm text-nowrap text-dark800 font-semibold">{"BTC"}</span>
                <span className="text-dark  text-sm text-nowrap">{"(بیتکوین) "}</span>
              </NameCryptocurrency>
            </div>
            <div className="flex items-center justify-between border-b border-gray400 py-2">
              <Caption className="lg:text-sm text-xs  text-gray800">
                <span className="flex items-center gap-1">
                  <i className="text-dark800">
                    <MoneyTimeIcon />
                  </i>
                  {"تایم فریم:"}
                </span>
              </Caption>
              <TimeFrame className="text-sm text-dark">{"1h"}</TimeFrame>
            </div>
            <div className="flex items-center justify-between py-2">
              <Caption className="lg:text-sm text-xs text-gray800">
                <span className="flex items-center gap-1">
                  <i className="text-dark800">
                    <GhostIcon />
                  </i>
                  {"نام ربات:"}
                </span>
              </Caption>
              <div className="flex items-center gap-2">
                <RobotName parentClassName="flex-row items-center">
                  <span className="text-dark800 font-bold">{"فلیپر"}</span>
                  <span className="text-dark800 ms-1 font-bold">{"Flliper"}</span>
                </RobotName>
                <Image
                  className="lg:w-full w-3/4"
                  src="/img/robots/FLIPPER.png"
                  alt="Cryptocurrency"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          <div className="w-full py-4 ">
            <Link href={routes.dashboard.robots.addRobotOnline}>
              <ButtonBinex className="">
                <div className="flex items-center justify-center gap-1 ">
                  <i className="">
                    <BitcoinCardIcon />
                  </i>
                  {"راه‌اندازی آنلاین"}
                </div>
              </ButtonBinex>
            </Link>
          </div>
        </div>

        <Image
          className="lg:w-1/5 w-3/4 max-w-[200px] mobile:max-w-[150px]"
          src="/img/cryptocurrency/3.png"
          alt="Cryptocurrency"
          width={240}
          height={240}
        />
      </div>
    </>
  );
}

export default CurrencyInfo;
