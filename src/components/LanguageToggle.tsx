import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { languageName, nextLanguageLabel, t, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-xs font-black text-cocoa shadow-soft transition active:scale-95"
      aria-label={`${t('languageLabel')}: ${languageName}`}
      title={`${t('languageLabel')}: ${languageName}`}
    >
      {nextLanguageLabel}
    </button>
  );
}
