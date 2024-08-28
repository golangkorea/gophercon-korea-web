import { LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { defaultLocale } from "@/constants";
import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  locale: LocaleType;
  children: ReactNode;
  [key: string]: any;
};

export default function CustomLink({ href, locale, ...props }: CustomLinkProps) {
  const isDefaultLocale = locale === defaultLocale;
  const path = isDefaultLocale ? href : `/${locale}${href}`;

  return <Link href={path} {...props} />;
}
