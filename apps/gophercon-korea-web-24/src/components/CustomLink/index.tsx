import { LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { defaultLocale } from "@/constants";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  locale: LocaleType;
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const CustomLink: React.FC<CustomLinkProps> = ({ href, locale, className, ...props }: CustomLinkProps) => {
  const isDefaultLocale = locale === defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;

  return <StyledLink className={className} href={path} {...props}></StyledLink>;
};

export default CustomLink;
