import React from "react";
import PurchaseBoxContent from "./PurchaseBoxContent";
import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import Image from "next/image";
import NameCryptocurrency from "@/app/components/global/NameCryptocurrency";
import ExchangeLogo from "@/app/components/global/ExchangeLogo";
import NameExchange from "@/app/components/global/NameExchange";
import CalendarIcon from "@/app/components/icons/CalendarIcon";
import TextInfo from "@/app/components/global/TextInfo";
import CpuChargeIcon from "@/app/components/icons/CpuChargeIcon";

function PurchaseBox() {
  return (
    <>
      {/* desktop */}
      <div className="border border-opacity rounded-2xl  flex items-start justify-between gap-4 px-4 py-4  ">
          <PurchaseBoxContent title="نام و نماد ارز">
            <div className="flex items-center">
              <CryptocurrencyLogo>
                  <Image
                    src="/img/cryptocurrency/Cryptocurrency.svg"
                    alt="Cryptocurrency logo"
                    width={30}
                    height={30}
                  />
              </CryptocurrencyLogo>
              <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                <span className="lg:text-base text-sm text-gray900 font-semibold">
                  {"BTC"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs ms-1">
                  {"(بیتکوین)"}
                </span>
              </NameCryptocurrency>
            </div>
          </PurchaseBoxContent>
          <PurchaseBoxContent
            title="صرافی"
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2">
              <ExchangeLogo src="/img/binancelogo.png" />
              <NameExchange parentClassName="flex-row items-center gap-1">
                <span className="lg:text-sm text-sm text-gray900 font-semibold">
                  {"Binance"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs">
                  {"(بایننس)"}
                </span>
              </NameExchange>
            </div>
            <div className="flex items-center gap-2">
              <ExchangeLogo src="/img/binancelogo.png" />
              <NameExchange parentClassName="flex-row items-center gap-1">
                <span className="lg:text-sm text-sm text-gray900 font-semibold">
                  {"Binance"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs">
                  {"(بایننس)"}
                </span>
              </NameExchange>
            </div>
            <div className="flex items-center gap-2">
              <ExchangeLogo src="/img/binancelogo.png" />
              <NameExchange parentClassName="flex-row items-center gap-1">
                <span className="lg:text-sm text-sm text-gray900 font-semibold">
                  {"Binance"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs">
                  {"(بایننس)"}
                </span>
              </NameExchange>
            </div>
          </PurchaseBoxContent>
          <PurchaseBoxContent
            title="امکانات"
            className="flex flex-col items-start gap-2"
          >
            <div className="flex flex-row  items-center">
              <i className="text-dark">
                <CalendarIcon />
              </i>
              <TextInfo parentClassName="flex-row items-center justify-center">
                <span className="text-sm text-black">{"30 "}</span>
                <span className="text-black text-sm ">{"روز"}</span>
              </TextInfo>
            </div>
            <div className="flex flex-row  items-center">
              <i className="text-dark">
                <CpuChargeIcon />
              </i>
              <TextInfo parentClassName="flex-row items-center justify-center">
                <span className="text-sm text-black">{"12 "}</span>
                <span className="text-black text-sm ">{"ربات"}</span>
              </TextInfo>
            </div>
            <span className="text-blue900">{Number("1200000").toLocaleString()} <small>تومان</small></span>
          </PurchaseBoxContent>
      </div>
    </>
  );
}

export default PurchaseBox;
