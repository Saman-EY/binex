import { routes } from "@/app/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SevenDaysFreeBinex() {
  return (
    <>
      <div className="container mx-auto lg:px-40 px-4   ">
        <div className="bg-blue rounded-2xl flex flex-col items-center justify-center py-8 lg:px-8 px-4">
          <div className="lg:mb-9 mb-2">
              <span className="text-dark text-nowrap lg:text-4xl text-base font-extrabold">
                7 روز تست رایگان استفاده از باینکس
              </span>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full">
            <small className=" text-xs text-dark font-semibold text-center scale-[1.1] px-6 pt-2 pb-4">
            شما با کلیک برروی دکمه شروع، می‌توانید به مدت ۷ روز بطور رایگان از امکانات باینکس بهره‌مند شوید.  
                      </small>
            <div className="w-full mt-6 lg:px-5 px-8 mobile:mt-10">
              <Link href={routes.auth.loginFree} className="contents">
                <button className="relative bg-yellow rounded-2xl px-8 py-3 text-dark font-extrabold xl:w-[50%] md:w-[70%] w-full  mx-auto block">
                  شروع
                  <div className="absolute -left-8 -top-8">
                    <Image
                      className=""
                      src="/img/icone/binex-robot.png"
                      alt="robo img"
                      width={75}
                      height={125}
                    />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SevenDaysFreeBinex;
