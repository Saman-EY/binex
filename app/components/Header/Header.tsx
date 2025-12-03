"use client";

import React, { use, useRef, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import HamburgerIcon from "@icons/HamburgerIcon";
import HeaderSigned from "./HeaderSigned";
import HeaderNotSigned from "./HeaderNotSigned";
import clsx from "clsx";
import SearchSidebar from "./SearchSidebar";
import ChartIcon from "@icons/ChartIcon";
import GpsIcon from "@icons/GpsIcon";
import BuyCryptoIcon from "@icons/BuyCryptoIcon";
import BoxIcon from "@icons/BoxIcon";
import BitcoinIcon from "../icons/BitcoinIcon";
import LogoBinex from "../icons/LogoBinex";
import { routes } from "@/app/routes";
import MessageQuestionIcon from "../icons/MessageQuestionIcon";
import ProfileIcon from "../icons/ProfileIcon";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import CandleIcon from "../icons/CandleIcon";

export type THeaderNav = {
  text: string;
  link: string;
  icon?: React.ReactNode;
  mobile?: boolean;
};

function Header() {
  const user = {
    name: "کاربر دمو",
    signed: false,
  };
  const ref = useRef<HTMLInputElement | null>(null);
  const path = usePathname();

  return (
    <>
      <div className="sticky top-0 z-[999] max-h-[64px]">
        <div className="flex items-center justify-between drawer bg-white">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={ref} />
          <div className="drawer-content w-full  shadow-xl z-[2]">
            <div className="lg:container ~lg:px-4 flex  items-center lg:py-3 h-[54px] lg:h-[65px]">
              <label className="block lg:hidden drawer-button" htmlFor="my-drawer" role="button">
                <HamburgerIcon />
              </label>
              <div className="ms-auto lg:ml-4 lg:mr-0 scale-[0.5] lg:scale-[0.9]">
                <LogoBinex />
              </div>
              <div className="ml-auto lg:flex hidden xl:gap-8 gap-4">
                {navLinks.map((nav) => {
                  return (
                    <Link
                      key={nav.link}
                      href={nav.link}
                      className={cn(
                        "relative text-dark-black whitespace-nowrap text-xs xl:text-sm hover:text-blue transition-all hover:after:opacity-100 font-semibold text-nowrap",
                        'after:absolute after:-bottom-[115%] after:inset-x-0 after:h-[2px] after:bg-blue after:content-[""] after:opacity-0 after:transition-all',
                        path.indexOf(nav.link) > -1 && "text-blue after:opacity-100"
                      )}
                    >
                      {nav.text}
                    </Link>
                  );
                })}
              </div>

              <Search />
              {user.signed ? <HeaderSigned name={user.name} /> : <HeaderNotSigned />}
            </div>
          </div>
          <div className="drawer-side z-[1]  lg:top-[65px] top-[54px]">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="bg-white w-48 h-full p-4 overflow-hidden">
              <div className="flex flex-col divide-y">
                <div className="mb-3">
                  <SearchSidebar />
                </div>
                {sideLinks.map((link) => {
                  return (
                    <Link
                      key={link.text}
                      href={link.link}
                      onClick={(_) => {
                        if (ref.current) ref.current.checked = false;
                      }}
                    >
                      <div className="flex items-center gap-2 py-3 text-gray900 hover:text-blue fill-gray900 hover:fill-blue">
                        <i className="">{link.icon}</i>
                        <small className="text-xs text-nowrap">{link.text}</small>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

const navLinks: THeaderNav[] = [
  {
    text: "بررسی سود و زیان",
    link: routes.reviewProfitLoss,
  },
  {
    text: "رمزارزها",
    link: routes.currencies,
  },
  {
    text: "ربات‌ها",
    link: routes.robots,
  },
  {
    text: "خرید اشتراک",
    link: routes.buySubscription,
  },
  {
    text: "آموزش استفاده از باینکس",
    link: routes.guide,
  },
  {
    text: "توصیه نامه",
    link: routes.learn,
  },
  {
    text: "دعوت دوستان",
    link: routes.dashboard.referral,
  },
  {
    text: "چت با پشتیبانی",
    link: "#Raichat",
  },
];

const sideLinks: THeaderNav[] = [
  {
    text: "بررسی سود و زیان",
    link: routes.reviewProfitLoss,
    icon: <ChartIcon />,
  },
  {
    text: "رمزارزها",
    link: routes.currencies,
    icon: <BuyCryptoIcon />,
  },
  {
    text: "ربات‌ها",
    link: routes.robots,
    icon: <GpsIcon />,
  },

  {
    text: "بیشترین سود و زیان ماهانه",
    link: routes.maximumMonthly,
    icon: <CandleIcon />,
  },
  {
    text: "بیشترین سود و زیان روزانه",
    link: routes.dailyProfitLoss,
    icon: <CandleIcon />,
  },
  {
    text: "خرید اشتراک",
    link: routes.buySubscription,
    icon: <BoxIcon />,
  },
  {
    text: "آموزش استفاده از باینکس ",
    link: routes.guide,
    icon: <BitcoinIcon />,
  },
  {
    text: "توصیه نامه",
    link: routes.learn,
    icon: <BitcoinIcon />,
  },
  {
    text: "دعوت دوستان",
    link: routes.dashboard.referral,
    icon: <ProfileIcon />,
  },
  {
    text: "چت با پشتیبانی",
    link: "#Raichat",
    icon: <MessageQuestionIcon />,
  },
];
