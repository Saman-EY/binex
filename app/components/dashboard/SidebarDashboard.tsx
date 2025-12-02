"use client";
import React, { Dispatch } from "react";
import LogoBinex from "@icons/LogoBinex";
import Link from "next/link";
import ChartIcon from "@icons/ChartIcon";
import DiagramIcon from "@icons/DiagramIcon";
import GhostIcon from "@icons/GhostIcon";
import BitcoinConvertIcon from "@icons/BitcoinConvertIcon";
import BoxIcon from "@icons/BoxIcon";
import EmptyWalletIcon from "@icons/EmptyWalletIcon";
import PeopleIcon from "@icons/PeopleIcon";
import MessageQuestionIcon from "@icons/MessageQuestionIcon";
import ProfileIcon from "@icons/ProfileIcon";
import SecuritySafeIcon from "@icons/SecuritySafeIcon";
import Caption from "@/app/components/global/Caption";
import { routes } from "@/app/routes";
import AccordionMenu from "@/app/components/global/AccordionMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

export type TLink = {
  text: string;
  icon?: React.ReactNode;
} & (
  | {
      link: string;
      children?: never;
    }
  | {
      link?: never;
      children: TLink[];
    }
);

type TDashboardSidebarProps = {
  sidebarOpen: boolean;
  toggleSidebar: (open?: boolean) => void;
};
function DashboardSidebar({ sidebarOpen, toggleSidebar }: TDashboardSidebarProps) {
  const activePathName = usePathname();

  return (
    <>
      <div
        className={cn(
          "inset-y-0 z-[51] lg:w-[20%] fixed border-l border-line bg-white shadow-binex flex flex-col transition ~lg:top-12 overflow-y-auto ",
          "~lg:w-[200px] transition-all",
          sidebarOpen ? "right-0" : "~lg:-right-full"
        )}
      >
        {/* logo */}
        <div className="flex items-center justify-center  py-4 border-b border-line mx-4 ~lg:hidden">
          <LogoBinex />
        </div>
        {/* Links */}
        <div className="flex flex-col grow">
          <AccordionMenu items={sidebarLinks} activeLink={activePathName} toggleSidebar={toggleSidebar} />
        </div>

        <div className="bg-gradient-to-t from-white to-dark rounded-3xl my-4 p-4 lg:flex flex-col hidden mx-8 items-center justify-center">
          <div className="">
            <i className=" ">
              <SecuritySafeIcon />
            </i>
          </div>
          <div className="gap-1 flex flex-col items-center justify-center">
            <Caption className="text-white text-xl font-bold ">{"امنیت"}</Caption>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed lg:hidden inset-0 bg-black/75 opacity-0 z-[48] transition ~lg:top-12",
          sidebarOpen ? "opacity-100" : "pointer-events-none"
        )}
        onClick={(e) => toggleSidebar(false)}
      ></div>
    </>
  );
}

export default DashboardSidebar;

const sidebarLinks: TLink[] = [
  {
    text: "سود و زیان من",
    icon: <DiagramIcon />,
    link: routes.dashboard.myProfitLoss.foreign,
  },
  {
    text: "بازار باینکس",
    link: routes.dashboard.binanceMarket,
    icon: <BitcoinConvertIcon />,
  },
  {
    text: "ربات‌ها",
    icon: <GhostIcon />,
    children: [
      {
        text: "ربات‌های باینکس",
        link: routes.dashboard.robots.binexRobots,
      },
      {
        text: "فعال کردن ربات جدید(آنلاین)",
        link: routes.dashboard.robots.addRobotOnline,
      },
      {
        text: "ربات‌های فعال من",
        link: routes.dashboard.robots.activeRobots,
      },
    ],
  },
  {
    text: "آخرین معاملات ",
    icon: <ChartIcon />,
    children: [
      {
        text: "سفارشات فعال من",
        link: routes.dashboard.orders.activeTrades,
      },
      {
        text: "تاریخچه سفارشات من",
        link: routes.dashboard.orders.history,
      },
    ],
  },
  {
    text: "اشتراک من ",
    icon: <BoxIcon />,
    children: [
      {
        text: "جزئیات اشتراک",
        link: routes.dashboard.subscription.details,
      },
      {
        text: "خرید اشتراک جدید",
        link: routes.dashboard.subscription.purchase,
      },
    ],
  },
  {
    text: "امور مالی",
    icon: <EmptyWalletIcon />,
    children: [
      {
        text: "در انتظار پرداخت",
        link: routes.dashboard.financial.pending,
      },
      {
        text: "واریزهای من",
        link: routes.dashboard.financial.deposits,
      },
    ],
  },
  {
    text: "دعوت دوستان",
    link: routes.dashboard.referral,
    icon: <PeopleIcon />,
  },
  {
    text: "پشتیبانی",
    icon: <MessageQuestionIcon />,
    children: [
      {
        text: "ثبت تیکت جدید",
        link: routes.dashboard.support.new,
      },
      {
        text: "مشاهده تیکت‌های قبلی",
        link: routes.dashboard.support.tickets,
      },
    ],
  },
  {
    text: "حساب کاربری",
    link: routes.dashboard.profile.index,
    icon: <ProfileIcon />,
  },
];
