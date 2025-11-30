"use client";

import React, { useContext, useEffect, useState } from "react";
import DashboardSearch from "./DashboardSearch";
import UserInfo from "./UserInfo";
import HamburgerIcon from "../icons/HamburgerIcon";
import { routes } from "@/app/routes";
import Link from "next/link";
import Image from "next/image";
import LoginSevenFree from "../login-sign-up/LoginSevenFree";
import {ExchangeContext, exchanges} from "@/app/dashboard/layout";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { log } from "console";

type DashboardHeaderProps = {
  sidebarOpen: boolean;
  toggleSidebar: (open?: boolean) => void;
};

function DashboardHeader({ sidebarOpen, toggleSidebar }: DashboardHeaderProps) {

  const { exchange, changeExchange } = useContext(ExchangeContext);
  const pathname = usePathname();
  const [showEx, setShowEx] = useState(false);

  useEffect(() => {
    setShowEx(pathname.indexOf("my-profit-loss") > -1);
  }, [pathname]);
  return (
    <>
      <header className="~lg:py-2 py-4 bg-white flex items-center justify-between px-4 shadow-binex z-50 sticky top-0 mobile:shadow-[0_4px_8px_#0A435A33]">
        <label className="swap swap-rotate lg:hidden ">
          <input
            type="checkbox"
            onChange={(e) => toggleSidebar()}
            checked={sidebarOpen}
          />
          <HamburgerIcon className="swap-off" />
          <HamburgerIcon className="swap-on" />
        </label>
        <div className="lg:hidden h-6 ">
          <Link
            href={routes.dashboard.binanceMarket}
            className="absolute left-1/2 -translate-x-1/2 max-h-16"
          >
            <Image
              src={"/img/logo.png"}
              alt="binex"
              width={78}
              height={32}
              className="h-full w-[78px]"
            />
          </Link>
        </div>
        {showEx && (
          <div className="text-xxs flex items-center gap-1 absolute top-full start-0 rounded-ee-lg px-2 py-2 z-10">
            {
              exchanges.map((item) => (<button
                  key={item.id}
                  className={cn(
                      "bg-white text-black rounded-xl p-1.5 flex items-center gap-1",
                      exchange.id === item.id  && "border border-blue"
                  )}
                  onClick={(e) => changeExchange(item.id)}
              >
                <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                />
                {item.name_fa}
              </button>))
            }

          </div>
        )}
        <div className="lg:w-3/5 me-2 ~lg:ms-auto ~lg:hidden">
          <DashboardSearch/>
        </div>

        <div className="flex flex-row gap-4">
          <LoginSevenFree className="~lg:rounded-2xl"/>
          <div className="~lg:hidden">
            <UserInfo/>
          </div>
        </div>
      </header>
    </>
  );
}

export default DashboardHeader;
