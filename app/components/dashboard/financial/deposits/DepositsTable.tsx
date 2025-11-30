import TextInfo from "@/app/components/global/TextInfo";
import UpDownBtn from "@/app/components/global/UpDownBtn";
import React from "react";

function DepositsTable() {
    return (
        <>
            <div className=" hidden lg:block">
                <table className="table block  border-separate border-spacing-y-2">
                    {/* head */}
                    <thead>
                        <tr className="border-b-0 my-2">
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl">شماره پرداخت</th>
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">زمان ثبت</th>
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color"> بانک </th>
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color"> شماره فیش </th>
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color"> مبلغ  </th>
                            <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-l-2xl"> وضعیت </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="border-b-0">
                            <td className=" text-center bg-white100 rounded-r-2xl ">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"463229"}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{" 4 بهمن 1402  "}</span>
                                    <span className="text-gray800 text-xs ms-1">{"18:55:13"}</span>
                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"زرین‌پال"}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"49941182501 "}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-dark font-semibold">{"475,000 "}</span>
                                    <span className="text-dark100 text-xs ms-1">{" تومان"}</span>
                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100 rounded-l-2xl">
                                <UpDownBtn className="text-nowrap bg-up">{"واریز شد"}</UpDownBtn>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="border-b-0">
                            <td className=" text-center bg-white100 rounded-r-2xl ">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"463229"}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{" 4 بهمن 1402  "}</span>
                                    <span className="text-gray800 text-xs ms-1">{"18:55:13"}</span>
                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"زرین‌پال"}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-gray900">{"49941182501 "}</span>

                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100">
                                <TextInfo parentClassName="flex-row items-center justify-center">
                                    <span className="text-xs text-dark font-semibold">{"475,000 "}</span>
                                    <span className="text-dark100 text-xs ms-1">{" تومان"}</span>
                                </TextInfo>
                            </td>
                            <td className="text-center bg-white100 rounded-l-2xl">
                                <UpDownBtn className="text-nowrap bg-up">{"واریز شد"}</UpDownBtn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DepositsTable;
