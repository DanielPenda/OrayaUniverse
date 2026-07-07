import { useMemo, useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import type { Product, ProductVariant } from '../types';
import { formatMoney } from '../utils/money';
import { ImageGallery } from './ImageGallery';
import { Minus, Plus, ZoomIn } from './icons';

export function ProductCard({ product }: { product: Product }) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0]?.id);
  const [quantity, setQuantity] = useState(0);
  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [isFlying, setFlying] = useState(false);
  const { addItem } = useCart();
  const { productText, t, variantText } = useLanguage();

  const variant = useMemo<ProductVariant>(
    () => product.variants.find((item) => item.id === selectedVariantId) ?? product.variants[0],
    [product.variants, selectedVariantId],
  );
  const copy = productText(product);

  function handleAdd() {
    if (!variant || quantity <= 0) {
      return;
    }

    addItem({
      itemId: product.id,
      kind: 'product',
      name: copy.name,
      variantId: variant.id,
      variantLabel: variantText(product, variant),
      pieceCount: variant.pieceCount,
      unitPrice: variant.price,
      quantity,
      image: product.images[0],
    });
    setQuantity(0);
    setFlying(true);
    window.setTimeout(() => setFlying(false), 760);
  }

  return (
    <article className="food-card relative overflow-hidden rounded-2xl bg-white shadow-soft">
      {isFlying ? <span className="fly-dot absolute right-7 top-7 z-20 h-4 w-4 rounded-full bg-caramel" /> : null}
      <button
        type="button"
        onClick={() => setGalleryOpen(true)}
        className="group relative aspect-[4/3] w-full overflow-hidden"
        aria-label={`${t('galleryOpen')}: ${copy.name}`}
      >
        <img
          src={product.images[0]}
          alt={copy.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-cocoa shadow-soft">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-cocoa">{copy.name}</h3>
            <p className="mt-1 text-sm leading-6 text-truffle/70">{copy.description}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-black text-caramel">{formatMoney(variant.price)}</p>
        </div>

        <div className="mt-4 grid gap-2">
          {product.variants.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedVariantId(item.id)}
              className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${
                selectedVariantId === item.id
                  ? 'border-caramel bg-orange-50 text-cocoa'
                  : 'border-orange-100 bg-linen text-truffle/75'
              }`}
            >
              <span className="font-black">
                {variantText(product, item)}
                {item.pieceCount ? <span className="font-semibold"> - {item.pieceCount} pcs</span> : null}
              </span>
              <span className="font-black">{formatMoney(item.price)}</span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-12 grid-cols-[2.75rem_2.75rem_2.75rem] overflow-hidden rounded-full border border-orange-100 bg-linen">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(0, value - 1))}
              className="grid place-items-center text-cocoa active:bg-orange-100"
              aria-label={`${t('decrease')} ${copy.name}`}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="grid place-items-center text-sm font-black">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((value) => value + 1)}
              className="grid place-items-center text-cocoa active:bg-orange-100"
              aria-label={`${t('increase')} ${copy.name}`}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            disabled={quantity === 0}
            className="h-12 flex-1 rounded-full bg-caramel px-4 text-sm font-black text-white shadow-lift transition active:scale-95 disabled:cursor-not-allowed disabled:bg-orange-200 disabled:shadow-none"
          >
            {t('addToCart')}
          </button>
        </div>
      </div>

      <ImageGallery
        title={copy.name}
        images={product.images}
        isOpen={isGalleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </article>
  );
}
