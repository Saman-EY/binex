"use client";
import React, { useState } from "react";
import TableOne from "@/app/components/tables/TableOne";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import ProfitLossFilter from "@/app/components/global/ProfitLossFilter";
import Caption from "@/app/components/global/Caption";
import Link from "next/link";
import clsx from "clsx";
import { routes } from "@/app/routes";
import { cn } from "@/utils";

function ThirtyDaysProfitLoss() {
  const [isFirst, setIsFirst] = useState(true);
  const [isShiftingToFirst, setIsShiftingToFirst] = useState(true);
  const [currentDuration, setCurrentDuration] = useState({
    value: "30d",
    label: "30 روزه",
    inText: "30 روز",
  });
  const changeTab = (_isFirst: boolean) => {
    setIsShiftingToFirst(_isFirst);
    setTimeout(() => {
      setIsFirst(_isFirst);
    }, 100);
  };

  const durations = [
    {
      value: "7d",
      label: "7 روزه",
      inText: "7 روز",
    },
    {
      value: "30d",
      label: "30 روزه",
      inText: "30 روز",
    },
    {
      value: "60d",
      label: "60 روزه",
      inText: "60 روز",
    },
    {
      value: "90d",
      label: "90 روزه",
      inText: "90 روز",
    },
    {
      value: "1y",
      label: "1 ساله",
      inText: "1 سال",
    },
  ];

  return (
    <>
      <div className="lg:container lg:mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-between mx-4 mt-9 gap-1">
          <div className="flex items-center gap-5 mb-4 lg:mb-0 flex-wrap  w-full">
            <span className="text-xl text-dark font-bold whitespace-nowrap">
              بیشترین سود و زیان {currentDuration.inText} اخیر
            </span>
            <div style={{ scrollbarWidth: "thin" }} className="flex items-center gap-2 overflow-x-auto py-2 w-[500px]">
              {durations.map((item) => (
                <button
                  type="button"
                  onClick={(e) => {
                    // e.stopPropagation();
                    // e.preventDefault();
                    setCurrentDuration(item);
                  }}
                  className={cn(
                    "min-w-[5rem] whitespace-nowrap text-sm shadow-[0px_2px_5px_0px_#32326926,0px_1px_1px_0px_#0000000c] bg-white py-2 rounded-md hover:bg-dark hover:text-white transition-all",
                    currentDuration.value === item.value && "bg-dark text-white"
                  )}
                  key={item.value}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-1/5 w-full shrink-0">
            <ProfitLossFilter isFirst={isShiftingToFirst} setIsFirst={changeTab} />
          </div>
        </div>
        <div
          className={clsx(
            "mx-4 transition hidden",
            isFirst ? "translate-y-0 opacity-100 left-0 " : "-translate-y-2 opacity-0",
            isShiftingToFirst && "!block"
          )}
        >
          <TableOne arrow forceSign={1} />
        </div>
        <div
          className={clsx(
            "mx-4 transition hidden",
            !isFirst ? "translate-y-0 opacity-100 left-0" : "-translate-y-2 opacity-0",
            !isShiftingToFirst && "!block"
          )}
        >
          <TableOne arrow forceSign={-1} />
        </div>
        <div className="mb-4 mt-3  mx-4">
          <Link href={routes.maximumMonthly}>
            <ButtonBinex className="bg-dark800">{" بررسی سود و زیان تمام رمزارزها"}</ButtonBinex>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ThirtyDaysProfitLoss;
