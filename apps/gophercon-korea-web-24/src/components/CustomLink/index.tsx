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
  [key: string]: any;
};

export default function CustomLink({ href, locale, style, ...props }: CustomLinkProps) {
  const isDefaultLocale = locale === defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;

  return <StyledLink href={path} {...props}></StyledLink>;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
