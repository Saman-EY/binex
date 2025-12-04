import React from "react";
import Select from "../../global/Select";
import ButtonFilter from "../../global/button/ButtonFilter";
import HierarchyIcon from "../../icons/HierarchyIcon";
import SelectTwo from "../../global/SelectTwo";
import DashboardSelect from "@/app/components/DashboardSelect";

function FilterTable() {
  return (
    <div className="flex items-center justify-between lg:flex-row flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:flex-row flex-col gap-6 w-full">
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
        <div className="col-span-1">
          <Select className="text-gray800 text-sm text-nowrap " label="تاریخ شروع:"></Select>
        </div>
        <div className="col-span-1">
          <Select className="text-gray800 text-sm text-nowrap " label="تاریخ پایان:"></Select>
        </div>
      </div>
      <div className="lg:w-1/5 w-full">
        <ButtonFilter>
          <div className="  flex items-center justify-center gap-2">
            <i className="text-dark group-hover:text-white">
              <HierarchyIcon />
            </i>
            {"اعمال فیلتر"}
          </div>
        </ButtonFilter>
      </div>
    </div>
  );
}

export default FilterTable;
