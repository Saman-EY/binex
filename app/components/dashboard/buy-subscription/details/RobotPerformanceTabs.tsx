"use client"
import { cn } from '@/utils'
import React, { useState } from 'react'

function RobotPerformanceTabs() {
  const [active, setActive] = useState(1)
  return (
    <>

      <div role="tablist" className="tabs tabs-boxed bg-transparent gap-4 flex flex-wrap ~lg:gap-2" id="chart_table">
        <a role="tab" className={cn("tab border border-gray400 text-xs lg:text-sm rounded-2xl ~lg:px-2", active === 5 && "tab-active border-0")} onClick={e => setActive(5)}>همه</a>
        <a role="tab" className={cn("tab border border-gray400 text-xs lg:text-sm rounded-2xl ~lg:px-2 ", active === 1 && "tab-active border-0")} onClick={e => setActive(1)}>Blocknet (BLOCK)</a>
        <a role="tab" className={cn("tab border border-gray400 text-xs lg:text-sm rounded-2xl ~lg:px-2", active === 2 && "tab-active border-0")} onClick={e => setActive(2)}>BitBay (BAY)</a>
        <a role="tab" className={cn("tab border border-gray400 text-xs lg:text-sm rounded-2xl ~lg:px-2", active === 3 && "tab-active border-0")} onClick={e => setActive(3)}>Blocknet (BLOCK)</a>
        <a role="tab" className={cn("tab border border-gray400 text-xs lg:text-sm rounded-2xl ~lg:px-2", active === 4 && "tab-active border-0")} onClick={e => setActive(4)}>MonaCoin (MONA)</a>
      </div>
    </>
  )
}

export default RobotPerformanceTabs