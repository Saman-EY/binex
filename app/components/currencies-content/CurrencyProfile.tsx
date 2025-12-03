import Image from "next/image";
import React from "react";
import Caption from "../global/Caption";
import NameCryptocurrency from "../global/NameCryptocurrency";
import Link from "next/link";
import ButtonBinex from "../global/button/ButtonBinex";
import BitcoinCardIcon from "../icons/BitcoinCardIcon";
import { routes } from "@/app/routes";

function CurrencyProfile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center">
          <Image
            className="lg:w-full w-3/4"
            src="/img/cryptocurrency/3.png"
            alt="Cryptocurrency"
            width={180}
            height={180}
          />
        </div>
        <div>
            قیمت: 4346 USDT
        </div>
        <div className="flex items-center justify-center">
          <Caption className="text-gray800 text-base">{"نام و اطلاعات ارز :"}</Caption>
          <NameCryptocurrency parentClassName="flex-row items-center">
            <span className="lg:text-xl text-dark text-base  font-semibold">{"BTC"}</span>
            <span className="text-dark lg:text-xl text-base ms-1">{"(بیتکوین)"}</span>
          </NameCryptocurrency>
        </div>
        <div className="w-full ">
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
    </>
  );
}

export default CurrencyProfile;
