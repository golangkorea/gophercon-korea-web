import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  direction?: "column" | "row";
  justify?: string;
  align?: string;
  gap?: number;
  width?: string;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  height?: string | number;
}

export const Flex = (props: FlexProps) => {
  const {
    children,
    direction = "column",
    justify = "center",
    align = "center",
    gap = 0,
    width = "100%",
    wrap = "nowrap",
    height = "auto",
  } = props;

  return (
    <div
      style={{
        display: "flex",
        height,
        width,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
};
