import { useLanguage } from '../context/LanguageContext';
import { comboBoxes, products } from '../data/products';
import { ComboCard } from './ComboCard';
import { ProductCard } from './ProductCard';

export function MenuSection() {
  const { t } = useLanguage();

  return (
    <>
      <section id="menu" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-caramel">{t('menuEyebrow')}</p>
          <h2 className="mt-1 text-3xl font-black text-cocoa">{t('menuTitle')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-truffle/75">
            {t('menuCopy')}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="boxes" className="bg-cocoa py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-honey">{t('boxesEyebrow')}</p>
              <h2 className="mt-1 text-3xl font-black">{t('boxesTitle')}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-cream/80">
                {t('boxesCopy')}
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {comboBoxes.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
