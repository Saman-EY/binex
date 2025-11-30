import React from "react";
import InputBox from "./InputBox";
import ButtonPrimary from "../../global/button/ButtonPrimary";
import DirectBoxReceiveIcon from "../../icons/DirectBoxReceiveIcon";
import SelectBox from "../../global/SelectBox";

type Step1Props = {};

function Step1({}: Step1Props) {
  return (
    <div className="grid grid-cols-12 lg:gap-10 gap-6 items-start  mx-auto">
      <div className="lg:col-span-6 col-span-12 lg:pt-[28px] pt-4">
        <SelectBox
          items={exchanges}
          label=" صرافی موردنظر خود را مشخص کنید"
          rowSubtitle="انتخاب"
          rowTitle="نماد و نام صرافی"
          afterSelectLabel={'صرافی'}
        />
      </div>
      <div className="lg:col-span-6 col-span-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="w-full">
              <InputBox label="کلید Api Key" text="" placeholder=""></InputBox>
            </div>
            <div className="w-full">
              <InputBox
                label="کلید Secret Api Key"
                text=""
                placeholder="1452662mad"
              ></InputBox>
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
