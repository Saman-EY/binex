import React from 'react'
import Caption from '../global/Caption'
import ChartIcon from '../icons/ChartIcon'
import RobotCotnent from './RobotCotnent'
import RobotCotnentTwo from './RobotCotnentTwo'

function RobotProfitBoxTwo() {
  return (
    <>
    <div className="flex-col gap-2 flex">
        <div className="flex items-center justify-between bg-line rounded-2xl px-4 py-3">
            <div className="">
                <Caption className='text-dark lg:text-sm text-xs '>
                    <span className="flex items-center justify-center gap-2">
                        <i className='text-dark'>
                            <ChartIcon />
                        </i>
                        {"بیشترین سود ۲۴ ساعت اخیر"}
                    </span>
                </Caption>
            </div>
            <div className="">
                      <RobotCotnentTwo />
            </div>
        </div>

        <div className="flex items-center justify-between bg-line rounded-2xl px-4 py-3">
            <div className="">
                <Caption className='text-dark lg:text-sm text-xs '>
                    <span className="flex items-center justify-center gap-2">
                        <i className='text-dark'>
                            <ChartIcon />
                        </i>
                        {"بیشترین سود ۷ روز اخیر"}
                    </span>
                </Caption>
            </div>
            <div className="">
                <RobotCotnentTwo />
            </div>
        </div>
        <div className="flex items-center justify-between bg-line rounded-2xl px-4 py-3">
            <div className="">
                <Caption className='text-dark lg:text-sm text-xs '>
                    <span className="flex items-center justify-center gap-2">
                        <i className='text-dark'>
                            <ChartIcon />
                        </i>
                        {"بیشترین سود ۳۰ روز اخیر"}
                    </span>
                </Caption>
            </div>
            <div className="">
                <RobotCotnentTwo />
            </div>
        </div>
    </div>
  
    </>
  )
}

export default RobotProfitBoxTwo