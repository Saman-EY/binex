import StepperAddOnlineRobot from "@/app/components/dashboard/AddOnlineRobot/StepperAddOnlineRobot";
import HeadAddRobot from "@/app/components/dashboard/HeadAddRobot";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "داشبورد | افزودن ربات آنلاین",
};

function Page() {
  return (
    <>
      <div className="px-4 py-4 flex flex-col gap-4">
        <HeadAddRobot />
        <StepperAddOnlineRobot />
      </div>
    </>
  );
}

export default Page;
