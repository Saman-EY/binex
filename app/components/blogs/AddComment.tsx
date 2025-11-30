import React from 'react'
import Caption from '@/app/components/global/Caption'
import ButtonPrimary from '../global/button/ButtonPrimary';

function AddComment() {
    return (
        <>
            <div className="bg-head-table-color py-4 container mx-auto lg:px-36 px-4 my-12">
                <div className="flex flex-col items-center justify-center gap-10">
                    <Caption className='text-black font-bold text-2xl'>
                        {"ثبت نظر"}
                    </Caption>
                    <div className="w-full">
                        <form action="" className='flex flex-col '>
                            <div className="grid lg:grid-cols-12 lg:gap-4 gap-5 ">
                                <div className="col-span-6">
                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <label className='text-gray90 lg:text-sm text-xs '>ایمیل:</label>
                                        <input type="text" placeholder='Example@gmail.com' className='rounded-2xl px-5 py-3 bg-white placeholder:text-sm w-full focus:outline-none' />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="flex flex-col items-start justify-start gap-2">
                                        <label className='text-gray90 lg:text-sm text-xs '>نام کاربری:</label>
                                        <input type="text" placeholder='عباس اکبری' className='rounded-2xl px-5 lg:py-3  py-2 placeholder:text-sm bg-white w-full focus:outline-none' />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:mt-11 mt-5 flex flex-col items-start justify-start gap-2">
                                <label className='text-gray90 lg:text-sm text-xs '>دیدگاه شما:</label>
                                <textarea className="textarea textarea-bordered textarea-lg rounded-2xl w-full border-0 lg:py-5 py-2 focus:outline-none placeholder:text-sm" placeholder="چیزی بنویسید..."></textarea>
                            </div>
                            <div className="lg:w-1/4  w-full flex lg:ms-auto lg:my-8 my-4">
                                <ButtonPrimary>
                                    {" ارسال"}
                                </ButtonPrimary>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddComment