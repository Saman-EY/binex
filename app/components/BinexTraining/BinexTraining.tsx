import Image from "next/image";
import React from "react";
import ButtonBinex from "../global/button/ButtonBinex";
import Link from "next/link";
import { routes } from "@/app/routes";

function BinexTraining() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 relative">
          <div className="lg:col-span-10 col-span-12">
            <div className="flex flex-col bg-head-table-color rounded-2xl lg:ps-8 px-4 lg:pe-10 py-5 gap-4">
              <div className="flex items-center justify-center">
                <span className="text-binex-color lg:text-2xl text-xl font-bold mb-8 lg:mb-0">
                  آموزش استفاده از باینکس
                </span>
              </div>
              <div className="flex flex-col items-start justify-start mb-9">
                <span className="text-black font-bold mb-4">
                  لورم ایپسوم متن ساختگی
                </span>
                <p className="text-black text-xs text-justify font-semibold leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-black font-bold mb-4">
                  لورم ایپسوم متن ساختگی
                </span>
                <p className="text-black text-xs text-justify font-semibold leading-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
               
              </div>
              <div className="lg:w-1/4 w-full mt-8 lg:ms-auto">
                <Link href={routes.learn}>
                  <ButtonBinex>مطالعه کامل</ButtonBinex>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-12"></div>
          <div className="absolute xl:left-[6px] lg:-left-4 top-0 lg:flex hidden">
            <Image
              className=""
              src="/img/BinexTraining.png"
              alt="robo img"
              width={260}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
const product = {
  Time: " مدت زمان",
  more: "",
  NameExchange: " نماد و نام صرافی",
  NameCryptocurrency: "نماد و نام ارز",
  NameCryptocurrencyFa: "(بیتکوین)",
  NameCryptocurrencyEn: "BTC",
  NameExchangeFa: "(بایننس)",
  NameExchangeEn: "Binance",
};
export default BinexTraining;
