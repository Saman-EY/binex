import React from "react";
import UpDownBtn from "../global/UpDownBtn";
import NameCryptocurrency from "../global/NameCryptocurrency";
import CryptocurrencyLogo from "../global/CryptocurrencyLogo";
import Image from "next/image";

function RobotCotnent() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <CryptocurrencyLogo className="p[0px] h-8 w-8">
              <div className="">
                <Image
                  className=""
                  src="/img/cryptocurrency/Cryptocurrency.svg"
                  alt="Cryptocurrency logo"
                  width={30}
                  height={30}
                />
              </div>
            </CryptocurrencyLogo>
            <UpDownBtn className="text-nowrap px-1 min-w-16">{"+1.05%"}</UpDownBtn>
          </div>
            <NameCryptocurrency parentClassName="gap-4 justify-center w-full ">
              <span className="lg:text-sm text-[10px] text-nowrap text-gray900 font-semibold ~lg:pe-3">
                {"LTD"}
              </span>
              <span className="text-gray800 lg:text-sm text-[10px] text-nowrap">
                {"(بیتکوین) "}
              </span>
            </NameCryptocurrency>
        </div>
      </div>
    </>
  );
}

export default RobotCotnent;
