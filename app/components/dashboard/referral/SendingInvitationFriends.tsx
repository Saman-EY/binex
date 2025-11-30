import React from "react";
import SendingInvitationFriendsAccordion from "./SendingInvitationFriendsAccordion";
import Link from "next/link";
import ButtonBinex from "../../global/button/ButtonBinex";
import SendTwoIcon from "../../icons/SendTwoIcon";
import { Modal } from "../../global/Modal";
import { cn } from "@/utils";

function SendingInvitationFriends() {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 ">
        <div className="flex items-center lg:items-start justify-center lg:justify-start">
          <span className="text-black text-base ">
            {"ارسال دعوتنامه به دوستان"}
          </span>
        </div>
        <SendingInvitationFriendsAccordion />
        <Modal
          className={cn("rounded-2xl px-4 py-10 w-full")}
          button={
            <ButtonBinex className="border border-dark800 bg-transparent !py-3 ">
              <span className="flex items-center gap-1 justify-center text-dark800">
                <i>
                  <SendTwoIcon />
                </i>
                {"ارسال دعوت نامه "}
              </span>
            </ButtonBinex>
          }
          closer={<div className="lg:w-1/2 w-full mx-auto">
            <ButtonBinex className="!bg-up !py-3">
              <span className="flex items-center gap-1 justify-center">
                {"تایید"}
              </span>
            </ButtonBinex>
          </div>}
        >
          <div className="flex items-center justify-center flex-col gap-4">
            <span className="lg:text-base text-sm text-black">
              {"ارسال دعوت نامه به دوستان"}
            </span>
            <span className="text-up lg:text-xl tex-base">
              {"دعوت نامه با موفقیت ارسال شد ."}
            </span>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default SendingInvitationFriends;
