import Link from 'next/link'
import React from 'react'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import PlayCircleIcon from '@/app/components/icons/PlayCircleIcon'
import ButtonFilter from '@/app/components/global/button/ButtonFilter'
import ProfileRobot from '@/app/components/binexRobots/ProfileRobot'
import {TRobot} from '@/api/robots/type'
import {routes} from '@/app/routes'
import getRobots from '@/api/robots'
import OnlineUser from "@/app/components/global/OnlineUser";

type RobotBoxProps = TRobot

async function RobotBox(props: RobotBoxProps) {
    const robots: TRobot[] = await getRobots()

    return (
        <>

            <div className="bg-white rounded-2xl p-4 gap-4 flex flex-col">
                    <ProfileRobot {...props}/>
                <Link href={`${routes.dashboard.robots.addRobotOnline}/${props.id}`}>
                    <ButtonBinex className='!bg-dark800 !py-3 '>
                            <span className='flex items-center gap-1 justify-center'>
                                <i className='text-white'>
                                    <PlayCircleIcon/>
                                </i>
                                راه اندازی آنلاین
                            </span>
                    </ButtonBinex>
                </Link>
                <OnlineUser/>
                {/* <div className="flex items-center justify-between">
                    <Link href={`${routes.dashboard.robots.addRobotOffline}/${props.id}`} className='text-sm text-dark'>
                        {"راه اندازی دستی"}
                    </Link>
                    <Link href={`${routes.robotInfo}/${props.id}`}>
                        <ButtonFilter>
                            <div className="flex items-center justify-center gap-2">

                                {"مشاهده و بررسی"}
                            </div>
                        </ButtonFilter>
                    </Link>
                </div> */}
            </div>
        </>
    )
}

export default RobotBox

