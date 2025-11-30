import BuySubscription from "@/app/components/BuySubscription/BuySubscription";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <div className="lg:mt-8 mt-4">
        <Caption className="text-black font-bold lg:text-2xl text-xl mx-auto">
          <div className="flex items-center justify-center ">
            <Image
              className="lg:flex hidden"
              src="/img/icone/binex-robot.png"
              alt="binex Logo"
              width={58}
              height={78}
            />
            {"خرید اشتراک"}
          </div>
        </Caption>
        <BuySubscription />
      </div>
    </>
  );
}

export default Page;
