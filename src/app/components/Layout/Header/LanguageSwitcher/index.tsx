"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n/config";
import styles from "./language-switcher.module.scss";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    label: string;
    nextLocale: string;
  };
};

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const nextLocale = locale === "pt" ? "en" : "pt";

  const handleSwitch = () => {
    const query = searchParams.toString();
    const hash = window.location.hash;
    const localizedPath = pathname.replace(/^\/(pt|en)(?=\/|$)/, `/${nextLocale}`);
    const targetPath = `${localizedPath}${query ? `?${query}` : ""}${hash}`;

    document.cookie = `preferred-locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(targetPath);
  };

  return (
    <button
      type="button"
      className={styles.switcher}
      aria-label={labels.label}
      onClick={handleSwitch}
    >
      {labels.nextLocale}
    </button>
  );
}
