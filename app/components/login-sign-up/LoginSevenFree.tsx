import { routes } from "@/app/routes";
import { cn } from "@/utils";
import Link from "next/link";
import React from "react";

function LoginSevenFree({ className }: { className?: string }) {
  return (
    <Link
      href={"/dashboard/profile"}
      className={cn(
        "bg-yellow lg:rounded-2xl rounded-t-2xl lg:px-4 py-2 px-2 flex items-center justify-center max-w-fit",
        className
      )}
    >
      <span className="text-xs text-dark font-bold">نسخه دمو</span>
    </Link>
  );
}

export default LoginSevenFree;
