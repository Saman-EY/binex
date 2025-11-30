"use client";

import { cn } from "@/utils";
import React, { useState } from "react";
import CandleIcon from "../../icons/CandleIcon";

function FilterTab() {
  const [activeIds, setActiveIds] = useState([0]);
  return (
    <div className="bg-white rounded-2xl lg:px-4 lg:py-2 px-4 flex items-center justify-start gap-6 py-2 lg:flex-row flex-col">
      <div className="flex items-center lg:justify-start justify-between w-full lg:w-auto lg:border-0 border-b border-b-line ~lg:pb-2">
        <div className="flex items-center gap-1">
          <i className="text-dark">
            <CandleIcon />
          </i>
          <span className="text-dark-black-black text-sm">{"فیلتر ها"}</span>
        </div>
        <div className="block lg:hidden">
          <button className="text-xs text-white bg-blue rounded-2xl px-2 py-2" onClick={_ => setActiveIds([])}>
            حذف همه فیلترها
          </button>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-boxed bg-transparent">
        {tabs.map((tab, idx) => {
          return (
            <a
              key={idx}
              role="tab"
              className={cn(
                "tab text-gray800 text-xs lg:text-sm text-nowrap ~lg:px-2",
                activeIds.includes(idx) && "text-dark"
              )}
              onClick={(_) => setActiveIds(activeIds.includes(idx) ? activeIds.filter(i => i !== idx) : [ ...activeIds, idx ])}
            >
              {tab}
            </a>
          );
        })}
      </div>
      <div className="hidden lg:block">
        <button className="text-xs text-white bg-blue900 rounded-2xl px-2 py-2" onClick={_ => setActiveIds([])}>
          حذف همه فیلترها
        </button>
      </div>
    </div>
  );
}

export default FilterTab;

const tabs = ["پرطرفدارترین", "بیشترین سود", "بیشترین زیان", "ربات ها"];
