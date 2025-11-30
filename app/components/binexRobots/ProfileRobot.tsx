import React from 'react'
import Image from 'next/image'
import { TRobot } from '@/api/robots/type'

export type TProfileRobot = Omit<TRobot, 'id'>
function ProfileRobot(props: TProfileRobot) {
    return (
        <>
            <div
                className={"flex gap-5 items-center lg:justify-around justify-between"}>
                <div className='flex flex-col lg:!items-start gap-2'>
                    <span className="lg:text-3xl text-xl text-dark font-bold">{props.name}</span>
                    <span className="text-dark lg:text-2xl text-xl">{props.name_fa}</span>
                </div>
                <div className='h-[100px] relative'>
                    <Image
                        className="w-full h-full"
                        src={props.image}
                        alt={props.name}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </>
    )
}

export default ProfileRobot