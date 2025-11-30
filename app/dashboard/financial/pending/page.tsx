import PendingTable from "@/app/components/dashboard/financial/pending/PendingTable";
import PendingTableMobile from "@/app/components/dashboard/financial/pending/PendingTableMobile";
import Caption from "@/app/components/global/Caption";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | مالی | در انتظار پرداخت",
};

type TPendingProps = {};
function Pending({}: TPendingProps) {
  return (
    <>
      {/* desktop */}
      <div className="flex flex-col gap-4 mx-4 ">
        <div className="lg:flex hidden items-center justify-center lg:justify-start  mt-4 ">
          <Caption className="text-dark-black lg:text-xl text-base">
            {"جزییات در انتظار پرداخت "}
          </Caption>
        </div>
        <div className="bg-white rounded-2xl lg:flex hidden flex-col gap-4 px-4 py-4 my-4">
          <div className="flex items-center justify-center lg:justify-start">
            <Caption className="text-gray900 text-base">
              {" لیست در انتظار پرداخت "}
            </Caption>
          </div>
          <div className="">
            <PendingTable />
          </div>
        </div>
        {/* mobile */}
        <div className="flex lg:hidden flex-col gap-4">
          <div className="flex items-center justify-center lg:justify-start">
            <Caption className="text-dark-black text-base mt-4">
              {" لیست درانتظار پرداخت "}
            </Caption>
          </div>
            <PendingTableMobile />
            <PendingTableMobile />
            <PendingTableMobile />
            <PendingTableMobile />
            <PendingTableMobile />
            <PendingTableMobile />
        </div>
      </div>
    </>
  );
}

export default Pending;
