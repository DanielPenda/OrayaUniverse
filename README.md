# ORAYA UNIVERSE

Mobile-first WhatsApp ordering assistant for homemade food, sweets, combo boxes and custom event orders. Customers browse the menu, build a cart and send a pre-filled order to WhatsApp in one tap.

## Run locally

```bash
npm install
npm run dev
```

Build and test:

```bash
npm run build
npm run test
```

## Update products and prices

Edit `src/data/products.ts`.

- `categories` controls the tappable category grid.
- `products` controls product cards, galleries and variant pricing.
- `comboBoxes` controls flat-price combo cards.

Each product follows this shape:

```ts
{
  id: 'beef-pastels',
  name: 'Beef Pastels',
  images: [imageOne, imageTwo, imageThree],
  variants: [
    { id: 'small-10', label: 'Small', pieceCount: 10, price: 2500 },
  ],
}
```

## Update WhatsApp, socials and hours

Edit `src/config/brand.ts`.

- `whatsappNumber` is the single number used by all WhatsApp order links.
- `phoneDisplay` and `phoneHref` control visible phone and one-tap calling.
- `instagram`, `facebook`, `tiktok`, `location`, `mapEmbed` and `hours` power the contact section.

## Update English and French copy

Edit `src/i18n.ts`.

- `translations` controls page UI labels, WhatsApp messages and section copy.
- `categoryCopy`, `productCopy`, `comboCopy`, `reviewCopy` and `faqCopy` control localized menu content.
- The language toggle is shown in the desktop header and mobile hero controls.

## Update brand images

Real assets currently live in `assets/media`. Add new product photos there, import them in `src/data/products.ts`, then assign them to `images` arrays. Each product supports 3-4 gallery images out of the box.

## PWA behavior

The app includes `public/manifest.webmanifest` and `public/sw.js`. The service worker caches the app shell and runtime image/script/style requests so repeat visits feel faster and the installed app keeps its core shell available offline.
