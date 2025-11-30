import React from "react";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";

function ExchangesBinex() {
  return (
    <>
      <div className="container mx-auto lg:px-12 px-4  py-9">
        <Caption className="text-dark font-bold lg:text-2xl text-xl mx-auto mb-8">
          {"صرافی‌های متصل به باینکس"}
        </Caption>

        <div className="grid grid-cols-12 gap-y-12 items-center">
          <div className="lg:col-span-3 col-span-6 ">
            <div className="flex flex-col items-center justify-center">
              <div className="lg:mb-6 mb-2 flex items-center justify-center">
                <Image
                  className="mobile:w-full"
                  src="/img/wallex.png"
                  alt="wallex logo"
                  width={171.22}
                  height={85.61}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">
                  والـــکس
                </span>
                <span className="text-dark lg:text-lg text-base">wallex</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="flex flex-col items-center justify-center">
              <div className="lg:mb-6 mb-2 flex items-center justify-center">
                <Image
                  className="mobile:w-full"
                  src="/img/binance.png"
                  alt="binance logo"
                  width={171.22}
                  height={96.66}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">
                  بایننس
                </span>
                <span className="text-dark lg:text-lg text-base">Binance</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="flex flex-col items-center justify-center">
              <div className="lg:mb-6 mb-2 flex items-center justify-center">
                <Image
                  className="mobile:w-full"
                  src="/img/kucoin.png"
                  alt="kucoin logo"
                  width={156.17}
                  height={86.82}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">
                  کوکوین
                </span>
                <span className="text-dark lg:text-lg text-base">kucoin</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="flex flex-col items-center justify-center">
              <div className="lg:mb-6 mb-2 flex items-center justify-center">
                <Image
                  className="mobile:w-full"
                  src="/img/nobitex.png"
                  alt="nobitex logo"
                  width={165.67}
                  height={103}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-black900 font-black mb-2 lg:text-3xl text-xl">
                  نوبیتکس
                </span>
                <span className="text-dark lg:text-lg text-base">Nobitex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExchangesBinex;
