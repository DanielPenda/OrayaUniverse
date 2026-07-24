import type { Category, ComboBox, Product, ProductVariant } from './types';

export type Language = 'en' | 'fr';

export const languageLabels: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
};

export const translations = {
  en: {
    navMenu: 'Menu',
    navBoxes: 'Boxes',
    navCustom: 'Custom',
    navContact: 'Contact',
    navHome: 'Home',
    navInstall: 'Install',
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
    contactLocation: 'Douala, Cameroon',
    contactHoursWeekday: 'Monday - Saturday: 8:00 AM - 7:00 PM',
    contactHoursSunday: 'Sunday: Custom orders by request',
    updateTitle: 'A fresh update is ready',
    updateCopy: 'Update now to get the latest improvements.',
    updateAction: 'Update now',
    updateLater: 'Later',
    updateApplying: 'Updating...',
    updateError: 'Could not update. Please try again.',
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
    navInstall: 'Installer',
    navCart: 'Panier',
    languageSwitch: 'EN',
    languageLabel: 'Changer de langue',
    heroEyebrow: 'Bouchées maison et douceurs',
    heroTagline: 'Pastels, crêpes, cupcakes, mini burgers et boxes gourmandes faits sur commande.',
    heroTrustHomemade: 'Fait maison',
    heroTrustQuick: 'Commande rapide',
    heroTrustWhatsApp: 'Commande WhatsApp',
    heroTrustCustom: 'Commandes sur mesure',
    heroCta: 'Commencer la commande',
    heroQuestion: 'Poser une question',
    heroImageAlt: 'Plateau maison ORAYA UNIVERSE',
    browseEyebrow: 'Parcourir',
    browseTitle: 'Choisir une catégorie',
    browseViewMenu: 'Voir le menu',
    menuEyebrow: 'Menu',
    menuTitle: 'Composez votre commande',
    menuCopy: 'Choisissez un format, ajustez les quantités, puis envoyez la commande sur WhatsApp.',
    boxesEyebrow: 'Meilleur prix',
    boxesTitle: 'Combo boxes',
    boxesCopy: 'Assortiments prêts pour les fêtes, les cadeaux et les commandes découverte.',
    bestValue: 'Meilleur prix',
    addToCart: 'Ajouter',
    customEyebrow: 'Commandes sur mesure',
    customTitle: 'Une grande table à préparer ?',
    customCopy:
      'Les plateaux sur mesure commencent à partir de 30 pièces. Partagez la date, le nombre de personnes et vos envies pour recevoir la bonne sélection.',
    customCta: 'Discuter sur WhatsApp',
    whyFreshTitle: 'Préparé frais',
    whyFreshCopy: 'Les petites productions gardent chaque commande chaude, tendre et prête pour vos événements.',
    whyFastTitle: 'Commande WhatsApp rapide',
    whyFastCopy: 'Composez la commande ici, puis envoyez le récapitulatif exact en un geste.',
    whyFlexibleTitle: 'Quantités flexibles',
    whyFlexibleCopy: 'Choisissez des formats prêts ou discutez de plateaux sur mesure dès 30 pièces.',
    reviewsEyebrow: 'Avis',
    reviewsTitle: 'Adoré dans les conversations',
    faqEyebrow: 'FAQ',
    faqTitle: 'Réponses rapides',
    contactEyebrow: 'Contact',
    contactTitle: 'Commander, demander, ou planifier',
    contactCall: 'Appeler pour confirmer la disponibilité',
    contactLocation: 'Douala, Cameroun',
    contactHoursWeekday: 'Lundi - samedi : 8 h 00 - 19 h 00',
    contactHoursSunday: 'Dimanche : commandes sur mesure sur demande',
    updateTitle: 'Une nouvelle mise à jour est prête',
    updateCopy: 'Mettez à jour maintenant pour profiter des dernières améliorations.',
    updateAction: 'Mettre à jour',
    updateLater: 'Plus tard',
    updateApplying: 'Mise à jour...',
    updateError: 'La mise à jour a échoué. Veuillez réessayer.',
    cartTotal: 'Total panier',
    orderWhatsApp: 'Commander sur WhatsApp',
    cartReview: 'Récap',
    cartTitle: 'Votre commande',
    cartDone: 'Fermer',
    cartEmpty: 'Votre panier attend quelque chose de délicieux.',
    itemsLabel: 'articles',
    comboLabel: 'Combo box',
    decrease: 'Diminuer',
    increase: 'Augmenter',
    remove: 'Retirer',
    openCart: 'Ouvrir le panier',
    closeCart: 'Fermer le panier',
    galleryOpen: 'Ouvrir la galerie',
    galleryClose: 'Fermer la galerie',
    galleryPrevious: 'Image précédente',
    galleryNext: 'Image suivante',
    galleryShow: 'Afficher image',
    whatsappAsk: 'Contacter ORAYA UNIVERSE sur WhatsApp',
    orderGreeting: 'Bonjour ORAYA UNIVERSE',
    orderIntent: 'Je souhaite passer une commande :',
    orderTotal: 'Total :',
    orderThanks: 'Merci !',
    customMessage:
      "Bonjour ORAYA UNIVERSE\n\nJe souhaite discuter d'une commande sur mesure de 30 pièces ou plus.\nPouvez-vous me proposer les options, les prix et les disponibilités ?",
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
      fr: 'Bouchées dorées et salées pour goûters, fêtes et plateaux.',
    },
  },
  crepes: {
    name: { en: 'Crepes', fr: 'Crêpes' },
    description: {
      en: 'Soft plain, chocolate and leopard-style crepes.',
      fr: 'Crêpes moelleuses nature, chocolat et léopard.',
    },
  },
  'mini-burgers': {
    name: { en: 'Mini Burgers', fr: 'Mini burgers' },
    description: {
      en: 'Small party burgers with generous homemade flavor.',
      fr: 'Petits burgers de fête au goût maison généreux.',
    },
  },
  'croque-monsieur': {
    name: { en: 'Croque Monsieur', fr: 'Croque monsieur' },
    description: {
      en: 'Toasty, cheesy bites for brunch and events.',
      fr: 'Bouchées grillées et fondantes pour brunchs et événements.',
    },
  },
  cupcakes: {
    name: { en: 'Cupcakes', fr: 'Cupcakes' },
    description: {
      en: 'Simple, soft cupcakes ready for sweet tables.',
      fr: 'Cupcakes simples et moelleux pour tables sucrées.',
    },
  },
  'combo-boxes': {
    name: { en: 'Combo Boxes', fr: 'Combo boxes' },
    description: {
      en: 'Curated boxes for sharing and gifting.',
      fr: 'Boxes composées pour partager ou offrir.',
    },
  },
  'custom-orders': {
    name: { en: 'Custom Orders', fr: 'Sur mesure' },
    description: {
      en: 'Personalized quantities and event menus from 30 pieces.',
      fr: 'Quantités et menus personnalisés à partir de 30 pièces.',
    },
  },
};

