import React from "react";
import SearchNormalIcon from "../icons/SearchNormalIcon";

function SearchNameCryptocurrency() {
  return (
    <>
      <div className="flex items-center bg-line rounded-2xl px-2 lg:py-2 py-1 relative">
        <input
          type="text"
          className="flex-grow bg-transparent outline-none placeholder:text-xs  lg:placeholder:text-sm"
          placeholder=" جستجوی نام ارز"
        />
        <button className="absolute left-2  pointer-events-none">
          <i className="text-dark">
            <SearchNormalIcon />
          </i>
        </button>
      </div>
    </>
  );
}

export default SearchNameCryptocurrency;
