import React from "react";
import Caption from "@/app/components/global/Caption";
import Demo from "./Demo";
import Image from "next/image";
import ButtonPrimary from "../global/button/ButtonPrimary";
import Link from "next/link";
import { routes } from "@/app/routes";

function FAQBinex({ showExtraButton, limit }: { showExtraButton?: boolean; limit?: number }) {
  return (
    <div className="container mx-auto lg:px-32 px-4 mt-5">
      <div className="">
        {/* <div className="lg:col-span-6 col-span-12 ">
            <div className=" lg:flex items-center justify-center text-left hidden">
              <Image className="" src="/img/accordion-robot.png" alt="robo img" width={339} height={437} />
            </div>
          </div> */}
        <div className="w-full max-w-4xl mx-auto">
          <Caption className="text-dark font-bold lg:text-2xl text-base mb-4" parentClassName={"mobile:justify-center"}>
            {"سوالات متداول پیش از استفاده از باینکس"}
          </Caption>
          <Demo limit={limit} />
          {showExtraButton && (
            <Link href={routes.faq}>
              <ButtonPrimary className="mt-6">مشاهده تمام سوالات متداول</ButtonPrimary>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default FAQBinex;
