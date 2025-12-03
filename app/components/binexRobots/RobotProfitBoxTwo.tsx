import React from "react";
import Caption from "../global/Caption";
import ChartIcon from "../icons/ChartIcon";
import RobotCotnent from "./RobotCotnent";
import RobotCotnentTwo from "./RobotCotnentTwo";
import AnimateSpin from "@/app/ui/AnimateSpin";

function RobotProfitBoxTwo() {
  return (
    <>
      <div className="flex-col gap-2 flex">
        <div className="flex items-center justify-between bg-gray-100 rounded-2xl relative px-4 py-3">
          <AnimateSpin dir="right" />
          <div className="">
            <Caption className="text-dark lg:text-sm text-xs ">
              <span className="flex items-center justify-center gap-2">
                <i className="text-dark">
                  <ChartIcon />
                </i>
                {"بیشترین سود روزانه"}
              </span>
            </Caption>
          </div>
          <div className="">
            <RobotCotnentTwo />
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-200 rounded-2xl relative px-4 py-3">
          <AnimateSpin dir="right" />
          <div className="">
            <Caption className="text-dark lg:text-sm text-xs ">
              <span className="flex items-center justify-center gap-2">
                <i className="text-dark">
                  <ChartIcon />
                </i>
                {"بیشترین سود هفتگی"}
              </span>
            </Caption>
          </div>
          <div className="">
            <RobotCotnentTwo />
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-300 rounded-2xl relative px-4 py-3">
          <AnimateSpin dir="right" />
          <div className="">
            <Caption className="text-dark lg:text-sm text-xs ">
              <span className="flex items-center justify-center gap-2">
                <i className="text-dark">
                  <ChartIcon />
                </i>
                {"بیشترین سود ماهانه"}
              </span>
            </Caption>
          </div>
          <div className="">
            <RobotCotnentTwo />
          </div>
        </div>
      </div>
    </>
  );
}

export default RobotProfitBoxTwo;
