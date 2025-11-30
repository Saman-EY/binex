import React from "react";
import ArrowSquareDownWhiteIcon from "@icons/ArrowSquareDownWhiteIcon";
import ArrowSquareDownDarkIcon from "@icons/ArrowSquareDownDarkIcon";
import clsx from "clsx";
import { cn } from "@/utils";

function Demo() {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={cn(
              "shadow-lg border-slate-100 border rounded-2xl overflow-hidden",
              idx < data.length - 1 && "mb-3"
            )}
          >

            <div
                className={clsx(
                    "collapse acc-collapse collapse-arrow bg-dark text-white relative"
                )}
            >
              <input
                  type="checkbox"
                  name="my-accordion-2"
                  defaultChecked={idx === 0}
                  className={"absolute inset-0"}
              />
              <div className="collapse-title lg:text-sm text-xs flex gap-4 items-center">
                <i className="off">
                  <ArrowSquareDownWhiteIcon/>
                </i>
                <i className="on">
                  <ArrowSquareDownDarkIcon/>
                </i>
                {item.title}
              </div>
              <div className="collapse-content">
                <p className="lg:text-sx text-xs"> {item.content} </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Demo;

const data = [
  {
    title: "باینکس چیست؟",
    content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  و برای شرایط فعلی تکنولوژی مورد نیاز  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  و برای شرایط فعلی تکنولوژی مورد نیاز  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
  {
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  و برای شرایط فعلی تکنولوژی مورد نیاز  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
  },
];
