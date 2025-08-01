import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SeoProps {
  title?: string;
  description?: string;
}

const Seo = ({ title, description }: SeoProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const defaultTitle = "GopherCon Korea 2025";
  const defaultDescription =
    lang === "ko"
      ? "Go 언어 사용자들의 국내 최대 규모 연례 컨퍼런스, GopherCon Korea 2025"
      : "The largest annual conference for Go language users in South Korea, GopherCon Korea 2025";

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name='description' content={pageDescription} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={pageDescription} />
    </Helmet>
  );
};

export default Seo;
