import Link from "next/link";
import React from "react";
import ButtonBinex from "../global/button/ButtonBinex";
import { routes } from "@/app/routes";

export type THeaderNotSigned = {};

function HeaderNotSigned({}: THeaderNotSigned) {
  return (
    <>
      <div className="flex items-center  gap-2 text-sm lg:hidden">
        <Link href={routes.auth.login}>{"ورود"}</Link>
        <Link href={routes.auth.register}>
          <ButtonBinex size="sm">{"ثبت نام"}</ButtonBinex>
        </Link>
      </div>
      <div className="items-center gap-4 text-sm hidden lg:flex">
        <Link href={routes.auth.login}>{"ورود"}</Link>
        <Link href={routes.auth.register}>
          <ButtonBinex className="!py-3 rounded-lg">{"ثبت نام"}</ButtonBinex>
        </Link>
      </div>
    </>
  );
}

export default HeaderNotSigned;
