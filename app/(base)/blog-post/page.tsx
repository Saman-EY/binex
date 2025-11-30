import AddComment from '@/app/components/blogs/AddComment';
import BlogDetail from '@/app/components/blogs/BlogDetail';
import Comment from '@/app/components/blogs/Comment';
import Caption from '@/app/components/global/Caption'
import React from 'react'

function Page() {
  return (
    <>
      <div className="container mx-auto lg:px-36 px-4">
        <div className="flex items-start justify-start mt-6 mb-4">
          <Caption className='text-black font-bold text-2xl'>
            {"وبلاگ"}
          </Caption>
        </div>
        <div className=""> <BlogDetail /> </div>
      </div>
      <AddComment />
      <div className="container mx-auto lg:px-36 px-4 gap-7 flex flex-col">
        <div className="">
          <Comment />
        </div>
        <div className="">
          <Comment />
        </div>
      </div>
    </>
  )
}

export default Page