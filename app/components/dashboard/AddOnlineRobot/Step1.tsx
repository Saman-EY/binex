import React from "react";
import InputBox from "./InputBox";
import ButtonPrimary from "../../global/button/ButtonPrimary";
import DirectBoxReceiveIcon from "../../icons/DirectBoxReceiveIcon";
import SelectBox from "../../global/SelectBox";
import getRobots from "@/api/robots";

type Step1Props = {};

async function Step1({}: Step1Props) {
  const robots = await getRobots();

  console.log("robots", robots);

  const formated = robots.map((item) => ({
    id: item.id,
    name: item.name,
    name_fa: item.name_fa,
    icon: item.image,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-6 items-start  mx-auto">
      <div className=" lg:pt-[28px] pt-4">
        <SelectBox
          items={formated}
          label="ربات خود را انتخاب کنید"
          rowSubtitle="انتخاب"
          rowTitle="نماد و نام صرافی"
          afterSelectLabel={"صرافی"}
        />
      </div>
      <div className=" lg:pt-[28px] pt-4">
        <SelectBox
          items={currencies}
          label="ارز مربوطه را انتخاب کنید"
          rowSubtitle="انتخاب"
          rowTitle="نماد و نام صرافی"
          afterSelectLabel={"صرافی"}
        />
      </div>
      <div className=" lg:pt-[28px] pt-4">
        <SelectBox
          items={exchanges}
          label=" صرافی موردنظر خود را مشخص کنید"
          rowSubtitle="انتخاب"
          rowTitle="نماد و نام صرافی"
          afterSelectLabel={"صرافی"}
        />
      </div>
      <div className="">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="w-full">
              <InputBox label="کلید Api Key" text="" placeholder=""></InputBox>
            </div>
            <div className="w-full">
              <InputBox label="کلید Secret Api Key" text="" placeholder="1452662mad"></InputBox>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex items-end justify-end ms-auto">
            <ButtonPrimary className="">
              <span className="flex items-center gap-1 justify-center text-md">
                <i className="text-white ">
                  <DirectBoxReceiveIcon />
                </i>
                {" ذخیره "}
                <small className="font-[100] text-[9px]">{"(اختیاری)"}</small>
              </span>
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;

const exchanges = [
  {
    id: 1,
    name: "Binance",
    name_fa: "بایننس",
    icon: "/img/binancelogo.png",
  },
  {
    id: 2,
    name: "Kucoin",
    name_fa: "کوکوین",
    icon: "/img/binancelogo.png",
  },
];

const currencies = [
  {
    id: 1,
    name: "BTC",
    name_fa: "بیتکوین",
    icon: "/img/cryptocurrency/3.svg",
  },
  {
    id: 2,
    name: "ETH",
    name_fa: "اتریوم",
    icon: "/img/cryptocurrency/ETH.svg",
  },
];
