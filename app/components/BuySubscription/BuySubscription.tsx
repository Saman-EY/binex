"use client";

import React from "react";
import AddBox from "./AddBox";
import ElementPlusIcon from "@icons/ElementPlusIcon";
import ButtonPrimary from "../global/button/ButtonPrimary";
import SelectBox from "../global/SelectBox";
import { CurrencyItem } from "@/api/types";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { usePathname } from "next/navigation";

function BuySubscription() {
  const { matches } = useMediaQuery("(min-width: 1280px)");
  const path = usePathname()
  
  return (
    <>
      <div className="container mx-4 lg:mx-auto gap-4 flex flex-col">
        <div className="grid grid-cols-3 lg:mt-8 mt-4 gap-4">
          <div className="lg:col-span-1 col-span-3">
            <SelectBox
              items={currencies}
              label="ارز موردنظر خود را انتخاب کنید"
              rowTitle="نماد و نام ارز"
              rowSubtitle="انتخاب"
              searchLabel="جستجوی نام ارز"
              defaultOpen
              afterSelectLabel={'نام ارز'}
            />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <SelectBox
              items={exchanges}
              label="صرافی‌ موردنظر خود را انتخاب کنید"
              rowTitle="نماد و نام صرافی"
              rowSubtitle="انتخاب"
              defaultOpen={path.indexOf('dashboard') > -1 || matches}
              afterSelectLabel={'صرافی'}
            />
          </div>
          <div className="lg:col-span-1 col-span-3">
            <SelectBox
              items={times}
              label={"مدت زمان اشتراک خود را مشخص نمایید"}
              rowTitle="مدت زمان"
              rowSubtitle="انتخاب"
              defaultOpen={path.indexOf('dashboard') > -1 || matches}
              afterSelectLabel={'تایم‌فریم'}
            />
          </div>
        </div>
        <div className="grid grid-cols-3  mobile:mb-8">
          <div className="lg:col-span-1 col-span-3"></div>
          <div className="lg:col-span-1 col-span-3">
            <div className=" flex px-0 lg:px-4">
              <ButtonPrimary>
                <span className="flex items-center justify-center">
                  <i className="text-white mx-2">
                    <ElementPlusIcon />
                  </i>
                  {"افزودن"}
                </span>
              </ButtonPrimary>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="mt-6">
          <AddBox />
        </div>
      </div>
    </>
  );
}

export default BuySubscription;

const currencies = [
  {
    id: 1,
    name: "BTC",
    name_fa: "بیتکوین",
    icon: "/img/cryptocurrency/3.svg",
  },
  {
    id: 2,
    name: "ETH",
    name_fa: "اتریوم",
    icon: "/img/cryptocurrency/ETH.svg",
  },
];

const exchanges: CurrencyItem[] = [
  {
    id: 1,
    icon: "/img/binancelogo.png",
    name: "Binance",
    name_fa: "بایننس",
  },
  {
    id: 2,
    icon: "/img/binancelogo.png",
    name: "Cucoin",
    name_fa: "کوکوین",
  },
];

const times = [
  {
    id: 1,
    name: "10",
    name_fa: "روز",
  },
  {
    id: 2,
    name: "20",
    name_fa: "روز",
  },
  {
    id: 3,
    name: "30",
    name_fa: "روز",
  },
  {
    id: 4,
    name: "60",
    name_fa: "روز",
  },
  {
    id: 5,
    name: "90",
    name_fa: "روز",
  },
  {
    id: 6,
    name: "180",
    name_fa: "روز",
  },
  {
    id: 7,
    name: "365",
    name_fa: "روز",
  },
];
