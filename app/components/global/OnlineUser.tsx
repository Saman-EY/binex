import React from 'react'
import PeopleIcon from '../icons/PeopleIcon'
import Caption from './Caption'

function OnlineUser() {
  return (
    <>
    <div className="flex items-center bg-binex-color rounded-2xl px-3 py-1.5 gap-8 justify-between ">
        <div className="flex gap-1 items-center">
            <i className="text-white">
                <PeopleIcon/>
            </i>
            <Caption className='text-white text-sm'>{"کاربر آنلاین"}</Caption>
        </div>
        <div className="flex gap-1 items-center">
            <Caption className='text-white text-lg'>{"1201"}</Caption>
            <div className="h-2 w-2 bg-green200 rounded-full "></div>
        </div>
    </div>
    </>
  )
}

export default OnlineUser