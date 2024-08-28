"use client";

import { defaultLocale, locales } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = locales.every(
      (locale: string) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
      if (locale === defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }
    }

    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className='flex gap-x-3'>
      {locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        );
      })}
    </ul>
  );
}
