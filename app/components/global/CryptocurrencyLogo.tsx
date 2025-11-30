import { cn } from "@/utils";
import React from "react";
export type TCryptocurrencyLogo =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  };
function CryptocurrencyLogo({ className = "", children }: TCryptocurrencyLogo) {
  return (
    <div
      className={cn(
        "bg-white rounded-full pe-0.5 flex items-center justify-center w-10 h-10",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CryptocurrencyLogo;
