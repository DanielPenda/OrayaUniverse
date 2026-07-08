import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import { ArrowDown, CheckCircle2, MessageCircle } from './icons';

export function Hero() {
  const heroImages = products.filter((product) => product.featured).slice(0, 3);
  const { productText, t } = useLanguage();

  return (
    <header id="home" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[88svh] max-w-6xl items-center gap-8 px-4 pb-12 pt-24 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:pb-16 md:pt-28">
        <div className="relative z-10">
          <p className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-caramel shadow-soft">
            {t('heroEyebrow')}
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            ORAYA UNIVERSE
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-truffle/80 sm:text-lg">
            {t('heroTagline')}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-bold text-truffle sm:flex sm:flex-wrap">
            {[
              t('heroTrustHomemade'),
              t('heroTrustQuick'),
              t('heroTrustWhatsApp'),
              t('heroTrustCustom'),
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-soft">
                <CheckCircle2 className="h-4 w-4 text-caramel" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-4 text-sm font-black text-white shadow-lift transition active:scale-95"
            >
              {t('heroCta')}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-cocoa shadow-soft transition active:scale-95"
            >
              {t('heroQuestion')}
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_0.74fr] gap-3">
          <img
            src={heroImages[0]?.images[0]}
            alt={t('heroImageAlt')}
            className="h-[22rem] w-full rounded-[2rem] object-cover shadow-soft sm:h-[30rem]"
            fetchPriority="high"
          />
          <div className="grid gap-3">
            {heroImages.slice(1).map((product) => (
              <img
                key={product.id}
                src={product.images[0]}
                alt={productText(product).name}
                className="h-full min-h-0 rounded-[1.5rem] object-cover shadow-soft"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
