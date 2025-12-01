import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import NameCryptocurrency from "../global/NameCryptocurrency";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import { routes } from "@/app/routes";
import Link from "next/link";

function DailyLoss() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href={routes.dedicatedCurrency} className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 h-full">
            <CryptocurrencyLogo>
              <Image src="/img/cryptocurrency/Cryptocurrency.svg" alt="Cryptocurrency logo" width={40} height={40} />
            </CryptocurrencyLogo>

            <NameCryptocurrency parentClassName="flex-col item-end gap-1.5">
              <span className="text-base text-white font-semibold">{"LTD"}</span>
              <span className="text-gray400 text-xs mt-1">{"(بیتکوین)"}</span>
            </NameCryptocurrency>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <div className="">
                <TimeFrame className="text-sm text-white">{"1h"}</TimeFrame>
              </div>
              <div className="">
                <UpDownBtn showIcon arrow negative className="min-w-[48px]">
                  {"+1.05%"}
                </UpDownBtn>
              </div>
            </div>
            <div className="mt-2.5">
              <RobotName parentClassName="">
                <Image className="ml-2" src="/img/robots/ASTRA.png" alt="Cryptocurrency" width={24} height={24} />
                <span className="text-xs text-white font-extralight">{"آسترا"}</span>
                <span className="text-gray400 text-xxs ms-1">{"(Astra) "}</span>
              </RobotName>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default DailyLoss;
