import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/footer/Footer";

export default function BaseLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
    </>
}