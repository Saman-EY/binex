import { getOrders } from "@/api/orders";
import DashboardOrderTable from "@/app/components/dashboard/orders/DashboardOrderTable";
import OrderBox from "@/app/components/dashboard/orders/order-mobile/OrderBox";
import Caption from "@/app/components/global/Caption";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد  | سفارشات فعال ",
};

type TOrdersProps = {};

async function Orders({}: TOrdersProps) {
  const orders = await getOrders();
  return (
    <>
      {/* desktop */}
      <div className="bg-white rounded-2xl lg:flex flex-col items-start gap-4 mx-4 my-4 px-4  hidden">
        <div className="flex items-center justify-center lg:items-start mt-4 flex-col">
          <Caption className="text-dark-black text-xl">{"سفارشات فعال من"}</Caption>
        </div>
        <div className="w-full flex">
          <DashboardOrderTable />
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
        <div className="flex items-center justify-center lg:items-start  mt-4 flex-col">
          <Caption className="text-dark-black text-base">{"سفارشات فعال من"}</Caption>
        </div>
        <div className="flex flex-col gap-4">
          {orders.map((q, i) => {
            return <OrderBox key={i} order={q} />;
          })}
        </div>
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

export default Orders;
