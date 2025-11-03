"use client";

import Link from "next/link";
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4 sm:h-20">
        <Link href="/" className="font-semibold tracking-tight">
          SM Academy
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm transition-colors hover:text-foreground/80",
                pathname === item.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full" style={{ background: "linear-gradient(90deg, var(--primary), var(--brand-orange))" }} />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full" variant="cta">
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;


