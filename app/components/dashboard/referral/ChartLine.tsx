import React from 'react'

function ChartLine() {
  return (
    <>
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-8 px-4 sm:px-8">
       <div className="bg-binex-color rounded-2xl flex items-center">
            <div className="text-white grow text-center">20</div>
            <div className="bg-blue rounded-2xl text-center h-8 py-1 text-white" style={{width: "40%"}}>12</div>
        </div>

        <div className="flex flex-col items-start gap-4 ">
            <div className="flex  items-center gap-2">
                <div className="w-6 h-3 rounded-xl bg-blue"></div>
                <span className="text-xs text-gray800">
                رتبه کل شما
                </span>
            </div> 
            <div className="flex items-center gap-2">
                <div className="w-6 h-3 rounded-xl bg-binex-color "></div>
                <span className="text-xs text-gray800">
                تعداد کاربرانی که با لینک شما ثبت نام کرده‌اند
                </span>
            </div>      
        </div> 
    </div>
    </>
  )
}

export default ChartLine