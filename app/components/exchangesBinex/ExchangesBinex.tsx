import React from "react";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";

function ExchangesBinex() {
  return (
    <>
      <div className="container mx-auto lg:px-12 px-4  py-9">
        <Caption className="text-dark font-bold lg:text-2xl text-xl mx-auto mb-8">{"صرافی‌های متصل به باینکس"}</Caption>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5  items-center">
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/Binance/idhniLAzR2_1764778534393.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">بایننس</span>
              <span className="text-dark lg:text-lg text-base">Binance</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/KuCoin/Symbol.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">کوکوین</span>
              <span className="text-dark lg:text-lg text-base">kucoin</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/Coinbase/coinbase-logo-icon.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">کوین بیس</span>
              <span className="text-dark lg:text-lg text-base">coin base</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/Kraken/id7cQoL8JO_1764778363778.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">کرکن</span>
              <span className="text-dark lg:text-lg text-base">kraken</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/Bitfinex/Symbol.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">بیتفینکس</span>
              <span className="text-dark lg:text-lg text-base">Bitfinex</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 justify-center">
            <div className="bg-black px-3 py-5 rounded-lg ">
              <Image
                className="object-cover "
                src="/img/Exchanges/Huobi/idkJOU4dEF_1764778426437.png"
                alt="binance logo"
                width={130}
                height={100}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">هوبی</span>
              <span className="text-dark lg:text-lg text-base">Huobi</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/OKX/crypto-logo-svg.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">OKX</span>
              <span className="text-dark lg:text-lg text-base">OKX</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <Image
              className="object-cover"
              src="/img/Exchanges/Binance/idhniLAzR2_1764778534393.png"
              alt="binance logo"
              width={100}
              height={100}
            />
            <div className="flex flex-col items-center justify-center">
              <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">بایننس</span>
              <span className="text-dark lg:text-lg text-base">Binance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangesBinex;
