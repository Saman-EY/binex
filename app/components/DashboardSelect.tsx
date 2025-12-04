"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState(options);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const getImage = (title: string) => {
    const src = options.find((q) => q.title === value)?.icon;
    if (title === "همه")
      return <Image src={"/img/cryptocurrency/multiple-cryptocurrencies.svg"} alt={title} width={24} height={24} />;

    if (!src) return undefined;
    return <Image src={src} alt={title} width={24} height={24} />;
  };

  const handleSelect = (option: string) => {
    setIsFocused(false);
    setSearchValue(""); // clear search
    combobox.closeDropdown();

    inputRef.current?.blur();
  };

  useEffect(() => {
    if (!searchValue) {
      setResult(options);
    } else {
      const temp = options.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      setResult(temp);
    }
  }, [searchValue]);

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
            <div className="relative flex px-2 !rounded-xl !h-12 !bg-white200">
              {label && <small className={classNameLabel}>{label}:</small>}
              <input
                ref={inputRef}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                onFocus={() => {
                  combobox.openDropdown();
                  setSearchValue(""); // clear for search
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                  setSearchValue("");
                }}
                className="bg-transparent rounded-lg absolute z-10 bottom-1/2 translate-y-1/2 right-2 w-[90%] outline-none"
                placeholder={placeholder}
              />
              {!isFocused ? (
                value ? (
                  <div className="flex items-center gap-2 z-50">
                    {getImage(value)} {value}
                  </div>
                ) : (
                  <Input.Placeholder>{placeholder}</Input.Placeholder>
                )
              ) : null}
              {/* <InputBase
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
              </InputBase> */}
              <div className="flex flex-col absolute left-3 bottom-1/2 translate-y-1/2">
                <span className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="size-2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </span>
                <span className="text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="size-2 rotate-180"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </span>
              </div>
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
              {result.map((option) => (
                <Combobox.Option value={option.title} key={option.title} onClick={() => handleSelect(option.title)}>
                  <div className={cn("flex items-center gap-2", value === option.title && "bg-emerald-50 p-1 rounded")}>
                    {option.icon && <Image src={option.icon} width={24} height={30} alt="icon" />}
                    <span className="font-semibold">{option.title}</span>
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
