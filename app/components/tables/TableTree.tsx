import React from "react";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import Link from "next/link";
import NameCryptocurrency from "../global/NameCryptocurrency";
import TextInfo from "../global/TextInfo";
import UpDownBtn from "../global/UpDownBtn";
import ButtonSellBuy from "../global/button/ButtonSellBuy";
import Image from "next/image";
import TotalProfitLoss from "../global/TotalProfitLoss";

type TTableThreeProps = {};

const TableThree = (props: TTableThreeProps) => {
  return (
    <div className="lg:my-4">
      {/* desktop */}
      <div className="lg:block hidden">
        <h6 className="text-dark font-semibold text-lg">پوزیشن فعلی</h6>
        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead className="relative">
            <tr className="text-center border-b-0  ">
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4 rounded-r-xl">نماد و نام ارز</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4"> تاریخ</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4"> قیمت آغازین</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4">قیمت پایانی</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4"> پوزیشن</th>
              <th className="text-gray900 text-sm font-medium bg-[#d6edf1] py-4 rounded-l-xl"> درصد سود و زیان‌</th>
            </tr>
            <span className="absolute flex size-3 -left-1 -top-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </thead>

          {Array.from({ length: 1 }).map((item, idx) => {
            const amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);
            return (
              <tr
                key={idx}
                className=" shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
              >
                <td>
                  <Link className="flex justify-center items-center gap-2" href="/dedicated-currency">
                    <CryptocurrencyLogo>
                      <Image src="/img/cryptocurrency/3.svg" alt="Cryptocurrency logo" width={40} height={40} />
                    </CryptocurrencyLogo>
                    <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                      <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                      <span className="text-gray800 text-sm ms-1 ">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </Link>
                </td>
                <td className="px-1">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">{"1402/11/16"}</span>
                    <span className="text-gray800 text-xs ms-1">{"(14:45)"}</span>
                  </TextInfo>
                </td>
                <td>
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">{"145.52"}</span>
                    <span className="text-gray800 text-xs ms-1">{"(تتر)"}</span>
                  </TextInfo>
                </td>
                <td>-</td>
                <td>
                  <div className="flex justify-center items-center">
                    <ButtonSellBuy sell={idx % 2 === 0} />
                  </div>
                </td>
                <td className="">
                  <UpDownBtn negative={amount < 0}>
                    {amount < 0 ? "" : "+"}
                    {amount}
                  </UpDownBtn>
                </td>
              </tr>
            );
          })}
          <div className="h-[1rem]"></div>
          {/* divider */}
          <div className=" w-full  absolute">
            <TotalProfitLoss />
          </div>
          <div className="h-[4rem]"></div>

          <thead>
            <tr className="text-center border-b-0  ">
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4 rounded-r-xl">نماد و نام ارز</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4"> تاریخ</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4"> قیمت آغازین</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4">قیمت پایانی</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4"> پوزیشن</th>
              <th className="text-gray900 text-sm font-medium bg-head-table-color py-4 rounded-l-xl">
                {" "}
                درصد سود و زیان‌
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              const amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);
              return (
                <tr
                  key={idx}
                  className="bg-transparent shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                >
                  <td>
                    <Link className="flex justify-center items-center gap-2" href="/dedicated-currency">
                      <CryptocurrencyLogo>
                        <Image src="/img/cryptocurrency/3.svg" alt="Cryptocurrency logo" width={40} height={40} />
                      </CryptocurrencyLogo>
                      <NameCryptocurrency parentClassName="flex-row items-center justify-center">
                        <span className="text-base text-gray900 font-semibold">{"BTC"}</span>
                        <span className="text-gray800 text-sm ms-1 ">{"(بیتکوین)"}</span>
                      </NameCryptocurrency>
                    </Link>
                  </td>
                  <td className="px-1">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                      <span className="text-xs text-gray900">{"1402/11/16"}</span>
                      <span className="text-gray800 text-xs ms-1">{"(14:45)"}</span>
                    </TextInfo>
                  </td>
                  <td>
                    <TextInfo parentClassName="flex-row items-center justify-center">
                      <span className="text-xs text-gray900">{"145.52"}</span>
                      <span className="text-gray800 text-xs ms-1">{"(تتر)"}</span>
                    </TextInfo>
                  </td>
                  <td>
                    <TextInfo parentClassName="flex-row items-center justify-center">
                      <span className="text-xs text-gray900">{"155.25"}</span>
                      <span className="text-gray800 text-xs ms-1">{"(تتر)"}</span>
                    </TextInfo>
                  </td>
                  <td>
                    <div className="flex justify-center items-center">
                      <ButtonSellBuy sell={idx % 2 === 0} />
                    </div>
                  </td>
                  <td className="">
                    <UpDownBtn negative={amount < 0}>
                      {amount < 0 ? "" : "+"}
                      {amount}
                    </UpDownBtn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <div className="lg:hidden block mt-5">
        <h6 className="text-dark font-semibold text-lg">پوزیشن فعلی</h6>

        <table className="table border-spacing-y-2 border-separate">
          {/* head */}
          <thead className="relative">
            <tr className="text-center border-b-0   ">
              <th className="whitespace-break-spaces  text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-0 rounded-r-xl">
                نام ارز
              </th>
              <th className="whitespace-break-spaces  text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-0">
                تاریخ
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-0">
                قیمت آغازین
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-2">
                قیمت پایانی
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-0">
                پوزیشن
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-[#d6edf1]  py-3 px-0 rounded-l-xl">
                سود و زیان‌
              </th>
            </tr>
            <span className="absolute flex size-3 top-1 left-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </thead>
          {Array.from({ length: 1 }).map((item, idx) => {
            const amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);

            return (
              <tr
                key={idx}
                className="bg-transparent shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
              >
                <td className="flex justify-center items-center gap-2 px-1">
                  <NameCryptocurrency parentClassName="flex-col items-center justify-center ">
                    <span className="text-sm text-gray900 font-semibold">{"BTC"}</span>
                    <span className="text-gray800 text-[11px]">{"(بیتکوین)"}</span>
                  </NameCryptocurrency>
                </td>
                <td className="px-1">
                  <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                    <span className="text-[11px] text-gray900">{"1402/11/16"}</span>
                    <span className="text-gray800 text-[11px]">{"(14:45)"}</span>
                  </TextInfo>
                </td>

                <td className="px-1">
                  <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                    <span className="text-[11px] text-gray900">{"14.41"}</span>
                    <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
                  </TextInfo>
                </td>
                <td className="px-1">-</td>

                <td className="px-0">
                  <div className="w-full flex justify-center items-center">
                    <ButtonSellBuy className="!px-0 text-bold " sell={idx % 3 === 0} />
                  </div>
                </td>
                <td className="px-1">
                  <UpDownBtn className="!min-w-[54px]" showIcon negative={amount < 0}>
                    {amount < 0 ? "" : "+"}
                    {amount}%
                  </UpDownBtn>
                </td>
              </tr>
            );
          })}
          <div className="my-3"></div>
          <thead>
            <tr className="text-center border-b-0">
              <th className="whitespace-break-spaces  text-gray900 text-xs font-medium bg-head-table-color py-3 px-0 rounded-r-xl">
                نام ارز
              </th>
              <th className="whitespace-break-spaces  text-gray900 text-xs font-medium bg-head-table-color py-3 px-0">
                تاریخ
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-head-table-color py-3 px-0">
                قیمت آغازین
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-head-table-color py-3 px-2">
                قیمت پایانی
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-head-table-color py-3 px-0">
                پوزیشن
              </th>
              <th className="whitespace-break-spaces   text-gray900 text-xs font-medium bg-head-table-color py-3 px-0 rounded-l-xl">
                سود و زیان‌
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {Array.from({ length: 10 }).map((item, idx) => {
              const amount = +String(Math.random() * 10).slice(0, 5) * (Math.random() > 0.5 ? -1 : 1);

              return (
                <tr
                  key={idx}
                  className="bg-transparent shadow-binex rounded-xl border-b-0 text-center hover:shadow-binex-xl hover:transition-all"
                >
                  <td className="flex justify-center items-center gap-2 px-1">
                    <NameCryptocurrency parentClassName="flex-col items-center justify-center ">
                      <span className="text-sm text-gray900 font-semibold">{"BTC"}</span>
                      <span className="text-gray800 text-[11px]">{"(بیتکوین)"}</span>
                    </NameCryptocurrency>
                  </td>
                  <td className="px-1">
                    <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                      <span className="text-[11px] text-gray900">{"1402/11/16"}</span>
                      <span className="text-gray800 text-[11px]">{"(14:45)"}</span>
                    </TextInfo>
                  </td>

                  <td className="px-1">
                    <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                      <span className="text-[11px] text-gray900">{"14.41"}</span>
                      <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
                    </TextInfo>
                  </td>
                  <td className="px-1">
                    <TextInfo parentClassName="flex-col items-center justify-center gap-[2px]">
                      <span className="text-[11px] text-gray900">{"15.41"}</span>
                      <span className="text-gray800 text-[11px]">{"(تتر)"}</span>
                    </TextInfo>
                  </td>

                  <td className="px-0">
                    <div className="w-full flex justify-center items-center">
                      <ButtonSellBuy className="!px-0 text-bold " sell={idx % 3 === 0} />
                    </div>
                  </td>
                  <td className="px-1">
                    <UpDownBtn className="!min-w-[54px]" showIcon negative={amount < 0}>
                      {amount < 0 ? "" : "+"}
                      {amount}%
                    </UpDownBtn>
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

export default TableThree;