export const productCopy: Record<Product['id'], ProductCopy> = {
  'beef-pastels': {
    name: { en: 'Beef Pastels', fr: 'Pastels au bœuf' },
    description: {
      en: 'Crisp homemade pastels filled with seasoned beef.',
      fr: 'Pastels maison croustillants garnis de bœuf assaisonné.',
    },
    variants: {
      'small-10': { en: 'Small', fr: 'Petit' },
      'medium-8': { en: 'Medium', fr: 'Moyen' },
      'large-4': { en: 'Large', fr: 'Grand' },
    },
  },
  'plain-crepes': {
    name: { en: 'Plain Crepes', fr: 'Crêpes nature' },
    description: {
      en: 'Soft, lightly sweet crepes for breakfast boxes and snacks.',
      fr: 'Crêpes moelleuses et légèrement sucrées pour petit déjeuner ou goûter.',
    },
    variants: {
      '10-pcs': { en: 'Classic pack', fr: 'Format classique' },
      '20-pcs': { en: 'Family pack', fr: 'Format famille' },
    },
  },
  'chocolate-crepes': {
    name: { en: 'Chocolate Crepes', fr: 'Crêpes chocolat' },
    description: {
      en: 'Tender chocolate crepes with a rich cocoa finish.',
      fr: 'Crêpes chocolat tendres avec une note cacao intense.',
    },
    variants: {
      '10-pcs': { en: 'Classic pack', fr: 'Format classique' },
      '20-pcs': { en: 'Family pack', fr: 'Format famille' },
    },
  },
  'leopard-crepes': {
    name: { en: 'Leopard Crepes', fr: 'Crêpes léopard' },
    description: {
      en: 'Playful patterned crepes that look beautiful in trays.',
      fr: 'Crêpes à motifs, parfaites pour de beaux plateaux.',
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
      fr: 'Pains moelleux, garniture savoureuse et présentation prête pour la fête.',
    },
    variants: {
      '6-pcs': { en: 'Snack tray', fr: 'Plateau snack' },
      '12-pcs': { en: 'Party tray', fr: 'Plateau fête' },
    },
  },
  'croque-monsieur': {
    name: { en: 'Croque Monsieur', fr: 'Croque monsieur' },
    description: {
      en: 'Warm, cheesy croque monsieur cut for easy sharing.',
      fr: 'Croque monsieur chauds et fondants, découpés pour partager.',
    },
    variants: {
      '8-pcs': { en: 'Brunch tray', fr: 'Plateau brunch' },
      '16-pcs': { en: 'Event tray', fr: 'Plateau événement' },
    },
  },
  'vanilla-cupcakes': {
    name: { en: 'Vanilla Cupcakes', fr: 'Cupcakes vanille' },
    description: {
      en: 'Soft vanilla cupcakes for birthdays, gifts and dessert tables.',
      fr: 'Cupcakes vanille moelleux pour anniversaires, cadeaux et tables sucrées.',
    },
    variants: {
      '6-pcs': { en: 'Half dozen', fr: 'Demi-douzaine' },
      '12-pcs': { en: 'Dozen', fr: 'Douzaine' },
    },
  },
};

