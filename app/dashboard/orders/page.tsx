import { getOrders } from "@/api/orders";
import SelectFilterCurrency from "@/app/components/currencies-content/SelectFilterCurrency";
import DashboardOrderTable from "@/app/components/dashboard/orders/DashboardOrderTable";
import OrderBox from "@/app/components/dashboard/orders/order-mobile/OrderBox";
import DashboardSelect from "@/app/components/DashboardSelect";
import ButtonFilter from "@/app/components/global/button/ButtonFilter";
import Caption from "@/app/components/global/Caption";
import Select from "@/app/components/global/Select";
import HierarchyIcon from "@/app/components/icons/HierarchyIcon";
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
        <div className="flex items-center justify-center lg:items-start mt-4 flex-col w-full">
          <Caption className="text-dark-black text-xl">{"سفارشات فعال من"}</Caption>
          <Filters />
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

const Filters = () => {
  return (
    <section className="mt-5 flex items-center gap-4 w-full">
      <div className="w-full">
        <DashboardSelect
          placeholder="ارز"
          options={[
            { title: "BTC", icon: "/img/cryptocurrency/3.svg" },
            { title: "ETH", icon: "/img/cryptocurrency/ETH.svg" },
          ]}
        />
      </div>
      <div className="w-full">
        <DashboardSelect
          placeholder="صرافی"
          options={[
            { title: "BTC", icon: "/img/cryptocurrency/3.svg" },
            { title: "ETH", icon: "/img/cryptocurrency/ETH.svg" },
          ]}
        />
      </div>
      <div className="w-full">
        <DashboardSelect
          placeholder="ربات"
          options={[
            { title: "Neuron", icon: "/img/robots/NEURON.png" },
            { title: "Quantom", icon: "/img/robots/QUANTUM.png" },
            { title: "Algorithm", icon: "/img/robots/ALGORITHM.png" },
            { title: "Starlet", icon: "/img/robots/STARLET.png" },
            { title: "Infinit", icon: "/img/robots/INFINIT.png" },
          ]}
        />
      </div>
      <div className="w-full">
        <Select className="text-gray800 lg:text-sm  text-xs text-nowrap" label="تاریخ شروع:" />
      </div>
      <div className="w-full">
        <Select className="text-gray800 lg:text-sm  text-xs text-nowrap" label="تاریخ پایان:" />
      </div>
      <div className="w-full max-w-[150px]">
        <ButtonFilter>
          <div className="flex items-center justify-center gap-2">
            <i className="text-dark group-hover:text-white">
              <HierarchyIcon />
            </i>
            {"اعمال فیلتر"}
          </div>
        </ButtonFilter>
      </div>
    </section>
  );
};
