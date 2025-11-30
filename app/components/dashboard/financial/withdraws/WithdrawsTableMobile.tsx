import TextInfo from '@/app/components/global/TextInfo'
import UpDownBtn from '@/app/components/global/UpDownBtn'
import React from 'react'
import TableContent from '../../TablesDash/TableContent'

function WithdrawsTableMobile() {
  return (
    <>
          <div className="bg-white rounded-2xl flex  flex-col gap-2   p-4 w-full">
              <div className="">
                  <TableContent title='مبلغ :' className='text-xs !text-dark' parentClassName='!py-1'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                              <span className="text-xs text-gray900 font-semibold">{" 475,000  "}</span>
                              <span className="text-xs text-gray900 font-semibold">{" تومان"}</span>

                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
              <div className="">
                  <TableContent title='زمان ثبت:' className='text-xs !text-dark' parentClassName='!py-1'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-2'>
                              <span className="text-xs text-gray900 font-semibold">{" 4  بهمن 1402   "}</span>
                              <span className="text-xs text-gray900 font-semibold">{"18:55:13"}</span>

                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
              <div className="">
                  <TableContent title='بانک:' className='text-xs !text-dark' parentClassName='!py-1'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                              <span className="text-xs text-gray900 font-semibold">{" زرین‌پال"}</span>

                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
              <div className="">
                  <TableContent title='شماره فیش:' className='text-xs !text-dark' parentClassName='!py-1'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                              <span className="text-xs text-gray900 font-semibold">{" 49941182501 "}</span>

                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
              <div className="">
                  <TableContent title='شماره پرداخت:' className='text-xs !text-dark' parentClassName='!py-1'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-4'>
                              <span className="text-xs text-gray900 font-semibold">{" 463229"}</span>

                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
              <div className="">
                  <TableContent title='وضعیت:' className='text-xs !text-dark' parentClassName='!py-1 !border-b-0'>
                      <div
                          className=" ">
                          <TextInfo parentClassName='flex-row items-center justify-center gap-4'>

                              <UpDownBtn className="text-nowrap !text-xs px-8 !py-2 !bg-up"  >{"تایید شده"}</UpDownBtn>
                              {/* <UpDownBtn className="text-nowrap !text-xs px-8 !py-2 !bg-down"  >{"لغو شده"}</UpDownBtn> */}
                          </TextInfo>
                      </div>
                  </TableContent>
              </div>
          </div>
    </>
  )
}

export default WithdrawsTableMobile