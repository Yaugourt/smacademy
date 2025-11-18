import Link from "next/link";
import Image from "next/image";
import { getAllTags, getPostsByTag } from "@/data/blog";
import { shimmer, toBase64 } from "@/lib/image";
import { CalendarDays } from "lucide-react";

type PageProps = { params: Promise<{ tag: string }> };

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t }));
}

export async function generateMetadata({ params }: PageProps) {
  const { tag } = await params;
  return {
    title: `Tag: ${tag}`,
    description: `Articles taggés ${tag}`,
    alternates: { canonical: `/blog/tag/${tag}` },
  } as any;
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const list = getPostsByTag(tag);
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Tag: {tag}</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
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
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(p.date).toLocaleDateString("fr-FR")}
              </div>
              <h2 className="mt-2 text-base font-semibold">
                <Link href={`/blog/${p.slug}`} className="text-[var(--brand-orange)] underline-offset-4 hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-foreground">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


