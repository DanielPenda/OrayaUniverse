import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import type { ComboBox } from '../types';
import { formatMoney } from '../utils/money';
import { Check, Plus } from './icons';

export function ComboCard({ combo }: { combo: ComboBox }) {
  const [isFlying, setFlying] = useState(false);
  const { addItem } = useCart();
  const { comboText, t } = useLanguage();
  const copy = comboText(combo);

  function handleAdd() {
    addItem({
      itemId: combo.id,
      kind: 'combo',
      name: copy.name,
      unitPrice: combo.price,
      image: combo.image,
      quantity: 1,
    });
    setFlying(true);
    window.setTimeout(() => setFlying(false), 760);
  }

  return (
    <article className="food-card relative overflow-hidden rounded-2xl bg-white text-cocoa shadow-soft">
      {isFlying ? <span className="fly-dot absolute right-7 top-7 z-20 h-4 w-4 rounded-full bg-honey" /> : null}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={combo.image} alt={copy.name} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-honey px-3 py-1 text-xs font-black text-cocoa">
          {t('bestValue')}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-black">{copy.name}</h3>
            <p className="mt-1 text-sm leading-6 text-truffle/70">{copy.description}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-black text-caramel">{formatMoney(combo.price)}</p>
        </div>
        <ul className="mt-4 grid gap-2">
          {copy.contents.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-semibold text-truffle/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-caramel" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleAdd}
          className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-caramel px-4 text-sm font-black text-white shadow-lift transition active:scale-95"
        >
          <Plus className="h-4 w-4" />
          {t('addToCart')}
        </button>
      </div>
    </article>
  );
}
