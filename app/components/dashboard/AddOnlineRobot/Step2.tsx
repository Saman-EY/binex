import React from "react";
import InputBox from "./InputBox";
import Radio from "../../global/Radio";
import WarningIcon from "../../icons/WarningIcon";
import SelectBox from "../../global/SelectBox";

type Props = {};

function Step2({}: Props) {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 items-start">
        <div className="order-1 lg:col-span-1 col-span-3 h-full pt-[28px]">
          <SelectBox
            items={currencies}
            label="ارز مورد نظر خود را انتخاب کنید"
            rowTitle="نماد و نام ارز"
            rowSubtitle="انتخاب"
            defaultOpen={false}
            afterSelectLabel={'ارز'}
          />
        </div>
        <div className="order-3 lg:order-2 lg:col-span-1 col-span-3 h-full ">
          <div className="flex flex-col items-start ">
            <InputBox
              label="مبلغ شروع معامله"
              placeholder="300,000"
              text=""
            />
            <div className="flex items-center justify-between gap-8 ">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray900">{"تومان"}</span>
                <Radio name="radio-2" defaultChecked className="scale-[.8]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray900">{"تتر"}</span>
                <Radio name="radio-2" className="scale-[.8]" />
              </div>
            </div>
          </div>
        </div>
        <div className="order-5 lg:order-3 lg:col-span-1 col-span-3 h-full">
          <InputBox label="Take Profit (حد سود)" text="" placeholder="20">
            <span className="flex items-center justify-start gap-2">
              <i className="text-dark">
                <WarningIcon />
              </i>
              <small className="text-dark lg:text-xs text-[11px]">
                لطفا بصورت درصدی و عددی بین ۱ تا ۱۰۰ باشد. “ مثل ۲۰”
              </small>
            </span>
          </InputBox>
        </div>
        <div className="order-2 lg:order-4 lg:col-span-1 col-span-3 h-full pt-[28px]">
          <SelectBox
            items={times}
            label="تایم فریم"
            rowTitle="تایم فریم:"
            rowSubtitle="انتخاب"
            defaultOpen={false}
            afterSelectLabel={'تایم فریم'}
          />
        </div>
        <div className="order-4 lg:order-5 lg:col-span-1 col-span-3 h-full pt-[28px]">
          <SelectBox
            items={leverages}
            label="لوریج یا ضریب معامله"
            rowTitle="انتخاب لوریج یا ضریب معامله"
            rowSubtitle="انتخاب"
            defaultOpen={false}
            afterSelectLabel={'لوریج'}
          />
        </div>
        <div className="order-6 lg:col-span-1 col-span-3 h-full">
          <InputBox label="Stop Loss (حد ضرر) " text="" placeholder="20">
            <span className="flex items-center justify-start gap-2">
              <i className="text-dark">
                <WarningIcon />
              </i>
              <small className="text-dark lg:text-xs text-[11px]">
                لطفا بصورت درصدی و عددی بین ۱ تا ۱۰۰ باشد. “ مثل ۲۰”
              </small>
            </span>
          </InputBox>
        </div>
      </div>
    </>
  );
}

export default Step2;

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

const leverages = [
  {
    id: 1,
    name: "1",
    name_fa: "",
  },
  {
    id: 2,
    name: "2.5 ",
    name_fa: "",
  },
  {
    id: 3,
    name: "5",
    name_fa: "",
  },
  {
    id: 4,
    name: "10",
    name_fa: "",
  },
  {
    id: 5,
    name: "15",
    name_fa: "",
  },
];

const times = [
  {
    id: 1,
    name: "15m",
    name_fa: "15 دقیقه",
  },
  {
    id: 2,
    name: "1h",
    name_fa: "1 ساعته",
  },
  {
    id: 3,
    name: "12h",
    name_fa: "12 ساعته",
  },
  {
    id: 4,
    name: "24h",
    name_fa: "24 ساعته",
  },
];
