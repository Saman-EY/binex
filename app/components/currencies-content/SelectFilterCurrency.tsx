"use client";
import React from "react";
import ButtonFilter from "../global/button/ButtonFilter";
import HierarchyIcon from "../icons/HierarchyIcon";
import SelectTwo from "../global/SelectTwo";
import Select from "../global/Select";
import DashboardSelect from "@/app/components/DashboardSelect";

function SelectFilterCurrency() {
  return (
      <div className="flex items-center justify-between gap-4 lg:flex-row flex-col">
        <div className="flex items-center gap-4 lg:flex-row flex-col grow w-full">
          <div className="grid grid-cols-2 lg:grid-cols-8 items-center gap-4 w-full">
            <div className="col-span-2">
              <DashboardSelect
                placeholder="ربات:"
                options={[
                  { title: "Neuron" },
                  { title: "Quantom" },
                  { title: "Algorithm" },
                  { title: "Starlet" },
                  { title: "Infinit" },
                ]}
              />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Select className="text-gray800 lg:text-sm  text-xs text-nowrap" label="تاریخ شروع:" />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Select className="text-gray800 lg:text-sm  text-xs text-nowrap" label="تاریخ پایان:" />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <ButtonFilter>
                <div className="flex items-center justify-center gap-2">
                  <i className="text-dark group-hover:text-white">
                    <HierarchyIcon />
                  </i>
                  {"اعمال فیلتر"}
                </div>
              </ButtonFilter>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SelectFilterCurrency;
