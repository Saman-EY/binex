import SelectFilterCurrency from "@/app/components/currencies-content/SelectFilterCurrency";
import TableDThree from "@/app/components/dashboard/TablesDash/TableDThree";
import CurrencyInfo from "@/app/components/dashboard/binexMarket/CurrencyInfo";
import TotalProfitLoss from "@/app/components/global/TotalProfitLoss";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | بازار باینکس",
};

function Page() {
  return (
    <>
      <div className=" px-4 py-4 gap-4 flex flex-col">
        <CurrencyInfo />
        <div className="bg-white rounded-2xl p-4">
          <SelectFilterCurrency />
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-4">
          <TableDThree />
          <TotalProfitLoss />
        </div>
      </div>
    </>
  );
}

export default Page;
