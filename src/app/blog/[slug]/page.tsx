import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/blog";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import Link from "next/link";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog SM Academy`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://smacademy.fr/blog/${post.slug}`,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  } as any;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => (post.category && p.category === post.category) || p.tags?.some((t) => (post.tags || []).includes(t)))
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-screen-md px-4 py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            author: [{ "@type": "Organization", name: post.author || "SM Academy" }],
            publisher: {
              "@type": "Organization",
              name: "SM Academy",
              logo: {
                "@type": "ImageObject",
                url: "https://smacademy.fr/wp-content/uploads/2024/09/logo-sma.png",
              },
            },
            image: post.coverImage ? [post.coverImage] : undefined,
            mainEntityOfPage: `https://smacademy.fr/blog/${post.slug}`,
          }),
        }}
      />
      <Breadcrumbs items={[{ href: "/", label: "Accueil" }, { href: "/blog", label: "Blog" }, { label: post.title }]} />
      <article className="prose mt-4 max-w-none">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <div className="mt-1 text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("fr-FR")}</div>
        <div className="mt-6 text-[15px] leading-7 text-foreground/90" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      {related.length ? (
        <div className="mt-12">
          <div className="text-sm font-semibold">Articles liés</div>
          <ul className="mt-3 list-inside list-disc text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`} className="hover:text-[var(--brand-orange)]">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}


