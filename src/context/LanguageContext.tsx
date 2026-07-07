import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Category, ComboBox, Product, ProductVariant } from '../types';
import {
  categoryCopy,
  comboCopy,
  getText,
  getVariantLabel,
  languageLabels,
  productCopy,
  translations,
  type Language,
  type TranslationKey,
} from '../i18n';

type LocalizedCategory = Pick<Category, 'name' | 'description'>;
type LocalizedProduct = Pick<Product, 'name' | 'description'>;
type LocalizedCombo = Pick<ComboBox, 'name' | 'description'> & {
  contents: string[];
};

type LanguageContextValue = {
  language: Language;
  languageName: string;
  nextLanguageLabel: string;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
  categoryText: (category: Category) => LocalizedCategory;
  productText: (product: Product) => LocalizedProduct;
  variantText: (product: Product, variant: ProductVariant) => string;
  comboText: (combo: ComboBox) => LocalizedCombo;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'en' ? 'fr' : 'en'));
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: TranslationKey) => translations[language][key];

    return {
      language,
      languageName: languageLabels[language],
      nextLanguageLabel: translations[language].languageSwitch,
      toggleLanguage,
      t,
      categoryText: (category) => {
        const copy = categoryCopy[category.id];
        return {
          name: copy ? getText(copy.name, language) : category.name,
          description: copy ? getText(copy.description, language) : category.description,
        };
      },
      productText: (product) => {
        const copy = productCopy[product.id];
        return {
          name: copy ? getText(copy.name, language) : product.name,
          description: copy ? getText(copy.description, language) : product.description,
        };
      },
      variantText: (product, variant) => getVariantLabel(product, variant, language),
      comboText: (combo) => {
        const copy = comboCopy[combo.id];
        return {
          name: copy ? getText(copy.name, language) : combo.name,
          description: copy ? getText(copy.description, language) : combo.description,
          contents: combo.contents.map((item) => {
            const translated = copy?.contents[item];
            return translated ? getText(translated, language) : item;
          }),
        };
      },
    };
  }, [language, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
