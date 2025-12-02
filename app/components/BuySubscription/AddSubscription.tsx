"use client";

import React, { useState } from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import Line90 from "../global/Line90";
import ExchangeLogo from "../global/ExchangeLogo";
import NameExchange from "../global/NameExchange";
import TimeAndRobot from "./TimeAndRobot";
import CloseBtn from "../global/CloseBtn";
import NameCryptocurrency from "../global/NameCryptocurrency";
import Image from "next/image";

function AddSubscription() {
  const [show, setShow] = useState(true);
  const remove = () => {
    setShow(false);
  };
  if (!show) return <></>;
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-between bg-white shadow-binex rounded-xl lg:px-4 px-0 py-4 relative">
        <div className="flex lg:flex-row flex-wrap items-center gap-4 lg:gap-0 justify-start px-4 lg:px-0 w-full">
          <div className="flex items-center justify-center gap-1">
            <div className="">
              <CryptocurrencyLogo>
                <Image src="/img/cryptocurrency/Cryptocurrency.svg" alt="Cryptocurrency logo" width={30} height={30} />
              </CryptocurrencyLogo>
            </div>

            <NameCryptocurrency parentClassName="items-center gap-1 justify-center flex-row">
              <span className="text-gray900 text-xs font-semibold">{"BTC"}</span>
              <span className="text-gray800 text-xxs">{"(بیتکوین)"}</span>
            </NameCryptocurrency>
          </div>
          <Line90 className2="h-12 hidden lg:flex mx-2 w-px bg-line" />
          <div className="flex items-center justify-center gap-2">
            <ExchangeLogo src={"/img/binancelogo.png"} />
            <NameExchange parentClassName="flex-row items-center gap-1">
              <span className="text-gray900 text-xs font-semibold">{"Binance"}</span>
              <span className="text-gray800 text-xxs">{"(بایننس)"}</span>
            </NameExchange>
          </div>
          <Line90 className2="h-12 hidden lg:flex mx-2 w-px bg-line" />
          <div className="flex items-center justify-center gap-2">
            <ExchangeLogo src={"/img/binancelogo.png"} />
            <NameExchange parentClassName="flex-row items-center gap-1">
              <span className="text-gray900 text-xs font-semibold">{"Binance"}</span>
              <span className="text-gray800 text-xxs">{"(بایننس)"}</span>
            </NameExchange>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center justify-between w-full px-4 lg:px-0 mt-5 lg:mt-0">
          <div className="col-span-9 ">
            <TimeAndRobot />
          </div>
          <div className="col-span-3">
            <div className="flex justify-end items-center gap-2">
              <span className="text-sm font-semibold mobile:text-center">{(1200000).toLocaleString()} تومان</span>
              <i onClick={remove} className="absolute top-1 left-1 scale-75">
                <CloseBtn />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddSubscription;
