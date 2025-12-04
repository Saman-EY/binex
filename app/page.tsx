import Header from "@/app/components/Header/Header";
import Intro from "@/app/components/intro/Intro";
import Footer from "@/app/components/footer/Footer";
import React from "react";
import DailyTableLanding from "./components/dailyProfit/DailyTableLanding";
import BuiltArtificialIntelligence from "./components/builtArtificialIntelligence/BuiltArtificialIntelligence";
import ExchangesBinex from "./components/exchangesBinex/ExchangesBinex";
import BinexFeatures from "./components/binexFeatures/BinexFeatures";
import BinexRobots from "./components/binexRobots/BinexRobots";
import FAQBinex from "./components/FAQBinex/FAQBinex";
import BinexTraining from "./components/BinexTraining/BinexTraining";
import SevenDaysFreeBinex from "./components/sevenDaysFreeBinex/SevenDaysFreeBinex";
import ThirtyDaysProfitLoss from "./components/ThirtyDaysProfitLoss/ThirtyDaysProfitLoss";
import BuySubscription from "./components/BuySubscription/BuySubscription";
import Caption from "./components/global/Caption";
import WeeklyTableLanding from "./components/dailyProfit/WeeklyTableLanding";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <DailyTableLanding />
        <div className="my-4"></div>
        <WeeklyTableLanding />
        <BuiltArtificialIntelligence />
        <ThirtyDaysProfitLoss />
        <span className={"my-8 flex"} />
        <ExchangesBinex />
        <span className={"my-8 flex"} />
        <BinexFeatures />
        <span className={"my-8 flex"} />
        <FAQBinex limit={3} showExtraButton />
        <span className={"my-8 flex"} />
        <BinexRobots />
        <span className={"my-8 flex"} />
        <Caption className="text-dark font-bold lg:text-4xl text-3xl mx-auto  mb-6">{"خرید اشتراک"}</Caption>
        <BuySubscription />
        <span className={"my-8 flex"} />
        <BinexTraining />
        <span className={"my-8 flex"} />
        <SevenDaysFreeBinex />
      </main>
      <Footer />
    </>
  );
}
