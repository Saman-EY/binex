
import React from 'react'
import AddFriendsIcon from '../../icons/AddFriendsIcon'
import DocumentCopyIcon from '../../icons/DocumentCopyIcon'


function InvitationBox() {
  return (
    <>
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
        <div className="lg:flex hidden flex-col lg:items-start lg:justify-start gap-4">
            <span className="text-base text-black">دعوت</span>
            <p className="text-sm text-gray900">
                دوستان خود را به باینکس دعوت کنید و به ازای خرید هر اشتراک توسط دوستانتان مبلغی به حساب کاربری شما واریز میشود.
            </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-line border-dashed border-gray800  border-2 rounded-2xl px-4 py-2  lg:py-5 flex items-center  lg:w-3/6 w-full justify-between gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-dark text-base">کد دعوت:</span>
                  <span className="text-dark text-base">
                    MZX44A
                  </span>
                </div>
                <div className="">
                  <button className=''>
                    <i className="text-gar900">
                      <DocumentCopyIcon/>
                    </i>
                  </button>
                </div>
            </div>
            <div className="lg:flex hidden">
                  <div className="">

                    <AddFriendsIcon/>
                  </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default InvitationBox