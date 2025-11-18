"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/site/ThemeToggle";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4 sm:h-20">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src="https://smacademy.fr/wp-content/uploads/2024/09/logo-sma.png"
            alt="SM Academy"
            width={120}
            height={28}
            priority
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-[15px] font-medium transition-colors hover:text-[var(--brand-orange)]",
                pathname === item.href ? "text-foreground" : "text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full" style={{ background: "var(--brand-orange)" }} />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            className="rounded-full border-[var(--brand-orange)] text-[var(--brand-orange)] hover:bg-[var(--brand-orange)] hover:text-white"
            variant="outline"
          >
            <Link href="#contact">Être rappelé</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full" variant="default">
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;


