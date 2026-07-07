import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, X } from './icons';

type ImageGalleryProps = {
  title: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
};

export function ImageGallery({ title, images, isOpen, onClose }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % images.length);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [images.length, isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const image = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 grid bg-cocoa/95 p-4 text-white"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-cocoa shadow-soft"
        aria-label={t('galleryClose')}
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto grid h-full w-full max-w-5xl place-items-center gap-4">
        <img
          src={image}
          alt={`${title} ${activeIndex + 1}`}
          className="max-h-[76svh] w-full rounded-2xl object-contain"
        />

        <div className="flex w-full items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index - 1 + images.length) % images.length)}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-cocoa"
            aria-label={t('galleryPrevious')}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex min-w-0 flex-1 justify-center gap-2">
            {images.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  activeIndex === index ? 'w-8 bg-honey' : 'w-2.5 bg-white/50'
                }`}
                aria-label={`${t('galleryShow')} ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setActiveIndex((index) => (index + 1) % images.length)}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-cocoa"
            aria-label={t('galleryNext')}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
