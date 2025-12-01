import React from "react";
import CurrenciesCotnent from "../currencies-content/CurrenciesCotnent";
import Caption from "../global/Caption";
import ChartIcon from "../icons/ChartIcon";
import RobotCotnent from "./RobotCotnent";

function RobotProfitBox() {
  return (
    <>
      <div className="flex-col gap-3 flex">
        <div className="flex items-center  justify-between bg-gray-100 rounded-2xl px-4 py-3">
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

        <div className="flex items-center justify-between bg-gray-200 rounded-2xl px-4 py-3">
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
        <div className="flex items-center justify-between bg-gray-300 rounded-2xl px-4 py-3">
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
    </>
  );
}

export default RobotProfitBox;
