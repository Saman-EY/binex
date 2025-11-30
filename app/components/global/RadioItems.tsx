"use client";
import Image from "next/image";
import React, { useState } from "react";
import NameCryptocurrency from "./NameCryptocurrency";
import CryptocurrencyLogo from "./CryptocurrencyLogo";
import Radio from "./Radio";
import { CurrencyItem } from "@/api/types";

type RadioItemsProps = {
  currencies: CurrencyItem[];
  changeActive: (item: CurrencyItem) => void
};

function RadioItems({ currencies, changeActive }: RadioItemsProps) {
  const [activeId, setActiveID] = useState<number | undefined>(undefined);

  return (
    <>
      <div className="flex flex-col mt-4 max-h-[320px] overflow-y-auto gap-4 h-full pe-2">
        {currencies.map((currency) => {
          return (
            <div
              key={currency.id}
              className="flex items-center justify-between select-none"
              role="button"
              onClick={(e) => {setActiveID(currency.id); changeActive(currency);}}
            >
              <div className="flex items-center">
                {currency.icon && (
                  <CryptocurrencyLogo>
                    <Image
                      src={currency.icon}
                      alt="Cryptocurrency logo"
                      width={30}
                      height={30}
                    />
                  </CryptocurrencyLogo>
                )}
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-base text-sm text-gray900 font-semibold">
                    {currency.name}
                  </span>
                  {currency.name_fa && (
                    <span className="text-gray800 lg:text-sm text-xs ms-1">
                      ({currency.name_fa})
                    </span>
                  )}
                </NameCryptocurrency>
              </div>
              <Radio name="radio-2" checked={activeId === currency.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RadioItems;
