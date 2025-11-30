"use client";

import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import RadioItems from "./RadioItems";
import { CurrencyItem } from "@/api/types";
import Line from "./Line";
import SearchNameCryptocurrency from "../BuySubscription/SearchNameCryptocurrency";
import CheckboxItems from "./CheckboxItems";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import CryptocurrencyLogo from "@/app/components/global/CryptocurrencyLogo";
import Image from "next/image";
import NameCryptocurrency from "./NameCryptocurrency";

type Props = {
    label: string;
    rowTitle: string;
    rowSubtitle: string;
    items: CurrencyItem[];
    multiple?: boolean;
    searchLabel?: string;
    defaultOpen?: boolean;
    afterSelectLabel?: string;
};

const SelectBox = (props: Props) => {
    const [open, setOpen] = useState(props.defaultOpen ?? true);
    const [active, setActive] = useState<CurrencyItem | null>(null);

    const changeActive = (item: CurrencyItem) => {
        setActive(item);
        setOpen(false);
    };

    useEffect(() => {
        setOpen(props.defaultOpen ?? true);
    }, [props.defaultOpen]);

    return (
        <article
            className={cn(
                open && "pb-4",
                "relative",
                !!active && props.afterSelectLabel && "mb-4"
            )}
        >
            {!!active && props.afterSelectLabel && (
                <label>
                    <span className="text-dark-black lg:text-sm text-xs pr-2 absolute bottom-full -translate-y-1">
                        {props.afterSelectLabel}
                    </span>
                </label>
            )}
            <div className="bg-[#f2f2f2] border-head-table-color shadow-xl border checked:mb-4 !max-h-[315px] rounded-2xl">
                <div
                    className="lg:text-sm text-xs text-dark font-semibold flex items-center justify-between px-4 py-2 h-full min-h-[60px] "
                    role="button"
                    onClick={() => setOpen(!open)}
                >
                    {active ? (
                        <>
                            {active.icon && (
                                <CryptocurrencyLogo>
                                    <Image
                                        src={active.icon}
                                        alt="Cryptocurrency logo"
                                        width={24}
                                        height={24}
                                    />
                                </CryptocurrencyLogo>
                            )}
                            <NameCryptocurrency parentClassName="items-center justify-center flex-row me-auto">
                                <span className="lg:text-base text-sm text-gray900 font-semibold">
                                    {active.name}
                                </span>
                                {active.name_fa && (
                                    <span className="text-gray800 lg:text-sm text-xs ms-1">
                                        ({active.name_fa})
                                    </span>
                                )}
                            </NameCryptocurrency>
                        </>
                    ) : (
                        props.label
                    )}
                    <i className={cn(open && "rotate-180", "transition")}>
                        <ChevronDownIcon />
                    </i>
                </div>
            </div>
            <div
                className={cn(
                    "bg-white border-slate-300 shadow-xl border transition-all overflow-hidden rounded-2xl",
                    open
                        ? "max-h-[320px] min-h-[320px] translate-y-3"
                        : "max-h-0 translate-y-0 invisible"
                )}
            >
                <div className="flex flex-col mx-0 p-4 h-[320px]">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between pe-2">
                            <span className={"text-dark text-xs font-semibold"}>
                                {props.rowTitle}
                            </span>
                            <span className={"text-dark text-xs font-semibold"}>
                                {props.rowSubtitle}
                            </span>
                        </div>
                        <Line />
                    </div>
                    {props.searchLabel && <SearchNameCryptocurrency />}
                    {props.multiple ? (
                        <CheckboxItems items={props.items} />
                    ) : (
                        <RadioItems
                            currencies={props.items}
                            changeActive={changeActive}
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

export default SelectBox;
