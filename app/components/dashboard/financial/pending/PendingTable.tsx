import CryptocurrencyLogo from '@/app/components/global/CryptocurrencyLogo'
import NameCryptocurrency from '@/app/components/global/NameCryptocurrency'
import TextInfo from '@/app/components/global/TextInfo'
import UpDownBtn from '@/app/components/global/UpDownBtn'
import ButtonBinex from '@/app/components/global/button/ButtonBinex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PendingTable() {
  return (
    <>
          <div className=" hidden lg:block">
              <table className="table block ">
                  {/* head */}
                  <thead>

                      <tr className='border-b-0 my-2'>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl'> نام ارز</th>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color'>  آخرین مهلت پرداخت</th>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color'> مبلغ </th>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color'>  موضوع </th>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color'> وضیعت  </th>
                          <th className='text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-l-2xl'> مالی </th>
                      </tr>

                  </thead>
                  <tbody>
                      {/* row 1 */}
                      <tr className='border-b-gray800 '>


                          <td className=' text-center  '>

                              <div className="flex items-center">
                                  <CryptocurrencyLogo>
                                      <div className="">

                                          <Image
                                              className=""
                                              src="/img/cryptocurrency/Cryptocurrency.svg"
                                              alt="Cryptocurrency logo"
                                              width={30}
                                              height={30}

                                          />
                                      </div>
                                  </CryptocurrencyLogo>
                                  <NameCryptocurrency parentClassName='items-center  justify-center flex-col'>
                                      <span className="lg:text-sm text-sm text-gray900 font-semibold">{"BTC"}</span>
                                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                                  </NameCryptocurrency>
                              </div>

                          </td>


                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-gray900">{" 4 بهمن 1402  "}</span>
                                  <span className="text-gray800 text-xs ms-1">{"18:55:13"}</span>
                              </TextInfo>
                          </td>

                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-black font-semibold">{"475,000 "}</span>
                                  <span className="text-gray800 text-xs ms-1">{" تومان"}</span>
                              </TextInfo>
                          </td>
                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-dark">{" تمدید اشتراک سرور "}</span>

                              </TextInfo>
                          </td>

                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-blue">{" درانتظار پرداخت   "}</span>

                              </TextInfo>
                          </td>



                          <td className='text-center '>
                              
                              <Link href={"#"}>
                                  <ButtonBinex className=' !py-2 !px-2 '>
                                      <span className='flex items-center gap-1 justify-center'>
                                        
                                           پرداخت
                                      </span>
                                  </ButtonBinex>
                              </Link>
                          </td>
                      </tr>
                      {/* row 2 */}
                      <tr className='border-b-gray800 '>


                          <td className=' text-center  '>

                              <div className="flex items-center">
                                  <CryptocurrencyLogo>
                                      <div className="">

                                          <Image
                                              className=""
                                              src="/img/cryptocurrency/Cryptocurrency.svg"
                                              alt="Cryptocurrency logo"
                                              width={30}
                                              height={30}

                                          />
                                      </div>
                                  </CryptocurrencyLogo>
                                  <NameCryptocurrency parentClassName='items-center  justify-center flex-col'>
                                      <span className="lg:text-sm text-sm text-gray900 font-semibold">{"BTC"}</span>
                                      <span className="text-gray800 lg:text-sm text-xs ms-1">{"(بیتکوین)"}</span>
                                  </NameCryptocurrency>
                              </div>

                          </td>


                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-gray900">{" 4 بهمن 1402  "}</span>
                                  <span className="text-gray800 text-xs ms-1">{"18:55:13"}</span>
                              </TextInfo>
                          </td>

                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-black font-semibold">{"475,000 "}</span>
                                  <span className="text-gray800 text-xs ms-1">{" تومان"}</span>
                              </TextInfo>
                          </td>
                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-dark">{" تمدید اشتراک سرور "}</span>

                              </TextInfo>
                          </td>

                          <td className='text-center '>
                              <TextInfo parentClassName='flex-row items-center justify-center'>
                                  <span className="text-xs text-blue">{" درانتظار پرداخت   "}</span>

                              </TextInfo>
                          </td>



                          <td className='text-center '>

                              <Link href={"#"}>
                                  <ButtonBinex className=' !py-2 !px-2 '>
                                      <span className='flex items-center gap-1 justify-center'>

                                          پرداخت
                                      </span>
                                  </ButtonBinex>
                              </Link>
                          </td>
                      </tr>
                      {/* row 3 */}

                  </tbody>
              </table>
          </div>
    </>
  )
}

export default PendingTable