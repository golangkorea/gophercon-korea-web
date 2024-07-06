import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  radius?: number;
  bgColor?: string;
  width?: string;
  height?: string;
  cursor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Container = ({
  padding = "0px",
  width = "auto",
  height = "auto",
  radius = 0,
  cursor = "auto",
  bgColor = "white",
  children,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding,
        width,
        height,
        borderRadius: radius,
        cursor,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};
