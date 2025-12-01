import Image from "next/image";
import Link from "next/link";
import React from "react";
import Line from "../global/Line";
import LogoWhiteBinex from "../icons/LogoWhiteBinex";
import CallCallingIcon from "../icons/CallCallingIcon";
import SmsNotificationIcon from "../icons/SmsNotificationIcon";
import LocationIcon from "../icons/LocationIcon";
import { routes } from "@/app/routes";

function Footer() {
  return (
    <footer className="bg-binex-color pt-8 pb-4 mt-9 ">
      <div className="container  mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col lg:mb-8 mb-1">
            <div className="grid grid-cols-2 gap-3 items-end">
              <div className="lg:col-span-1 col-span-2">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="lg:text-xl text-base lg:text-white text-blue mb-5 ">دسترسی‌های باینکس</span>
                  <div className="flex lg:flex-row flex-col items-center lg:justify-start justify-center gap-4">
                    <div className="flex flex-col lg:items-start  items-center lg:gap-2 gap-3">
                      <Link
                        href={routes.reviewProfitLoss}
                        className="text-white hover:text-blue transition-all text-sm"
                      >
                        بررسی سود و زیان
                      </Link>
                      <Link href={routes.currencies} className="text-white hover:text-blue transition-all text-sm">
                        رمزارزها
                      </Link>
                      <Link href={routes.robots} className="text-white hover:text-blue transition-all text-sm">
                        ربات‌ها
                      </Link>
                      <Link href={routes.buySubscription} className="text-white hover:text-blue transition-all text-sm">
                        خرید اشتراک
                      </Link>
                      <Link href={routes.learn} className="text-white hover:text-blue transition-all text-sm">
                        توصیه‌نامه
                      </Link>
                    </div>
                    <div className="flex flex-col lg:items-start  items-center lg:ms-36 ms-0 lg:gap-2 gap-3 mobile:mt-4">
                      <Link href={routes.learn} className="text-white hover:text-blue transition-all text-sm">
                        آموزش استفاده از باینکس
                      </Link>
                      <Link href={routes.faq} className="text-white hover:text-blue transition-all text-sm">
                        سوالات متداول
                      </Link>
                      <Link
                        href={routes.dashboard.referral}
                        className="text-white hover:text-blue transition-all text-sm"
                      >
                        دعوت دوستان 
                      </Link>
                      <Link href={routes.blog.index} className="text-white hover:text-blue transition-all text-sm">
                        وبلاک
                      </Link>
                      <Link
                        href={routes.dashboard.support.new}
                        className="text-white hover:text-blue transition-all text-sm"
                      >
                        ارتباط با پشتیبانی 
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <div className="lg:flex flex-col justify-end items-end hidden">
                  <LogoWhiteBinex />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-8">
              <div className="lg:col-span-1 col-span-2">
                <div className="lg:mt-14 mt-8 flex lg:flex-row flex-col gap-10 items-center justify-between flex-wrap xl:flex-nowrap">
                  <div className="flex items-center lg:flex-row flex-col">
                    <div
                      className=" relative after:absolute after:bg-white after:rounded-full
                                        after:w-10
                                        after:h-10
                                        after:opacity-20
                                        after:-bottom-2
                                        after:-right-2
                                        "
                    >
                      <i className="text-white">
                        <CallCallingIcon />
                      </i>
                    </div>
                    <Link href="#" className="text-white text-sm lg:ms-4 mt-4 hover:text-blue transition-all lg:mt-0">
                      (855) 256-2001
                    </Link>
                  </div>
                  <div className="flex items-center lg:flex-row flex-col">
                    <div
                      className=" relative after:absolute after:bg-white after:rounded-full
                                        after:w-10
                                        after:h-10
                                        after:opacity-20
                                        after:-bottom-2
                                        after:-right-2
                                        "
                    >
                      <i className="text-white">
                        <SmsNotificationIcon />
                      </i>
                    </div>
                    <Link href="#" className="text-white text-sm lg:ms-4 mt-4 hover:text-blue transition-all lg:mt-0">
                      hello@example.com
                    </Link>
                  </div>
                  <div className="flex items-center lg:flex-row flex-col">
                    <div
                      className=" relative after:absolute after:bg-white after:rounded-full
                                    after:w-10
                                    after:h-10
                                    after:opacity-20
                                    after:-bottom-2
                                    after:-right-2
                                    "
                    >
                      <i className="text-white">
                        <LocationIcon />
                      </i>
                    </div>
                    <Link href="#" className="text-white text-sm lg:ms-4 mt-4 hover:text-blue transition-all lg:mt-0">
                      نام شهر نام محله نام خیابان شماره ۲۳
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 col-span-2 flex flex-col lg:justify-end items-center lg:items-end gap-6 justify-center">
                <div className="flex-col justify-center items-center lg:hidden ">
                  <div className=" scale-[0.5] lg:scale-100">
                    <LogoWhiteBinex />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link href="#" className="">
                    <Image className="lg:w-12 " src="/img/icone/aparat.svg" alt="call-calling" width={48} height={48} />
                  </Link>
                  <Link href="#" className="">
                    <Image
                      className="lg:w-12 "
                      src="/img/icone/youtube.svg"
                      alt="call-calling"
                      width={48}
                      height={48}
                    />
                  </Link>
                  <Link href="#" className="">
                    <Image
                      className="lg:w-12 "
                      src="/img/icone/instagram.svg"
                      alt="call-calling"
                      width={48}
                      height={48}
                    />
                  </Link>
                  <Link href="#" className="">
                    <Image
                      className="lg:w-11 "
                      src="/img/icone/telegram.svg"
                      alt="call-calling"
                      width={45}
                      height={45}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Line />
          <div className="flex items-center justify-center gap-1">
            <span className="text-center text-gray-400 lg:text-xs text-[10px]">
              کلیه حقوق مادی و معنوی این سایت متعلق به باینکس می باشد.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
