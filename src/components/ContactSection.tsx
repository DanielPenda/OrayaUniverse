import { BRAND } from '../config/brand';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, MapPin, Phone, Send, Video } from './icons';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-caramel">{t('contactEyebrow')}</p>
          <h2 className="mt-1 text-3xl font-black text-cocoa">{t('contactTitle')}</h2>
          <div className="mt-6 grid gap-3">
            <a href={BRAND.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-black text-cocoa shadow-soft">
              <Phone className="h-5 w-5 text-caramel" />
              {BRAND.phoneDisplay}
            </a>
            <div className="rounded-2xl bg-white p-4 shadow-soft">
              <div className="mb-2 flex items-center gap-3 font-black text-cocoa">
                <MapPin className="h-5 w-5 text-caramel" />
                {BRAND.location}
              </div>
              {BRAND.hours.map((item) => (
                <p key={item} className="text-sm leading-6 text-truffle/75">{item}</p>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="grid h-12 place-items-center rounded-2xl bg-white text-cocoa shadow-soft" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="grid h-12 place-items-center rounded-2xl bg-white text-cocoa shadow-soft" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={BRAND.tiktok} target="_blank" rel="noreferrer" className="grid h-12 place-items-center rounded-2xl bg-white text-cocoa shadow-soft" aria-label="TikTok">
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <iframe
            title="ORAYA UNIVERSE location map"
            src={BRAND.mapEmbed}
            loading="lazy"
            className="h-80 w-full border-0 md:h-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={BRAND.phoneHref}
            className="flex items-center justify-center gap-2 border-t border-orange-100 p-4 text-sm font-black text-caramel"
          >
            <Send className="h-4 w-4" />
            {t('contactCall')}
          </a>
        </div>
      </div>
    </section>
  );
}
