import { cn } from "@/utils";
import clsx from "clsx";
import React from "react";
export type TButtonSellBuy = React.HTMLAttributes<React.ReactHTMLElement<HTMLButtonElement>> & {
  sell?: boolean;
};
function ButtonSellBuy({ children, className, sell = false }: TButtonSellBuy) {
  return (
    <>
      <button
        className={cn(
          "rounded-2xl px-2 py-1.5 w-full text-white mobile:!bg-transparent ",
          sell ? "bg-red-600 mobile:text-down" : "bg-dark100 mobile:text-dark100",
          className
        )}
      >
        {sell ? "Sell" : "Buy"}
      </button>
    </>
  );
}

export default ButtonSellBuy;
