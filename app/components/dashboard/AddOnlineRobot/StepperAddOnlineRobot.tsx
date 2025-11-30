"use client";

import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils";
import ButtonBinex from "../../global/button/ButtonBinex";
import { Modal } from "../../global/Modal";
import BoxIcon from "../../icons/BoxIcon";
import { routes } from "@/app/routes";
import { CheckmarkIcon } from "react-hot-toast";
import TickSquareIcon from "../../icons/TickSquareIcon";

function StepperAddOnlineRobot() {
  const params = useSearchParams();
  const currentStep = +(params.get("step") || 1);

  return (
    <>
      <div className="bg-white rounded-2xl lg:p-8 p-4">
        <TabGroup selectedIndex={currentStep - 1}>
          <TabList
            className={
              "flex md:flex-row flex-col items-start  justify-between lg:items-center sm:gap-4 lg:gap-1 "
            }
          >
            {steps.map((step, idx) => {
              const isActive: boolean = +currentStep > idx;
              return (
                <React.Fragment key={idx}>
                  <Tab
                    key={idx}
                    as={Link}
                    href={`?step=${idx + 1}`}
                    className={"flex text-xs outline-0"}
                  >
                    <span
                      className={cn(
                        "rounded-full w-5 h-5 grid place-items-center bg-gray-300 ml-1 text-white",
                        isActive && "bg-dark "
                      )}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={cn("text-gray-300", isActive && "text-dark")}
                    >
                      {step}
                    </span>
                  </Tab>
                  {idx < steps.length - 1 && (
                    <hr
                      className={cn(
                        "border-gray-300 grow mx-2",
                        +currentStep > idx + 1 && "border-dark",
                        "mobile:w-[1px] mobile:h-[22px] mobile:bg-gray-300",
                        idx < +currentStep - 1 && "mobile:bg-dark"
                      )}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </TabList>
          <TabPanels className={"pt-8 lg:pt-16"}>
            <TabPanel>
              <Step1 />
            </TabPanel>
            <TabPanel>
              <Step2 />
            </TabPanel>
            <TabPanel>
              <Step3 />
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <div className={cn("flex justify-between mt-16")}>
          <Link
            href={`?step=${currentStep - 1}`}
            aria-disabled={currentStep < 2}
          >
            <ButtonBinex
              className={cn(
                currentStep < 2
                  ? "pointer-events-none opacity-0"
                  : "bg-slate-400"
              )}
            >
              {"مرحله قبل"}
            </ButtonBinex>
          </Link>
          <Link
            href={`?step=${currentStep + 1}`}
            className={cn(currentStep >= 3 && "hidden")}
          >
            <ButtonBinex
              className={cn(
                currentStep >= 3 && "bg-gray-300 pointer-events-none"
              )}
            >
              {"مرحله بعد"}
            </ButtonBinex>
          </Link>
          {currentStep > 2 && (
            <Modal
              className={cn("rounded-2xl px-4 py-10 w-full")}
              button={
                <ButtonBinex className="bg-green100">
                  {"راه‌اندازی آنلاین"}
                </ButtonBinex>
              }
            >
              <div className="flex items-center justify-center flex-col gap-4">
                <span className="lg:text-xl text-sm text-black">
                  ربات ROCKET با موفقیت فعال شد.
                </span>
                <div className="lg:w-1/2 w-full">
                  <i className="scale-[2] text-success flex mx-auto justify-center mt-3">
                    <TickSquareIcon />
                  </i>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default StepperAddOnlineRobot;

const steps = [
  "مشخص کردن صرافی و کلید API",
  "مشخص کردن جزییات معامله",
  "فعال‌سازی ربات",
];
