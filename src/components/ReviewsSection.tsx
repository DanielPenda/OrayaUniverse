import { useLanguage } from '../context/LanguageContext';
import { reviewCopy } from '../i18n';
import { Star } from './icons';

export function ReviewsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-caramel">{t('reviewsEyebrow')}</p>
        <h2 className="mt-1 text-3xl font-black text-cocoa">{t('reviewsTitle')}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {reviewCopy.map((review) => (
          <article key={review.name} className="rounded-2xl bg-white p-5 shadow-soft">
            <div className="mb-3 flex gap-1 text-honey">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-6 text-truffle/75">{review[language]}</p>
            <p className="mt-4 text-sm font-black text-cocoa">{review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
