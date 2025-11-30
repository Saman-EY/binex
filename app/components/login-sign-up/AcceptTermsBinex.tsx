import React from "react";
import CheckBox from "../global/CheckBox";
import Link from "next/link";
import { routes } from "@/app/routes";

function AcceptTermsBinex() {
  return (
    <>
      <div className="flex items-center justify-start gap-1 px-2">
        <CheckBox />
        <Link href={routes.learn}>
          <span className="text-blue text-xs">
            شرایط و قوانین باینکس را مطالعه کرده و می‌پذیرم.
          </span>
        </Link>
      </div>
    </>
  );
}

export default AcceptTermsBinex;
