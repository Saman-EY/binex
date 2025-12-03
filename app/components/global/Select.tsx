import React from "react";

export type TSelect = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
  label: string;
};

function Select({ label, className }: TSelect) {
  return (
    <>
      <div className="flex items-center gap-1 lg:justify-start">
        <span className={className}>{label}</span>
        <input type="text" className="bg-white200 outline-none px-4 py-2 w-full  min-h-12 rounded-[15px] h-12" />
      </div>
    </>
  );
}

export default Select;
