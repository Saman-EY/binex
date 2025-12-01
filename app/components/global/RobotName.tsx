"use clinet";
import clsx from "clsx";
import React from "react";
export type TRobtName = React.HTMLAttributes<React.ReactHTMLElement<HTMLDivElement>> & {
  parentClassName?: string;
  onClick?: (e?: React.MouseEvent) => void;
};
function RobotName({ children, parentClassName = "", onClick }: TRobtName) {
  return <div onClick={onClick} className={clsx(parentClassName, "flex items-center justify-center")}>{children}</div>;
}

export default RobotName;
