
import ProfileRobot from '@/app/components/binexRobots/ProfileRobot'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import DocumentDownloadIcon from '@/app/components/icons/DocumentDownloadIcon'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "داشبورد | افزودن ربات آفلاین"
};


function Page() {
  return (
    <>
      <div className="px-4 py-4 flex flex-col gap-4">
        <div className="bg-white rounded-2xl px-5 py-8 border border-head-table-color flex flex-col gap-8">
          <div className="flex items-center lg:items-start lg:justify-start ">
            <span className='text-black lg:font-bold lg:text-3xl text-xl text-start lg:mx-0 mx-auto'>{'دانلود و راه اندازی دستی'}</span>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-8 ">
            <div className="lg:col-span-3 col-span-1 order-2 lg:order-1 gap-y-4 flex flex-col">
              <div className="flex items-center justify-start lg:gap-4 gap-2 ">
                <span className="text-3xl text-blue">1</span>
                <span className="text-dark lg:text-sm text-xs font-[600]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
              </div>
              <div className="flex items-center justify-start lg:gap-4 gap-2 ">
                <span className="text-3xl text-blue">2</span>
                <span className="text-dark lg:text-sm text-xs font-[600]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
              </div>
              <div className="flex items-center justify-start lg:gap-4 gap-2 ">
                <span className="text-3xl text-blue">3</span>
                <span className="text-dark lg:text-sm text-xs font-[600]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
              </div>
              <div className="flex items-center justify-start lg:gap-4 gap-2 ">
                <span className="text-3xl text-blue">4</span>
                <span className="text-dark lg:text-sm text-xs font-[600]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-1 lg:order-2 order-1">
              <div className="lg:border-r lg:border-line flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-start justify-start">
                  <span className="text-xs text-gray900 hidden lg:block">نام و اطلاعات ربات</span>
                  <ProfileRobot name="Rochet" name_fa='راکت' image='/img/robots/rochet.png' />
                </div>
                <div className="lg:w-3/4 w-full mobile:mt-4">
                  <Link href={'#'}>
                    <ButtonBinex className='!bg-dark800 !py-3'>
                      <span className='flex items-center gap-1 justify-center'>
                        <i className='text-white'><DocumentDownloadIcon /></i>
                        دانلود
                      </span>
                    </ButtonBinex>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-gray900 lg:text-sm text-[11px] text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>
          </div>
        </div>


      </div>
    </>
  )
}

export default Page