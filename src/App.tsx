import { CartProvider } from './context/CartContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CategoryGrid } from './components/CategoryGrid';
import { ContactSection } from './components/ContactSection';
import { CustomOrderCTA } from './components/CustomOrderCTA';
import { FAQSection } from './components/FAQSection';
import { FloatingCart } from './components/FloatingCart';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BottomNav } from './components/BottomNav';

function AppContent() {
  const { t } = useLanguage();

  return (
    <CartProvider>
      <div className="min-h-screen text-cocoa">
        <Hero />
        <main className="safe-bottom">
          <CategoryGrid />
          <MenuSection />
          <CustomOrderCTA />
          <section id="why-us" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [t('whyFreshTitle'), t('whyFreshCopy')],
                [t('whyFastTitle'), t('whyFastCopy')],
                [t('whyFlexibleTitle'), t('whyFlexibleCopy')],
              ].map(([title, copy]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-orange-100 bg-linen p-5 shadow-soft"
                >
                  <div className="mb-3 h-2 w-16 rounded-full bg-caramel" />
                  <h2 className="text-lg font-black text-cocoa">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-truffle/75">{copy}</p>
                </article>
              ))}
            </div>
          </section>
          <ReviewsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <WhatsAppFloatingButton />
        <FloatingCart />
        <BottomNav />
      </div>
    </CartProvider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
