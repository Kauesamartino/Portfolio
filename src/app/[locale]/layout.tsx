import { notFound } from "next/navigation";
import Header from "@/app/components/Layout/Header";
import { LocaleHtmlSync } from "@/app/components/LocaleHtmlSync";
import { isLocale, locales } from "@/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <LocaleHtmlSync locale={locale} />
      <Header locale={locale} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );
}
