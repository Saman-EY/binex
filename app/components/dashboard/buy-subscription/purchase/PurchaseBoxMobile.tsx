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

function PurchaseBoxMobile() {
  return (
    <>
      <div className="border border-opacity rounded-2xl bg-white flex flex-col  w-full  py-3">
        <div className="flex items-start justify-between gap-4 mx-4  border-b border-b-line pb-2">
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
              <NameCryptocurrency parentClassName="items-center  justify-center flex-row gap-1">
                <span className="lg:text-base text-xs text-gray900 font-semibold">
                  {"BTC"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs ">
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
                <span className="lg:text-sm text-xs text-gray900 font-semibold">
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
                <span className="lg:text-sm text-xs text-gray900 font-semibold">
                  {"Binance"}
                </span>
                <span className="text-gray800 lg:text-sm text-xs">
                  {"(بایننس)"}
                </span>
              </NameExchange>
            </div>
          </PurchaseBoxContent>
        </div>
        <div className="pt-2">
          <PurchaseBoxContent
            title="امکانات"
            className="flex flex-row items-start lg:gap-2 gap-4"
            parentClassName="!flex-row !items-center !justify-between px-4 "
          >
            <div className="flex flex-ro items-center gap-2">
              <i className="text-dark scale-[0.85] -translate-x-1 -translate-y-[2px]">
                <CalendarIcon />
              </i>
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="lg:text-sm text-xs text-black">{"30"}</span>
                <span className="text-black lg:text-sm text-xs ">{"روز"}</span>
              </TextInfo>
            </div>
            <div className="flex flex-row  items-center gap-2">
              <i className="text-dark">
                <CpuChargeIcon />
              </i>
              <TextInfo parentClassName="flex-row items-center justify-center gap-[2px]">
                <span className="lg:text-sm text-xs text-black">{"12 "}</span>
                <span className="text-black lg:text-sm text-xs ">{"ربات"}</span>
              </TextInfo>
            </div>
          </PurchaseBoxContent>
          <div className="flex justify-between items-center px-4 py-2">
            <span className="text-dark lg:text-sm text-sm font-semibold px-2">مبلغ</span>
            <span className="text-blue900">{Number("1200000").toLocaleString()} <small>تومان</small></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseBoxMobile;
