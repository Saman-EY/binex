"use client";

import Link from "next/link";
import React, { useState } from "react";
import NotifIcon from "../icons/NotifIcon";
import Image from "next/image";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { routes } from "@/app/routes";
import UserEditIcon from "../icons/UserEditIcon";
import LockIcon from "../icons/LockIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { cn } from "@/utils";
import { useClickOutside } from "@mantine/hooks";

function UserInfo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const menuRef = useClickOutside(() => setMenuOpen(false));
  const notifRef = useClickOutside(() => setNotifOpen(false));

  return (
    <>
      <div className="flex items-center gap-2">
        <div
          className="~lg:hidden relative"
          role="button"
          onClick={(e) => setNotifOpen((q) => !q)}
          ref={notifRef}
        >
          <div className="absolute h-2 w-2 bg-dark rounded-full top-0 right-0 border-white border"></div>
          <NotifIcon />
          <ul
            tabIndex={0}
            className={cn(
              "absolute -left-0 -translate-x-1/2 top-full bg-base-100 rounded-box z-[1] mt-4 w-52  px-1 p-2 shadow-binex flex flex-col divide-y transition text-xs",
              notifOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <li className="pb-1.5">
              <Link
                href={routes.dashboard.profile.index}
                className="flex items-center justify-center"
              >
                {"اطلاعیه‌ای ندارید"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1" ref={menuRef}>
          <div className="relative h-7">
            <div
              tabIndex={0}
              role="button"
              className="btn gap-3 rounded-btn px-2 max-h-7 h-7 min-h-[unset]"
              onClick={(e) => setMenuOpen((q) => !q)}
            >
              <Image
                className="w-7 h-7"
                src="/img/icone/avatar.png"
                alt="binex Logo"
                width={34}
                height={34}
              />
              <div className="~lg:hidden flex items-center gap-1">
                <ChevronDownIcon />
                {"کاربر دمو"}{" "}
              </div>
            </div>
            <ul
              tabIndex={0}
              className={cn(
                "absolute left-0 top-full bg-base-100 rounded-box z-[1] mt-4 w-52  px-1 p-2 shadow-binex flex flex-col divide-y  transition text-xs",
                menuOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              )}
            >
              <li className="pb-1.5">
                <Link
                  href={routes.dashboard.profile.index}
                  className="flex items-center  gap-1"
                  onClick={(_) => setMenuOpen(false)}
                >
                  <UserEditIcon />
                  {"حساب کاربری"}
                </Link>
              </li>
              <li className="py-1.5">
                <Link
                  href={routes.dashboard.profile.index}
                  className="flex items-center gap-2"
                  onClick={(_) => setMenuOpen(false)}
                >
                  <span className="opacity-80">
                    {" "}
                    <NotifIcon color="#00334D" />
                  </span>
                  {"اطلاعیه‌ها"}
                </Link>
              </li>
              <li className="py-1.5">
                <Link
                  href={routes.dashboard.profile.changePassword}
                  className="flex items-center gap-1"
                  onClick={(_) => setMenuOpen(false)}
                >
                  <LockIcon />
                  {"تغییر رمز عبور"}
                </Link>
              </li>
              <li className="pt-1.5">
                <Link
                  onClick={(_) => setMenuOpen(false)}
                  href={routes.home}
                  className="flex items-center gap-1"
                >
                  <LogoutIcon />
                  {"خروج"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
