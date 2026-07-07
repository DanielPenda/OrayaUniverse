import { useLanguage } from '../context/LanguageContext';
import { buildGeneralWhatsAppMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle } from './icons';

export function WhatsAppFloatingButton() {
  const { language, t } = useLanguage();

  return (
    <a
      href={buildWhatsAppUrl(buildGeneralWhatsAppMessage(language))}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[10.4rem] right-3 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lift transition active:scale-95 md:bottom-24 md:right-6"
      aria-label={t('whatsappAsk')}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
