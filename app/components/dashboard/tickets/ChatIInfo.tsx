import React from 'react'
import InformationIcon from '../../icons/InformationIcon'
import Caption from '../../global/Caption'
import TableContent from '../TablesDash/TableContent'
import TextInfo from '../../global/TextInfo'
import UpDownBtn from '../../global/UpDownBtn'

function ChatIInfo() {
    return (<>
        <div className="bg-white rounded-2xl flex flex-col gap-2 px-8 py-4">
            <div className="flex items-center justify-center lg:justify-start gap-1">
                <i className="text-gray900">
                    <InformationIcon />
                </i>
                <Caption className='text-dark-black text-xl'>{"سایر اطلاعات"}</Caption>
            </div>
            <div className="">
                <TableContent title='عنوان تیکت:' className='!text-gray800 !text-xs' parentClassName=''>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-gray900 font-semibold">{"فعال نبودن ربات"}</span>
                    </TextInfo>
                </TableContent>
                <TableContent title='آغاز درخواست:' className='!text-gray800 !text-xs' parentClassName=''>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-gray900 font-semibold">{"1 اسفند 1402 21:20:57"}</span>
                        <span className="text-gray900 text-xs">{""}</span>
                    </TextInfo>
                </TableContent>
                <TableContent title='نوع درخواست:' className='!text-gray800 !text-xs' parentClassName=''>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-gray900 font-semibold">{"پشتیبانی"}</span>

                    </TextInfo>
                </TableContent>
                <TableContent title=' دسته بندی:' className='!text-gray800 !text-xs' parentClassName='!border-b-0'>
                    <TextInfo parentClassName='flex-row items-center justify-center gap-[2px]'>
                        <span className="text-xs text-gray900 font-semibold">{"مالی"}</span>
                    </TextInfo>
                </TableContent>
                <TableContent title='وضعیت:' className='!text-gray900 !text-sm' parentClassName='!border-b-0'>
                    <UpDownBtn className="text-nowrap !px-4 !text-xs !bg-up !py-2">{"بسته شده"}</UpDownBtn>
                </TableContent>
            </div>
        </div>
    </>
    )
}

export default ChatIInfo