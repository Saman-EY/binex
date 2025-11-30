import RankingIcon from '@/app/components/icons/RankingIcon'
import Image from 'next/image'
import React from 'react'

function DefultCart() {
  return (
    <>
        <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center w-full">
              <div className="">
                  <Image
                      className=""
                      src='/img/binex-cart/cart-green.png'
                      alt="Binex cart"
                      width={270}
                      height={300}

                  />
              </div>
            <div className="flex flex-col gap-5 w-full">
                <div className="flex lg:flex-col flex-row gap-2 w-full justify-between">
                    <div className="flex flex-col lg:items-center items-start gap-2">
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-dark text-xs lg:text-sm">
                                بانک سپه
                            </span>
                            <Image
                                className=""
                                src='/img/bank.png'
                                alt="Binex cart"
                                width={18}
                                height={18}

                            />
                        </div>
                        <span className="text-dark text-xs lg:text-sm">
                            IR960560611828005370635201
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">

                        <span className="text-gray900 text-xs lg:text-sm">
                            مائده اسدی
                        </span>
                        <span className="text-green100 text-xs lg:text-sm">
                            سپه باینکس
                        </span>

                    </div>

                </div>
                <div className="flex items-center gap-1">
                    <i className="text-grey900">
                        <RankingIcon />
                    </i>
                    <span className="text-grey900 text-sm">پیش فرض</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default DefultCart