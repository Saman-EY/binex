import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ButtonBinex from '../global/button/ButtonBinex'

export type THeaderSigned = {
    name: string;
}

function HeaderSigned({ name }: THeaderSigned) {
    return (
        <div className="flex items-center me-4 gap-3">
            <Image
                className=""
                src="/img/icone/avatar.png"
                alt="binex Logo"
                width={48}
                height={48}
            />
            <Link href="#dashboard-account" className='hidden lg:block text-nowrap'>
                {name}
            </Link>
            <Link href='#dashboard' className='hidden lg:block'>
                <ButtonBinex>
                    {"داشبورد"}
                </ButtonBinex>
            </Link>
        </div>

    )
}

export default HeaderSigned