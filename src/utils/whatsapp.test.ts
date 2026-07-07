import { describe, expect, it } from 'vitest';
import type { CartItem } from '../types';
import { buildOrderMessage, buildWhatsAppUrl } from './whatsapp';

describe('WhatsApp ordering utilities', () => {
  it('builds a variant-aware order summary with totals', () => {
    const items: CartItem[] = [
      {
        key: 'product:mini-pastels:10',
        itemId: 'mini-pastels',
        kind: 'product',
        name: 'Mini Pastels',
        variantId: '10',
        variantLabel: 'Small',
        pieceCount: 10,
        unitPrice: 2500,
        quantity: 2,
        image: '/pastels.jpg',
      },
      {
        key: 'product:vanilla-cupcakes:6',
        itemId: 'vanilla-cupcakes',
        kind: 'product',
        name: 'Vanilla Cupcakes',
        variantId: '6',
        variantLabel: 'Half dozen',
        pieceCount: 6,
        unitPrice: 4000,
        quantity: 1,
        image: '/cupcakes.jpg',
      },
    ];

    expect(buildOrderMessage(items, 9000)).toContain('• 2 × Mini Pastels (10 pcs) = 5,000 FCFA');
    expect(buildOrderMessage(items, 9000)).toContain('Total:\n9,000 FCFA');
  });

  it('url-encodes the message for wa.me', () => {
    const url = buildWhatsAppUrl('Hello ORAYA UNIVERSE\nTotal: 9,000 FCFA', '237691059694');

    expect(url).toBe(
      'https://wa.me/237691059694?text=Hello%20ORAYA%20UNIVERSE%0ATotal%3A%209%2C000%20FCFA',
    );
  });

  it('builds a French order summary when requested', () => {
    const items: CartItem[] = [
      {
        key: 'product:beef-pastels:small-10',
        itemId: 'beef-pastels',
        kind: 'product',
        name: 'Pastels au boeuf',
        variantId: 'small-10',
        variantLabel: 'Petit',
        pieceCount: 10,
        unitPrice: 2500,
        quantity: 2,
        image: '/pastels.jpg',
      },
    ];

    const message = buildOrderMessage(items, 5000, 'fr');

    expect(message).toContain('Bonjour ORAYA UNIVERSE');
    expect(message).toContain('Je souhaite passer une commande :');
    expect(message).toContain('• 2 × Pastels au boeuf (10 pcs) = 5,000 FCFA');
    expect(message).toContain('Total :\n5,000 FCFA');
  });
});
