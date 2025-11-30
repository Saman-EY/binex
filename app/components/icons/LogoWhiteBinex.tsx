'use client';

import LogoWhite from '@public/img/logo-white.svg'
import Link from "next/link";
import {routes} from "@/app/routes";
import {usePathname} from "next/navigation";

export default function LogoWhiteBinex(){
    const path = usePathname()
    const dash = path.indexOf('dashboard') > -1;
    return <Link href={!dash ? '/': routes.dashboard.binanceMarket}>
        <LogoWhite/>
    </Link>
}