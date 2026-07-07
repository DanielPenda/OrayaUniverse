import { useLanguage } from '../context/LanguageContext';
import { categories } from '../data/products';

export function CategoryGrid() {
  const { categoryText, t } = useLanguage();

  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-caramel">{t('browseEyebrow')}</p>
          <h2 className="mt-1 text-2xl font-black text-cocoa sm:text-3xl">{t('browseTitle')}</h2>
        </div>
        <a href="#menu" className="hidden text-sm font-black text-caramel sm:inline">
          {t('browseViewMenu')}
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
        {categories.map((category) => {
          const copy = categoryText(category);

          return (
            <a
              key={category.id}
              href={`#${category.target}`}
              className="food-card overflow-hidden rounded-2xl bg-white shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={copy.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-black text-cocoa">{copy.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-truffle/70">{copy.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
