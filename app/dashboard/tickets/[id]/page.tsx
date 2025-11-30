import ChatIInfo from '@/app/components/dashboard/tickets/ChatIInfo'
import MessageReSend from '@/app/components/dashboard/tickets/MessageReSend'
import MessageSend from '@/app/components/dashboard/tickets/MessageSend'
import UploadBox from '@/app/components/dashboard/tickets/UploadBox'
import Caption from '@/app/components/global/Caption'
import MessageTexttIcon from '@/app/components/icons/MessageTexttIcon'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "داشبورد  | تیکت"
};


function Page() {
    return (
        <>
            <div className="flex flex-col gap-4 m-4">
                <div className="grid grid-cols-12 gap-4">
                    <div className="lg:col-span-8 col-span-12">
                        <div className="bg-white rounded-2xl flex flex-col gap-4 px-2 lg:px-8 py-4">
                            <div className="flex items-start justify-start lg:justify-start gap-3 border-b border-b-line pb-3">
                                <i className="">
                                    <MessageTexttIcon />
                                </i>
                                <div className="flex flex-col items-start gap-2">
                                    <Caption className='text-dark-black text-sm'>{"پشتیبانی  "}</Caption>
                                    <Caption className='text-gray800 text-xs'>{"گفتگوی شما و بخش پشتیبانی  "}</Caption>
                                </div>
                            </div>
                            <div className='~lg:max-h-[70vh] overflow-y-auto flex flex-col gap-4'>
                                <MessageSend />
                                <MessageReSend />
                                <MessageReSend />
                            </div>
                            <div className="border-t border-t-line pt-3">
                                <div className="flex flex-col gap-2 items-start justify-start">
                                    <textarea className="textarea textarea-bordered w-full h-[200px]" placeholder="متن پیام :"></textarea>
                                </div>
                            </div>
                            <UploadBox />

                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <ChatIInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page