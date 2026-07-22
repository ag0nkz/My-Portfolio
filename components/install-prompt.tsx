'use client';

import { Download, Smartphone } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [visible, setVisible] = useState(false);

  const canShow = useMemo(() => Boolean(installEvent && !installed), [installEvent, installed]);

  useEffect(() => {
    const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean };
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || navigatorWithStandalone.standalone === true;

    setInstalled(isStandalone);

    const storedDismissal = window.localStorage.getItem('portfolio-install-dismissed');
    setVisible(!isStandalone && storedDismissal !== '1');

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setVisible(window.localStorage.getItem('portfolio-install-dismissed') !== '1');
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setVisible(false);
      setInstallEvent(null);
      window.localStorage.removeItem('portfolio-install-dismissed');
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installEvent) {
      return;
    }

    await installEvent.prompt();
    await installEvent.userChoice;
    setVisible(false);
  };

  const handleDismiss = () => {
    window.localStorage.setItem('portfolio-install-dismissed', '1');
    setVisible(false);
  };

  if (!visible || !canShow) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[min(92vw,22rem)] rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-glow backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
          <Smartphone size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-50">Install this app</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">Open it like a native app with offline support and a cleaner mobile experience.</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button type="button" onClick={handleInstall} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">
          <Download size={16} />
          Install
        </button>
        <button type="button" onClick={handleDismiss} className="rounded-full border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-slate-100">
          Later
        </button>
      </div>
    </div>
  );
}