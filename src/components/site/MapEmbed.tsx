/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";

type Props = {
  query: string;
  height?: number;
  className?: string;
};

export default function MapEmbed({ query, height = 320, className }: Props) {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sm_consent");
      if (!raw) {
        setAllowed(false);
        return;
      }
      const parsed = JSON.parse(raw) as { marketing?: boolean };
      setAllowed(Boolean(parsed?.marketing));
    } catch {
      setAllowed(false);
    }
  }, []);

  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  if (allowed) {
    return (
      <div className={className}>
        <div className="overflow-hidden rounded-xl border">
          <iframe
            title={`Google Maps – ${query}`}
            src={src}
            width="100%"
            height={height}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border p-6 text-center">
        <div className="text-sm">Google Maps est bloqué tant que vous n’acceptez pas les cookies marketing.</div>
        <button
          className="rounded-full bg-[var(--brand-orange)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--brand-orange-600)]"
          onClick={() => {
            try {
              localStorage.setItem(
                "sm_consent",
                JSON.stringify({ marketing: true, timestamp: Date.now(), version: 1 })
              );
            } catch {}
            setAllowed(true);
          }}
        >
          Autoriser Google Maps
        </button>
      </div>
    </div>
  );
}


