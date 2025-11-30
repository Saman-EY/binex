import React, { Children } from "react"
import ItemsRight from "../components/login-sign-up/ItemsRight"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <div className="lg:fixed lg:inset-y-0 lg:right-0 lg:w-1/2  ">
          <ItemsRight />
        </div>
        <i className="col-span-1"></i>
        <div className="col-span-1  ~lg:px-4 pb-4">
          {children}
        </div>
      </div>
    </>
  )
}

