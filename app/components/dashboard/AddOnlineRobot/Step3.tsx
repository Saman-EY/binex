import Link from "next/link";
import React from "react";
import PlayCircleIcon from "../../icons/PlayCircleIcon";
import ButtonBinex from "../../global/button/ButtonBinex";
import ProfileRobot from "../../binexRobots/ProfileRobot";
import { routes } from "@/app/routes";

type Props = {};

function Step3({}: Props) {
  return (
    <div className="flex items-center justify-center lg:gap-12 lg:flex-row flex-col gap-6">
      <div className="flex flex-col items-center gap-4 lg:order-1 order-2">
        <div className="flex items-center justify-center">
          <span className="text-green100 text-xs lg:text-sm font-bold ">ربات</span>
          <Link href={"#"} className="mx-1 text-blue">
            ROCKET
          </Link>
          <span className="text-green100 text-xs lg:text-sm font-bold">با موفقیت برای ارز</span>
          <Link href={"#"} className="mx-1 text-blue">
            BTC
          </Link>
          <span className="text-green100 text-xs lg:text-sm font-bold">اضافه شد.</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <i className="text-green100">
            <PlayCircleIcon />
          </i>
          <div className="flex gap-1">
            <span className="text-dark text-sm ">تاریخ فعال سازی:</span>
            <span className="text-dark text-sm ">1402/02/31</span>
          </div>
        </div>
        <div className="w-full">
          <Link href={routes.dashboard.robots.activeRobots}>
            <ButtonBinex className="!bg-dark800  ">
              <span className="flex items-center gap-1 justify-center">مشاهده جزییات</span>
            </ButtonBinex>
          </Link>
        </div>
      </div>
      <div className="lg:order-2 order-1">
        <ProfileRobot name="TITAN" name_fa="تایتان" image="/img/robots/TITAN.png" />
      </div>
    </div>
  );
}

export default Step3;
