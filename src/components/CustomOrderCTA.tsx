import { useLanguage } from '../context/LanguageContext';
import { buildCustomOrderMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle } from './icons';

export function CustomOrderCTA() {
  const { language, t } = useLanguage();

  return (
    <section id="custom-orders" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-caramel p-6 text-white shadow-lift md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cream">{t('customEyebrow')}</p>
          <h2 className="mt-2 text-3xl font-black">{t('customTitle')}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/90">
            {t('customCopy')}
          </p>
        </div>
        <a
          href={buildWhatsAppUrl(buildCustomOrderMessage(language))}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-cocoa shadow-soft transition active:scale-95"
        >
          <MessageCircle className="h-5 w-5" />
          {t('customCta')}
        </a>
      </div>
    </section>
  );
}
