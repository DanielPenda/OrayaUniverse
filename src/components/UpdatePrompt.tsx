import { useEffect, useRef, useState } from 'react';
import { Download, X } from './icons';
import { useLanguage } from '../context/LanguageContext';

const UPDATE_CHECK_INTERVAL_MS = 60 * 60 * 1000;

export function UpdatePrompt() {
  const { t } = useLanguage();
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [applying, setApplying] = useState(false);
  const [failed, setFailed] = useState(false);
  const refreshRequested = useRef(false);
  const updateWasShown = useRef(false);
  const failureTimer = useRef<number>();

  useEffect(() => {
    if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
      return;
    }

    let active = true;
    let currentRegistration: ServiceWorkerRegistration | null = null;

    const revealUpdate = (nextRegistration: ServiceWorkerRegistration) => {
      if (!active || !navigator.serviceWorker.controller || !nextRegistration.waiting) {
        return;
      }

      updateWasShown.current = true;
      setRegistration(nextRegistration);
      setDismissed(false);
    };

    const handleUpdateFound = () => {
      const installingWorker = currentRegistration?.installing;
      if (!installingWorker) {
        return;
      }

      const handleStateChange = () => {
        if (installingWorker.state === 'installed' && currentRegistration) {
          revealUpdate(currentRegistration);
          installingWorker.removeEventListener('statechange', handleStateChange);
        }
      };

      installingWorker.addEventListener('statechange', handleStateChange);
    };

    const handleControllerChange = () => {
      if (
        navigator.serviceWorker.controller &&
        (refreshRequested.current || updateWasShown.current)
      ) {
        window.location.reload();
      }
    };

    const checkForUpdate = () => {
      if (document.visibilityState === 'visible') {
        void currentRegistration?.update().catch(() => undefined);
      }
    };

    void navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`, { updateViaCache: 'none' })
      .then((nextRegistration) => {
        if (!active) {
          return;
        }

        currentRegistration = nextRegistration;
        revealUpdate(nextRegistration);
        nextRegistration.addEventListener('updatefound', handleUpdateFound);
        void nextRegistration.update().catch(() => undefined);
      })
      .catch(() => undefined);

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
    document.addEventListener('visibilitychange', checkForUpdate);
    window.addEventListener('focus', checkForUpdate);
    const intervalId = window.setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL_MS);

    return () => {
      active = false;
      currentRegistration?.removeEventListener('updatefound', handleUpdateFound);
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
      document.removeEventListener('visibilitychange', checkForUpdate);
      window.removeEventListener('focus', checkForUpdate);
      window.clearInterval(intervalId);
      window.clearTimeout(failureTimer.current);
    };
  }, []);

  function applyUpdate() {
    const waitingWorker = registration?.waiting;
    if (!waitingWorker) {
      setFailed(true);
      return;
    }

    refreshRequested.current = true;
    setApplying(true);
    setFailed(false);
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });

    failureTimer.current = window.setTimeout(() => {
      setApplying(false);
      setFailed(true);
    }, 10_000);
  }

  if (!registration || dismissed) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-[70] px-3 sm:px-6"
      role="alert"
      aria-live="assertive"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 rounded-2xl border border-orange-100 bg-[#392317] p-3 text-cream shadow-soft sm:flex sm:rounded-full sm:p-2 sm:pl-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-caramel text-white">
          <Download className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black leading-5">{t('updateTitle')}</p>
          <p className={`text-xs font-semibold leading-4 ${failed ? 'text-orange-200' : 'text-cream/70'}`}>
            {failed ? t('updateError') : t('updateCopy')}
          </p>
        </div>
        <button
          type="button"
          onClick={applyUpdate}
          disabled={applying}
          className="col-span-3 row-start-2 min-h-11 w-full shrink-0 rounded-full bg-caramel px-4 text-sm font-black text-white shadow-lift transition active:scale-95 disabled:cursor-wait disabled:opacity-75 sm:w-auto"
        >
          {applying ? t('updateApplying') : t('updateAction')}
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          disabled={applying}
          className="col-start-3 row-start-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-cream transition active:scale-95 disabled:opacity-50"
          aria-label={t('updateLater')}
          title={t('updateLater')}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
