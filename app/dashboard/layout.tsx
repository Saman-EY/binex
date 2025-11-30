"use client";

import React, { useState } from "react";
import DashboardSidebar from "@/app/components/dashboard/SidebarDashboard";
import DashboardHeader from "@/app/components/dashboard/DashborardHeader";
import Image from "next/image";
import { createContext } from "react";
import { Toaster } from "react-hot-toast";

export type ExchangeType = {
  id: number;
  name: string;
  name_fa: string;
  icon: string;
};
export const exchanges: ExchangeType[] = [
  {
    id: 1,
    name: "Binance",
    name_fa: "بایننس",
    icon: "/img/binancelogo.png",
  },
  {
    id: 2,
    name: "Kukoin",
    name_fa: "کوکوین",
    icon: "/img/kucoinlogo.png",
  },
];

// @ts-ignore
export const ExchangeContext = createContext<{
  exchange: ExchangeType;
  changeExchange: (id: number) => void;
}>({
  exchange: exchanges[0],
  changeExchange: (id) => {},
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [exchange, setExchange] = useState<ExchangeType>(exchanges[0]);

  const changeExchange = (id: number) => {
    setExchange(exchanges.find((q) => q.id === id) || exchanges[0]);
  };

  const toggleSidebar = (open?: boolean) => {
    setSidebarOpen(open ?? !sidebarOpen);
    const res = open ?? !sidebarOpen;
    if (typeof document !== "undefined" && !!document.querySelector("html")) {
      const doc = document.querySelector("body");
      if (doc) doc.style.overflow = !res ? "auto" : "hidden";
    }
  };
  return (
    <ExchangeContext.Provider value={{ exchange, changeExchange }}>
      <div className="bg-opacity-green fixed inset-0 z-[1]">
        <Image
          src={"/overlay/dashboard-overlay.svg"}
          alt="overlay"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative flex  min-h-[100dvh] z-[2]" id="dashboard">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex flex-col lg:w-[80%] mr-auto w-full ">
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />

          <div className={"grow"}>{children}</div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: 50,
            fontSize: 10,
          },
        }}
      />
    </ExchangeContext.Provider>
  );
}
