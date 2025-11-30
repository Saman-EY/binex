import React from "react";
import Caption from "../../global/Caption";
import DashboardInput from "@/app/components/DashboardInput";
import DashboardSelect from "@/app/components/DashboardSelect";
import ButtonBinex from "../../global/button/ButtonBinex";
import SaveAddIcon from "../../icons/SaveAddIcon";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import Image from "next/image";

function AccountManagement() {
  return (
    <>
      <div className="bg-white rounded-2xl flex flex-col gap-4   px-4 py-4">
        <div className="flex items-center justify-center lg:justify-start">
          <Caption>{"مدیریت شماره حساب‌ها "}</Caption>
        </div>
        <form action="" className="flex flex-col gap-6">
            <DashboardInput
              label="عنوان:"
              extraText="عنوان دلخواهی در صورت تمایل برای حساب خود وارد نمایید."
              classNameLabel="text-gray800"
              className=""
              placeholder=""
              classNameText="text-gray900"
            />
            <DashboardInput
              label="نام صاحب حساب:"
              extraText=""
              classNameLabel="text-gray800"
              className=""
              placeholder=""
              classNameText="text-gray900"
            />
            <DashboardInput
              label="شماره شبا:"
              extraText=""
              prepend="IR"
              classNameLabel="text-gray800"
              className=""
              placeholder=""
              classNameText="text-gray900"
            />

            <DashboardSelect
              options={[
                {
                  title: "IR960560611828005370635201",
                  icon: "/img/bank.png",
                },
              ]}
              label={"بانک"}
              classNameLabel="text-gray800 lg:text-sm text-xs"
            />

            <div className="w-full lg:w-1/2 lg:mr-auto flex">
              <ButtonBinex className="!bg-dark800 !py-3 ">
                <span className="flex items-center gap-1 justify-center">
                  <i className="text-white">
                    <SaveAddIcon />
                  </i>
                  افزودن شماره حساب
                </span>
              </ButtonBinex>
            </div>
          </form>

        <div className="flex flex-col items-start justify-start gap-4">
          <div className="">
            <span className="text-pink text-base font-semibold">نکات مهم:</span>
          </div>
          <div className="flex items-center justify-center relative">
            <div
              className="after:absolute after:content-['']  after:top-2 after:right-2 after:h-[8px]
                     after:w-[8px] after:bg-pink after:rounded-full"
            ></div>
            <div className="">
              <p className="lg:text-sm text-[10px] text-dark mr-6">
                جهت ثبت درخواست واریز وجه به حساب بانکی شما بر روی دکمه زیر کلیک
                کنید. توجه نمایید که واریز ها از طریق حواله پایا و حداکثر تا دو
                روز کاری از ثبت درخواست انجام خواهد شد.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div
              className="after:absolute after:content-['']  after:top-2 after:right-2 after:h-[8px]
                     after:w-[8px] after:bg-pink after:rounded-full"
            ></div>
            <div className="">
              <p className="lg:text-sm text-[10px] text-dark mr-6">
                جهت ثبت درخواست واریز وجه به حساب بانکی شما بر روی دکمه زیر کلیک
                کنید. توجه نمایید که واریز ها از طریق حواله پایا و حداکثر تا دو
                روز کاری از ثبت درخواست انجام خواهد شد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountManagement;
