import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-sm font-semibold">SM Academy</div>
            <p className="text-sm text-muted-foreground">
              Centre de formation certifié Qualiopi – Nîmes (Gard).
            </p>
            <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-border w-fit">
              <Image src="/certificationqualiopi.png" alt="Certification Qualiopi" width={80} height={40} className="object-contain" />
            </div>
            <address className="not-italic text-xs text-muted-foreground">
              94 Avenue du Docteur Fleming<br />
              30900 Nîmes, France<br />
              Tél: 09 82 77 44 44
            </address>
          </div>
          <div>
            <div className="text-sm font-semibold">Formations</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="/formations/sst">SST</Link>
              </li>
              <li>
                <Link href="/formations/irve">IRVE</Link>
              </li>
              <li>
                <Link href="/formations/fibre-optique-d3">Fibre Optique D3</Link>
              </li>
              <li>
                <Link href="/formations/gestes-et-postures">Gestes & Postures</Link>
              </li>
              <li>
                <Link href="/formations/formateur">Formation de formateur</Link>
              </li>
              <li>
                <Link href="/formations/pack-office">Pack Office</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>09 82 77 44 44 / 06 68 99 74 36</li>
              <li>
                <a href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a>
              </li>
              <li>Lundi au Vendredi de 8h à 18h</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Réseaux</div>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="#" aria-disabled className="cursor-not-allowed opacity-60">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" aria-disabled className="cursor-not-allowed opacity-60">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>© 2025 SM Academy. Tous droits réservés.</div>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-[var(--brand-orange)]">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-[var(--brand-orange)]">Confidentialité</Link>
            <Link href="/cookies" className="hover:text-[var(--brand-orange)]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


