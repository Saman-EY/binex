import TableDTwo from "@/app/components/dashboard/TablesDash/TableDTwo";
import FilterTab from "@/app/components/dashboard/binexMarket/FilterTab";
import MarketTableMobile from "@/app/components/dashboard/binexMarket/MarketTableMobile";
import Caption from "@/app/components/global/Caption";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import CandleIcon from "@/app/components/icons/CandleIcon";
import PlayAddIcon from "@/app/components/icons/PlayAddIcon";
import { routes } from "@/app/routes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | بازار باینکس",
};

function Page() {
  return (
    <>
      <div className=" px-4 py-4 flex flex-col gap-4">
        <div className="lg:hidden flex items-center justify-center">
          <Caption>{"بازار باینکس"}</Caption>
        </div>
        <Link href={routes.dashboard.robots.addRobotOnline} className="w-full max-w-[360px] mx-auto">
          <ButtonBinex className="bg-green100 flex items-center justify-center gap-2">
            <PlayAddIcon />
            {"راه‌اندازی آنلاین ربات"}
          </ButtonBinex>
        </Link>

        <div className="bg-white p-4 rounded-2xl lg:flex flex-col gap-4 hidden ">
          <div className="">
            <Caption className="text-dark-black text-xl">{" بازار باینکس"}</Caption>
          </div>
          <TableDTwo />
        </div>
        <MarketTableMobile />
      </div>
    </>
  );
}

export default Page;
