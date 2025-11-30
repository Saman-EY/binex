import {useState} from "react";

export type TAccordionItem = {
    sequence: number;
    title: string;
    content: string;
}
export type TAccordion = {
    items: TAccordionItem[]
}
const CustomAccordion = ({items}: TAccordion) => {
    const [active, setActive] = useState<string | null>(null)

    return <div></div>
}
export default CustomAccordion

