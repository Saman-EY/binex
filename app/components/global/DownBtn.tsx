import Image from 'next/image'
import React from 'react'

function DownBtn() {
  return (
    <>
        <div className="flex items-center justify-center">
            <div className="">
                <Image
                    className=""
                    src="/img/icone/down.svg"
                    alt="down btn"
                    width={24}
                    height={24}

                />
            </div>
            <div className="flex bg-down rounded-xl px-4 py-1 ">
                <span className="text-white text-sm">-</span>
                <span className="text-white text-sm">1.05%</span>
            </div>
        </div>
    </>
  )
}

export default DownBtn