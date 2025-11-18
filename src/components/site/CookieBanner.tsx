"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Consent = {
  marketing: boolean;
  timestamp: number;
  version: number;
};

const STORAGE_KEY = "sm_consent";
const CONSENT_VERSION = 1;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw) as Consent;
      if (!parsed || parsed.version !== CONSENT_VERSION) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(marketing: boolean) {
    const payload: Consent = {
      marketing,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-screen-xl px-4 pb-4">
      <div className="rounded-xl border bg-background p-4 shadow-md">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre accord, des cookies/traceurs pour
            afficher du contenu externe (Google Maps, Calendly) et mesurer l’audience.
          </p>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button
              onClick={() => saveConsent(false)}
              variant="outline"
              className="rounded-full"
            >
              Refuser
            </Button>
            <Button
              onClick={() => saveConsent(true)}
              variant="cta"
              className="rounded-full"
            >
              Accepter
            </Button>
          </div>
        </div>
        <div className="mt-2 text-xs">
          Voir notre{" "}
          <a className="underline" href="/confidentialite">
            politique de confidentialité
          </a>{" "}
          et{" "}
          <a className="underline" href="/cookies">
            politique cookies
          </a>
          .
        </div>
      </div>
    </div>
  );
}


