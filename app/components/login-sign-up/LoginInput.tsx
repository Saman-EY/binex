"use client";

import React, { ComponentProps, useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeSlashIcon from "../icons/EyeSlashIcon";
import { cn } from "@/utils";

export type TLoginInput = ComponentProps<"input"> & {
  label?: string;
  labelFixed?: boolean;
  eye?: boolean;
};

function LoginInput({ eye, label, className, ...props }: TLoginInput) {
  const [type, setType] = useState(props.type || "text");
  let staticPlaceHolder = undefined;
  let placeholder = props.placeholder;
  if(placeholder === '+98'){
    staticPlaceHolder = <span className="absolute left-4 top-3 lg:top-4 text-gray-500 text-sm" dir="ltr">{props.placeholder}</span>;
    placeholder = '';
  }
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-1 w-full">
        <span className="text-dark-black lg:text-sm text-xs">{label}</span>
        <div className="relative w-full">
          {staticPlaceHolder}
          <input
            {...props}
            placeholder={placeholder}
            type={type}
            className={cn(
              className,
              eye && "ps-12",
              "w-full bg-line rounded-[20px] lg:h-[50px] h-[45px] px-4 text-black text-sm placeholder:text-xs text-left",
              "focus:shadow-lg focus:outline outline-blue",
              
              !!staticPlaceHolder && "pl-12",
            )}
            dir="ltr"
          />
          {eye ? (
            <>
              {type === "password" ? (
                <i
                  className="absolute left-2.5 top-2.5"
                  onClick={() => setType("text")}
                >
                  <EyeIcon />
                </i>
              ) : (
                <i
                  className="absolute left-2.5 top-2.5"
                  onClick={() => setType("password")}
                >
                  <EyeSlashIcon />
                </i>
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default LoginInput;
