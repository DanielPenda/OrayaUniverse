import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Gift, Home, ListOrdered, ShoppingBag } from './icons';

export function BottomNav() {
  const { itemCount, openCart } = useCart();
  const { t } = useLanguage();
  const links = [
    { href: '#home', label: t('navHome'), icon: Home },
    { href: '#menu', label: t('navMenu'), icon: ListOrdered },
    { href: '#boxes', label: t('navBoxes'), icon: Gift },
    { href: '#cart', label: t('navCart'), icon: ShoppingBag },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-orange-100 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 shadow-soft backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-1">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            onClick={(event) => {
              if (href === '#cart') {
                event.preventDefault();
                openCart();
              }
            }}
            className="relative flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.72rem] font-black text-truffle/75 active:bg-orange-50"
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
            {href === '#cart' && itemCount > 0 ? (
              <span className="absolute right-5 top-1 grid h-5 min-w-5 place-items-center rounded-full bg-caramel px-1 text-[0.65rem] text-white">
                {itemCount}
              </span>
            ) : null}
          </a>
        ))}
      </div>
    </nav>
  );
}
