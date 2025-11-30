import React from 'react'
import UpBtnTwo from '../global/UpDownBtn'
import TimeFrame from '../global/TimeFrame'
import RobotName from '../global/RobotName'
import UpDownBtnThree from '../global/UpDownBtnThree '
import UpDownBtn from '../global/UpDownBtn'

function CurrenciesCotnent() {
  return (
    <>
    <div className="flex justify-center">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center">
            <TimeFrame className='text-xs text-dark'>{"1h"}</TimeFrame>
            <UpDownBtn className="text-nowrap min-w-[64px]">{"+1.05%"}</UpDownBtn>
          </div>
          <RobotName parentClassName='mobile:flex-col w-full'>
            <span className="lg:text-xs text-[10px] text-nowrap text-gray900">{"نئو"}</span>
            <span className="text-gray800 lg:text-xs text-[10px] text-nowrap ms-1">{"(Neo) "}</span>
          </RobotName>
        </div>
    </div>

    </>
  )
}

export default CurrenciesCotnent
