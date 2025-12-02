"use client";
import React, { useState } from "react";
import Caption from "@/app/components/global/Caption";
import ProfitLossFilter from "@/app/components/global/ProfitLossFilter";
import TableOne from "@/app/components/tables/TableOne";
import FilterTable from "@/app/components/tables/filter/FilterTable";
import clsx from "clsx";

function Page() {
  const [isFirst, setIsFirst] = useState(true);
  const [isShiftingToFirst, setIsShiftingToFirst] = useState(true);
  const changeTab = (_isFirst: boolean) => {
    setIsShiftingToFirst(_isFirst);
    setTimeout(() => {
      setIsFirst(_isFirst);
    }, 100);
  };
  return (
    <>
      <div className="container mx-auto">
        {/* <div className="flex  flex-col gap-4 lg:mt-8 mt-4 lg:mx-4">
          <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-4">
            <Caption className="text-black font-bold lg:text-2xl text-base">
              {"بیشترین سود و زیان 30 روز اخیر  "}
            </Caption>

            <div className="lg:w-1/5 w-full ">
              <ProfitLossFilter isFirst={isShiftingToFirst} setIsFirst={changeTab}></ProfitLossFilter>
            </div>
          </div>

          <FilterTable />
        </div> */}
        <div
          className={clsx(
            "lg:mx-4 mx-0 transition hidden",
            isFirst ? "translate-y-0 opacity-100 left-0 " : "-translate-y-2 opacity-0",
            isShiftingToFirst && "!block"
          )}
        >
          <TableOne forceSign={1} />
        </div>
        <div
          className={clsx(
            "lg:mx-4 mx-0 transition hidden",
            !isFirst ? "translate-y-0 opacity-100 left-0" : "-translate-y-2 opacity-0",
            !isShiftingToFirst && "!block"
          )}
        >
          <TableOne forceSign={-1} />
        </div>
      </div>
    </>
  );
}

export default Page;
