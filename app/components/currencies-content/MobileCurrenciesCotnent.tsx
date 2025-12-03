import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import Image from "next/image";
import NameCryptocurrency from "../global/NameCryptocurrency";
import CaptionThTable from "../tables/CaptionThTable";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import CurrenciesCotnent from "./CurrenciesCotnent";
import Link from "next/link";
import { routes } from "@/app/routes";

function MobileCurrenciesCotnent() {
  return (
    <>
      <div className="gap-4 flex flex-col">
        {currencies.map((currency) => {
          return (
            <div key={currency.id} className="rounded-2xl py-2  w-full g:hidden">
              <div className="flex items-center shadow-binex rounded-2xl  py-1">
                <Link href={routes.dedicatedCurrency} className="flex items-center gap-1 grow">
                  <CryptocurrencyLogo>
                    <div className="">
                      <Image src={currency.icon} alt="Cryptocurrency logo" width={30} height={30} />
                    </div>
                  </CryptocurrencyLogo>
                  <NameCryptocurrency parentClassName="items-center gap-1 justify-center flex-row">
                    <span className="lg:text-base text-sm text-gray900 font-semibold">{currency.name}</span>
                  </NameCryptocurrency>
                </Link>
                <div className="flex flex-col items-center justify-center pe-2 -translate-y-1.5">
                  <small className="text-xxs">رتبه در باینکس:</small>
                  <span className="font-bold text-sm text-emerald-400">#{currency.rating}</span>
                </div>
              </div>
              <table className="table border-spacing-y-0 border-separate shadow-binex mt-1">
                {/* head */}
                <thead className="relative">
                  <span className="absolute flex size-3 top-1 left-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <tr className="text-center border-b-0  ">
                    <th className="text-gray900 px-4 text-[9px] font-semibold bg-head-table-color py-2 rounded-tr-2xl">
                      <CaptionThTable className="flex items-center" parentClassName="justify-center">
                        <i className="mx-1 text-green100">
                          <ChevronUpIcon />
                        </i>
                        {"24ساعت اخیر"}
                      </CaptionThTable>
                    </th>
                    <th className="text-gray900 px-4 text-[9px] font-semibold bg-head-table-color py-2">
                      <CaptionThTable className="flex items-center" parentClassName="justify-center">
                        <i className="mx-1 text-green100">
                          <ChevronUpIcon />
                        </i>
                        {" 7روز اخیر"}
                      </CaptionThTable>
                    </th>
                    <th className="text-gray900 px-4 text-[9px] font-semibold bg-head-table-color py-2 rounded-tl-2xl">
                      <CaptionThTable className="flex items-center" parentClassName="justify-center">
                        <i className="mx-1 text-green100">
                          <ChevronUpIcon />
                        </i>

                        {" 30روز اخیر"}
                      </CaptionThTable>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center ">
                  <tr className=" text-center">
                    <td className="px-[11px]">
                      <CurrenciesCotnent />
                    </td>
                    <td className="px-[11px]">
                      <CurrenciesCotnent />
                    </td>
                    <td className="px-[11px]">
                      <CurrenciesCotnent />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MobileCurrenciesCotnent;

const currencies = [
  {
    id: 1,
    name: "LTD",
    name_fa: "لایت‌کوین",
    icon: "/img/cryptocurrency/2.svg",
    rating: 1,
  },
  {
    id: 2,
    name: "BTC",
    name_fa: "بیت‌کوین",
    icon: "/img/cryptocurrency/3.svg",
    rating: 2,
  },
  {
    id: 3,
    name: "BTC",
    name_fa: "بیت‌کوین",
    icon: "/img/cryptocurrency/3.svg",
    rating: 3,
  },
  {
    id: 4,
    name: "BTC",
    name_fa: "بیت‌کوین",
    icon: "/img/cryptocurrency/3.svg",
    rating: 4,
  },
];
