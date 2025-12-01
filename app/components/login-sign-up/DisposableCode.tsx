import { routes } from "@/app/routes";
import Link from "next/link";
import React from "react";

function DisposableCode() {
  return (
    <>
      <div className="">
        {/*  */}
        <div className="flex items-center justify-between  px-4">
          <Link href={routes.auth.loginFree+"?isEdit=1"} className="">
            <span className="text-blue-light text-xs lg:font-semibold">
              اصلاح ایمیل
            </span>
          </Link>
          <div className="flex flex-col gap-1">
            <div className="hidden">
              <button className="text-blue-light text-xs font-semibold">
                ارسال مجدد رمز
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-down text-sm ">9</span>
              <span className="text-down text-sm ">5</span>
              <span className="text-down text-sm ">:</span>
              <span className="text-down text-sm ">0</span>
              <span className="text-down text-sm ">0</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisposableCode;
