import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Line90 from '../global/Line90'
import MessageTextIcon from '../icons/MessageTextIcon'
import ClockIcon from '../icons/ClockIcon'
import MessageIcon from '../icons/MessageIcon'
import {routes} from "@/app/routes";

function BlogDetail() {
  return (
    <>
        {/* HAEDER BLOG */}
        <div className="grid lg:grid-cols-2 items-center gap-8 ">
            <div className="lg:col-span-1 col-span-2">
              <div className="flex justify-between">
                    <div className="">
                        <Image
                            className=""
                            src="/img/blogs.png"
                            alt="blog photo"
                            width={632}
                            height={361}

                        />
                    </div>
                    <div className="mx-4 lg:block hidden">
                        <Line90 className2='w-1 h-full bg-line' />
                    </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
                <div className="flex flex-col items-start lg:gap-12 gap-5 ">
                    <div className="flex items-center justify-start gap-4 lg:border-0 border-b border-line pb-4">
                        <div className="flex items-center gap-1">
                            <i className="text-binex-color">
                               <MessageTextIcon/>
                            </i>
                            <span className="lg:text-xs text-[10px] text-gray900 text-nowrap">تکنولوژی</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <i className="text-binex-color">
                            <ClockIcon/>
                           </i>
                            <span className="lg:text-xs text-[10px] text-gray900 text-nowrap">زمان مطالعه: 23دقیقه</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Link href={routes.blog.post}>
                               <i className="text-binex-color">
                                <MessageIcon/>
                                </i>
                            </Link>
                            
                              <span className="lg:text-xs text-[10px] text-gray900 text-nowrap">31 نظر ثبت شده</span>
                        </div>
                    </div>
                    <div className="flex flex-col g:items-start items-center">
                        <span className="text-gray900 lg:text-3xl text-xl font-medium mb-4">
                              منابع انسانی؛ تعریف و وظایف
                        </span>
                        <p className="text-gray800 text-xs text-justify">
                              همانگونه که منابع مالی می‌توانند باعث موفقیت یا شکست یک کسب و کار شوند، منابع انسانی نیز نقش تعیین کننده‌ای ایفا می‌کنند. با وجود اهمیت بالای این بخش، بسیاری از کسب و کارها اما، فقط بر مسائل مالی تمرکز داشته و مدیریت صحیح ارزشمندترین دارایی خود، یعنی منابع انسانی، را از یاد برده‌اند.
                              با ما همراه باشید تا منابع انسانی را شناخته و با وظایف و مسئولیت‌های آن در یک کسب و کار بیشتر آشنا شویم.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* TEXT BLOG */}
        <div className="mt-12">
            <div className=" flex flex-col lg:items-start lg:justify-start items-center justify-center gap-4">
                <span className="text-gray900 lg:text-3xl text-xl font-medium  ">منابع انسانی؛ تعریف و وظایف</span>
                <p className="text-sm text-gray800 text-justify">
                      در معنای لغوی، منابع انسانی (Human Resources) به تمامی نیروهای کار یک مجموعه یا سازمان گفته می‌شود. در دنیای حرفه‌ای اما، منابع انسانی که به آن مدیریت منابع انسانی (HRM) هم گفته می‌شود، بخش یا واحدی از یک کسب و کار است که مسئول رسیدگی و رفع نیازهای کارکنان در جهت بهره‌وری بیشتر نیز هست.
                      بخش منابع انسانی همچنین حقوق، مزایا و اخراج کارکنان را مدیریت کرده و وظیفه یافتن، غربالگری، استخدام و آموزش متقاضیان شغل را نیز بر عهده دارد.
                      منابع انسانی را می‌توان یکی از با ارزش‌ترین واحدهای هر مجموعه دانسته و نقشی کلیدی در حفظ آرامش روانی کارکنان و جذب افراد مفید و کاربلد در قرن بیست و یکم ایفا می‌کند.واحد مدیریت منابع انسانی قرار است کمک کند تا سازمان، در افق زمانی بلند مدت، با کمترین هزینه، حداکثر کارایی را از کارکنان برای حرکت در راستای اهداف استراتژیک سازمان، کسب نماید.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 items-center mt-12">
                <div className="lg:col-span-1 col-span-2">
                    <div className="">
                          <p className="text-sm text-gray800 text-justify">
                              در معنای لغوی، منابع انسانی (Human Resources) به تمامی نیروهای کار یک مجموعه یا سازمان گفته می‌شود. در دنیای حرفه‌ای اما، منابع انسانی که به آن مدیریت منابع انسانی (HRM) هم گفته می‌شود، بخش یا واحدی از یک کسب و کار است که مسئول رسیدگی و رفع نیازهای کارکنان در جهت بهره‌وری بیشتر نیز هست.
                              بخش منابع انسانی همچنین حقوق، مزایا و اخراج کارکنان را مدیریت کرده و وظیفه یافتن، غربالگری، استخدام و آموزش متقاضیان شغل را نیز بر عهده دارد.
                              منابع انسانی را می‌توان یکی از با ارزش‌ترین واحدهای هر مجموعه دانسته و نقشی کلیدی در حفظ آرامش روانی کارکنان و جذب افراد مفید و کاربلد در قرن بیست و یکم ایفا می‌کند.واحد مدیریت منابع انسانی قرار است کمک کند تا سازمان، در افق زمانی بلند مدت، با کمترین هزینه، حداکثر کارایی را از کارکنان برای حرکت در راستای اهداف استراتژیک سازمان، کسب نماید.
                              در معنای لغوی، منابع انسانی (Human Resources) به تمامی نیروهای کار یک مجموعه یا سازمان گفته می‌شود. در دنیای حرفه‌ای اما، منابع انسانی که به آن مدیریت منابع انسانی (HRM) هم گفته می‌شود، بخش یا واحدی از یک کسب و کار است که مسئول رسیدگی و رفع نیازهای کارکنان در جهت بهره‌وری بیشتر نیز هست.
                              بخش منابع انسانی همچنین حقوق، مزایا و اخراج کارکنان را مدیریت کرده و وظیفه یافتن، غربالگری، استخدام و آموزش متقاضیان شغل را نیز بر عهده دارد.
                              منابع انسانی را می‌توان یکی از با ارزش‌ترین واحدهای هر مجموعه دانسته و نقشی کلیدی در حفظ آرامش روانی کارکنان و جذب افراد مفید و کاربلد در قرن بیست و یکم ایفا می‌کند.واحد مدیریت منابع انسانی قرار است کمک کند تا سازمان، در افق زمانی بلند مدت، با کمترین هزینه، حداکثر کارایی را از کارکنان برای حرکت در راستای اهداف استراتژیک سازمان، کسب نماید.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-1 col-span-2">
                      <div className="flex items-end justify-center">
                          <div className="">
                              <Image
                                  className=""
                                  src="/img/robot-blog.png"
                                  alt="close-square"
                                  width={278}
                                  height={447}

                              />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogDetail