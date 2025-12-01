import ActiveTableRobot from "@/app/components/dashboard/robotDash/ActiveTableRobot";
import Caption from "@/app/components/global/Caption";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import PlayAddIcon from "@/app/components/icons/PlayAddIcon";
import { routes } from "@/app/routes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | ربات‌های فعال",
};

function Page() {
  return (
    <>
      <div className=" px-4 py-4 flex flex-col gap-4">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
          <Caption>{"ربات‌های فعال من "}</Caption>
          <div className="~lg:w-full">
            <Link href={routes.dashboard.robots.binexRobots}>
              <ButtonPrimary className="">
                <span className="flex items-center justify-center">
                  <i className="text-white mx-2">
                    <PlayAddIcon />
                  </i>
                  {"افزودن ربات جدید"}
                </span>
              </ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="lg:col-span-1 col-span-2 ">
            <ActiveTableRobot />
          </div>
          <div className="lg:col-span-1 col-span-2 ">
            <ActiveTableRobot />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
