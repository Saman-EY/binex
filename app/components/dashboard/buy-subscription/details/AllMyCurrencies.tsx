"use client";
import Caption from "@/app/components/global/Caption";
import React, {useState} from "react";
import AccordionAllMyCurrencies from "./AccordionAllMyCurrencies";
import DaysSubscription from "./DaysSubscription";
import {CurrencyItem} from "@/api/types";

function AllMyCurrencies() {
    const [active, setActive] = useState<CurrencyItem>(currencies[0]);
    const [open, setOpen] = useState<CurrencyItem | undefined>(undefined);
    return (
        <>
            <div className="grid grid-cols-2 gap-4">
                <div className="lg:col-span-1 col-span-2">
                    <div
                        className="bg-white rounded-2xl p-4 flex flex-col gap-4 h-full lg:max-h-[398px]  overflow-y-scroll">
                        <div className="flex items-center justify-center lg:justify-start  ">
                            <Caption className="text-dark-black text-base">
                                {" تمام ارزهای من "}
                            </Caption>
                        </div>
                        <div className="flex flex-col gap-2">
                            <AccordionAllMyCurrencies
                                {...{open, setOpen, active, setActive, currencies}}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 col-span-2">
                    <DaysSubscription
                        data={active.id === 1 ? [70, 30] : [15, 85]}
                        days={active.id === 1 ? 20 : 5}
                        active={active}
                    />
                </div>
            </div>
        </>
    );
}

export default AllMyCurrencies;

const currencies: CurrencyItem[] = [
    {
        id: 1,
        name: "BTC",
        name_fa: "بیتکوین",
        icon: "/img/cryptocurrency/3.svg",
    },
    {
        id: 2,
        name: "ETH",
        name_fa: "اتریوم",
        icon: "/img/cryptocurrency/ETH.svg",
    },
]
