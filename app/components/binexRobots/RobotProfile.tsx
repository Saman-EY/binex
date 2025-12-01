import Image from "next/image";
import React from "react";
import Caption from "../global/Caption";
import NameCryptocurrency from "../global/NameCryptocurrency";
import Link from "next/link";
import ButtonBinex from "../global/button/ButtonBinex";
import BitcoinCardIcon from "../icons/BitcoinCardIcon";
import RobotName from "../global/RobotName";
import ChartCIcon from "../icons/ChartCIcon";
import { routes } from "@/app/routes";

function RobotProfile() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center">
          <Image
            className="lg:w-full w-3/4"
            src="/img/robots/NEO.png"
            alt="Cryptocurrency"
            width={180}
            height={180}
          />
        </div>
        <div className="flex items-center lg:justify-center justify-between gap-2 w-full mx-4 lg:border-0  border-b py-2 border-b-line">
          <Caption className="text-gray800 text-base text-nowrap">
            {"نام ربات:"}
          </Caption>
          <div className="flex items-center gap-2">
            <RobotName parentClassName="flex-row items-center">
              <span className="lg:text-xl text-dark text-base  font-semibold">
                نئو
              </span>
              <span className="text-dark lg:text-xl text-base ms-1">
                {"(Neo)"}
              </span>
            </RobotName>
            <Image
              className="lg:w-full w-3/4"
              src="/img/robots/NEO.png"
              alt="Cryptocurrency"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="w-full ">
          <Link href={routes.dashboard.robots.addRobotOnline}>
            <ButtonBinex className="">
              <div className="flex items-center justify-center gap-1 ">
                <i className="">
                  <ChartCIcon />
                </i>
                {"راه اندازی "}
              </div>
            </ButtonBinex>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RobotProfile;
