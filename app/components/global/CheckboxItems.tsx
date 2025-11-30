import { CurrencyItem } from "@/api/types";
import CheckBox from "./CheckBox";
import NameExchange from "./NameExchange";
import { useState } from "react";
import CryptocurrencyLogo from "./CryptocurrencyLogo";
import Image from "next/image";

type Props = {
  items: CurrencyItem[];
};

const CheckboxItems = (props: Props) => {
  const [activeIds, setActiveIds] = useState<number[]>([]);
  const change = (id: number) => {
    setActiveIds((ids) =>
      ids.includes(id) ? ids.filter((q) => q !== id) : ids.concat([id])
    );
  };
  return (
    <>
      {props.items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between select-none p-1.5"
            role="button"
            onClick={(_) => change(item.id)}
          >
            <div className="flex items-center gap-2">
              {item.icon && (
                <CryptocurrencyLogo>
                  <Image
                    src={item.icon}
                    alt="Cryptocurrency logo"
                    width={30}
                    height={30}
                  />
                </CryptocurrencyLogo>
              )}
              <NameExchange parentClassName="flex-row items-center gap-1">
                <span className="lg:text-base text-sm text-gray900 font-semibold">
                  {item.name}
                </span>
                {item.name_fa && <span className="text-gray800 lg:text-sm text-xs">
                  ({item.name_fa})
                </span>}
              </NameExchange>
            </div>
            <CheckBox
              checked={activeIds.includes(item.id)}
              className="pointer-events-none"
            />
          </div>
        );
      })}
    </>
  );
};

export default CheckboxItems;
