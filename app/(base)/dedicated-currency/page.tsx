import CurrenciesProfitBox from "@/app/components/currencies-content/CurrenciesProfitBox";
import CurrencyProfile from "@/app/components/currencies-content/CurrencyProfile";
import SelectFilterCurrency from "@/app/components/currencies-content/SelectFilterCurrency";
import Caption from "@/app/components/global/Caption";
import TotalProfitLoss from "@/app/components/global/TotalProfitLoss";
import TableThree from "@/app/components/tables/TableTree";
import Image from "next/image";
import React from "react";

function Page() {
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

                        <div
                            className="flex flex-col lg:items-start lg:justify-start items-center justify-center gap-2 w-full">
                            <Caption className="text-black font-bold lg:text-2xl text-xl">
                                {"صفحه اختصاصی (بیتکوین) BTC  "}
                            </Caption>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col-reverse gap-8 items-end justify-between mb-8 ">
                        <div className="w-full lg:w-1/2  ">
                            <div className="gap-5 flex flex-col">
                                <CurrenciesProfitBox/>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 ">
                            <CurrencyProfile/>
                        </div>
                    </div>
                    <SelectFilterCurrency/>
                    <div className="flex flex-col">
                        <TotalProfitLoss/>
                        <TableThree/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
