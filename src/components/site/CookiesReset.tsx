"use client";

export default function CookiesReset() {
  function resetConsent() {
    try {
      localStorage.removeItem("sm_consent");
      window.location.reload();
    } catch {}
  }
  return (
    <button
      className="rounded-full bg-[var(--brand-orange)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--brand-orange-600)]"
      onClick={resetConsent}
    >
      Réinitialiser mes choix
    </button>
  );
}


