import MobileCurrencies from "@/app/components/currencies-content/MobileCurrenciesBinex";
import SearchCurrencies from "@/app/components/currencies-content/SearchCurrencies";
import Caption from "@/app/components/global/Caption";
import TableTwo from "@/app/components/tables/TableTwo";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <div className="container lg:mx-auto mx-4">
        <div className="lg:my-8 mt-4 mb-5">
          <Caption className="text-black font-bold lg:text-2xl text-xl mx-auto">
            <div className="flex items-center justify-center">
              <Image
                className="lg:block hidden"
                src="/img/icone/binex-robot.png"
                alt="binex Logo"
                width={58}
                height={78}
              />

              {"ارزهای باینکس"}
            </div>
          </Caption>
        </div>
        <div className="lg:w-3/4 w-full mx-auto lg:mb-8 ">
          <SearchCurrencies />
        </div>
        <TableTwo />
      </div>
      {/* mobile */}
      <div className="lg:hidden flex container">
        <MobileCurrencies />
      </div>
    </>
  );
}

export default Page;
