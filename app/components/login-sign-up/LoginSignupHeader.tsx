import React from "react";
import LogoBinex from "../icons/LogoBinex";
export type TLoginSignupHeader =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
  };
function LoginSignupHeader({ title }: TLoginSignupHeader) {
  return (
    <>
      <div className="flex items-center justify-between w-full lg:flex-col flex-row-reverse">
        <div className="hidden lg:block">
          <LogoBinex />
        </div>
        <div className="lg:hidden">
          <LogoBinex h={25}/>
        </div>

        <span className="font-semibold text-binex-color text-lg">{title}</span>
      </div>
    </>
  );
}

export default LoginSignupHeader;
