import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

function MessageSend() {
  return (
    <>
      <div className="flex items-start justify-start gap-2 lg:gap-4 flex-row-reverse">
        <div className={cn("bg-dark rounded-full border border-dark p-2 aspect-square overflow-hidden flex items-center justify-center", 
          "w-[75px] min-w-[75px] h-[75px]",
          "~lg:w-[48px] ~lg:min-w-[48px] ~lg:h-[48px]"
        )}>
          <Image
            className="lg:block hidden"
            src="/img/white-logo.png"
            alt="binex Logo"
            width={70}
            height={70}
          />
        </div>
        <div className="bg-line px-4 py-2 rounded-tr-2xl rounded-bl-2xl flex flex-col gap-5">
          <div className="flex items-center">
            <span className="text-xs text-dark ">پشتیبان باینکس</span>
            {/* <span className="text-xs text-gray800 ">به:</span>
            <span className="text-xs text-dark">maedeh7879</span> */}
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
            <span className="text-gray900 text-[11px] ">
              2 اسفند 1402
            </span>
            <span className="text-gray900 text-[11px] ">
              21:24:57
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default MessageSend