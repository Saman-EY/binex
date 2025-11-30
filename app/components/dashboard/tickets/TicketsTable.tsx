'use client';

import React from "react";
import TextInfo from "../../global/TextInfo";
import UpDownBtn from "../../global/UpDownBtn";
import Link from "next/link";
import { routes } from "@/app/routes";
import { useRouter } from "next/navigation";

function TicketsTable() {
    const r = useRouter()
    const handleRowClick = () => {
      r.push(routes.dashboard.support.tickets+'/1');
    } 
  return (
    <>
      <div className="">
        <div className=" hidden lg:block">
          <table className="table block">
            {/* head */}
            <thead>
              <tr className="border-b-0 my-2">
                <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-r-2xl">
                  #
                </th>
                <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">
                  {" "}
                  عنوان{" "}
                </th>
                <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color">
                  {" "}
                  زمان درخواست{" "}
                </th>
                <th className="text-xs text-dark pt-4 pb-4 text-center font-semibold bg-head-table-color rounded-l-2xl">
                  {" "}
                  وضعیت{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className=""  onClick={handleRowClick}>
                <td className=" text-center  rounded-r-2xl ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">{"1"}</span>
                  </TextInfo>
                </td>
                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {
                        "...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "
                      }
                    </span>
                  </TextInfo>
                </td>
                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {" 4 بهمن 1402  "}
                    </span>
                    <span className="text-gray800 text-xs ms-1">
                      {"18:55:13"}
                    </span>
                  </TextInfo>
                </td>
                <td className="text-center  rounded-l-2xl">
                  <Link href={routes.dashboard.support.tickets + "/1"}>
                    <UpDownBtn className="text-nowrap !text-xs  !py-2 !bg-up min-w-[117px]">
                      {" بسته شده"}
                    </UpDownBtn>
                  </Link>
                </td>
              </tr>
              {/* row 2 */}
              <tr className=""  onClick={handleRowClick}>
                <td className=" text-center  rounded-r-2xl ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">{"1"}</span>
                  </TextInfo>
                </td>
                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {
                        "...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "
                      }
                    </span>
                  </TextInfo>
                </td>
                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {" 4 بهمن 1402  "}
                    </span>
                    <span className="text-gray800 text-xs ms-1">
                      {"18:55:13"}
                    </span>
                  </TextInfo>
                </td>

                <td className="text-center  rounded-l-2xl">
                  <Link href={routes.dashboard.support.tickets + "/1"}>
                    <UpDownBtn className="text-nowrap !text-xs  !py-2 !bg-blue min-w-[117px]">
                      {" درحال بررسی"}
                    </UpDownBtn>
                  </Link>
                </td>
              </tr>
              {/* row 3 */}
              <tr className=""  onClick={handleRowClick}>
                <td className=" text-center  rounded-r-2xl ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">{"1"}</span>
                  </TextInfo>
                </td>

                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {
                        "...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ "
                      }
                    </span>
                  </TextInfo>
                </td>
                <td className="text-center ">
                  <TextInfo parentClassName="flex-row items-center justify-center">
                    <span className="text-xs text-gray900">
                      {" 4 بهمن 1402  "}
                    </span>
                    <span className="text-gray800 text-xs ms-1">
                      {"18:55:13"}
                    </span>
                  </TextInfo>
                </td>

                <td className="text-center  rounded-l-2xl">
                  <Link href={routes.dashboard.support.tickets + "/1"}>
                    <UpDownBtn className="text-nowrap !text-xs  !py-2 !bg-dark min-w-[117px]">
                      {" پاسخ داده شده"}
                    </UpDownBtn>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TicketsTable;
