import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatMoney } from '../utils/money';
import { buildOrderMessage, buildWhatsAppUrl } from '../utils/whatsapp';
import { Minus, Plus, ShoppingBag, Trash2 } from './icons';

export function FloatingCart() {
  const {
    items,
    itemCount,
    total,
    lastUpdatedKey,
    isCartOpen,
    incrementItem,
    decrementItem,
    removeItem,
    openCart,
    closeCart,
  } = useCart();
  const { language, t } = useLanguage();
  const [isPulsing, setPulsing] = useState(false);

  useEffect(() => {
    if (!lastUpdatedKey) {
      return;
    }
    setPulsing(true);
    const timeoutId = window.setTimeout(() => setPulsing(false), 460);
    return () => window.clearTimeout(timeoutId);
  }, [lastUpdatedKey]);

  const orderHref = itemCount > 0 ? buildWhatsAppUrl(buildOrderMessage(items, total, language)) : '#menu';

  return (
    <>
      <div className="fixed inset-x-0 bottom-[4.9rem] z-40 px-3 pb-[env(safe-area-inset-bottom)] md:bottom-4 md:px-6">
        <div
          className={`mx-auto flex max-w-3xl items-center gap-3 rounded-full bg-cocoa p-2 text-white shadow-soft ${
            isPulsing ? 'cart-pulse' : ''
          }`}
        >
          <button
            type="button"
            onClick={openCart}
            className="flex min-w-0 flex-1 items-center gap-3 rounded-full px-3 py-2 text-left active:bg-white/10"
            aria-label={t('openCart')}
          >
            <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-caramel">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 ? (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-honey px-1 text-[0.68rem] font-black text-cocoa">
                  {itemCount}
                </span>
              ) : null}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-white/65">{t('cartTotal')}</span>
              <span className="block truncate text-sm font-black">{formatMoney(total)}</span>
            </span>
          </button>
          <a
            href={orderHref}
            target={itemCount > 0 ? '_blank' : undefined}
            rel={itemCount > 0 ? 'noreferrer' : undefined}
            className={`inline-flex h-12 shrink-0 items-center justify-center rounded-full px-4 text-sm font-black transition active:scale-95 ${
              itemCount > 0 ? 'bg-caramel text-white shadow-lift' : 'bg-white/15 text-white/70'
            }`}
          >
            {t('orderWhatsApp')}
          </a>
        </div>
      </div>

      {isCartOpen ? (
        <div className="fixed inset-0 z-50 bg-cocoa/40 backdrop-blur-sm" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 h-full w-full"
            aria-label={t('closeCart')}
            onClick={closeCart}
          />
          <aside className="absolute inset-x-0 bottom-0 max-h-[86svh] overflow-hidden rounded-t-[2rem] bg-linen shadow-soft md:left-auto md:right-6 md:top-6 md:h-[calc(100svh-3rem)] md:w-[28rem] md:rounded-2xl">
            <div className="flex items-center justify-between border-b border-orange-100 p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-caramel">{t('cartReview')}</p>
                <h2 className="text-xl font-black text-cocoa">{t('cartTitle')}</h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full bg-white px-4 py-2 text-sm font-black text-cocoa shadow-soft"
              >
                {t('cartDone')}
              </button>
            </div>
            <div className="max-h-[56svh] overflow-y-auto p-5 md:max-h-[calc(100svh-16rem)]">
              {items.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-orange-200 bg-white p-6 text-center">
                  <ShoppingBag className="mx-auto h-8 w-8 text-caramel" />
                  <p className="mt-3 text-sm font-bold text-truffle/75">{t('cartEmpty')}</p>
                </div>
              ) : (
                <div className="grid gap-3">
                  {items.map((item) => (
                    <article key={item.key} className="grid grid-cols-[4.5rem_1fr] gap-3 rounded-2xl bg-white p-3 shadow-soft">
                      <img src={item.image} alt={item.name} className="h-20 w-full rounded-xl object-cover" />
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-black text-cocoa">{item.name}</h3>
                            <p className="text-xs font-semibold text-truffle/65">
                              {item.pieceCount ? `${item.pieceCount} pcs` : item.variantLabel ?? t('comboLabel')}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.key)}
                            className="grid h-8 w-8 place-items-center rounded-full bg-orange-50 text-caramel"
                            aria-label={`${t('remove')} ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="grid h-9 grid-cols-3 overflow-hidden rounded-full border border-orange-100">
                            <button
                              type="button"
                              onClick={() => decrementItem(item.key)}
                              className="grid w-9 place-items-center"
                              aria-label={`${t('decrease')} ${item.name}`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="grid w-9 place-items-center text-sm font-black">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => incrementItem(item.key)}
                              className="grid w-9 place-items-center"
                              aria-label={`${t('increase')} ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-black text-cocoa">
                            {formatMoney(item.quantity * item.unitPrice)}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-orange-100 bg-white p-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="font-bold text-truffle/70">{itemCount} {t('itemsLabel')}</span>
                <span className="text-lg font-black text-cocoa">{formatMoney(total)}</span>
              </div>
              <a
                href={orderHref}
                target={itemCount > 0 ? '_blank' : undefined}
                rel={itemCount > 0 ? 'noreferrer' : undefined}
                className={`inline-flex h-14 w-full items-center justify-center rounded-full px-5 py-4 text-sm font-black transition active:scale-95 ${
                  itemCount > 0 ? 'bg-caramel text-white shadow-lift' : 'bg-orange-100 text-truffle/60'
                }`}
              >
                {t('orderWhatsApp')}
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
