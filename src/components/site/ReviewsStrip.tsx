import Link from "next/link";
import { reviews, reviewsSummary } from "@/data/reviews";

function Stars({ value, size = "sm" }: { value: number; size?: "sm" | "md" }) {
  const max = 5;
  const full = Math.round(Math.max(0, Math.min(max, value)));
  const starSize = size === "md" ? "text-base" : "text-sm";
  return (
    <span className={`inline-flex items-center ${starSize}`} aria-label={`${value} sur 5`}>
      <span className="text-[#fbbc04]">{`★`.repeat(full)}</span>
      <span className="text-foreground/20">{`★`.repeat(max - full)}</span>
    </span>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const i1 = parts[0]?.[0] || "";
  const i2 = parts[1]?.[0] || "";
  return (i1 + i2).toUpperCase();
}

export default function ReviewsStrip() {
  const { rating, total } = reviewsSummary;
  if (!rating || !total) return null;

  return (
    <section className="rounded-xl border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Stars value={rating} size="md" />
          <span>{rating.toFixed(1)} sur Google · {total} avis</span>
        </div>
        <Link
          href="https://www.google.com/search?q=SM+Academy+N%C3%AEmes#lrd=0x"
          className="text-sm text-[var(--brand-orange)] underline-offset-4 hover:underline"
          target="_blank"
        >
          Voir tous les avis
        </Link>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {reviews.slice(0, 3).map((r) => (
          <div key={`${r.author}-${r.time}`} className="rounded-lg border p-3 text-sm">
            <div className="flex items-center gap-2">
              {r.avatar ? (
                // plain img to avoid Next Image domain config
                <img
                  src={r.avatar}
                  alt={r.author}
                  width={28}
                  height={28}
                  style={{ width: 28, height: 28 }}
                  className="rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold">
                  {initials(r.author)}
                </div>
              )}
              <div className="font-medium">{r.author}</div>
            </div>
            <div className="text-xs text-foreground/70">
              <Stars value={r.rating} /> <span className="ml-2">{r.time}</span>
            </div>
            <p className="mt-2 line-clamp-4">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


