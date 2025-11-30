import React from "react";
export type TInputBox = React.HTMLAttributes<
  React.ReactHTMLElement<HTMLButtonElement>
> & {
  label: string;
  text: string;
  placeholder: string;
  children?: React.ReactNode;
};
function InputBox({ label, children, placeholder }: TInputBox) {
  return (
    <>
      <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center w-full gap-2">
        <span className="text-dark lg:text-sm text-sm font-semibold">
          {label}
        </span>
        <input
          type="text"
          className="bg-white border-head-table-color h-[60px] text-end shadow-xl border w-full rounded-2xl outline-none  px-4 "
          placeholder={placeholder}
        />
        <span className="">{children}</span>
      </div>
    </>
  );
}

export default InputBox;
