import React from "react";
import DaysSubscriptionContent from "./DaysSubscriptionContent";
import ClockIcon from "@/app/components/icons/ClockIcon";
import BitcoinConvertIcon from "@/app/components/icons/BitcoinConvertIcon";
import BitcoinRefreshIcon from "@/app/components/icons/BitcoinRefreshIcon";
import {Donut} from "../Donut";
import TimerFreeBox from "@/app/components/global/TimerFreeBox";
import LoginSevenFree from "@/app/components/login-sign-up/LoginSevenFree";
import {cn} from "@/utils";
import Link from "next/link";
import {routes} from "@/app/routes";
import Image from "next/image";
import {CurrencyItem} from "@/api/types";

type TProps = {
    active: CurrencyItem;
    data: [number, number];
    days: number;
};

function DaysSubscription({active, data, days}: TProps) {
    return (
        <>
            <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
                <div className="order-1 lg:order-2">
                    <TimerFreeBox source="auth" danger={days < 6}>
                        <LoginSevenFree/>
                    </TimerFreeBox>
                </div>
                <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
                    <div className="lg:col-span-1 col-span-2 order-2 lg:order-1 h-full items-center">
                        <div className="flex flex-col gap-4 h-full justify-center xl:w-3/4 w-full">
                            <DaysSubscriptionContent parentClassName="bg-opacity">
                                <div className="flex items-center justify-between ">
                                    <div className="flex items-start flex-col gap-2 justify-start">
                                          <span className="text-gray900 text-sm">
                                            زمان و ساعت خرید{" "}
                                          </span>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm text-gray900">15:34</span>
                                            <span className="text-sm text-gray900">1402/11/17</span>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-green100 rounded-xl w-[40px] h-[40px] flex items-center justify-center">
                                        <i className="text-white">
                                            <ClockIcon/>
                                        </i>
                                    </div>
                                </div>
                            </DaysSubscriptionContent>
                            <DaysSubscriptionContent parentClassName={"bg-dark800"}>
                                <Link href={routes.dashboard.orders.history}
                                      className="flex items-center justify-between ">
                                    <div className="flex items-start flex-col gap-2 justify-start">
                      <span className="text-white text-sm">
                        جزییات معاملات{" "}
                      </span>
                                    </div>
                                    <div
                                        className="bg-dark rounded-xl w-[40px] h-[40px] flex items-center justify-center">
                                        <i className="text-white">
                                            <BitcoinConvertIcon/>
                                        </i>
                                    </div>
                                </Link>
                            </DaysSubscriptionContent>
                            <DaysSubscriptionContent parentClassName={cn(days > 5 ? "bg-dark800" : "bg-down/80",)}>
                                <div className="flex items-center justify-between relative ">
                                    <div className="flex items-start flex-col gap-2 justify-start">
                                        <Link href={routes.dashboard.subscription.purchase1+"?renewal=1"} 
                                              className="text-white text-sm absolute inset-0 flex items-center justify-start">تمدید اشتراک</Link>
                                    </div>
                                    <div className={cn("rounded-xl w-[40px] h-[40px] flex items-center justify-center",
                                        days > 5 ? "bg-dark" : "bg-down"
                                    )}>
                                        <i className="text-white">
                                            <BitcoinRefreshIcon/>
                                        </i>
                                    </div>
                                </div>
                            </DaysSubscriptionContent>
                        </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2 lg:order-2 order-1 flex flex-col">
                        <div className="flex flex-col items-center justify-center mt-8">
                            <div className="flex items-center gap-2">
                                <span className="text-black text-base text-center">
                                  روزهای مانده از اشتراک
                                </span>
                                <span className={'lg:hidden flex items-center gap-2 -translate-y-[1px]'}>
                                  <b className={'pr-2'}>{active.name_fa}</b>
                                    {active?.icon && <Image src={active.icon} alt={active.name_fa ?? ''} width={24} height={24}/>}
                                </span>
                            </div>
                            <div className="flex relative my-4">
                                <Donut data={data}/>
                                <div className="flex items-center justify-center absolute inset-0">
                                    <div
                                        className="flex flex-col items-center justify-center rounded-full bg-[#E9ECF1] w-[75px] h-[75px] mt-2">
                                        <small>{days} روز</small>
                                        <small className="border-b w-3/5 border-gray-400"></small>
                                        <small>30 روز</small>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                                <span className="h-[10px] w-[10px] bg-dark rounded-full"></span>
                                <span className="text-sm text-gray800">
                  روزهای باقی مانده:
                </span>
                                <span className="text-base text-dark">{days} روز</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DaysSubscription;
