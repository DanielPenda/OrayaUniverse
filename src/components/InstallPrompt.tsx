import { useEffect, useMemo, useState } from 'react';
import { Share2, X } from './icons';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

const DISMISS_KEY = 'oraya-install-prompt-dismissed-at';
const DISMISS_DAYS = 7;
const SHOW_DELAY_MS = 3500;
export const INSTALL_PROMPT_EVENT = 'oraya:request-install';

function isDismissed() {
  const dismissedAt = window.localStorage.getItem(DISMISS_KEY);
  if (!dismissedAt) {
    return false;
  }

  const elapsed = Date.now() - Number(dismissedAt);
  return Number.isFinite(elapsed) && elapsed < DISMISS_DAYS * 24 * 60 * 60 * 1000;
}

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in window.navigator && Boolean(window.navigator.standalone))
  );
}

function isIosSafari() {
  const userAgent = window.navigator.userAgent;
  const isIos = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(userAgent) && !/CriOS|FxiOS|EdgiOS|Chrome|Android/.test(userAgent);
  return isIos && isSafari;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(() => isDismissed());
  const iconSrc = `${import.meta.env.BASE_URL}OrayaIcones/oraya-icon-192.png`;
  const showIosInstructions = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return isIosSafari() && !isStandalone();
  }, []);

  useEffect(() => {
    if (isStandalone()) {
      return;
    }

    const timerId = window.setTimeout(() => {
      if (!isDismissed()) {
        setReady(true);
      }
    }, SHOW_DELAY_MS);
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setDismissed(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    const handleInstallRequest = () => {
      if (isStandalone()) {
        return;
      }

      window.localStorage.removeItem(DISMISS_KEY);
      setDismissed(false);

      if (deferredPrompt) {
        void install();
        return;
      }

      setReady(true);
    };

    window.addEventListener(INSTALL_PROMPT_EVENT, handleInstallRequest);
    return () => window.removeEventListener(INSTALL_PROMPT_EVENT, handleInstallRequest);
  }, [deferredPrompt]);

  function dismiss() {
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    setDismissed(true);
  }

  async function install() {
    if (!deferredPrompt) {
      return;
    }

    await deferredPrompt.prompt();
    await deferredPrompt.userChoice.catch(() => undefined);
    setDeferredPrompt(null);
  }

  if (!ready || dismissed || isStandalone() || (!deferredPrompt && !showIosInstructions)) {
    return null;
  }

  return (
    <aside className="fixed inset-x-0 bottom-[9.35rem] z-40 px-3 pb-[env(safe-area-inset-bottom)] md:bottom-24 md:px-6">
      <div className="mx-auto flex max-w-3xl items-center gap-3 rounded-2xl border border-orange-100 bg-[#392317] p-3 text-cream shadow-soft sm:rounded-full">
        <img
          src={iconSrc}
          alt=""
          className="h-11 w-11 shrink-0 rounded-xl bg-[#fffaed] object-cover"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black leading-5">
            {deferredPrompt ? 'Install ORAYA Universe for faster ordering' : "Tap Share, then 'Add to Home Screen'"}
          </p>
          {showIosInstructions && !deferredPrompt ? (
            <p className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-cream/75">
              <Share2 className="h-4 w-4 text-caramel" />
              Safari share menu
            </p>
          ) : null}
        </div>
        {deferredPrompt ? (
          <button
            type="button"
            onClick={install}
            className="h-11 shrink-0 rounded-full bg-caramel px-4 text-sm font-black text-white shadow-lift transition active:scale-95"
          >
            Install
          </button>
        ) : null}
        <button
          type="button"
          onClick={dismiss}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-cream transition active:scale-95"
          aria-label="Dismiss install prompt"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
