export type Currency = {
  id: number;
  name: string;
  name_fa: string;
  logo: string;
};

export type Exchange = {
  id: number;
  name: string;
  name_fa: string;
};

export type Robot = {
  id: number;
  name: string;
  name_fa: string;
  image: string;
  
};
export type Order = {
  currency: Currency;
  exchange: Exchange;
  date: Date;
  start_price: number;
  position: "Buy" | "Sell";
  trade_start_price: number;
  robot: Robot;
  timeframe: string;
};
export const getOrders = async (): Promise<Order[]> => {
  return [
    {
      currency: {
        id: 1,
        name: "BTC",
        name_fa: "بیتکوین",
        logo: "/img/cryptocurrency/3.png",
      },
      exchange: {
        id: 1,
        name: "Binance",
        name_fa: "بایننس",
      },
      date: new Date(2025, 1, 2, 20, 36, 50),
      start_price: Math.ceil(Math.random() * 100000) / 100,
      position: "Buy",
      trade_start_price: Math.ceil(Math.random() * 100000) / 100 - 10,
      robot: {
        id: 1,
        name: "Neuron",
        name_fa: "نورون",
        image: "/img/robots/NEURON.png",
      },
      timeframe: "24h",
    },
    {
      currency: {
        id: 2,
        name: "ETH",
        name_fa: "اتریوم",
        logo: "/img/cryptocurrency/ETH.svg",
      },
      exchange: {
        id: 1,
        name: "Kucoin",
        name_fa: "کوکوین",
      },
      date: new Date(2024, 12, 4, 9, 36, 50),
      start_price: (Math.ceil(Math.random() * 100000) / 100) * -1,
      position: "Sell",
      trade_start_price: (Math.ceil(Math.random() * 100000) / 100) * -1 - 10,
      robot: {
        id: 8,
        name: "Spark",
        name_fa: "اسپارک",
        image: "/img/robots/SPARK.png",
      },
      timeframe: "12h",
    },
  ];
};
