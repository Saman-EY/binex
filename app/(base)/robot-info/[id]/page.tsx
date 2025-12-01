import RobotProfile from "@/app/components/binexRobots/RobotProfile";
import RobotProfitBox from "@/app/components/binexRobots/RobotProfitBox";
import Caption from "@/app/components/global/Caption";
import TableRobot from "@/app/components/tables/TableRobot";
import FilterTable from "@/app/components/tables/filter/FilterTable";
import Image from "next/image";
import React from "react";

function RobotInfo() {
  return (
    <>
      <div className="container lg:mx-auto px-4 ">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row items-center lg:mt-8 mt-4">
            <Image
              className="lg:block hidden"
              src="/img/icone/binex-robot.png"
              alt="binex Logo"
              width={58}
              height={78}
            />
            <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 w-full">
              <Caption className="text-black font-bold lg:text-2xl text-xl">
                {"اطلاعات ربات"}
              </Caption>
              <p className="text-xs text-gray900  lg:text-start text-center lg:block hidden">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse gap-8 items-end justify-between mb-8 ">
            <div className="w-full lg:w-1/2  ">
              <div className="gap-5 flex flex-col">
                <RobotProfitBox />
              </div>
            </div>
            <div className="w-full lg:w-1/3 ">
              <div className="">
                <RobotProfile />
              </div>
            </div>
          </div>
          <div className="">
            <FilterTable />
          </div>
          <div className="">
            <TableRobot />
          </div>
        </div>
      </div>
    </>
  );
}

export default RobotInfo;
