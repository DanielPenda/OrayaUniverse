import { useLanguage } from '../context/LanguageContext';
import { faqCopy } from '../i18n';

export function FAQSection() {
  const { language, t } = useLanguage();

  return (
    <section id="faq" className="bg-linen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-caramel">{t('faqEyebrow')}</p>
          <h2 className="mt-1 text-3xl font-black text-cocoa">{t('faqTitle')}</h2>
        </div>
        <div className="grid gap-3">
          {faqCopy.map((item) => (
            <details key={item.question.en} className="group rounded-2xl bg-white p-5 shadow-soft">
              <summary className="cursor-pointer list-none text-base font-black text-cocoa">
                {item.question[language]}
              </summary>
              <p className="mt-3 text-sm leading-6 text-truffle/75">{item.answer[language]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
