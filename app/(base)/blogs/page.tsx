import Post from '@/app/components/blogs/Post';
import TabPost from '@/app/components/blogs/TabPost';
import Caption from '@/app/components/global/Caption'
import React from 'react'

function Page() {
  return (
    <>
      <div className="container mx-auto lg:mb-24 mb-11 mt-4">
        <div className="flex items-center justify-center flex-col gap-4">
          <Caption className='text-black font-bold text-2xl'>
            {"وبلاگ"}
          </Caption>
          <p className="lg:text-base text-xs text-dark lg:mx-32 mx-2 text-center">
            همراه با وبلاگ باکس، با جدیدترین موضوعات دنیای حرفه‌ای آشنا شده و اطلاعاتتان را در حوزه‌ کاری خود افزایش دهید. ما همواره در تلاشیم تا با ارائه مطالبی مفید و معتبر به افزایش دانش فعالان کسب و کار کمک نماییم.
          </p>
        </div>
          <TabPost />

        



      </div>
    </>
  )
}

export default Page