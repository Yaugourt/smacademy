import Link from "next/link";
import Image from "next/image";
import { posts, getAllCategories, getAllTags } from "@/data/blog";
import { CalendarDays, Clock } from "lucide-react";
import { shimmer, toBase64 } from "@/lib/image";

export const metadata = {
  title: "Blog",
  description:
    "Articles SM Academy: IRVE, SST, financements (OPCO, CPF, France Travail) et conseils formation.",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const categories = getAllCategories();
  const tags = getAllTags();
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-sm text-foreground">Conseils, réglementation et bonnes pratiques.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {sorted.map((p) => {
            const wordCount = p.contentHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
            const reading = Math.max(1, Math.round(wordCount / 200));
            return (
              <article key={p.slug} className="overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md">
                {p.coverImage && (
                  <div className="relative h-40 w-full">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 50vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 200))}`}
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-foreground/70">
                    <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString("fr-FR")}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{reading} min</span>
                    {p.category && (
                      <Link href={`/blog/categorie/${encodeURIComponent(p.category)}`} className="ml-auto rounded-full border px-2 py-0.5 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">{p.category}</Link>
                    )}
                  </div>
                  <h2 className="mt-2 text-base font-semibold">
                    <Link href={`/blog/${p.slug}`} className="text-[var(--brand-orange)] underline-offset-4 hover:underline">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-foreground">{p.excerpt}</p>
                  {p.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {p.tags.map((t) => (
                        <Link key={t} className="rounded-full border px-2 py-0.5 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]" href={`/blog/tag/${encodeURIComponent(t)}`}>{t}</Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl border p-4">
            <div className="text-sm font-semibold">Catégories</div>
            <ul className="mt-3 space-y-1 text-sm">
              {categories.map((c) => (
                <li key={c}>
                  <Link className="hover:text-[var(--brand-orange)]" href={`/blog/categorie/${encodeURIComponent(c)}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border p-4">
            <div className="text-sm font-semibold">Tags</div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {tags.map((t) => (
                <Link key={t} className="rounded-full border px-2 py-0.5 hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]" href={`/blog/tag/${encodeURIComponent(t)}`}>{t}</Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}


