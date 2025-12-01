"use client";

import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import NameCryptocurrency from "../global/NameCryptocurrency";
import CaptionThTable from "./CaptionThTable";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import CurrenciesCotnent from "../currencies-content/CurrenciesCotnent";
import Image from "next/image";
import { routes } from "@/app/routes";
import { useRouter } from "next/navigation";

type TTableTwoProps = {};

const TableTwo = (props: TTableTwoProps) => {
  const router = useRouter();
  return (
    <div className="my-4">
      {/* desktop */}
      <div className="lg:block hidden">
        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead>
            <tr className="text-center border-b-0">
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4 rounded-r-xl">
                نام و نماد ارز
              </th>
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4">
                <CaptionThTable className="flex items-center" parentClassName="justify-center">
                  <i className="mx-2 text-green100">
                    <ChevronUpIcon />
                  </i>
                  {"بیشترین سود"}
                  <br />
                  {"24ساعت اخیر"}
                </CaptionThTable>
              </th>
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4">
                <CaptionThTable className="flex items-center" parentClassName="justify-center">
                  <i className="mx-2 text-green100">
                    <ChevronUpIcon />
                  </i>
                  {"بیشترین سود"}
                  <br />
                  {" 7روز اخیر"}
                </CaptionThTable>
              </th>
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4">
                <CaptionThTable className="flex items-center" parentClassName="justify-center">
                  <i className="mx-2 text-green100">
                    <ChevronUpIcon />
                  </i>
                  {"بیشترین سود"}
                  <br />
                  {" 30روز اخیر"}
                </CaptionThTable>
              </th>
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4">
                <CaptionThTable className="flex items-center" parentClassName="justify-center">
                  <i className="mx-2 text-green100">
                    <ChevronUpIcon />
                  </i>
                  {"بیشترین سود"}
                  <br />
                  {" 3ماه اخیر "}
                </CaptionThTable>
              </th>
              <th className="text-gray900 text-xs font-semibold bg-head-table-color py-4 rounded-l-xl">
                <CaptionThTable className="flex items-center" parentClassName="justify-center">
                  <i className="mx-2 text-green100">
                    <ChevronUpIcon />
                  </i>
                  {"رتبه در باینکس"}
                </CaptionThTable>
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              return (
                <tr
                  key={idx}
                  className="bg-transparent shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                  onClick={() => router.push(routes.dedicatedCurrency)}
                >
                  <td className="flex justify-center items-center gap-2">
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
                    <NameCryptocurrency>
                      <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                      <span className="text-gray800 text-sm ms-1">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </td>
                  <td>
                    <CurrenciesCotnent />
                  </td>
                  <td>
                    <CurrenciesCotnent />
                  </td>
                  <td>
                    <CurrenciesCotnent />
                  </td>
                  <td>
                    <CurrenciesCotnent />
                  </td>
                  <td>
                    <span className="font-bold text-sm text-emerald-400">#{idx + 1}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableTwo;
