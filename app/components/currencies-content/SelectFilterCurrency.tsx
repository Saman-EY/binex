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
          <div className="col-span-2 flex items-center gap-3">
            <label className="shrink-0 text-gray800 min-w-[3.8rem] lg:min-w-min text-end text-sm" htmlFor="">
              ربات :
            </label>
            <div className="w-full">
              <DashboardSelect
                placeholder="نام ربات را تایپ کنید..."
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
          <div className="col-span-2 lg:col-span-2">
            <Select className="text-gray800 text-sm text-nowrap" label="تاریخ شروع:" />
          </div>
          <div className="col-span-2 lg:col-span-2">
            <Select className="text-gray800 text-sm text-nowrap" label="تاریخ پایان:" />
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
