"use client";
import React from "react";
import CurrenciesCotnent from "../currencies-content/CurrenciesCotnent";
import Caption from "../global/Caption";
import ChartIcon from "../icons/ChartIcon";
import RobotCotnent from "./RobotCotnent";
import AnimateSpin from "@/app/ui/AnimateSpin";

function RobotProfitBox() {
  return (
    <div className="flex-col gap-3 flex">
      <div
        onClick={() => {
          const el = document.getElementById("toScroll");
          if (!el) return;

          const offset = 60; // px from top
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }}
        className="flex items-center cursor-pointer  justify-between bg-gray-100 relative rounded-2xl px-4 py-3"
      >
        <AnimateSpin dir="right" />
        <div className="">
          <Caption className="text-dark lg:text-sm text-xs ">
            <span className="flex items-center justify-center gap-2">
              <i className="text-dark">
                <ChartIcon />
              </i>
              {"بیشترین سود ۲۴ ساعت اخیر"}
            </span>
          </Caption>
        </div>
        <div className="">
          <RobotCotnent />
        </div>
      </div>

      <div
        onClick={() => {
          const el = document.getElementById("toScroll");
          if (!el) return;

          const offset = 60; // px from top
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }}
        className="flex items-center cursor-pointer justify-between bg-gray-200 rounded-2xl relative px-4 py-3"
      >
        <AnimateSpin dir="right" />
        <div className="">
          <Caption className="text-dark lg:text-sm text-xs ">
            <span className="flex items-center justify-center gap-2">
              <i className="text-dark">
                <ChartIcon />
              </i>
              {"بیشترین سود ۷ روز اخیر"}
            </span>
          </Caption>
        </div>
        <div className="">
          <RobotCotnent />
        </div>
      </div>
      <div
        onClick={() => {
          const el = document.getElementById("toScroll");
          if (!el) return;

          const offset = 60; // px from top
          const top = el.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }}
        className="flex items-center cursor-pointer justify-between bg-gray-300 rounded-2xl relative px-4 py-3"
      >
        <AnimateSpin dir="right" />
        <div className="">
          <Caption className="text-dark lg:text-sm text-xs ">
            <span className="flex items-center justify-center gap-2">
              <i className="text-dark">
                <ChartIcon />
              </i>
              {"بیشترین سود ۳۰ روز اخیر"}
            </span>
          </Caption>
        </div>
        <div className="">
          <RobotCotnent />
        </div>
      </div>
    </div>
  );
}

export default RobotProfitBox;
