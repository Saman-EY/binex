import React from 'react'
import IRT from '../global/IRT';
import Image from 'next/image';
export type TBinexCart = React.ButtonHTMLAttributes<HTMLButtonElement> &{
    src: string;
}
function BinexCart({ children , src='' }: TBinexCart) {
  return (
    <>
   
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center">
              
            <div className="">
                <Image
                    className=""
                    src={src}
                    alt="Binex cart"
                    width={270}
                    height={300}

                />
            </div>
             
            <div className="flex flex-col items-center justify-center gap-2 w-full">
                  <IRT Amount={13859750} ClassNameT='!text-dark-black !lg:text-sm text-xs' ClassName='!text-xl !text-dark-black font-semibold'></IRT>
                <span className="lg:text-sm text-xs text-dark800"> موجودی حساب شما</span>
                <div className="w-full  border-t border-line pt-4 ">
                    { children }
                </div>
            </div>
          </div>
            
    
    </>
  )
}

export default BinexCart