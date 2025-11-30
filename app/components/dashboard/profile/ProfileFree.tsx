import ButtonFree from "@/app/components/global/button/ButtonFree";
import LoginIcon from "@/app/components/icons/LoginIcon";
import Link from "next/link";
import React from "react";
import TimerFreeBox from "../../global/TimerFreeBox";
import {routes} from "@/app/routes";

function ProfileFree() {
  return (
    <>
      <div className="bg-white rounded-2xl flex flex-col gap-4 lg:px-4 px-2 py-4">
        <div className="flex flex-col lg:items-start items-center gap-2 justify-center lg:justify-start">
          <span className="text-black text-sm">
            حساب رایگان برای شما فعال میباشد.
          </span>
          <p className="text-gray900 lg:text-xs text-[11px] text-center ">
          شما می‌توانید حداکثر ۳ ربات در طی دوره‌ی استفاده رایگان از باینکس فعال کنید.          </p>
        </div>
        <TimerFreeBox source={"profile"}>
          <Link href={routes.home}>
            <ButtonFree className="py-1 px-4 font-bold mobile:py-2">
              <div className="flex items-center gap-1 justify-center text-xs">
                <i>
                  <LoginIcon />
                </i>
                خروج از حساب آزمایشی
              </div>
            </ButtonFree>
          </Link>
        </TimerFreeBox>
      </div>
    </>
  );
}

export default ProfileFree;
