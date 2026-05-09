import { Suspense } from "react";
import DarkModeButton from "./DarkModeButton";
import Menu from "./Menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./header.module.scss";
import { getDictionary } from "@/messages";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
};

const Header = ({ locale }: HeaderProps) => {
  const { nav, languageSwitcher } = getDictionary(locale);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menuWrapper}>
          <Menu locale={locale} labels={nav} />
        </div>
      </div>
      <div className={styles.actions}>
        <Suspense fallback={null}>
          <LanguageSwitcher locale={locale} labels={languageSwitcher} />
        </Suspense>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header; 