export const comboCopy: Record<ComboBox['id'], ComboCopy> = {
  'discovery-box': {
    name: { en: 'Discovery Box', fr: 'Box découverte' },
    description: {
      en: 'A balanced sampler for first-time orders.',
      fr: 'Un assortiment équilibré pour une première commande.',
    },
    contents: {
      '12 Beef Pastels': { en: '12 Beef Pastels', fr: '12 pastels au bœuf' },
      '10 Plain Crepes': { en: '10 Plain Crepes', fr: '10 crêpes nature' },
      '5 Vanilla Cupcakes': { en: '5 Vanilla Cupcakes', fr: '5 cupcakes vanille' },
    },
  },
  'party-starter-box': {
    name: { en: 'Party Starter Box', fr: 'Box début de fête' },
    description: {
      en: 'Savory favorites for small birthdays and family gatherings.',
      fr: 'Les favoris salés pour petits anniversaires et réunions de famille.',
    },
    contents: {
      '20 Beef Pastels': { en: '20 Beef Pastels', fr: '20 pastels au bœuf' },
      '12 Mini Burgers': { en: '12 Mini Burgers', fr: '12 mini burgers' },
      '8 Croque Monsieur bites': {
        en: '8 Croque Monsieur bites',
        fr: '8 bouchées croque monsieur',
      },
    },
  },
  'sweet-table-box': {
    name: { en: 'Sweet Table Box', fr: 'Box table sucrée' },
    description: {
      en: 'A soft, pretty spread for dessert corners.',
      fr: 'Un assortiment doux et joli pour les coins dessert.',
    },
    contents: {
      '12 Vanilla Cupcakes': { en: '12 Vanilla Cupcakes', fr: '12 cupcakes vanille' },
      '20 Chocolate Crepes': { en: '20 Chocolate Crepes', fr: '20 crêpes chocolat' },
      '20 Leopard Crepes': { en: '20 Leopard Crepes', fr: '20 crêpes léopard' },
    },
  },
};

export const reviewCopy = [
  {
    name: 'Nadia M.',
    en: 'The pastels arrived warm and disappeared in minutes. The WhatsApp order summary made it so easy.',
    fr: 'Les pastels sont arrivés chauds et ont disparu en quelques minutes. Le récap WhatsApp était très pratique.',
  },
  {
    name: 'Carine T.',
    en: 'The crepes were soft, pretty and perfect for our brunch box. I loved the packaging.',
    fr: 'Les crêpes étaient moelleuses, jolies et parfaites pour notre brunch. J’ai adoré le packaging.',
  },
  {
    name: 'Joel A.',
    en: 'We ordered mini burgers for a birthday and the quantity guidance was spot on.',
    fr: 'Nous avons commandé des mini burgers pour un anniversaire et les quantités conseillées étaient parfaites.',
  },
  {
    name: 'Melissa F.',
    en: 'Custom order was smooth from the first message. Everything tasted homemade and premium.',
    fr: 'La commande sur mesure a été simple dès le premier message. Tout avait un vrai goût maison et premium.',
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
      fr: 'Non. Le site prépare votre commande et ouvre WhatsApp pour confirmer directement.',
    },
  },
  {
    question: {
      en: 'Can I change my order after WhatsApp opens?',
      fr: 'Puis-je modifier la commande dans WhatsApp ?',
    },
    answer: {
      en: 'Yes. The message is pre-filled, so you can edit it before sending.',
      fr: 'Oui. Le message est prérempli, vous pouvez donc le modifier avant de l’envoyer.',
    },
  },
  {
    question: {
      en: 'What is the minimum for custom orders?',
      fr: 'Quel est le minimum pour une commande sur mesure ?',
    },
    answer: {
      en: 'Custom event orders start from 30 pieces.',
      fr: 'Les commandes événementielles sur mesure commencent à partir de 30 pièces.',
    },
  },
  {
    question: {
      en: 'How far ahead should I order?',
      fr: 'Combien de temps a l’avance faut-il commander ?',
    },
    answer: {
      en: 'Same-day availability depends on the menu. Larger orders are best discussed at least 24 hours ahead.',
      fr: 'La disponibilité le jour même dépend du menu. Pour les grandes commandes, mieux vaut échanger au moins 24 h avant.',
    },
  },
];

export function getText(text: TextPair, language: Language): string {
  return text[language];
}

export function getVariantLabel(product: Product, variant: ProductVariant, language: Language): string {
  return productCopy[product.id]?.variants[variant.id]?.[language] ?? variant.label;
}
