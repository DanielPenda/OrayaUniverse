import { BRAND } from '../config/brand';
import { translations, type Language } from '../i18n';
import type { CartItem } from '../types';
import { formatMoney } from './money';

export function buildOrderMessage(items: CartItem[], total: number, language: Language = 'en'): string {
  const copy = translations[language];
  const lines = items.map((item) => {
    const variant = item.variantLabel
      ? ` (${item.pieceCount ? `${item.pieceCount} pcs` : item.variantLabel})`
      : '';
    const lineTotal = item.unitPrice * item.quantity;

    return `• ${item.quantity} × ${item.name}${variant} = ${formatMoney(lineTotal)}`;
  });

  return [
    copy.orderGreeting,
    '',
    copy.orderIntent,
    '',
    ...lines,
    '',
    copy.orderTotal,
    formatMoney(total),
    '',
    copy.orderThanks,
  ].join('\n');
}

export function buildCustomOrderMessage(language: Language = 'en'): string {
  return translations[language].customMessage;
}

export function buildGeneralWhatsAppMessage(language: Language = 'en'): string {
  return translations[language].generalMessage;
}

export function buildWhatsAppUrl(message: string, phoneNumber = BRAND.whatsappNumber): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
