import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/footer/Footer";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <section>
        <Header />
        <main>{children}</main>
      </section>
      <Footer />
    </div>
  );
}
