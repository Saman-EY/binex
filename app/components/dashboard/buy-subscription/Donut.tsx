"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ScriptableContext,
  Color,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type TProps = {
  data: [number, number];
};
export function Donut({ data }: TProps) {
  return (
    // @ts-ignore
    <Doughnut
      width={200}
      height={200}
      data={{
        labels: [],

        datasets: [
          {
            label: "اشتراک",
            data,
            cutout: ["70%", "70%"],
            // @ts-ignore
            backgroundColor: (context: ScriptableContext<"doughnut">) => {
              const ctx = context.chart.ctx;
              let g1 = "rgb(10, 67, 89)"
              let g2 = "rgb(90, 155, 161)"
              if(data[0] < 16){
                g1 = "rgb(235, 88 , 83)"
                g2 = "rgb(161, 90, 90)"
              }
              const gradient = ctx.createLinearGradient(120, 20, 0, 250);
              gradient.addColorStop(0, g1);
              gradient.addColorStop(1, g2);
              return [gradient, "#7774"];
            },
            borderRadius: [8, 8],
          },
        ],
      }}
      options={{
        hover: {},
        offset: 0,

        plugins: {
          tooltip: {
            enabled: false,
          },
        },
      }}
    />
  );
}
