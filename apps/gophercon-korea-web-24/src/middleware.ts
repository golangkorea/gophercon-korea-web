import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";
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
    const imageFilePattern = /\.(png|svg|jpe?g|gif|webp)$/i;
    return imageFilePattern.test(fileName);
  };

  if (isImageFile(pathname)) return NextResponse.next();

  const pathnameHasLocale = Array.from(locales).some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  if (pathnameHasLocale) {
    const response = NextResponse.next();
    response.headers.set("device-type", viewport);
    return response;
  }

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  if (locale === defaultLocale) {
    const response = NextResponse.rewrite(request.nextUrl);
    response.headers.set("device-type", viewport);
    return response;
  }

  // 그 외 로케일의 경우, 해당 로케일로 리디렉션

  const response = NextResponse.redirect(request.nextUrl);
  response.headers.set("device-type", viewport);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
