import React from "react";
import TopCurrenciesContent from "./TopCurrenciesContent";
import ExchangeLogo from "../../global/ExchangeLogo";
import NameExchange from "../../global/NameExchange";
import RobotName from "../../global/RobotName";
import Image from "next/image";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import GrowPercentage from "./GrowPercentage";
import YesIcon from "../../icons/YesIcon";
import { routes } from "@/app/routes";
import Link from "next/link";

function TopCurrencies() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 gap-1">
        <div className="">
          <div className="bg-white rounded-2xl px-4 py-4 flex items-center justify-between ">
            <div className="flex flex-col gap-4">
              <div className="border-line border-b pb-2">
                <TopCurrenciesContent title=" صرافی">
                  <div className="flex items-center gap-2">
                    <ExchangeLogo src="/img/binancelogo.png" />
                    <NameExchange parentClassName="flex-row items-center gap-1">
                      <span className="lg:text-base text-xs text-gray900 font-semibold">{"Binance"}</span>
                    </NameExchange>
                    <div className="flex lg:hidden">
                      <GrowPercentage title="7.2%-" className="text-down text-xs">
                        <i className="text-down block" style={{ transform: "rotateX(180deg)" }}>
                          <YesIcon />
                        </i>
                      </GrowPercentage>
                    </div>
                  </div>
                </TopCurrenciesContent>
              </div>
              <div className="">
                <TopCurrenciesContent title="ربات">
                  <Link href={routes.robotInfo} className="flex items-center justify-start gap-2">
                    <Image className="" src="/img/robots/EDGE3.png" alt="" width={34} height={34} />
                    <RobotName parentClassName="">
                      <span className="lg:text-sm text-xs text-gray900">{"اج3"}</span>
                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(Edge3) "}</span>
                    </RobotName>
                  </Link>
                </TopCurrenciesContent>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link href={routes.dashboard.binanceMarket2} className="flex flex-col items-center lg:gap-4 gap-2">
                <CryptocurrencyLogo className="lg:h-[70px] lg:w-[70px]">
                  <Image
                    src="/img/cryptocurrency/Cryptocurrency.svg"
                    alt="Cryptocurrency logo"
                    width={70}
                    height={70}
                  />
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-xs text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </Link>
              <div className="lg:flex hidden">
                <GrowPercentage title="7.2%+" className="text-up">
                  <i className="text-up">
                    <YesIcon />
                  </i>
                </GrowPercentage>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-2xl px-4 py-4 flex items-center justify-between ">
            <div className="flex flex-col gap-4">
              <div className="border-line border-b pb-2">
                <TopCurrenciesContent title=" صرافی">
                  <div className="flex items-center gap-2">
                    <ExchangeLogo src="/img/binancelogo.png" />
                    <NameExchange parentClassName="flex-row items-center gap-1">
                      <span className="lg:text-base text-xs text-gray900 font-semibold">{"Binance"}</span>
                    </NameExchange>
                    <div className="flex lg:hidden">
                      <GrowPercentage title="7.2%+" className="text-up text-xs">
                        <i className="text-up">
                          <YesIcon />
                        </i>
                      </GrowPercentage>
                    </div>
                  </div>
                </TopCurrenciesContent>
              </div>
              <div className="">
                <TopCurrenciesContent title="ربات">
                  <Link href={routes.robotInfo} className="flex items-center justify-start gap-2">
                    <Image className="" src="/img/robots/EXPLORE.png" alt="" width={32} height={32} />
                    <RobotName parentClassName="">
                      <span className="lg:text-sm text-xs text-gray900">{"اکسپلور"}</span>
                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(Explore) "}</span>
                    </RobotName>
                  </Link>
                </TopCurrenciesContent>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link href={routes.dashboard.binanceMarket2} className="flex flex-col items-center lg:gap-4 gap-2">
                <CryptocurrencyLogo className="lg:h-[70px] lg:w-[70px]">
                  <div className="">
                    <Image
                      className=""
                      src="/img/cryptocurrency/Cryptocurrency.svg"
                      alt="Cryptocurrency logo"
                      width={70}
                      height={70}
                    />
                  </div>
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-xs text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </Link>
              <div className="lg:flex hidden">
                <GrowPercentage title="7.2%+" className="text-up">
                  <i className="text-up">
                    <YesIcon />
                  </i>
                </GrowPercentage>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white rounded-2xl px-4 py-4 flex items-center justify-between ">
            <div className="flex flex-col gap-4">
              <div className="border-line border-b pb-2">
                <TopCurrenciesContent title=" صرافی">
                  <div className="flex items-center gap-2">
                    <ExchangeLogo src="/img/binancelogo.png" />
                    <NameExchange parentClassName="flex-row items-center gap-1">
                      <span className="lg:text-base text-xs text-gray900 font-semibold">{"Binance"}</span>
                    </NameExchange>
                    <div className="flex lg:hidden">
                      <GrowPercentage title="7.2%+" className="text-up text-xs">
                        <i className="text-up">
                          <YesIcon />
                        </i>
                      </GrowPercentage>
                    </div>
                  </div>
                </TopCurrenciesContent>
              </div>
              <div className="">
                <TopCurrenciesContent title="ربات">
                  <Link href={routes.robotInfo} className="flex items-center justify-start gap-2">
                    <Image className="" src="/img/robots/WEB6.png" alt="" width={32} height={32} />
                    <RobotName parentClassName="">
                      <span className="lg:text-sm text-xs text-gray900">{"وب6"}</span>
                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(Web6) "}</span>
                    </RobotName>
                  </Link>
                </TopCurrenciesContent>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link href={routes.dashboard.binanceMarket2} className="flex flex-col items-center lg:gap-4 gap-2">
                <CryptocurrencyLogo className="lg:h-[70px] lg:w-[70px]">
                  <div className="">
                    <Image
                      className=""
                      src="/img/cryptocurrency/Cryptocurrency.svg"
                      alt="Cryptocurrency logo"
                      width={70}
                      height={70}
                    />
                  </div>
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-xs text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </Link>
              <div className="lg:flex hidden">
                <GrowPercentage title="7.2%+" className="text-up">
                  <i className="text-up">
                    <YesIcon />
                  </i>
                </GrowPercentage>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden xl:block">
          <div className="bg-white rounded-2xl px-4 py-4 flex items-center justify-between ">
            <div className="flex flex-col gap-4">
              <div className="border-line border-b pb-2">
                <TopCurrenciesContent title=" صرافی">
                  <div className="flex items-center gap-2">
                    <ExchangeLogo src="/img/binancelogo.png" />
                    <NameExchange parentClassName="flex-row items-center gap-1">
                      <span className="lg:text-base text-xs text-gray900 font-semibold">{"Binance"}</span>
                    </NameExchange>
                    <div className="flex lg:hidden">
                      <GrowPercentage title="7.2%+" className="text-up text-xs">
                        <i className="text-up">
                          <YesIcon />
                        </i>
                      </GrowPercentage>
                    </div>
                  </div>
                </TopCurrenciesContent>
              </div>
              <div className="">
                <TopCurrenciesContent title="ربات">
                  <Link href={routes.robotInfo} className="flex items-center justify-start gap-2">
                    <Image className="" src="/img/robots/QUANTUM.png" alt="" width={32} height={32} />
                    <RobotName parentClassName="">
                      <span className="lg:text-sm text-xs text-gray900">{"کوانتوم"}</span>
                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(Quantom) "}</span>
                    </RobotName>
                  </Link>
                </TopCurrenciesContent>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link href={routes.dashboard.binanceMarket2} className="flex flex-col items-center lg:gap-4 gap-2">
                <CryptocurrencyLogo className="lg:h-[70px] lg:w-[70px]">
                  <Image
                    className=""
                    src="/img/cryptocurrency/Cryptocurrency.svg"
                    alt="Cryptocurrency logo"
                    width={70}
                    height={70}
                  />
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-xs text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </Link>
              <div className="lg:flex hidden">
                <GrowPercentage title="7.2%+" className="text-up">
                  <i className="text-up">
                    <YesIcon />
                  </i>
                </GrowPercentage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopCurrencies;
