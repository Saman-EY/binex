import BuySubscription from "@/app/components/BuySubscription/BuySubscription";
import {Metadata} from "next";
import React from "react";
import Caption from "@/app/components/global/Caption";

export const metadata: Metadata = {
    title: "داشبورد  | خرید اشتراک جدید",
};

type Props = {};

function SubscriptionPurchase({}: Props) {
    return (
        <section className="py-4">
            <div className="flex items-center justify-center lg:justify-start px-4">
                <Caption>
                    {" خرید اشتراک"}
                </Caption>
            </div>
            <BuySubscription/>
        </section>
    );
}

export default SubscriptionPurchase;
