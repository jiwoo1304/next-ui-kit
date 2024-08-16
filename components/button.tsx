import React, { ReactNode } from "react";

export enum roundedEnum {
  sm = "2px",
  md = "4px",
  lg = "6px",
  full = "2000px",
}

export enum colorSet {
  min = "#1dbc92",
  b = "#1dc753",
  // main = "#ace154",
  // main = "#f2ea8c",
  // main = "#f8efbb",
}

interface Props {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  bgOpacity?: string;
  rounded?: string;
}

const Button: React.FC<Props> = ({
  children,
  bgColor,
  paddingX,
  paddingY,
  bgOpacity,
  rounded,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor,
        opacity: bgOpacity,
        paddingBlock: paddingY,
        paddingInline: paddingX,
        borderRadius: rounded,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
