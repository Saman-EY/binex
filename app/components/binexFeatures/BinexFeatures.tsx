import React from "react";
import Caption from "@/app/components/global/Caption";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/app/routes";
import { cn } from "@/utils";

function BinexFeatures() {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        <Caption className="text-dark font-bold lg:text-2xl text-xl mb-8 mx-auto">
          {"ویژگی‌های باینکس"}
        </Caption>
        <div className="grid grid-cols-4 lg:gap-x-5 mx-4 gap-y-4">
          {features.map((feature) => {
            return (
              <div className="lg:col-span-1 col-span-4" key={feature.title}>
                <div
                  className={cn(
                    "h-full min-h-[320px] flex flex-col items-center justify-center px-4 pb-4",
                    "bg-white hover:border-green200 transition-all rounded-2xl border-transparent border-[1px]",
                    "shadow-binex hover:shadow-none hover:border-binex-color2 group"
                  )}
                >
                  <div className="my-4">
                    <Image
                    className="w-[96px] h-[96px]"
                      src={feature.icon}
                      alt="Binex features"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center grow">
                    <div className=" flex flex-col h-[48px]">
                      <span className="text-base text-binex-color font-bold text-center">
                        {feature.title}
                      </span>
                      <span className="text-xs text-blue900 grow">
                        {feature.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-gray800 lg:mt-4 mt-2 text-justify">
                     {feature.content}
                    </p>
                  </div>
                  <div className="lg:mt-3 mt-4">
                    <Link href={routes.ai}>
                      <button className="bg-binex-color2  transition-all text-white text-sm rounded-2xl px-8 py-2">
                        بیشتر بدانید
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BinexFeatures;

const features = [
  {
    id: 1,
    title: "ربات اختصاصی بازار فیوچرز",
    subtitle: "",
    icon: "/img/Binexfeatures1.svg",
    content:
      "ربات های باینکس طی یادگیری ماشین برای بازارهای دوطرفه‌ بهینه شده‌اند و می‌توانند با معامله در بازارهای صعودی و نزولی از افزایش و کاهش قیمت سود کسب کنند.",
  },
  {
    id:2,
    title: "با‌‌‌‌ حداقل دسترسی ممکن",
    subtitle: "",
    icon: "/img/Binexfeatures2.svg",
    content:
      "شما می‌توانید تنها دسترسی انجام معاملات را به ربات های باینکس بدهید و این ربات ها هیچ دسترسی‌ به دارایی های کیف پول شما و برداشت و واریز رمزارز نخواهند داشت.",
  },
  {
    id: 3,
    title: "اتصال به صرافی‌های معتبر ایران و جهان",
    subtitle: "",
    icon: "/img/Binexfeatures3.svg",
    content:
      "ما همواره متعهدیم که ربات های باینکس را به صرافی های معتبر بین المللی و داخلی متصل کنیم.",
  },
  {
    id: 4,
    title: "راه اندازی و مدیریت آنلاین تمامی ربات ها",
    subtitle: "",
    icon: "/img/Binexfeatures6.svg",
    content:
        "شما می‌توانید ربات های باینکس را بصورت آنلاین و طی تنها چند دقیقه فعال کنید و سپس از انجام معاملات خودکار لذت ببرید.",
  },
  {
    id: 5,
    title: "معاملات خودکار بدون دخالت انسان",
    subtitle: "",
    icon: "/img/Binexfeatures44.svg",
    content:
      "بعلت توسعه داده شدن ربات های باینکس با تعداد زیادی دیتا، معاملات ربات ها صد در صد براساس الگوریتم های هوش مصنوعی و بدون دخالت انسان انجام می‌پذیرد.",
  },
  {
    id: 6,
    title: "مشاهده لحظه‌ای سود و زیان",
    subtitle: "",
    icon: "/img/Binexfeatures5.svg",
    content:
      "از زمان فعالسازی هریک از ربات های باینکس می‌توانید معاملات انجام شده و سود و زیان کسب شده توسط ربات را در بخش داشبورد از اکانت شخصی خود مشاهده کنید.",
  },

  {

    id: 7,
    title: "بررسی سود و زیان رمزارزهای مختلف و مقایسه‌ی آنها",
    subtitle: "",
    icon: "/img/Binexfeatures7.svg",
    content:
      "همواره می‌توانید با مراجعه به صفحه بررسی سود و زیان رمزارزها، درصد سود و زیان رمزارزهای باینکس را طی بازه‌های زمانی مختلف و برای هریک از ربات ها بررسی کرده و آنها را با یکدیگر مقایسه کنید تا بهترین گزینه را برای خود انتخاب کنید.",
  },
  {

    id: 8,
    title: "امکان دعوت دوستان و کسب درآمد",
    subtitle: "",
    icon: "/img/Binexfeatures8.svg",
    content:
      "همچنین  می‌توانید با همکاری با باینکس و دعوت دوستان خود به باینکس درامد کسب کرده و دوستانتان نیز حین خرید اشتراک از تخفیف برخوردار شوند.",
  },
];
