import React from "react";

function TimeAndRobot() {
  return (
    <>
      <div className="flex items-center lg:justify-end justify-start gap-2">
        <div className="flex items-center justify-center rounded-2xl py-1 lg:px-4 px-3 bg-head-table-color">
          <span className="text-dark lg:text-sm text-xs font-semibold mx-1">
            تعداد ربات:
          </span>
          <span className="text-dark lg:text-sm text-xs font-semibold">12</span>
        </div>

        <div className="flex items-center justify-center rounded-2xl py-1 lg:px-4 px-3 bg-gray400">
          <span className="text-dark lg:text-sm text-xs font-semibold mx-1">
            زمان:
          </span>
          <span className="text-dark lg:text-sm text-xs font-semibold">
            90 روز
          </span>
        </div>
      </div>
    </>
  );
}

export default TimeAndRobot;
