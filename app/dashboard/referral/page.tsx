import BinexCart from "@/app/components/dashboard/BinexCart";
import ChartLine from "@/app/components/dashboard/referral/ChartLine";
import InvitationBox from "@/app/components/dashboard/referral/InvitationBox";
import SendingInvitationFriends from "@/app/components/dashboard/referral/SendingInvitationFriends";
import YourIncomeTable from "@/app/components/dashboard/referral/YourIncomeTable";
import ButtonPrimary from "@/app/components/global/button/ButtonPrimary";
import CardTickIcon from "@/app/components/icons/CardTickIcon";
import { routes } from "@/app/routes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Caption from "@/app/components/global/Caption";

export const metadata: Metadata = {
    title: "داشبورد | دعوت دوستان",
};

type TReferralProps = {};

const Referral = (props: TReferralProps) => {
    return (
        <>
            <div className="flex flex-col gap-4 m-4 ">
                <div className="flex items-center justify-center lg:justify-start">
                    <Caption>{" دعوت دوستان"}</Caption>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="lg:col-span-3 col-span-12">
                        <BinexCart src="/img/binex-cart/account-balance.png">
                            <Link href={routes.dashboard.financial.withdraw}>
                                <ButtonPrimary className=" !py-2">
                                    <span className=" gap-1 flex items-center justify-center">
                                        <i className="text-white">
                                            <CardTickIcon />
                                        </i>
                                        درخواست برداشت
                                    </span>
                                </ButtonPrimary>
                            </Link>
                        </BinexCart>
                    </div>
                    <div className="lg:col-span-9 col-span-12">
                        <YourIncomeTable />
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <SendingInvitationFriends />
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        <div className="flex flex-col gap-4">
                            <ChartLine />
                            <InvitationBox />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Referral;
