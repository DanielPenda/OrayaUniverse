import { BRAND } from '../config/brand';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const { t } = useLanguage();
  const logoSrc = `${import.meta.env.BASE_URL}OrayaIcones/oraya-logo-horizontal.svg`;
  const links = [
    { href: '#menu', label: t('navMenu') },
    { href: '#boxes', label: t('navBoxes') },
    { href: '#custom-orders', label: t('navCustom') },
    { href: '#contact', label: t('navContact') },
  ];

  function scrollHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-orange-100/80 bg-[#fffaed]/95 px-4 py-2 shadow-[0_10px_30px_rgba(58,36,23,0.08)] backdrop-blur sm:px-6 md:py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <button
          type="button"
          onClick={scrollHome}
          className="flex min-w-0 items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaed]"
          aria-label={`${BRAND.name} home`}
        >
          <img
            src={logoSrc}
            alt={BRAND.name}
            className="h-9 w-auto sm:h-10 md:h-12"
          />
        </button>

        <nav className="hidden items-center gap-6 text-sm font-bold text-truffle/80 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cocoa">
              {link.label}
            </a>
          ))}
          <LanguageToggle />
        </nav>

        <div className="md:hidden">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
