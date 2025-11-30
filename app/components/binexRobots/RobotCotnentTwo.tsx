import React from 'react'
import UpDownBtn from '../global/UpDownBtn'
import NameCryptocurrency from '../global/NameCryptocurrency'
import CryptocurrencyLogo from '../global/CryptocurrencyLogo'
import Image from 'next/image'

function RobotCotnentTwo() {
  return (
    <>
    <div className="flex justify-center">
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <UpDownBtn className="text-nowrap !px-1 text-center min-w-[64px]">{"+1.05%"}</UpDownBtn>
          </div>
        </div>
    </div>

    </>
  )
}

export default RobotCotnentTwo
