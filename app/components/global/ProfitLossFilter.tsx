import { cn } from '@/utils';
import React from 'react'

export type TProfitLossFilter = {
  isFirst: boolean;
  setIsFirst: (_isFirst:boolean) => void
}

function ProfitLossFilter({isFirst, setIsFirst}: TProfitLossFilter) {
  return (
    <>
      <div role="tablist" className="tabs tabs-boxed bg-blue p-2 lg:py-3 w-full rounded-2xl">
        <a role="tab" className={cn("tab text-xs py-1 mobile:py-1.5 whitespace-nowrap", isFirst ? 'tab-active !text-blue !bg-white font-semibold':'text-white')} onClick={e => setIsFirst(true)}> بیشترین سود</a>
        <a role="tab" className={cn("tab text-xs py-1 mobile:py-1.5 whitespace-nowrap", !isFirst ? 'tab-active !text-blue !bg-white font-semibold' :'text-white')} onClick={e => setIsFirst(false)}>بیشترین زیان</a>
      </div>
    </>
  )
}

export default ProfitLossFilter