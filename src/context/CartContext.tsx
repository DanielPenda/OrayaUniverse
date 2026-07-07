import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { CartItem } from '../types';

type AddItemInput = Omit<CartItem, 'key' | 'quantity'> & {
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  total: number;
  lastUpdatedKey: string | null;
  isCartOpen: boolean;
  addItem: (item: AddItemInput) => void;
  incrementItem: (key: string) => void;
  decrementItem: (key: string) => void;
  updateItemQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function getCartKey(item: AddItemInput): string {
  return `${item.kind}:${item.itemId}:${item.variantId ?? 'flat'}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastUpdatedKey, setLastUpdatedKey] = useState<string | null>(null);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((item: AddItemInput) => {
    const quantity = item.quantity ?? 1;
    const key = getCartKey(item);

    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.key === key);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.key === key
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      }

      return [...current, { ...item, key, quantity }];
    });
    setLastUpdatedKey(key);
  }, []);

  const updateItemQuantity = useCallback((key: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    );
    setLastUpdatedKey(key);
  }, []);

  const incrementItem = useCallback(
    (key: string) => {
      setItems((current) =>
        current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
      setLastUpdatedKey(key);
    },
    [],
  );

  const decrementItem = useCallback(
    (key: string) => {
      setItems((current) =>
        current
          .map((item) => (item.key === key ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((item) => item.quantity > 0),
      );
      setLastUpdatedKey(key);
    },
    [],
  );

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
    setLastUpdatedKey(key);
  }, []);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const clearCart = useCallback(() => {
    setItems([]);
    setLastUpdatedKey(null);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

    return {
      items,
      itemCount,
      total,
      lastUpdatedKey,
      isCartOpen,
      addItem,
      incrementItem,
      decrementItem,
      updateItemQuantity,
      removeItem,
      openCart,
      closeCart,
      clearCart,
    };
  }, [
    addItem,
    clearCart,
    decrementItem,
    incrementItem,
    isCartOpen,
    items,
    lastUpdatedKey,
    closeCart,
    openCart,
    removeItem,
    updateItemQuantity,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
}
