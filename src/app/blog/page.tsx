import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/blog";
import { shimmer, toBase64 } from "@/lib/image";

export const metadata = {
  title: "Blog",
  description:
    "Articles SM Academy: IRVE, SST, financements (OPCO, CPF, France Travail) et conseils formation.",
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-sm text-muted-foreground">Conseils, réglementation et bonnes pratiques.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <article key={p.slug} className="overflow-hidden rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md">
            {p.coverImage && (
              <div className="relative h-36 w-full">
                <Image
                  src={p.coverImage}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 200))}`}
                />
              </div>
            )}
            <div className="p-5">
              <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("fr-FR")}</div>
              <h2 className="mt-2 text-base font-semibold">
                <Link href={`/blog/${p.slug}`} className="underline-offset-4 hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-0.5">{t}</span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


