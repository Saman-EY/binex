import React from 'react'
import Caption from '../global/Caption'
import UserIcon from '../icons/UserIcon'
import MessageTextIcon from '../icons/MessageTextIcon'
import ClockIcon from '../icons/ClockIcon'
import VideoTimeIcon from '../icons/VideoTimeIcon'

function Comment() {
  return (
    <>
    <div className="flex flex-col bg-white shadow-binex rounded-2xl px-6 py-4 gap-9">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-4">
                  <div className="flex items-center gap-1">
                <i className='text-binex-color'>
                    <UserIcon/>
                </i>
                <Caption className='text-base text-gray900'>{"کاربردمو"}</Caption>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                    <i className='text-binex-color'>
                        <MessageTextIcon/>
                    </i>
                    <Caption className='text-xs text-gray900'>
                        {"تکنولوژی"}
                    </Caption>
                </div>
                <div className="flex items-center gap-1">
                    <i className='text-binex-color'>
                        <VideoTimeIcon/>
                    </i>
                    <Caption className='text-xs text-gray900'>
                        {"1402/11/30"}
                    </Caption>
                </div>
            </div>
        </div>
        <div className="">
            <p className="lg:text-sm text-xs text-gray900 text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
        </div>
    </div>
    </>
  )
}

export default Comment