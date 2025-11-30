import ProfileInfo from "@/app/components/dashboard/profile/ProfileInfo";
import Caption from "@/app/components/global/Caption";
import React from "react";
import Profilepicture from "../../components/dashboard/profile/Profilepicture";
import PasswordInfo from "../../components/dashboard/profile/PasswordInfo";
import ProfileFree from "../../components/dashboard/profile/ProfileFree";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد  | حساب کاربری",
};

type TProfileProps = {};

function Profile({}: TProfileProps) {
  return (
    <>
      <div className="inline-grid grid-cols-2 gap-3 m-4 grid-flow-dense">
        <div className="lg:col-span-1 col-span-2 flex flex-col gap-2">
          <ProfileFree />
          <div className="bg-white rounded-2xl flex flex-col gap-4   px-4 pt-4">
            <div className="flex items-center justify-center lg:justify-start">
              <Caption className="text-dark-black text-base">
                {"  اطلاعات حساب کاربری "}
              </Caption>
            </div>
            <ProfileInfo />
          </div>
          <PasswordInfo />
        </div>
        <div className="lg:col-span-1 col-span-2 row-auto flex flex-col gap-2">
          <Profilepicture />
          <div className="flex flex-col gap-6 m-4 items-start justify-start">
            <div className="flex items-center gap-4 relative">
              <div
                className="after:absolute after:w-[8px] after:h-[8px] after:bg-green100 
            after:rounded-full after:content-[' ']"
              ></div>
              <p className="lg:text-sm text-[11px] text-black">
                نام و نام خانوادگی، آدرس ایمیل و شماره تلفن شما جز اطلاعات
                محرمانه و نزد پارس‌کدرزمحفوظ خواهد بود. کاربران سایت تنها نام
                مستعار یا نام کاربری شما را خواهند دید.
              </p>
            </div>
            <div className="flex items-center gap-4 relative">
              <div
                className="after:absolute after:w-[8px] after:h-[8px] after:bg-green100 
          after:rounded-full after:content-[' ']"
              ></div>
              <p className="lg:text-sm text-[11px] text-black">
                نام و نام خانوادگی، آدرس ایمیل و شماره تلفن شما جز اطلاعات
                محرمانه و نزد پارس‌کدرزمحفوظ خواهد بود. کاربران سایت تنها نام
                مستعار یا نام کاربری شما را خواهند دید.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Profile;
