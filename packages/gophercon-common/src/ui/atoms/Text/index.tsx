import React, { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "normal" | "bold" | "bolder" | "lighter";

interface BaseTextProps {
  size?: number;
  weight?: FontWeight;
  children: ReactNode;
  spacing?: number;
  font?: string;
  cursor?: string;
  lineHeight?: string;
  align?: React.CSSProperties["textAlign"];
  margin?: string;
  whiteSpace?: React.CSSProperties["whiteSpace"];
  color?: string;
}

type TextProps<T extends ElementType> = BaseTextProps &
  Omit<ComponentPropsWithRef<T>, keyof BaseTextProps> & {
    as?: T;
  };

export const Text = <T extends ElementType = "span">({
  as,
  size = 18,
  children,
  weight = "normal",
  color = "black",
  spacing = 0,
  lineHeight = "normal",
  font = "pretendard",
  cursor = "auto",
  whiteSpace = "pre-wrap",
  align = "left",
  margin = "0px",
  ...props
}: TextProps<T>) => {
  const CustomTag = as || "span";

  return (
    <CustomTag
      className='text'
      style={{
        fontSize: size,
        fontWeight: weight,
        color,
        cursor,
        letterSpacing: spacing,
        lineHeight,
        whiteSpace,
        fontFamily: font,
        textAlign: align,
        margin,
      }}
      {...props}
    >
      {children}
    </CustomTag>
  );
};
