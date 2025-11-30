import { cn } from "@/utils";
import React, { ComponentProps } from "react";
export type TRadio = ComponentProps<"input">;
function Radio({ name,  className, ...props }: TRadio) {
  return (
    <input
      type="radio"
      name={name}
      className={cn(
        "radio bg-head-table-color border-head-table-color checked:border-dark checked:bg-dark",
        className
      )}
      {...props}
    />
  );
}

export default Radio;
