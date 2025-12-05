import React from "react";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";
import Link from "next/link";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import ChartIcon from "../icons/ChartIcon";
import SpeedometerIcon from "../icons/SpeedometerIcon";
import ChartCIcon from "../icons/ChartCIcon";
import ButtonPrimary from "../global/button/ButtonPrimary";
import { routes } from "@/app/routes";

function BinxRobots() {
  return (
    <>
      <div className="container lg:px-16 mx-4 lg:mx-auto  flex flex-col">
        <span className="text-dark font-bold lg:text-4xl text-2xl lg:mb-20 mb-10 text-center block">
          {"ربات‌‌های باینکس"}
        </span>
        <div className="flex flex-col gap-y-6 lg:gap-32">
          {/* Helinsky robot1 */}
          <div className="bg-white flex flex-col lg:relative rounded-2xl lg:shadow-binex py-6 lg:px-12 px-4 gap-1">
            <Link href={"/robot-info/neo"} className="lg:absolute inset-0 -right-12 z-50 max-w-max mx-auto lg:mx-0 ">
              <Image className=" " src="/img/robots/NEURON.png" alt="kucoin logo" width={250} height={212} />
            </Link>
            <div className="bg-blue-light backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden  top-0 -right-5 lg:h-32 lg:w-32 "></div>
            <div className="bg-pink backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden  top-20 right-8 h-40 w-40"></div>
            <div className="bg-green100 backdrop-blur-[-1px] blur-[60px] absolute z-40 rounded-full lg:flex hidden  -bottom-16 -right-10 lg:h-32 lg:w-32 "></div>
            <div className="grid grid-cols-4">
              <div className="lg:col-span-1 col-span-4"></div>
              <div className="lg:col-span-3 col-span-4">
                <div className="grid grid-cols-12 items-end gap-4">
                  <div className="lg:col-span-8 col-span-12">
                    <div className="flex flex-col lg:items-start lg:justify-between items-center justify-center h-full gap-3">
                      <div className="flex items-center gap-1">
                        <span className="lg:text-xl text-base text-dark font-medium">نورون</span>
                        <span className="text-3xl text-dark font-bold">Neuron</span>
                      </div>
                      <Link href={`${routes.robotInfo}?scroll=toScroll`} className="bg-green100 rounded-2xl flex items-center justify-between lg:px-8 lg:py-5 py-4 px-3 w-full ">
                        <div className="flex items-center justify-between ">
                          <div className="mx-2">
                            <i className="text-white">
                              <ChartIcon />
                            </i>
                          </div>
                          <span className="text-white lg:text-base text-xs font-medium">بیشترین سود ۳۰ روز اخیر</span>
                        </div>
                        <div className="">
                          <span className="text-white lg:text-lg text-base font-bold">10.59%+</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-3 ">
                      <Link href={routes.dashboard.robots.addRobotOnline}>
                        <ButtonPrimary className=" !py-4 ">
                          <span className=" gap-1 flex items-center justify-center">
                            <i>
                              <ChartCIcon />
                            </i>
                            راه اندازی
                          </span>
                        </ButtonPrimary>
                      </Link>
                      <Link href={routes.robotInfo}>
                        <ButtonBinex className="!bg-dark800 !py-3 ">
                          <span className="flex items-center gap-1 justify-center">
                            <i>
                              <SpeedometerIcon />
                            </i>
                            صفحه اختصاصی
                          </span>
                        </ButtonBinex>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* robot2 */}
          <div className="bg-white flex flex-col-reverse lg:flex-col gap-1 lg:relative rounded-2xl lg:shadow-binex py-6 lg:px-12 px-4 ">
            <div className="grid grid-cols-3">
              <div className="lg:col-span-2 col-span-3">
                <div className="grid grid-cols-12 items-end gap-4">
                  <div className="lg:col-span-8 col-span-12">
                    <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="lg:text-xl text-base text-dark font-medium">کوانتوم</span>
                        <span className="text-3xl text-dark font-bold">Quantom</span>
                      </div>
                      <Link href={`${routes.robotInfo}?scroll=toScroll`} className="bg-green100 rounded-2xl flex items-center justify-between lg:px-8 lg:py-5 py-4 px-3 w-full ">
                        <div className="flex items-center justify-between ">
                          <div className="mx-2">
                            <i className="text-white">
                              <ChartIcon />
                            </i>
                          </div>
                          <span className="text-white lg:text-base text-xs font-medium">بیشترین سود ۳۰ روز اخیر</span>
                        </div>
                        <div className="">
                          <span className="text-white lg:text-lg text-base font-bold">10.59%+</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-3">
                      <Link href={"#"}>
                        <ButtonPrimary className=" !py-4 ">
                          <span className=" gap-1 flex items-center justify-center">
                            <i>
                              <ChartCIcon />
                            </i>
                            راه اندازی
                          </span>
                        </ButtonPrimary>
                      </Link>
                      <Link href={routes.robotInfo}>
                        <ButtonBinex className="!bg-dark800 !py-3 ">
                          <span className="flex items-center gap-1 justify-center">
                            <i>
                              <SpeedometerIcon />
                            </i>
                            صفحه اختصاصی
                          </span>
                        </ButtonBinex>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-3"></div>
            </div>
            <Link href={"/robot-info/neo"} className="lg:absolute -top-12 -left-9 z-50 max-w-max mx-auto lg:mx-0">
              <Image className="" src="/img/robots/QUANTUM.png" alt="kucoin logo" width={250} height={212} />
            </Link>
            <div className="bg-pink backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden top-0 -left-5 h-32 w-32"></div>
            <div className="bg-green100 backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden -bottom-20 -left-0 h-40 w-40"></div>
            <div className="bg-blue-light backdrop-blur-[-1px] blur-[60px] absolute z-40 rounded-full lg:flex hidden -bottom-10 -left-20 h-32 w-32"></div>
          </div>

          {/* robot3 */}
          <div className="bg-white flex flex-col lg:relative rounded-2xl lg:shadow-binex py-6 lg:px-12 px-4 gap-1">
            <Link href={"/robot-info/neo"} className="lg:absolute  -right-12 z-50 max-w-max top-5 mx-auto lg:mx-0">
              <Image className="" src="/img/robots/STARLET.png" alt="kucoin logo" width={250} height={212} />
            </Link>
            <div className="bg-green100 backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden top-0 -right-5 h-32 w-32"></div>
            <div className="bg-blue-light backdrop-blur-[-1px] blur-[55px] absolute z-40 rounded-full lg:flex hidden top-20 right-8 h-40 w-40"></div>
            <div className="bg-pink backdrop-blur-[-1px] blur-[60px] absolute z-40 rounded-full lg:flex hidden -bottom-10 -right-10 h-32 w-32"></div>
            <div className="grid grid-cols-4">
              <div className="lg:col-span-1 col-span-4"></div>
              <div className="lg:col-span-3 col-span-4">
                <div className="grid grid-cols-12 items-end gap-4 ">
                  <div className="lg:col-span-8 col-span-12">
                    <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="lg:text-xl text-base text-dark font-medium">استارلت</span>
                        <span className="text-3xl text-dark font-bold">Starlet</span>
                      </div>
                      <Link
                        href={`${routes.robotInfo}?scroll=toScroll`}
                        className="bg-green100 rounded-2xl flex items-center justify-between lg:px-8 lg:py-5 py-4 px-3 w-full"
                      >
                        <div className="flex items-center justify-between ">
                          <div className="mx-2">
                            <i className="text-white">
                              <ChartIcon />
                            </i>
                          </div>
                          <span className="text-white lg:text-sm text-xs font-medium">بیشترین سود ۳۰ روز اخیر</span>
                        </div>
                        <div className="">
                          <span className="text-white lg:text-lg text-base font-bold">10.59%+</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="lg:col-span-4 col-span-12">
                    <div className="flex flex-col gap-3 ">
                      <Link href={routes.dashboard.robots.addRobotOnline}>
                        <ButtonPrimary className=" !py-4 ">
                          <span className=" gap-1 flex items-center justify-center">
                            <i>
                              <ChartCIcon />
                            </i>
                            راه اندازی
                          </span>
                        </ButtonPrimary>
                      </Link>
                      <Link href={routes.robotInfo}>
                        <ButtonBinex className="!bg-dark800 !py-3 ">
                          <span className="flex items-center gap-1 justify-center">
                            <i>
                              <SpeedometerIcon />
                            </i>
                            صفحه اختصاصی
                          </span>
                        </ButtonBinex>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 lg:mx-auto flex items-center justify-center lg:mt-10 mt-5   w-full px-4">
          <Link href={routes.robots} className="w-full">
            <ButtonBinex>مشاهده تمامی ربات‌ها</ButtonBinex>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BinxRobots;
