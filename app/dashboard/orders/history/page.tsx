import DashboardOrderHistoryTable from "@/app/components/dashboard/orders/DashboardOrderHistoryTable";
import OrderHistoryBox from "@/app/components/dashboard/orders/order-mobile/OrderHistoryBox";
import DashboardSelect from "@/app/components/DashboardSelect";
import ButtonFilter from "@/app/components/global/button/ButtonFilter";
import Caption from "@/app/components/global/Caption";
import Select from "@/app/components/global/Select";
import SelectBox from "@/app/components/global/SelectBox";
import HierarchyIcon from "@/app/components/icons/HierarchyIcon";
import FilterTable from "@/app/components/tables/filter/FilterTable";
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
          <Caption className="text-dark-black text-xl">{"تاریخچه سفارشات من"}</Caption>
        </div>
        <Filters />

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
          <Caption className="text-dark-black text-base">{"تاریخچه سفارشات من"}</Caption>
        </div>
        <div className="bg-white rounded-2xl lg:flex flex-col  p-5">
          <Filters />
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

const Filters = () => {
  return (
    <div className="flex items-center justify-between lg:flex-row flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-7 items-center lg:flex-row flex-col gap-3 w-full">
        <div className="col-span-1 flex items-center gap-1">
          <label className="shrink-0 text-gray800 min-w-[4.3rem] lg:min-w-min text-end text-sm" htmlFor="">
            رمزارز :
          </label>
          <div className="w-full">
            <DashboardSelect
              placeholder=""
              options={[
                { title: "BTC", icon: "/img/cryptocurrency/3.svg" },
                { title: "ETH", icon: "/img/cryptocurrency/ETH.svg" },
              ]}
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-1">
          <label className="shrink-0 text-gray800 min-w-[4.3rem] lg:min-w-min text-end text-sm" htmlFor="">
            صرافی :
          </label>
          <div className="w-full">
            <DashboardSelect placeholder="" options={exchanges} />
          </div>
        </div>
        <div className="col-span-1 flex items-center gap-1">
          <label className="shrink-0 text-gray800 min-w-[4.3rem] lg:min-w-min text-end text-sm" htmlFor="">
            ربات :
          </label>
          <div className="w-full">
            <DashboardSelect
              placeholder=""
              options={[
                { title: "Neuron", icon: "/img/robots/NEURON.png" },
                { title: "Quantom", icon: "/img/robots/QUANTUM.png" },
                { title: "Algorithm", icon: "/img/robots/ALGORITHM.png" },
                { title: "Starlet", icon: "/img/robots/STARLET.png" },
                { title: "Infinit", icon: "/img/robots/INFINIT.png" },
              ]}
            />
          </div>
        </div>
        <div className="col-span-1">
          <Select className="text-gray800 text-sm text-nowrap " label="تاریخ شروع:"></Select>
        </div>
        <div className="col-span-1">
          <Select className="text-gray800 text-sm text-nowrap " label="تاریخ پایان:"></Select>
        </div>
        <div className="col-span-1 flex items-center justify-end gap-1">
          <label className="shrink-0 text-gray800 min-w-[4.3rem] lg:min-w-[2.3rem]  text-end text-sm" htmlFor="">
            نوع :
          </label>
          <div className="w-full xl:max-w-[13rem]">
            <DashboardSelect placeholder="" options={types} />
          </div>
        </div>
        <div className="col-span-1  ">
          <ButtonFilter>
            <div className=" flex items-center justify-center gap-2">
              <i className="text-dark group-hover:text-white">
                <HierarchyIcon />
              </i>
              {"اعمال فیلتر"}
            </div>
          </ButtonFilter>
        </div>
      </div>
    </div>
  );
};

const exchanges = [
  {
    id: 1,
    title: "Binance",
    icon: "/img/binancelogo.png",
  },
  {
    id: 2,
    title: "Kucoin",
    icon: "/img/kucoinlogo.png",
  },
];
const types = [
  {
    id: 1,
    title: "همه",
  },
  {
    id: 2,
    title: "سود",
  },
  {
    id: 3,
    title: "زیان",
  },
];
