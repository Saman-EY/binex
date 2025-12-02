import Caption from "@/app/components/global/Caption";
import React from "react";
import DashboardInput from "../../../components/DashboardInput";
import DashboardSelect from "../../../components/DashboardSelect";
import UploadBox from "@/app/components/dashboard/tickets/UploadBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد  | تیکت جدید",
};

type TNewTicketProps = {};

const NewTicket = (props: TNewTicketProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 m-4">
        <div className="flex items-center justify-center lg:justify-start">
          <Caption className="text-dark-black text-base">{"درخواست پشتیبانی  "}</Caption>
        </div>
        <div className="bg-white rounded-2xl flex flex-col gap-4   lg:px-8 px-4 py-4">
          <div className="grid grid-cols-2 gap-6 items-end">
            <div className="lg:col-span-1 col-span-2">
              <div className="flex flex-col gap-4">
                <div className="">
                  <DashboardInput
                    label="عنوان: "
                    placeholder=""
                    className=""
                    classNameLabel="text-sm"
                    extraText=""
                    classNameText=""
                  ></DashboardInput>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <DashboardSelect
                label="دسته بندی"
                classNameLabel="text-sm text-gray800"
                options={[{ title: "فنی" }, { title: "مالی" }]}
              />
            </div>
            <div className="col-span-2">
              <div className="flex items-start justify-start gap-2 flex-col">
                <span className="text-gray800 text-sm">پیام:</span>
                <textarea
                  className="textarea bg-white200 w-full h-[100px] overflow-y-scroll"
                  placeholder="Bio"
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex lg:flex-row flex-col items-center justify-between gap-4 w-full">
                <div className="flex lg:w-1/4 w-full lg:border-l lg:border-l-line">
                  <span className="lg:text-sm text-xs text-black mx-2 text-center">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  </span>
                </div>
                <div className="w-full">
                  <UploadBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
