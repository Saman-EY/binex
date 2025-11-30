"use client";
import Caption from "@/app/components/global/Caption";
import React, { useState } from "react";
import DashboardInput from "../../../components/DashboardInput";
import IRT from "@/app/components/global/IRT";
import DashboardSelect from "../../../components/DashboardSelect";
import Link from "next/link";
import ButtonBinex from "@/app/components/global/button/ButtonBinex";
import BinexCart from "@/app/components/dashboard/BinexCart";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import DefultCart from "@/app/components/dashboard/financial/withdraw/DefultCart";
import { Metadata } from "next";
import { routes } from "@/app/routes";

type TWithdrawProps = {};

function Withdraw({}: TWithdrawProps) {
    const [value, setValue] = useState("0");

    const clicked = () => {
        setValue("14,000,000");
    };
    return (
        <>
            <div className="grid grid-cols-12 gap-4 m-2 lg:m-4">
                <div className="lg:col-span-8 col-span-12 order-2 lg:order-1">
                    <div className="flex flex-col gap-4">
                        <div className="bg-white rounded-2xl flex flex-col lg:gap-6 gap-4 p-4 w-full">
                            <div className="flex items-center justify-center lg:justify-start  ">
                                <Caption className="text-dark-black lg:text-xl text-base">
                                    {"برداشت از حساب"}
                                </Caption>
                            </div>

                            <div className="bg-dark100 px-4 py-6 rounded-2xl lg:flex hidden flex-col gap-5 lg:order-2 order-3 ">
                                <div className="flex items-center gap-2 justify-start relative">
                                    <div
                                        className="after:absolute after:content-[' '] after:h-[8px] after:w-[8px] after:bg-dark800 after:rounded-full
                after:top-2 after:right-0 "
                                    ></div>
                                    <p className="text-white text-sm mr-2">
                                        جهت ثبت درخواست واریز وجه به حساب بانکی
                                        شما بر روی دکمه زیر کلیک کنید. توجه
                                        نمایید جهت ثبت درخواست واریز وجه به حساب
                                        بانکی شما بر روی دکمه زیر کلیک کنید.
                                        توجه نمایید
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 justify-start relative">
                                    <div
                                        className="after:absolute after:content-[' '] after:h-[8px] after:w-[8px] after:bg-dark800 after:rounded-full
                after:top-2 after:right-0"
                                    ></div>
                                    <p className="text-white text-sm mr-2">
                                        جهت ثبت درخواست واریز وجه به حساب بانکی
                                        شما بر روی دکمه زیر کلیک کنید. توجه
                                        نمایید
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col order-3  gap-6">
                                <div className="flex items-center justify-center w-full flex-col lg:gap-1 mt-5 gap-2">
                                    <div className="w-full">
                                        <DashboardInput
                                            dir="ltr"
                                            classNameText=""
                                            label="مبلغ درخواستی شما (تومان)"
                                            extraText=""
                                            placeholder="0"
                                            className="text-start"
                                            value={
                                                !isNaN(
                                                    Number(
                                                        value.replaceAll(
                                                            ",",
                                                            ""
                                                        )
                                                    )
                                                )
                                                    ? Number(
                                                          value.replaceAll(
                                                              ",",
                                                              ""
                                                          )
                                                      ).toLocaleString("fa")
                                                    : "0"
                                            }
                                            onChange={(e) =>
                                                setValue(e.target.value)
                                            }
                                            classNameLabel=" text-dark-black"
                                        />
                                    </div>
                                    <div
                                        onClick={clicked}
                                        className="flex items-center justify-between px-4 py-3 bg-opacity rounded-2xl w-full"
                                    >
                                        <span className="text-dark-black text-xs lg:text-sm">
                                            انتخاب کل موجودی
                                        </span>
                                        <button>
                                            <IRT
                                                Amount={14000000}
                                                ClassName="text-black text-xs lg:text-sm !font-semibold"
                                                ClassNameT="!text-xs lg:text-sm"
                                            ></IRT>
                                        </button>
                                    </div>
                                </div>
                                <DashboardSelect
                                    classNameLabel="text-gray800 lg:text-sm text-xs"
                                    options={[
                                        {
                                            title: "IR960560611828005370635201",
                                            icon: "/img/bank.png",
                                        },
                                    ]}
                                    label=" لطفا شماره شبا خود را انتخاب کنید"
                                />
                                <div className="lg:w-1/3 w-full flex mr-auto">
                                    <Link
                                        href={
                                            routes.dashboard.financial.withdraw
                                        }
                                        className="w-full"
                                    >
                                        <ButtonBinex className="!bg-dark800 ">
                                            <span className="flex items-center gap-1 justify-center">
                                                ثبت درخواست برداشت
                                            </span>
                                        </ButtonBinex>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-xl p-4 ~lg:p-2">
                            <table className="w-full">
                                <thead className="bg-head-table-color">
                                    <tr className="text-gray900 text-sm [&_th]:py-2 [&_th]:~lg:text-xxs ">
                                        <th className=" rounded-r-xl ps-2">ردیف</th>
                                        <th className="">مبلغ</th>
                                        <th className="">تاریخ درخواست</th>
                                        <th className="">حساب مقصد</th>
                                        <th className="rounded-l-xl">وضعیت</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center text-sm [&_td]:py-4 [&_td]:~lg:text-xxs">
                                        <td className="">1</td>
                                        <td className="">
                                            25,000,000 تومان
                                        </td>
                                        <td className="" dir="ltr">
                                            17:00 1403/05/06{" "}
                                        </td>
                                        <td className="">ملی (4565)</td>
                                        <td className="">
                                            <span className="bg-success text-white py-1 px-3 rounded-full text-xs ~lg:text-xxs">
                                              موفق
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-4 col-span-12 order-1 ">
                    <div className="flex  flex-col gap-4">
                        <div className="">
                            <BinexCart src="/img/binex-cart/cart.png">
                                <Link
                                    href={routes.dashboard.financial.accounts}
                                >
                                    <ButtonPrimary className=" !bg-dark100">
                                        <span className=" gap-1 flex items-center justify-center">
                                            ویرایش شماره حساب‌ها
                                        </span>
                                    </ButtonPrimary>
                                </Link>
                            </BinexCart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Withdraw;
