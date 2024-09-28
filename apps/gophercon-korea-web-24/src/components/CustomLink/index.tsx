import { LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { defaultLocale } from "@/constants";
import Link from "next/link";
import { ReactNode } from "react";
import { LinkStyledProps } from "../Header";
import styled from "@emotion/styled";

type CustomLinkProps = {
  href: string;
  locale: LocaleType;
  style?: LinkStyledProps;
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  [key: string]: any;
};

export default function CustomLink({
  href,
  locale,
  style,
  color = "#000000",
  fontSize = 20,
  fontWeight = 700,
  ...props
}: CustomLinkProps) {
  const isDefaultLocale = locale === defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;

  return <StyledLink fontWeight={fontWeight} href={path} color={color} fontSize={fontSize} {...props} />;
}

const StyledLink = styled(Link)<{ color: string; fontSize: number; fontWeight: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
