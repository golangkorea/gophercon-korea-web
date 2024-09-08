import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { defaultLocale } from "./constants";

const locales = new Set(["ko", "en"]);

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    const preferredLanguages = acceptLanguage.split(",").map((lang) => {
      return lang.split(";")[0];
    });

    for (const lang of preferredLanguages) {
      if (locales.has(lang)) {
        return lang;
      }
    }
  }

  return "ko"; // 기본 로케일을 'ko'로 설정
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isImageFile = (fileName: string): boolean => {
    // 정규 표현식으로 .png, .svg, .jpg, .jpeg, .gif 파일 확장자 검사
    const imageFilePattern = /\.(png|svg|jpe?g|gif)$/i;
    return imageFilePattern.test(fileName);
  };

  if (isImageFile(pathname)) return NextResponse.next();

  const pathnameHasLocale = Array.from(locales).some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  if (locale === defaultLocale) return NextResponse.rewrite(request.nextUrl);

  // 그 외 로케일의 경우, 해당 로케일로 리디렉션

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
