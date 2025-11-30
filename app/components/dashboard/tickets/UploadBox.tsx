'use client'

import React from "react";
import DocumentUploadIcon from "../../icons/DocumentUploadIcon";
import ButtonBinex from "../../global/button/ButtonBinex";
import Link from "next/link";
import {routes} from "@/app/routes";
import {toast} from "react-hot-toast";

function UploadBox() {
    return (
        <>
            <div className="flex items-center justify-between gap-4 w-full lg:flex-row flex-col">
                <div
                    className="bg-line border-binex-color border-[2px] rounded-2xl w-full px-2 py-2 flex-grow flex items-center justify-between ">
                    <span className="text-gray800 text-sm">انتخاب فایل</span>
                    <input type="text" hidden typeof="file"/>
                    <button className="border-dark100 border px-4 py-2 rounded-2xl">
            <span className="flex items-center text-xs text-dark100 gap-2">
              انتخاب فایل بارگذاری
              <i className="text-dark100">
                <DocumentUploadIcon/>
              </i>
            </span>
                    </button>
                </div>
                <div className="w-full lg:w-1/4">
                    <Link href={routes.dashboard.support.tickets + '/1'} onClick={() => toast.success('با موفقیت ایجاد شد.')}>
                        <ButtonBinex className="!bg-dark800 ">
                            <span className="flex items-center gap-1 justify-center">
                              ارسال
                            </span>
                        </ButtonBinex>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default UploadBox;
