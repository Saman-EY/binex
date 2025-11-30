import Caption from '@/app/components/global/Caption'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
        <div className="container mx-4 lg:mx-auto">
            <div className="flex flex-col my-4 lg:my-8 gap-9">
                <div className="grid grid-cols-2 ">
                    <div className="col-span-2 lg:col-span-1 ">
                       <div className="flex flex-col lg:items-start items-center  gap-4">
                              <div className="">
                                  <Caption className='text-black lg:text-2xl text-base font-bold'>{"ساخته شده با هوش مصنوعی"}</Caption>
                              </div>
                              <div className="">
                                  <p className="text-gray900 text-xs lg:text-sm text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                  </p>
                              </div>
                       </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 ">
                        <div className="flex items-center  justify-center relative z-2">
                              <Image
                                  className="flex z-20"
                                  src="/img/robot.png"
                                  alt="Binex features"
                                  width={200}
                                  height={300}

                              />
                              
                              <div className="bg-pink backdrop-blur-[-1px] blur-[55px] absolute z-1 rounded-full lg:flex hidden  top-10 left-36 h-40 w-40"></div>
                              <div className="bg-green100 backdrop-blur-[-1px] blur-[60px] absolute z-1 rounded-full lg:flex hidden  bottom-0 right-44  lg:h-32 lg:w-32 "></div>
                        </div>
                    </div>
                </div>
                  <div className="grid grid-cols-2">
                      <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
                          <div className="flex items-center  justify-center relative z-2">
                              <Image
                                  className="flex z-20"
                                  src="/img/robot-hand.png"
                                  alt="Binex features"
                                  width={417}
                                  height={317}

                              />

                              <div className="bg-pink backdrop-blur-[-1px] blur-[55px] absolute z-1 rounded-full lg:flex hidden  top-10 left-36 h-40 w-40"></div>
                              <div className="bg-green100 backdrop-blur-[-1px] blur-[60px] absolute z-1 rounded-full lg:flex hidden  bottom-0 right-44  lg:h-32 lg:w-32 "></div>
                          </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1 order-1 lg:order-2">
                          <div className="flex flex-col lg:items-start items-center  gap-4">
                              <div className="">
                                  <Caption className='text-black lg:text-2xl text-base font-bold'>{"ساخته شده با هوش مصنوعی"}</Caption>
                              </div>
                              <div className="">
                                  <p className="text-gray900 text-xs lg:text-sm text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیر
                                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.د.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
            </div>
        </div>
    </>
  )
}

export default Page