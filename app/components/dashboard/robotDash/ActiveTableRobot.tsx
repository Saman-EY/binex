"use client";
import React from "react";
import OnlineUser from "../../global/OnlineUser";
import ButtonStopActivate from "../../global/button/ButtonStopActivate";
import StopIcon from "../../icons/StopIcon";
import TableContent from "../TablesDash/TableContent";
import RobotName from "../../global/RobotName";
import Image from "next/image";
import CryptocurrencyLogo from "../../global/CryptocurrencyLogo";
import NameCryptocurrency from "../../global/NameCryptocurrency";
import ExchangeLogo from "../../global/ExchangeLogo";
import NameExchange from "../../global/NameExchange";
import TextInfo from "../../global/TextInfo";
import ActiveInactive from "../../global/ActiveInactive";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { routes } from "../../../routes";
import { Modal } from "@/app/components/global/Modal";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";

function ActiveTableRobot() {
  return (
    <>
      <div className="rounded-2xl border border-head-table-color lg:p-8 p-4 bg-white flex flex-col gap-4">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-4">
          <div className="~lg:w-full">
            <OnlineUser />
          </div>
          <div className="~lg:w-full">
            <Modal
              button={
                <ButtonStopActivate className="bg-down px-2 !py-2 text-sm rounded-xl" amount="توقف ربات">
                  {" "}
                  <i>
                    {" "}
                    <StopIcon />{" "}
                  </i>{" "}
                </ButtonStopActivate>
              }
              confirmButton={
                <ButtonBinex
                  onClick={() => {
                    toast.success("ربات X برای ارز Y غیرفعال شد.");
                  }}
                >
                  بله
                </ButtonBinex>
              }
              closer={
                <ButtonBinex className={"!bg-transparent text-binex-color border border-binex-color"}>خیر</ButtonBinex>
              }
            >
              با تایید توقف ربات، تمام فعالیت ها و معاملات ربات X متوقف خواهد شد. آیا مطمئن هستید؟
            </Modal>
          </div>
        </div>
        <div className="flex flex-col">
          <TableContent title="ربات:" className="!text-dark font-bold" parentClassName="">
            <Link
              href={routes.dashboard.robots.addRobotOnline + "/1"}
              className="flex   gap-1 items-center lg:justify-around justify-center"
            >
              <RobotName parentClassName=" flex  lg:!items-start  gap-2">
                <span className="text-base text-dark font-bold">{"Titan"}</span>
                <span className="text-dark text-base">{"تایتان"}</span>
              </RobotName>
              <Image className="" src="/img/robots/TITAN.png" alt="binex Logo" width={46} height={46} />
            </Link>
          </TableContent>

          <TableContent title="ارز:" className="" parentClassName="">
            <Link href={routes.dashboard.binanceMarket2} className="flex lg:flex-row ">
              <div className="flex items-center gap-1">
                <CryptocurrencyLogo className="!w-full h-[24px]">
                  <div className="">
                    <Image
                      className=""
                      src="/img/cryptocurrency/Cryptocurrency.svg"
                      alt="Cryptocurrency logo"
                      width={24}
                      height={24}
                    />
                  </div>
                </CryptocurrencyLogo>
                <NameCryptocurrency parentClassName="items-center  justify-center flex-row">
                  <span className="lg:text-sm text-sm text-gray900 font-semibold">{"BTC"}</span>
                  <span className="text-gray800  text-xs ms-1">{"(بیتکوین)"}</span>
                </NameCryptocurrency>
              </div>
            </Link>
          </TableContent>
          <TableContent title="صرافی:" className="" parentClassName="">
            <div className="flex lg:flex-row">
              <div className="flex items-center gap-1">
                <ExchangeLogo src="/img/binancelogo.png" />
                <NameExchange parentClassName="flex-row items-end gap-1">
                  <span className="lg:text-sm text-sm text-gray900 font-semibold">{"Binance"}</span>
                  <span className="text-gray800  text-xs">{"(بایننس)"}</span>
                </NameExchange>
              </div>
            </div>
          </TableContent>
          <TableContent title="مبلغ معامله:" className="" parentClassName="">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <TextInfo parentClassName="flex-row items-center justify-end gap-1 !mx-0">
                <span className="text-sm font-bold text-gray900">{"145,145,541"}</span>
                <span className="text-gray800 text-sm ">{"(تتر)"}</span>
              </TextInfo>
            </div>
          </TableContent>
          <TableContent title="لوریج یا ضریب:" className="" parentClassName="">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <TextInfo parentClassName="flex-row items-center justify-end  !mx-0">
                <span className="text-gray900 text-sm  font-bold">{"50"}</span>
              </TextInfo>
            </div>
          </TableContent>
          <TableContent title=" حد سود:" className="" parentClassName="">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <TextInfo parentClassName="flex-row items-center justify-end  !mx-0">
                <span className="text-green100 text-sm  font-bold">{"30%"}</span>
              </TextInfo>
            </div>
          </TableContent>
          <TableContent title="حد ضرر:" className="" parentClassName="">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <TextInfo parentClassName="flex-row items-center justify-end  !mx-0">
                <span className="text-down text-sm  font-bold">{"10%"}</span>
              </TextInfo>
            </div>
          </TableContent>
          <TableContent title="تاریخ شروع معامله:" className="" parentClassName="">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <TextInfo parentClassName="flex-row items-center justify-end  !mx-0">
                <span className="text-gray900 text-sm  font-bold">{"1402/02/20"}</span>
              </TextInfo>
            </div>
          </TableContent>
          <TableContent title="وضعیت:" className="" parentClassName="border-b-0">
            <div className="flex lg:flex-row items-center lg:justify-end ">
              <ActiveInactive condition="فعال" className="" parentClass=""></ActiveInactive>
            </div>
          </TableContent>
        </div>
      </div>
    </>
  );
}

export default ActiveTableRobot;
