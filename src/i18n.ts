import type { Category, ComboBox, Product, ProductVariant } from './types';

export type Language = 'en' | 'fr';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  fr: 'Francais',
};

export const translations = {
  en: {
    navMenu: 'Menu',
    navBoxes: 'Boxes',
    navCustom: 'Custom',
    navContact: 'Contact',
    navHome: 'Home',
    navCart: 'Cart',
    languageSwitch: 'FR',
    languageLabel: 'Switch language',
    heroEyebrow: 'Homemade bites and sweet treats',
    heroTagline: 'Homemade pastels, crepes, cupcakes, mini burgers and party boxes made to order.',
    heroTrustHomemade: 'Homemade',
    heroTrustQuick: 'Quick Ordering',
    heroTrustWhatsApp: 'WhatsApp Ordering',
    heroTrustCustom: 'Custom Orders',
    heroCta: 'Start Your Order',
    heroQuestion: 'Ask a Question',
    heroImageAlt: 'ORAYA UNIVERSE homemade food tray',
    browseEyebrow: 'Browse',
    browseTitle: 'Choose a category',
    browseViewMenu: 'View menu',
    menuEyebrow: 'Menu',
    menuTitle: 'Build your order',
    menuCopy: 'Pick a pack size, choose quantities, then send the complete order to WhatsApp.',
    boxesEyebrow: 'Best Value',
    boxesTitle: 'Combo boxes',
    boxesCopy: 'Ready-made sets for parties, gifts and quick discovery orders.',
    bestValue: 'Best Value',
    addToCart: 'Add to Cart',
    customEyebrow: 'Custom Orders',
    customTitle: 'Planning a bigger table?',
    customCopy:
      'Custom trays start from 30 pieces. Share the date, guest count and favorite products so ORAYA UNIVERSE can suggest the right mix.',
    customCta: 'Chat on WhatsApp',
    whyFreshTitle: 'Made fresh',
    whyFreshCopy: 'Small batches keep every order warm, tender and event-ready.',
    whyFastTitle: 'Fast WhatsApp ordering',
    whyFastCopy: 'Build the order here, then send the exact summary in one tap.',
    whyFlexibleTitle: 'Flexible quantities',
    whyFlexibleCopy: 'Choose ready packs or discuss custom event trays from 30 pieces.',
    reviewsEyebrow: 'Reviews',
    reviewsTitle: 'Loved in the group chat',
    faqEyebrow: 'FAQ',
    faqTitle: 'Quick answers',
    contactEyebrow: 'Contact',
    contactTitle: 'Order, ask, or plan ahead',
    contactCall: 'Call to confirm availability',
    cartTotal: 'Cart total',
    orderWhatsApp: 'Order on WhatsApp',
    cartReview: 'Review',
    cartTitle: 'Your order',
    cartDone: 'Done',
    cartEmpty: 'Your cart is waiting for something delicious.',
    itemsLabel: 'items',
    comboLabel: 'Combo box',
    decrease: 'Decrease',
    increase: 'Increase',
    remove: 'Remove',
    openCart: 'Open cart',
    closeCart: 'Close cart',
    galleryOpen: 'Open gallery',
    galleryClose: 'Close gallery',
    galleryPrevious: 'Previous image',
    galleryNext: 'Next image',
    galleryShow: 'Show image',
    whatsappAsk: 'Ask ORAYA UNIVERSE on WhatsApp',
    orderGreeting: 'Hello ORAYA UNIVERSE',
    orderIntent: "I'd like to place an order:",
    orderTotal: 'Total:',
    orderThanks: 'Thank you!',
    customMessage:
      "Hello ORAYA UNIVERSE\n\nI'd like to discuss a custom order of 30+ pieces.\nCan you help me with options, pricing and availability?",
    generalMessage: 'Hello ORAYA UNIVERSE, I have a quick question about your menu.',
  },
  fr: {
    navMenu: 'Menu',
    navBoxes: 'Boxes',
    navCustom: 'Sur mesure',
    navContact: 'Contact',
    navHome: 'Accueil',
    navCart: 'Panier',
    languageSwitch: 'EN',
    languageLabel: 'Changer de langue',
    heroEyebrow: 'Bouchees maison et douceurs',
    heroTagline: 'Pastels, crepes, cupcakes, mini burgers et boxes gourmandes faits sur commande.',
    heroTrustHomemade: 'Fait maison',
    heroTrustQuick: 'Commande rapide',
    heroTrustWhatsApp: 'Commande WhatsApp',
    heroTrustCustom: 'Commandes sur mesure',
    heroCta: 'Commencer la commande',
    heroQuestion: 'Poser une question',
    heroImageAlt: 'Plateau maison ORAYA UNIVERSE',
    browseEyebrow: 'Parcourir',
    browseTitle: 'Choisir une categorie',
    browseViewMenu: 'Voir le menu',
    menuEyebrow: 'Menu',
    menuTitle: 'Composez votre commande',
    menuCopy: 'Choisissez un format, ajustez les quantites, puis envoyez la commande sur WhatsApp.',
    boxesEyebrow: 'Meilleur prix',
    boxesTitle: 'Combo boxes',
    boxesCopy: 'Assortiments prets pour les fetes, les cadeaux et les commandes decouverte.',
    bestValue: 'Meilleur prix',
    addToCart: 'Ajouter',
    customEyebrow: 'Commandes sur mesure',
    customTitle: 'Une grande table a preparer ?',
    customCopy:
      'Les plateaux sur mesure commencent a partir de 30 pieces. Partagez la date, le nombre de personnes et vos envies pour recevoir la bonne selection.',
    customCta: 'Discuter sur WhatsApp',
    whyFreshTitle: 'Prepare frais',
    whyFreshCopy: 'Les petites productions gardent chaque commande chaude, tendre et prete pour vos evenements.',
    whyFastTitle: 'Commande WhatsApp rapide',
    whyFastCopy: 'Composez la commande ici, puis envoyez le recapitulatif exact en un geste.',
    whyFlexibleTitle: 'Quantites flexibles',
    whyFlexibleCopy: 'Choisissez des formats prets ou discutez de plateaux sur mesure des 30 pieces.',
    reviewsEyebrow: 'Avis',
    reviewsTitle: 'Adore dans les conversations',
    faqEyebrow: 'FAQ',
    faqTitle: 'Reponses rapides',
    contactEyebrow: 'Contact',
    contactTitle: 'Commander, demander, ou planifier',
    contactCall: 'Appeler pour confirmer la disponibilite',
    cartTotal: 'Total panier',
    orderWhatsApp: 'Commander sur WhatsApp',
    cartReview: 'Recap',
    cartTitle: 'Votre commande',
    cartDone: 'Fermer',
    cartEmpty: 'Votre panier attend quelque chose de delicieux.',
    itemsLabel: 'articles',
    comboLabel: 'Combo box',
    decrease: 'Diminuer',
    increase: 'Augmenter',
    remove: 'Retirer',
    openCart: 'Ouvrir le panier',
    closeCart: 'Fermer le panier',
    galleryOpen: 'Ouvrir la galerie',
    galleryClose: 'Fermer la galerie',
    galleryPrevious: 'Image precedente',
    galleryNext: 'Image suivante',
    galleryShow: 'Afficher image',
    whatsappAsk: 'Contacter ORAYA UNIVERSE sur WhatsApp',
    orderGreeting: 'Bonjour ORAYA UNIVERSE',
    orderIntent: 'Je souhaite passer une commande :',
    orderTotal: 'Total :',
    orderThanks: 'Merci !',
    customMessage:
      "Bonjour ORAYA UNIVERSE\n\nJe souhaite discuter d'une commande sur mesure de 30 pieces ou plus.\nPouvez-vous me proposer les options, les prix et les disponibilites ?",
    generalMessage: 'Bonjour ORAYA UNIVERSE, j’ai une question rapide sur votre menu.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

type TextPair = {
  en: string;
  fr: string;
};

type ProductCopy = {
  name: TextPair;
  description: TextPair;
  variants: Record<string, TextPair>;
};

type ComboCopy = {
  name: TextPair;
  description: TextPair;
  contents: Record<string, TextPair>;
};

export const categoryCopy: Record<Category['id'], { name: TextPair; description: TextPair }> = {
  pastels: {
    name: { en: 'Pastels', fr: 'Pastels' },
    description: {
      en: 'Golden savory bites for snacks, parties and platters.',
      fr: 'Bouchees dorees et salees pour gouters, fetes et plateaux.',
    },
  },
  crepes: {
    name: { en: 'Crepes', fr: 'Crepes' },
    description: {
      en: 'Soft plain, chocolate and leopard-style crepes.',
      fr: 'Crepes moelleuses nature, chocolat et leopard.',
    },
  },
  'mini-burgers': {
    name: { en: 'Mini Burgers', fr: 'Mini burgers' },
    description: {
      en: 'Small party burgers with generous homemade flavor.',
      fr: 'Petits burgers de fete au gout maison genereux.',
    },
  },
  'croque-monsieur': {
    name: { en: 'Croque Monsieur', fr: 'Croque monsieur' },
    description: {
      en: 'Toasty, cheesy bites for brunch and events.',
      fr: 'Bouchees grillees et fondantes pour brunchs et evenements.',
    },
  },
  cupcakes: {
    name: { en: 'Cupcakes', fr: 'Cupcakes' },
    description: {
      en: 'Simple, soft cupcakes ready for sweet tables.',
      fr: 'Cupcakes simples et moelleux pour tables sucrees.',
    },
  },
  'combo-boxes': {
    name: { en: 'Combo Boxes', fr: 'Combo boxes' },
    description: {
      en: 'Curated boxes for sharing and gifting.',
      fr: 'Boxes composees pour partager ou offrir.',
    },
  },
  'custom-orders': {
    name: { en: 'Custom Orders', fr: 'Sur mesure' },
    description: {
      en: 'Personalized quantities and event menus from 30 pieces.',
      fr: 'Quantites et menus personnalises a partir de 30 pieces.',
    },
  },
};

export const productCopy: Record<Product['id'], ProductCopy> = {
  'beef-pastels': {
    name: { en: 'Beef Pastels', fr: 'Pastels au boeuf' },
    description: {
      en: 'Crisp homemade pastels filled with seasoned beef.',
      fr: 'Pastels maison croustillants garnis de boeuf assaisonne.',
    },
    variants: {
      'small-10': { en: 'Small', fr: 'Petit' },
      'medium-8': { en: 'Medium', fr: 'Moyen' },
      'large-4': { en: 'Large', fr: 'Grand' },
    },
  },
  'plain-crepes': {
    name: { en: 'Plain Crepes', fr: 'Crepes nature' },
    description: {
      en: 'Soft, lightly sweet crepes for breakfast boxes and snacks.',
      fr: 'Crepes moelleuses et legerement sucrees pour petit dejeuner ou gouter.',
    },
    variants: {
      '10-pcs': { en: 'Classic pack', fr: 'Format classique' },
      '20-pcs': { en: 'Family pack', fr: 'Format famille' },
    },
  },
  'chocolate-crepes': {
    name: { en: 'Chocolate Crepes', fr: 'Crepes chocolat' },
    description: {
      en: 'Tender chocolate crepes with a rich cocoa finish.',
      fr: 'Crepes chocolat tendres avec une note cacao intense.',
    },
    variants: {
      '10-pcs': { en: 'Classic pack', fr: 'Format classique' },
      '20-pcs': { en: 'Family pack', fr: 'Format famille' },
    },
  },
  'leopard-crepes': {
    name: { en: 'Leopard Crepes', fr: 'Crepes leopard' },
    description: {
      en: 'Playful patterned crepes that look beautiful in trays.',
      fr: 'Crepes a motifs, parfaites pour de beaux plateaux.',
    },
    variants: {
      '10-pcs': { en: 'Classic pack', fr: 'Format classique' },
      '20-pcs': { en: 'Family pack', fr: 'Format famille' },
    },
  },
  'mini-burgers': {
    name: { en: 'Mini Burgers', fr: 'Mini burgers' },
    description: {
      en: 'Soft buns, savory patties and party-ready presentation.',
      fr: 'Pains moelleux, garniture savoureuse et presentation prete pour la fete.',
    },
    variants: {
      '6-pcs': { en: 'Snack tray', fr: 'Plateau snack' },
      '12-pcs': { en: 'Party tray', fr: 'Plateau fete' },
    },
  },
  'croque-monsieur': {
    name: { en: 'Croque Monsieur', fr: 'Croque monsieur' },
    description: {
      en: 'Warm, cheesy croque monsieur cut for easy sharing.',
      fr: 'Croque monsieur chauds et fondants, decoupes pour partager.',
    },
    variants: {
      '8-pcs': { en: 'Brunch tray', fr: 'Plateau brunch' },
      '16-pcs': { en: 'Event tray', fr: 'Plateau evenement' },
    },
  },
  'vanilla-cupcakes': {
    name: { en: 'Vanilla Cupcakes', fr: 'Cupcakes vanille' },
    description: {
      en: 'Soft vanilla cupcakes for birthdays, gifts and dessert tables.',
      fr: 'Cupcakes vanille moelleux pour anniversaires, cadeaux et tables sucrees.',
    },
    variants: {
      '6-pcs': { en: 'Half dozen', fr: 'Demi-douzaine' },
      '12-pcs': { en: 'Dozen', fr: 'Douzaine' },
    },
  },
};

export const comboCopy: Record<ComboBox['id'], ComboCopy> = {
  'discovery-box': {
    name: { en: 'Discovery Box', fr: 'Box decouverte' },
    description: {
      en: 'A balanced sampler for first-time orders.',
      fr: 'Un assortiment equilibre pour une premiere commande.',
    },
    contents: {
      '12 Beef Pastels': { en: '12 Beef Pastels', fr: '12 pastels au boeuf' },
      '10 Plain Crepes': { en: '10 Plain Crepes', fr: '10 crepes nature' },
      '5 Vanilla Cupcakes': { en: '5 Vanilla Cupcakes', fr: '5 cupcakes vanille' },
    },
  },
  'party-starter-box': {
    name: { en: 'Party Starter Box', fr: 'Box debut de fete' },
    description: {
      en: 'Savory favorites for small birthdays and family gatherings.',
      fr: 'Les favoris sales pour petits anniversaires et reunions de famille.',
    },
    contents: {
      '20 Beef Pastels': { en: '20 Beef Pastels', fr: '20 pastels au boeuf' },
      '12 Mini Burgers': { en: '12 Mini Burgers', fr: '12 mini burgers' },
      '8 Croque Monsieur bites': {
        en: '8 Croque Monsieur bites',
        fr: '8 bouchees croque monsieur',
      },
    },
  },
  'sweet-table-box': {
    name: { en: 'Sweet Table Box', fr: 'Box table sucree' },
    description: {
      en: 'A soft, pretty spread for dessert corners.',
      fr: 'Un assortiment doux et joli pour les coins dessert.',
    },
    contents: {
      '12 Vanilla Cupcakes': { en: '12 Vanilla Cupcakes', fr: '12 cupcakes vanille' },
      '20 Chocolate Crepes': { en: '20 Chocolate Crepes', fr: '20 crepes chocolat' },
      '20 Leopard Crepes': { en: '20 Leopard Crepes', fr: '20 crepes leopard' },
    },
  },
};

export const reviewCopy = [
  {
    name: 'Nadia M.',
    en: 'The pastels arrived warm and disappeared in minutes. The WhatsApp order summary made it so easy.',
    fr: 'Les pastels sont arrives chauds et ont disparu en quelques minutes. Le recap WhatsApp etait tres pratique.',
  },
  {
    name: 'Carine T.',
    en: 'The crepes were soft, pretty and perfect for our brunch box. I loved the packaging.',
    fr: 'Les crepes etaient moelleuses, jolies et parfaites pour notre brunch. J’ai adore le packaging.',
  },
  {
    name: 'Joel A.',
    en: 'We ordered mini burgers for a birthday and the quantity guidance was spot on.',
    fr: 'Nous avons commande des mini burgers pour un anniversaire et les quantites conseillees etaient parfaites.',
  },
  {
    name: 'Melissa F.',
    en: 'Custom order was smooth from the first message. Everything tasted homemade and premium.',
    fr: 'La commande sur mesure a ete simple des le premier message. Tout avait un vrai gout maison et premium.',
  },
];

export const faqCopy = [
  {
    question: {
      en: 'Do I pay on the website?',
      fr: 'Est-ce que je paie sur le site ?',
    },
    answer: {
      en: 'No. The site prepares your order and opens WhatsApp so you can confirm directly.',
      fr: 'Non. Le site prepare votre commande et ouvre WhatsApp pour confirmer directement.',
    },
  },
  {
    question: {
      en: 'Can I change my order after WhatsApp opens?',
      fr: 'Puis-je modifier la commande dans WhatsApp ?',
    },
    answer: {
      en: 'Yes. The message is pre-filled, so you can edit it before sending.',
      fr: 'Oui. Le message est pre-rempli, vous pouvez donc le modifier avant de l’envoyer.',
    },
  },
  {
    question: {
      en: 'What is the minimum for custom orders?',
      fr: 'Quel est le minimum pour une commande sur mesure ?',
    },
    answer: {
      en: 'Custom event orders start from 30 pieces.',
      fr: 'Les commandes evenementielles sur mesure commencent a partir de 30 pieces.',
    },
  },
  {
    question: {
      en: 'How far ahead should I order?',
      fr: 'Combien de temps a l’avance faut-il commander ?',
    },
    answer: {
      en: 'Same-day availability depends on the menu. Larger orders are best discussed at least 24 hours ahead.',
      fr: 'La disponibilite le jour meme depend du menu. Pour les grandes commandes, mieux vaut echanger au moins 24 h avant.',
    },
  },
];

export function getText(text: TextPair, language: Language): string {
  return text[language];
}

export function getVariantLabel(product: Product, variant: ProductVariant, language: Language): string {
  return productCopy[product.id]?.variants[variant.id]?.[language] ?? variant.label;
}
