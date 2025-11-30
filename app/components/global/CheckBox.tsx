import { cn } from "@/utils";
import React, { ComponentProps } from "react";

function CheckBox({ checked, className, ...props }: ComponentProps<"input">) {
  return (
    <>
      <div className="flex">
        <input
          type="checkbox"
          checked={checked}
          className={cn(
            "checkbox bg-head-table-color checkbox-sm  border-head-table-color checked:bg-dark checked:border-dark",
            className
          )}
          {...props}
        />
      </div>
    </>
  );
}

export default CheckBox;
