import { defaultLocale } from "@/constants";
import Link from "next/link";
import { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  lang: string;
  children: ReactNode;
  [key: string]: any;
};

export default function CustomLink({ href, lang, ...props }: CustomLinkProps) {
  const isDefaultLocale = lang === defaultLocale;
  const path = isDefaultLocale ? href : `/${lang}${href}`;

  return <Link href={path} {...props} />;
}
