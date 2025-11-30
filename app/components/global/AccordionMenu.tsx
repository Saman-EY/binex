"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { TLink } from "@/app/components/dashboard/SidebarDashboard";
import Link from "next/link";
import ChevronDownIcon from "@icons/ChevronDownIcon";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes";

export type TAccordionItem = TLink;

export type TAccordion = {
  items: TAccordionItem[];
  activeLink: string;
  toggleSidebar: (open?: boolean) => void;
};

const AccordionMenu = ({ items, activeLink, toggleSidebar }: TAccordion) => {
  const toggle = () => {
    toggleSidebar(false);
  };
  const closes: Function[] = [];
  const router = useRouter();
  return (
    <>
      {items.map((item, i) => {
        let href = item.link ? { href: item.link } : {};
        if (i === 0) {
          href = {href: routes.dashboard.myProfitLoss.foreign};
        }
        const isOrHasActiveLink = ((item.link && item.link === activeLink) ||
          (item.children &&
            item.children.find(
              (q) => q.link && q.link === activeLink
            ))) as boolean;

        return (
          <Disclosure key={i} as="div" className="group w-full">
            {({ close }) => (
              <>
                {closes.push(close) && null}
                <DisclosureButton
                  as={item.link ? Link : "div"}
                  {...href}
                  role="button"
                  onClick={() => {
                    Object.keys(href).length > 0 && toggle();
                    closes.map((c) => c !== close && c());
                  }}
                  className={cn(
                    "flex flex-col p-2 justify-between ~lg:text-sm border-b text-black",
                    isOrHasActiveLink && "text-dark100"
                  )}
                >
                  <div
                    className="flex items-center gap-2 pe-3"
                    onClick={() => {
                      i === 0 &&
                        router.push(routes.dashboard.myProfitLoss.foreign);
                    }}
                  >
                    {item.icon}
                    <span className="ml-auto text-sm font-semibold">
                      {item.text}
                    </span>
                    {!!item.children && i > 0 && (
                      <i className={cn("group-data-[open]:rotate-180")}>
                        <ChevronDownIcon />
                      </i>
                    )}
                  </div>
                  {i === 0 && (
                    <div className="flex flex-col py-4 ~lg:text-xs text-sm font-medium gap-2">
                      {item?.children
                        ?.filter((q) => !!q.link)
                        .map((child, idx) => {
                          return (
                            <Link
                              href={child.link ?? "#"}
                              key={idx}
                              onClick={() => toggleSidebar(false)}
                              className={cn(
                                "py-1 rounded-lg pr-4 lg:pr-12 transition text-binex-color font-semibold text-xs",
                                activeLink === child.link
                                  ? "bg-binex-color py-1.5 lg:bg-gradient-green text-white/85"
                                  : "hover:brightness-50"
                              )}
                            >
                              {child.text}
                            </Link>
                          );
                        })}
                    </div>
                  )}
                </DisclosureButton>
                {i > 0 && item.children && (
                  <div className="overflow-hidden">
                    <DisclosurePanel className="origin-top transition px-2">
                      <div className="flex flex-col py-4 ~lg:text-xs text-sm font-medium gap-2">
                        {item?.children
                          ?.filter((q) => !!q.link)
                          .map((child, idx) => {
                            return (
                              <Link
                                href={child.link ?? "#"}
                                key={idx}
                                onClick={() => toggleSidebar(false)}
                                className={cn(
                                  "py-1 rounded-lg ps-4 lg:ps-12 transition text-binex-color font-semibold text-xs",
                                  activeLink === child.link
                                    ? "bg-binex-color py-1.5 lg:bg-gradient-green text-white/85"
                                    : "hover:brightness-50"
                                )}
                              >
                                {child.text}
                              </Link>
                            );
                          })}
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
};
export default AccordionMenu;
