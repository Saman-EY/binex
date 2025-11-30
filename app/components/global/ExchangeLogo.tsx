import Image from "next/image";
import React from "react";

function ExchangeLogo({ src }: { src: string }) {
  return (
    <>
      <Image src={src} alt="crypto" width={24} height={24} />
    </>
  );
}

export default ExchangeLogo;
