import croqueMonsieur from '../../assets/media/croqueMonsieur.jpeg';
import cupcakesNature from '../../assets/media/cupcakesNature.jpg';
import empanadas from '../../assets/media/empanadas.jpg';
import miniBurger from '../../assets/media/miniBurger.jpg';
import pancakeChocolate from '../../assets/media/pancakeChocolate.jpeg';
import pancakeLeopard from '../../assets/media/pancakeLeopard.jpg';
import pancakeNature from '../../assets/media/pancakeNature.jpg';
import type { Category, ComboBox, Product } from '../types';

export const categories: Category[] = [
  {
    id: 'pastels',
    name: 'Pastels',
    description: 'Golden savory bites for snacks, parties and platters.',
    image: empanadas,
    target: 'menu',
  },
  {
    id: 'crepes',
    name: 'Crepes',
    description: 'Soft plain, chocolate and leopard-style crepes.',
    image: pancakeChocolate,
    target: 'menu',
  },
  {
    id: 'mini-burgers',
    name: 'Mini Burgers',
    description: 'Small party burgers with generous homemade flavor.',
    image: miniBurger,
    target: 'menu',
  },
  {
    id: 'croque-monsieur',
    name: 'Croque Monsieur',
    description: 'Toasty, cheesy bites for brunch and events.',
    image: croqueMonsieur,
    target: 'menu',
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    description: 'Simple, soft cupcakes ready for sweet tables.',
    image: cupcakesNature,
    target: 'menu',
  },
  {
    id: 'combo-boxes',
    name: 'Combo Boxes',
    description: 'Curated boxes for sharing and gifting.',
    image: miniBurger,
    target: 'boxes',
  },
  {
    id: 'custom-orders',
    name: 'Custom Orders',
    description: 'Personalized quantities and event menus from 30 pieces.',
    image: croqueMonsieur,
    target: 'custom-orders',
  },
];

export const products: Product[] = [
  {
    id: 'beef-pastels',
    categoryId: 'pastels',
    name: 'Beef Pastels',
    description: 'Crisp homemade pastels filled with seasoned beef.',
    images: [empanadas, miniBurger, croqueMonsieur, pancakeNature],
    featured: true,
    variants: [
      { id: 'small-10', label: 'Small', pieceCount: 10, price: 2500 },
      { id: 'medium-8', label: 'Medium', pieceCount: 8, price: 4000 },
      { id: 'large-4', label: 'Large', pieceCount: 4, price: 4000 },
    ],
  },
  {
    id: 'plain-crepes',
    categoryId: 'crepes',
    name: 'Plain Crepes',
    description: 'Soft, lightly sweet crepes for breakfast boxes and snacks.',
    images: [pancakeNature, pancakeChocolate, pancakeLeopard, cupcakesNature],
    variants: [
      { id: '10-pcs', label: 'Classic pack', pieceCount: 10, price: 2500 },
      { id: '20-pcs', label: 'Family pack', pieceCount: 20, price: 4500 },
    ],
  },
  {
    id: 'chocolate-crepes',
    categoryId: 'crepes',
    name: 'Chocolate Crepes',
    description: 'Tender chocolate crepes with a rich cocoa finish.',
    images: [pancakeChocolate, pancakeLeopard, pancakeNature, cupcakesNature],
    featured: true,
    variants: [
      { id: '10-pcs', label: 'Classic pack', pieceCount: 10, price: 3000 },
      { id: '20-pcs', label: 'Family pack', pieceCount: 20, price: 5500 },
    ],
  },
  {
    id: 'leopard-crepes',
    categoryId: 'crepes',
    name: 'Leopard Crepes',
    description: 'Playful patterned crepes that look beautiful in trays.',
    images: [pancakeLeopard, pancakeChocolate, pancakeNature, miniBurger],
    variants: [
      { id: '10-pcs', label: 'Classic pack', pieceCount: 10, price: 3500 },
      { id: '20-pcs', label: 'Family pack', pieceCount: 20, price: 6500 },
    ],
  },
  {
    id: 'mini-burgers',
    categoryId: 'mini-burgers',
    name: 'Mini Burgers',
    description: 'Soft buns, savory patties and party-ready presentation.',
    images: [miniBurger, croqueMonsieur, empanadas, cupcakesNature],
    featured: true,
    variants: [
      { id: '6-pcs', label: 'Snack tray', pieceCount: 6, price: 6000 },
      { id: '12-pcs', label: 'Party tray', pieceCount: 12, price: 11000 },
    ],
  },
  {
    id: 'croque-monsieur',
    categoryId: 'croque-monsieur',
    name: 'Croque Monsieur',
    description: 'Warm, cheesy croque monsieur cut for easy sharing.',
    images: [croqueMonsieur, miniBurger, empanadas, pancakeNature],
    variants: [
      { id: '8-pcs', label: 'Brunch tray', pieceCount: 8, price: 6000 },
      { id: '16-pcs', label: 'Event tray', pieceCount: 16, price: 11000 },
    ],
  },
  {
    id: 'vanilla-cupcakes',
    categoryId: 'cupcakes',
    name: 'Vanilla Cupcakes',
    description: 'Soft vanilla cupcakes for birthdays, gifts and dessert tables.',
    images: [cupcakesNature, pancakeChocolate, pancakeLeopard, miniBurger],
    variants: [
      { id: '6-pcs', label: 'Half dozen', pieceCount: 6, price: 4000 },
      { id: '12-pcs', label: 'Dozen', pieceCount: 12, price: 7500 },
    ],
  },
];

export const comboBoxes: ComboBox[] = [
  {
    id: 'discovery-box',
    name: 'Discovery Box',
    description: 'A balanced sampler for first-time orders.',
    image: miniBurger,
    contents: ['12 Beef Pastels', '10 Plain Crepes', '5 Vanilla Cupcakes'],
    price: 13000,
  },
  {
    id: 'party-starter-box',
    name: 'Party Starter Box',
    description: 'Savory favorites for small birthdays and family gatherings.',
    image: empanadas,
    contents: ['20 Beef Pastels', '12 Mini Burgers', '8 Croque Monsieur bites'],
    price: 24000,
  },
  {
    id: 'sweet-table-box',
    name: 'Sweet Table Box',
    description: 'A soft, pretty spread for dessert corners.',
    image: cupcakesNature,
    contents: ['12 Vanilla Cupcakes', '20 Chocolate Crepes', '20 Leopard Crepes'],
    price: 22000,
  },
];
