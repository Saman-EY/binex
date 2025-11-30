import React from "react";
import TableContent from "../TablesDash/TableContent";
import TextInfo from "../../global/TextInfo";
import Link from "next/link";
import ButtonPrimary from "../../global/button/ButtonPrimary";
import EditIcon from "../../icons/EditIcon";
import { routes } from "@/app/routes";

function ProfileInfo() {
    return (<>
        <div className="flex flex-col  lg:mx-4 mx-2 ">
            <TableContent title="نام: " className=" " parentClassName="!px-2">
                <div className="flex lg:flex-row ">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-dark-black">{"کاربر "}</span>
                    </TextInfo>
                </div>
            </TableContent>
            <TableContent title="نام خانوادگی: " className=" " parentClassName="!px-2">
                <div className="flex lg:flex-row ">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-dark-black">{"دمو "}</span>

                    </TextInfo>
                </div>
            </TableContent>
            <TableContent title="ایمیل:" className=" " parentClassName="!px-2">
                <div className="flex lg:flex-row ">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-dark-black">{"test@gmail.com "}</span>
                    </TextInfo>
                </div>
            </TableContent>
            <TableContent title="تلفن تماس:" className="" parentClassName="!border-b-0 px-2">
                <div className="flex lg:flex-row ">
                    <TextInfo parentClassName="flex-row items-center justify-center">
                        <span className="text-xs text-dark-black" dir="ltr">{"+989141234567"}</span>
                    </TextInfo>
                </div>
            </TableContent>
        </div>
        <div className="my-4 lg:px-4 px-2 w-full">
            <Link href={routes.dashboard.profile.edit}>
                <ButtonPrimary className="!bg-dark100">
                    <span className="gap-1 flex items-center justify-center">
                        <i>
                            <EditIcon />
                        </i>
                        ویرایش
                    </span>
                </ButtonPrimary>
            </Link>
        </div>
    </>
    )
}

export default ProfileInfo;