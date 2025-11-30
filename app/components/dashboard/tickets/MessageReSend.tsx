import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

function MessageReSend() {
  return (
    <>
      <div className="flex items-start justify-start gap-4">
        <div className={cn("bg-white rounded-full border border-dark overflow-hidden flex items-center justify-center mx", 
          "lg:min-w-[75px] lg:w-[75px] lg:h-[75px]",
          "min-w-[48px] w-[48px] h-[48px]"
        )}>
          <Image
            className="flex z-20"
            src="/img/profile.png"
            alt="Binex features"
            width={80}
            height={80}
          />
        </div>
        <div className="bg-head-table-color px-4 py-2 rounded-tl-2xl rounded-br-2xl flex flex-col gap-5">
          <div className="flex items-center">
            <span className="text-xs text-dark">آراز همتی </span>
          </div>
          <div className="">
            <p className="text-xs text-black text-right">
              باسلام
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <span className="text-gray900 text-[10px] ">
              2 اسفند 1402
            </span>
            <span className="text-gray900 text-[10px] ">
              21:24:57
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default MessageReSend