import { ComponentProps } from 'react'

type Props = ComponentProps<"svg">
export default function HamburgerIcon({ className }: Props){
    return <>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path opacity="0.4" d="M3 4.5H21" stroke="#0A435A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 9.5H21" stroke="#0A435A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path opacity="0.4" d="M3 14.5H21" stroke="#0A435A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19.5H21" stroke="#0A435A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    </>
}