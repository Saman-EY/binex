import RobotProfitBoxTwo from "@/app/components/binexRobots/RobotProfitBoxTwo";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import ChartCIcon from "@/app/components/icons/ChartCIcon";
import Link from "next/link";
import React from "react";
import { routes } from "@/app/routes";
import ProfileRobot from "@/app/components/binexRobots/ProfileRobot";
import OnlineUser from "@/app/components/global/OnlineUser";
import getRobots from "@/api/robots";

async function Page() {
  const robots = await getRobots();
  return (
    <>
      <div className="container lg:mx-auto mx-4">
        <div className="flex items-center justify-center mb-2 py-4 bg-white z-10 lg:-mx-8 sm:-mx-4 -mx-2">
          <span className="text-black lg:text-3xl text-xl font-bold  ">{"ربات‌های باینکس"}</span>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {robots.map((item, i) => {
            return (
              <div className="col-span-3 lg:col-span-1" key={i}>
                <div className="max-w-[360px] mb-2 text-xs">
                  <OnlineUser />
                </div>
                <div className="bg-white rounded-2xl px-4 lg:py-8 py-4 gap-4 shadow-binex flex flex-col border border-transparent  hover:border-blue-light transition-all">
                  <ProfileRobot name={item.name} name_fa={item.name_fa} image={item.image} />
                  <Link href={"/robot-info/neo"}>
                    <RobotProfitBoxTwo />
                  </Link>
                  <div className="flex flex-col gap-2 ">
                    <Link href={routes.dashboard.robots.addRobotOnline}>
                      <ButtonPrimary className="!py-4 ">
                        <span className=" gap-1 flex items-center justify-center">
                          <i>
                            <ChartCIcon />
                          </i>
                          راه‌اندازی
                        </span>
                      </ButtonPrimary>
                    </Link>
                    <Link href={routes.robotInfo}>
                      <ButtonBinex className="!bg-dark800 !py-4 ">
                        <span className="flex items-center gap-1 justify-center">صفحه اختصاصی</span>
                      </ButtonBinex>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
