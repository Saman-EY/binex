"use client";

import ProfitLossBox from "@/app/components/dashboard/ProfitLoss/ProfitLossBox";
import TotalProfitLoss from "@/app/components/dashboard/ProfitLoss/TotalProfitLoss";
import TableDOne from "@/app/components/dashboard/TablesDash/TableDOne";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";
import React, { useContext } from "react";
import { ExchangeContext } from "@/app/dashboard/layout";

function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const toman = slug?.length > 0;
  const currency = "تتر";
  const { exchange } = useContext(ExchangeContext);

  return (
    <>
      <div className="px-4 pb-4 pt-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2">
            <Image src={exchange.icon} alt={"logo"} height={36} width={34} />
            <Caption className="text-dark-black text-2xl font-semibold">{exchange.name_fa}</Caption>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-2 lg:col-span-1">
              <TotalProfitLoss
                className="!lg:text-gray900 !text-dark-black"
                title=" مجموع شروع معامله"
                amount="145.145"
                type={`(${currency})`}
              ></TotalProfitLoss>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <TotalProfitLoss
                className="!text-up"
                title="ارزش کل"
                amount="145.145"
                type={`(${currency})`}
              ></TotalProfitLoss>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <TotalProfitLoss
                className="!text-up"
                title=" مقدار کل سود و زیان"
                amount="145.145+"
                type={`(${currency})`}
              ></TotalProfitLoss>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <TotalProfitLoss className="!text-up" title="درصد کل سود و زیان" amount="48%+ " type=""></TotalProfitLoss>
            </div>
          </div>
          {/* table */}
          <div className="bg-white p-4 rounded-2xl lg:block hidden w-full ">
            <TableDOne currency={currency} />
          </div>
          <div className="lg:hidden flex">
            <ProfitLossBox />
          </div>
          <div className="bg-white px-4 py-10 rounded-2xl   w-full  flex items-center justify-center">
            <span className="tex-xs lg:text-sm text-gray900">هنوز معامله‌ای انجام نشده است.</span>
          </div>
        </div>
        {/* No deal */}
      </div>
    </>
  );
}

export default Page;
