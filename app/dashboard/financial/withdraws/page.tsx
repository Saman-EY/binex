import WithdrawsTable from "@/app/components/dashboard/financial/withdraws/WithdrawsTable";
import WithdrawsTableMobile from "@/app/components/dashboard/financial/withdraws/WithdrawsTableMobile";
import Caption from "@/app/components/global/Caption";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | مالی | برداشت‌ها"
};


type TWithdrawsProps = {};
function Withdraws({ }: TWithdrawsProps) {
  return (<>
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex items-center justify-center lg:justify-start  mt-4 ">
        <Caption className="text-dark-black lg:text-xl text-base">{"جزییات برداشت‌ها "}</Caption>
      </div>
      <div className="bg-white rounded-2xl lg:flex hidden flex-col gap-2  my-4 px-4">
        <div className="flex items-center justify-center lg:justify-start  mt-4">
          <Caption className="text-gray900 text-base">{"لیست برداشت‌های شما "}</Caption>
        </div>
        <div className="">
          <WithdrawsTable />
        </div>
      </div>
      {/* mobile */}
      <div className="lg:hidden flex">
        <WithdrawsTableMobile />
      </div>
    </div>
  </>)
}

export default Withdraws;