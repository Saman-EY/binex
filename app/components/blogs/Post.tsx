import Image from 'next/image'
import React from 'react'
import ButtonPrimary from '../global/button/ButtonPrimary'
import MessageTextIcon from '../icons/MessageTextIcon'
import ClockIcon from '../icons/ClockIcon'

function Post() {
  return (
    <>
    <div className="bg-white shadow-binex rounded-2xl px-4 py-7 gap-8">
        <div className="">
            <Image
              className=""
              src="/img/1post.png"
              alt="close-square"
              width={460}
              height={196}

            />
        </div>
        <div className="flex flex-col items-start mt-8 justify-start gap-4 lg:gap-8">
          <span className="lg:text-base text-sm text-gray900">لورم ایپسوم متن ساختگی باتولید</span>
          <p className="text-gray800 text-xs text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیازو کاربردهای متنوع با هدف بهبود ابزارهای و.....</p>
        </div>
        <div className="flex lg:items-center  items-end justify-between lg:mt-12 mt-8">
            <div className="flex lg:items-center items-start lg:flex-row flex-col gap-2 ">
              <div className="flex items-center gap-1">
                <i className="text-binex-color">
                <MessageTextIcon/>
                </i>
                <span className="text-xs lg:text-sm text-gray900">تکنولوژی</span>
              </div>
             
              <div className="flex items-center gap-2">
                <i className="text-binex-color">
                  <ClockIcon/>
                </i>
                <span className="text-xs lg:text-sm text-gray900 ">زمان مطالعه: 23دقیقه</span>
              </div>
            </div>
            <div className="lg:w-1/3 w-1/3">
              <ButtonPrimary className='!py-3 !px-4'>
              {"ادامه مطلب"}
              </ButtonPrimary>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post