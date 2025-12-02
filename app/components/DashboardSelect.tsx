"use client";
import React, { useState } from "react";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import Image from "next/image";
import { cn } from "@/utils";

export type DashboardSelectOption = {
  title: string;
  icon?: string;
};
export type TDashboardSelect = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  className?: string;
  classNameLabel?: string;
  options: DashboardSelectOption[];
  placeholder?: string;
};

function DashboardSelect({ label, className, classNameLabel, options, placeholder = "انتخاب کنید" }: TDashboardSelect) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [value, setValue] = useState("");
  const getImage = (title: string) => {
    const src = options.find((q) => q.title === value)?.icon;
    if (title === "همه")
      return <Image src={"/img/cryptocurrency/multiple-cryptocurrencies.svg"} alt={title} width={24} height={24} />;

    if (!src) return undefined;
    return <Image src={src} alt={title} width={24} height={24} />;
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className={cn("w-full", className)}>
        <Combobox
          store={combobox}
          onOptionSubmit={(val) => {
            setValue(val);
            combobox.closeDropdown();
          }}
        >
          <Combobox.Target>
            <div>
              {label && <small className={classNameLabel}>{label}:</small>}
              <InputBase
                value={value}
                component="button"
                type="button"
                pointer
                variant={"filled"}
                rightSection={<Combobox.Chevron />}
                rightSectionPointerEvents="none"
                onClick={() => combobox.toggleDropdown()}
                className={"test"}
                classNames={{
                  input: "!rounded-xl !h-12 !bg-white200",
                }}
              >
                {(value && (
                  <div className={"flex items-center gap-2"}>
                    {getImage(value)} {value}
                  </div>
                )) || <Input.Placeholder>{placeholder}</Input.Placeholder>}
              </InputBase>
            </div>
          </Combobox.Target>

          <Combobox.Dropdown className="!rounded-xl">
            <Combobox.Options>
              {/* <Combobox.Option value={"همه"} key={"all"}>
                <div className={cn("flex items-center gap-2", value === "همه" && "bg-emerald-50 p-1 rounded")}>
                  <Image
                    src={"/img/cryptocurrency/multiple-cryptocurrencies.svg"}
                    alt={"bank"}
                    width={24}
                    height={30}
                  />
                  {"هم2ه"}
                </div>
              </Combobox.Option> */}
              {options.map((option) => (
                <Combobox.Option value={option.title} key={option.title}>
                  <div className={cn("flex items-center gap-2", value === option.title && "bg-emerald-50 p-1 rounded")}>
                    {option.icon && <Image src={option.icon} alt={"bank"} width={24} height={30} />}
                    {option.title}
                  </div>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </div>
    </div>
  );
}

export default DashboardSelect;
