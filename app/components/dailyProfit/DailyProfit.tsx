import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import NameCryptocurrency from "../global/NameCryptocurrency";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import { routes } from "@/app/routes";
import Link from "next/link";

function DailyProfit() {
  return (
    <div className="flex items-center justify-between">
      <Link href={routes.dedicatedCurrency} className="flex items-center justify-between w-full">
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
          <div className="">
            <NameCryptocurrency parentClassName="flex-col item-end gap-1.5">
              <span className="text-base text-white font-semibold">{"BTC"}</span>
              <span className="text-gray400 text-xs  mt-1">{"(بیتکوین)"}</span>
            </NameCryptocurrency>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center">
            <div className="">
              <TimeFrame className="text-sm text-white">{"1h"}</TimeFrame>
            </div>
            <div className="">
              <UpDownBtn showIcon arrow className="min-w-[48px]">
                {"+1.05%"}
              </UpDownBtn>
            </div>
          </div>
          <Link href={routes.robotInfo} className="mt-2.5">
            <RobotName parentClassName="">
              <Image className="ml-2" src="/img/robots/NEO.png" alt="Cryptocurrency" width={24} height={24} />
              <span className="text-xs text-white font-extralight">{"نوا"}</span>
              <span className="text-gray400 text-xxs ms-1">{"(Nova) "}</span>
            </RobotName>
          </Link>
        </div>
      </Link>
    </div>
  );
}
export default DailyProfit;
