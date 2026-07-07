export type CategoryId =
  | 'pastels'
  | 'crepes'
  | 'mini-burgers'
  | 'croque-monsieur'
  | 'cupcakes'
  | 'combo-boxes'
  | 'custom-orders';

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
  target: string;
};

export type ProductVariant = {
  id: string;
  label: string;
  pieceCount?: number;
  price: number;
};

export type Product = {
  id: string;
  categoryId: CategoryId;
  name: string;
  description: string;
  images: string[];
  variants: ProductVariant[];
  featured?: boolean;
};

export type ComboBox = {
  id: string;
  name: string;
  description: string;
  image: string;
  contents: string[];
  price: number;
};

export type CartItem = {
  key: string;
  itemId: string;
  name: string;
  variantId?: string;
  variantLabel?: string;
  pieceCount?: number;
  unitPrice: number;
  quantity: number;
  image: string;
  kind: 'product' | 'combo';
};
