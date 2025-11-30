import Image from "next/image";
import React from "react";
import CryptoMain from "../icons/CryptoMain";

function ItemsRight() {
  return (
    <>
      {/* desktop */}
      <div className="~lg:hidden h-screen overflow-hidden">
        <div className="relative ">
          <div className="absolute top-72 right-0 z-0 ">
            <Image
              className=" "
              src="/img/rectangle-login.png"
              alt="Binex features"
              width={600}
              height={100}
            />
          </div>
          <div className="z-1 absolute top-20 right-20 flex flex-col  ">
            <CryptoMain />
            <div className="flex flex-col items-start gap-1">
              <span className="text-dark text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </span>
              <small className="text-dark text-xs">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex">
        <div className=" bg-gradient-to-t from-slate-50 to-dark100 w-full">
          <Image
            className=" mx-auto"
            src="/img/login-img.png"
            alt="Binex login"
            width={300}
            height={190}
          />
        </div>
      </div>
    </>
  );
}

export default ItemsRight;
