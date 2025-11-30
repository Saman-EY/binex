import React from 'react'
import RobotPerformanceTabs from './RobotPerformanceTabs'

function RobotPerformance() {
  return (
    <>
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
        <div className="flex  lg:flex-row flex-col-reverse  gap-4 items-center justify-between">
            <div className="flex flex-col lg:items-start lg:gap-2 gap-4 items-center">
                <span className="text-black lg:text-xl text-sm">
                          {" عملکرد ربات "}
                </span>
                <div className="flex items-center gap-1">
                          <span className="text-up lg:text-base text-sm font-semibold">{"(25%)"} </span>
                          <span className="text-up lg:text-base text-sm font-semibold">
                              {"7,2141,997.5"}
                          </span>
                </div>
            </div>
            <div className="">
                <RobotPerformanceTabs/>
            </div>
        </div>
        <div className="">
            جایگاه نمودار
        </div>
    </div>
    </>
  )
}

export default RobotPerformance