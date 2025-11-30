"use client";

import AccountCart, {
  TAccountCart,
} from "@/app/components/dashboard/account/AccountCart";
import AccountManagement from "@/app/components/dashboard/account/AccountManagement";
import React, { useEffect, useState } from "react";

type TAccountsProps = {};
function Accounts({}: TAccountsProps) {
  const [cards, setCards] = useState<TAccountCart[]>([]);

  const changeDefault = (cardId: number) => {
    setCards(
      cards.map((c) => {
        return { ...c, isDefault: c.rec_id === cardId };
      })
    );
  };

  const changeActive = (cardId: number, isActive: boolean) => {
    const prev = cards.find((q) => q.rec_id === cardId);
    if (prev)
      setCards((oldCards) => {
        return oldCards.map((c) => {
          return c.rec_id === cardId ? { ...c, isActive } : c;
        });
      });
  };

  useEffect(() => {
    setCards(allCards);
  }, []);
  return (
    <>
      <div className="grid grid-cols-9 gap-4 m-4">
        <div className="lg:col-span-4 col-span-9">
          <AccountManagement />
        </div>
        <div className="lg:col-span-5 col-span-9">
          <div className="bg-white rounded-2xl flex flex-col gap-4  px-4 py-4">
            {cards.map((card) => {
              return (
                <AccountCart
                  {...card}
                  onSetDefault={changeDefault}
                  changeActive={changeActive}
                  key={card.rec_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;

const allCards = [
  {
    rec_id: 1,
    bank: "بانک سپه",
    src: "/img/binex-cart/cart.png",
    srcBank: "/img/bank.png",
    shaba: "IR960560611828005370635201",
    owner: "رضا رزاقی",
    title: "بلو باینکس",
    isActive: true,
    isDefault: true,
  },
  {
    rec_id: 2,
    bank: "بانک بلو",
    src: "/img/binex-cart/cart.png",
    srcBank: "/img/bank.png",
    shaba: "IR960560611828005370635201",
    owner: "رضا رزاقی",
    title: "سپه باینکس",
    isActive: false,
    isDefault: false,
  },
  {
    rec_id: 3,
    bank: "بانک بلو",
    src: "/img/binex-cart/cart-green.png",
    srcBank: "/img/bank.png",
    shaba: "IR960560611828005370635201",
    owner: "رضا رزاقی",
    title: "سپه باینکس",
    isActive: false,
    isDefault: false,
  },
];
