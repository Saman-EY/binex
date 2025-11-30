'use client'
import React, {useState} from 'react'
import Post from './Post'
import clsx from "clsx";

function TabPost() {
    const [active, setActive] = useState<number>(0)

    return (
        <>
            <div className="lg:mx-28  lg:mt-12 mt-8">

                <div role="tablist" className="tabs tabs-bordered grid-cols-4 ctab">
                    {
                        tabs.map(tab => {
                            return <button role={"tab"} key={tab.id}
                                           onClick={e => setActive(tab.id)}
                                           className={clsx(`tab bg-head-table-color rounded-t-2xl ml-1 h-[44px] mobile:text-xs border-0 col-span-1`,
                                               active === tab.id && 'active'
                                           )}>
                                {tab.title}
                            </button>
                        })
                    }

                </div>
            </div>
            <div>

                <div role="tabpanel" className={`tab-content py-10 ${active === 0 ? 'block' : 'hidden'} `}>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="lg:col-span-1 col-span-3">
                            <Post/>
                        </div>
                        <div className="lg:col-span-1 col-span-3"><Post/></div>
                        <div className="lg:col-span-1 col-span-3"><Post/></div>
                    </div>
                </div>

                <div role="tabpanel" className={`tab-content p-10 ${active === 1 ? 'block' : 'hidden'}`}>Tab content 2
                </div>
                <div role="tabpanel" className={`tab-content p-10 ${active === 2 ? 'block' : 'hidden'}`}>Tab content 3
                </div>
                <div role="tabpanel" className={`tab-content p-10 ${active === 3 ? 'block' : 'hidden'}`}>Tab content 4
                </div>
            </div>


        </>
    )
}

export default TabPost
const tabs = [
    {
        id: 0,
        title: " کسب و کار"
    },
    {
        id: 1,
        title: " تکنولوژی"
    },
    {
        id: 2,
        title: " مدیریت"
    },
    {
        id: 3,
        title: " توسعه"
    },
]