import React from "react";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/app/routes";

function BuiltArtificialIntelligence() {
  return (
    <>
      <div className="grid grid-cols-2 lg:mx-40 mx-4 items-center lg:gap-20 gap-8 ~lg:mt-14">
        <div className="lg:col-span-1 col-span-2 max-w-[360px] lg:max-w-max mx-auto  mt-12 lg:mt-0">
          <Image
            className=""
            src="/img/ai.png"
            alt="ai logo"
            width={500}
            height={300}
          />
        </div>
        <div className="lg:col-span-1 col-span-2">
          <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center">
            <span className="text-dark lg:text-4xl text-xl font-bold lg:mb-5 mb-4">
              ساخته شده با هوش مصنوعی
            </span>
            <p className="lg:text-base text-xs text-justify mobile:px-4 text-cyan-900 leading-6 font-semibold">
            باینکس مجموعه‌ای از ربات های تریدر یا معامله‌گر ارز دیجیتال است که با جمع آوری دیتای بیش از ۲۰۰ رمزارز مختلف طی ۵ سال و انجام یادگیری ماشین بر روی دیتاهای بدست آمده توسعه داده شده است.
            </p>
          </div>
          <div className="lg:w-1/2 lg:mt-8 mt-4 w-full mb-12  ">
            <Link href={routes.ai}>
              <ButtonBinex>بیشتر بدانید</ButtonBinex>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuiltArtificialIntelligence;
