import Caption from '@/app/components/global/Caption'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import ButtonPrimary from '@/app/components/global/button/ButtonPrimary'
import SecurityIcon from '@/app/components/icons/SecurityIcon'
import SmsTrackingIcon from '@/app/components/icons/SmsTrackingIcon'
import { routes } from '@/app/routes'
import Link from 'next/link'
import React from 'react'

function PasswordInfo() {
  return (
    <>
    <div className="bg-white rounded-2xl flex flex-col gap-4   px-4 py-4">
              <div className="flex items-center justify-center lg:justify-start">
                  <Caption className='text-dark-black text-base'>{"اطلاعات رمز عبور "}</Caption>
              </div>
              <div className="">
                  <Link href={routes.dashboard.profile.changePassword}>
                      <ButtonPrimary className=' !py-4 !bg-dark100'>
                          <span className=' gap-1 flex items-center justify-center'>
                              <i className='text-white'>
                                  <SecurityIcon />
                              </i>
                              تغییر رمز عبور
                          </span>
                      </ButtonPrimary>
                  </Link>
              </div>
              <div className="">
                  <Link href={"#"}>
                      <ButtonBinex className='!bg-dark800 !py-4 '>
                          <span className='flex items-center gap-1 justify-center'>
                              <i className='text-white'>
                                  <SmsTrackingIcon />
                              </i>
                              فعالسازی ورود با ایمیل
                          </span>
                      </ButtonBinex>
                  </Link>
              </div>
              <div className="">
                  <Link href={"#"}>
                      <ButtonBinex className='!bg-green100 !py-4 '>
                          <span className='flex items-center gap-1 justify-center'>
                              <i className='text-white'>
                                  <SmsTrackingIcon />
                              </i>
                              ورود با ایمیل فعال میباشد
                          </span>
                      </ButtonBinex>
                  </Link>
              </div>
    </div>
    </>
  )
}

export default PasswordInfo