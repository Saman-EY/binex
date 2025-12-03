"use client";

import React from "react";
import UpBtnTwo from "../global/UpDownBtn";
import TimeFrame from "../global/TimeFrame";
import RobotName from "../global/RobotName";
import UpDownBtnThree from "../global/UpDownBtnThree ";
import UpDownBtn from "../global/UpDownBtn";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes";

function CurrenciesCotnent() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center">
          <TimeFrame className="text-xs text-dark">{"1h"}</TimeFrame>
          <UpDownBtn className="text-nowrap min-w-[64px]">{"+1.05%"}</UpDownBtn>
        </div>
        <RobotName
          onClick={(e) => {
            e!.stopPropagation();
          }}
          parentClassName="mobile:flex-col sm:gap-2  w-full"
        >
          <Link href={`${routes.robotInfo}`}>
            <Image className="size-7" width={100} height={100} src="/img/robots/NEO.png" alt="" />
          </Link>
          <Link href={`${routes.robotInfo}`} className="lg:text-xs text-[10px] text-nowrap text-gray900">
            {"نئو"}
          </Link>
          <Link href={`${routes.robotInfo}`} className="text-gray800 lg:text-xs text-[10px] text-nowrap ms-1">
            {"(Neo) "}
          </Link>
        </RobotName>
      </div>
    </div>
  );
}

export default CurrenciesCotnent;
