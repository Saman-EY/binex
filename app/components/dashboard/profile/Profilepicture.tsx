import ButtonPrimary from '@/app/components/global/button/ButtonPrimary'
import EditIcon from '@/app/components/icons/EditIcon'
import Image from 'next/image'
import React from 'react'

function Profilepicture() {
  return (
    <>
    <div className="bg-white rounded-2xl flex flex-col gap-4   px-4 py-4 min-h-[308px]">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="">
                      <Image
                          className="flex z-20"
                          src="/img/profile.png"
                          alt="Binex features"
                          width={150}
                          height={150}

                      />

                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-full lg:w-1/2">
                      <ButtonPrimary className='  !bg-dark100'>
                          <span className=' gap-1 flex items-center justify-center'>
                              <i>
                                  <EditIcon />
                              </i>
                              آپلود تصویر جدید
                          </span>
                      </ButtonPrimary>
                      <span className="text-sm text-black">تصویری برای پروفایل خودآپلود کنید</span>
                </div>

            </div>
    </div>
    </>
  )
}

export default Profilepicture