import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-2">
            <div className="text-sm font-semibold">SM Academy</div>
            <p className="text-sm text-muted-foreground">
              Centre de formation certifié Qualiopi – Nîmes (Gard).
            </p>
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
              <li>Tél: 09 82 77 44 44 / 07 67 89 19 70</li>
              <li>
                Email: <a href="mailto:contact@smtechnologie.fr">contact@smtechnologie.fr</a>
              </li>
              <li>Lun–Ven 8h–18h</li>
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
        <div className="mt-8 text-xs text-muted-foreground">
          © 2025 SM Academy. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}


