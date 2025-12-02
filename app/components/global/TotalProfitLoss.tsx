import React from "react";
import Caption from "./Caption";
import UpDownBtn from "./UpDownBtn";

function TotalProfitLoss() {
  return (
      <div className="lg:w-fit w-full mr-auto gap-4">
        <div className="bg-dark800 rounded-2xl py-3 px-4 w-full flex items-center justify-between">
          <Caption className="text-white text-sm">{"سود و زیان کل:"}</Caption>
          <UpDownBtn showIcon arrow>
            {"+1.05%"}
          </UpDownBtn>
        </div>
      </div>
  );
}

export default TotalProfitLoss;
