import DashboardOrderHistoryTable from "@/app/components/dashboard/orders/DashboardOrderHistoryTable";
import OrderHistoryBox from "@/app/components/dashboard/orders/order-mobile/OrderHistoryBox";
import Caption from "@/app/components/global/Caption";
import { Modal } from "@/app/components/global/Modal";
import WarningIcon from "@/app/components/icons/WarningIcon";
import { cn } from "@/utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد  | تاریخچه سفارشات",
};

type TOrdersHistoryProps = {};

function OrdersHistory({}: TOrdersHistoryProps) {
  return (
    <>
      {/* desktop */}
      <div className="bg-white rounded-2xl lg:flex flex-col items-start gap-4 mx-4 my-4 px-4 hidden">
        <div className="flex items-center justify-center lg:items-start mt-4 flex-col mb-6">
          <Caption className="text-dark-black text-xl">
            {"تاریخچه سفارشات من"}
          </Caption>
        
        </div>
        <div className="w-full lg:flex hidden ">
          <DashboardOrderHistoryTable />
        </div>
        {/* no order */}
        <div className="flex items-center justify-center px-4 py-10 mx-auto">
          <span className="text-base lg:text-xl text-gray900 text-center ">
            هنوز ربات های شما معامله‌ای انجام نداده‌اند.
          </span>
        </div>
      </div>
      {/* mobile */}
      <div className=" lg:hidden flex flex-col gap-4 mx-4">
        <div className="flex items-center justify-center lg:items-start mt-4 flex-col">
          <Caption className="text-dark-black text-base">
            {"تاریخچه سفارشات من"}
          </Caption>
        </div>
        <OrderHistoryBox />
        {/* no order mobile */}
        <div className="flex items-center justify-center px-4 py-10 mx-auto bg-white rounded-2xl w-full">
          <span className="text-sm lg:text-xl text-gray900 text-center ">
            هنوز ربات های شما معامله‌ای انجام نداده‌اند.
          </span>
        </div>
      </div>
    </>
  );
}

export default OrdersHistory;
