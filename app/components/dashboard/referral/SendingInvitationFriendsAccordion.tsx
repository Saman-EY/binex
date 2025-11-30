"use client";

import React, {useState} from "react";
import TableContent from "../TablesDash/TableContent";
import CheckBox from "../../global/CheckBox";

function SendingInvitationFriendsAccordion() {
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="collapse collapse-arrow !bg-dark800 border border-opacity">
                    <input
                        type="checkbox"
                        name="my-accordion-2"
                        className="peer"
                        checked={active === 1}
                        onChange={(e) => setActive((q) => (q === 1 ? 0 : 1))}
                    />
                    <div
                        className="collapse-title lg:text-sm text-xs font-medium text-white peer-checked:bg-white peer-checked:text-dark  peer-checked:rounded-t-2xl peer-checked:border-0 flex items-center">
                        درصد دریافتی شما از هر خرید اشتراک
                    </div>
                    <div className="collapse-content  text-white peer-checked:bg-white peer-checked:text-dark ">
                        <div className="flex flex-col gap-1 lg:mx-6 mx-0">
                            <CheckBoxRows values={[0, 5, 10, 15, 20]}/>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow !bg-dark800 border border-opacity">
                    <input
                        type="checkbox"
                        name="my-accordion-2"
                        className="peer"
                        checked={active === 2}
                        onChange={(e) => setActive((q) => (q === 2 ? 0 : 2))}
                    />
                    <div
                        className="collapse-title lg:text-sm text-xs font-medium text-white peer-checked:bg-white peer-checked:text-dark peer-checked:rounded-t-2xl  peer-checked:border-0 flex items-center">
                        درصد دریافت تخفیف دوستانتان هنگام خرید اشتراک
                    </div>
                    <div className="collapse-content text-white peer-checked:bg-white peer-checked:text-dark">
                        <div className="flex flex-col gap-1 lg:mx-6 mx-0">
                            <CheckBoxRows values={[0, 5, 10, 20]}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SendingInvitationFriendsAccordion;

const CheckBoxRows = ({values}: { values: number[] }) => {
    const [checked, setChecked] = useState(0);
    return values.map(q => (
        <div key={q} onClick={_ => setChecked(q)} className={'cursor-pointer'}>
            <TableContent
                title={`${q}درصد `}
                className="!text-dark text-sm font-semibold"
                parentClassName="!py-1  px-4"
            >
                <CheckBox checked={checked === q}/>
            </TableContent>
        </div>
    ))
}