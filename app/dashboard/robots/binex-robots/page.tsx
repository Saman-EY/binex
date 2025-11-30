import RobotBox from "@/app/components/dashboard/robotDash/RobotBox";
import Caption from "@/app/components/global/Caption";
import Pagination from "@/app/components/global/Pagination";
import React from "react";
import getRobots from "@/api/robots";
import { TRobot } from "@/api/robots/type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد | افزودن ربات‌های باینکس",
};


async function Page() {
  const robots: TRobot[] = await getRobots();

  return (
    <>
      <div className="px-4 py-4 flex flex-col gap-4">
        <div className="text-dark-black text-xl font-semibold flex items-center lg:items-start lg:justify-start justify-center">
          <Caption>{"ربات‌های باینکس"}</Caption>
        </div>

      
        <div className="grid grid-cols-3 gap-4">
          {robots.map((robot) => {
            return (
              <div key={robot.id} className="col-span-3 lg:col-span-1">
                <RobotBox {...robot} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
