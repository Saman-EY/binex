import Image from "next/image";
import React from "react";
import AddSquareIcon from "../../icons/AddSquareIcon";
import EditIcon from "../../icons/EditIcon";
import RankingIcon from "../../icons/RankingIcon";
import { cn } from "@/utils";


export type TAccountCart = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  rec_id: number;
  src: string;
  srcBank: string;
  bank: string;
  shaba: string;
  owner: string;
  title: string;
  isDefault: boolean;
  isActive: boolean;

  onSetDefault?: (id: number) => void;
  changeActive?: (id: number, active: boolean) => void;
};

function AccountCart({
  rec_id,
  src,
  srcBank,
  bank,
  title,
  owner,
  shaba,
  isDefault,
  isActive,
  onSetDefault,
  changeActive,
}: TAccountCart) {
  return (
    <>
      <div className=" flex flex-col bg-opacity-green rounded-2xl lg:px-5 px-4 gap-5 pt-0 pb-4  lg:mx-4 relative ">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-4">
          <div className="flex lg:flex-col flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-2 items-start lg:items-center">
              <div className="flex items-center justify-center gap-1">
                <span className="text-sm text-dark">{bank}</span>
                <Image
                  className=""
                  src={srcBank}
                  alt="Cryptocurrency logo"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs lg:text-sm  text-dark">{shaba}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs lg:text-sm  text-gary900">{owner}</span>
              <span className="text-xs lg:text-sm  text-dark100">{title}</span>
            </div>
          </div>
          <Image
            className={cn("mobile:w-full", !isActive && 'grayscale')}
            src={src}
            alt="Cryptocurrency logo"
            width={250}
            height={300}
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          {title ? (
            <button>
              <i className="text-black">
                <EditIcon />
              </i>
            </button>
          ) : (
            <button>
              <i className="text-black">
                <AddSquareIcon />
              </i>
            </button>
          )}

          {isDefault && (
            <span className="flex items-center gap-1 text-gary900 text-xs">
              <i className="text-black">
                <RankingIcon />
              </i>
              پیش فرض
            </span>
          )}
          {isActive && !isDefault && (
            <button
              className="text-gray900 border border-gray900 rounded-2xl px-4 py-1 text-xs"
              onClick={(_) => onSetDefault && onSetDefault(rec_id)}
            >
              پیش فرض شود
            </button>
          )}
          {isActive && !isDefault && (
            <button
              className="text-gray900 border border-gray900 rounded-2xl px-4 py-1 text-xs"
              onClick={(_) => changeActive && changeActive(rec_id, false)}
            >
              غیرفعال شود
            </button>
          )}
          {!isActive && (
            <>
              <button
                className="text-gray900 border border-gray900 rounded-2xl px-4 py-1 text-xs"
                onClick={(_) => changeActive && changeActive(rec_id, true)}
              >
                فعال شود
              </button>
              <div className="absolute top-1 right-5">
                <span className="text-xs text-black">غیرفعال</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default AccountCart;
