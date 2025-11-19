import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/blog";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, User, Tag, Share2, ArrowLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/forms/ContactForm";

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

  const wordCount = post.contentHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
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

      {/* Article Header */}
      <div className="bg-white border-b">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-12 max-w-4xl">
           <Breadcrumbs items={[{ href: "/", label: "Accueil" }, { href: "/blog", label: "Blog" }, { label: post.title }]} />
           
           <div className="mt-8 space-y-6 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
                 {post.category && (
                    <Badge variant="secondary" className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/20 border-0 font-medium">
                       {post.category}
                    </Badge>
                 )}
                 <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("fr-FR", { dateStyle: "long" })}</span>
                 <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {readingTime} min de lecture</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                 {post.title}
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                 {post.excerpt}
              </p>
              
              <div className="flex items-center justify-center gap-3 pt-2">
                 <div className="flex items-center gap-2 text-sm font-medium text-slate-900 bg-slate-100 pr-4 pl-2 py-1.5 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-white border flex items-center justify-center text-[var(--primary)]">
                       <User className="h-4 w-4" />
                    </div>
                    {post.author || "SM Academy"}
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.coverImage && (
        <div className="mx-auto w-full max-w-screen-xl px-4 max-w-5xl -mt-8 relative z-10">
           <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                 src={post.coverImage}
                 alt={post.title}
                 fill
                 className="object-cover"
                 priority
              />
           </div>
        </div>
      )}

      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 max-w-screen-lg">
         <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Content */}
            <article className="min-w-0">
               <div 
                 className="prose prose-lg prose-slate max-w-none 
                 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
                 prose-a:text-[var(--brand-orange)] prose-a:no-underline hover:prose-a:underline
                 prose-img:rounded-xl prose-img:shadow-md"
                 dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
               />

               {/* Tags */}
               {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200">
                     <div className="flex items-center gap-2 mb-4 text-sm font-bold text-slate-900">
                        <Tag className="h-4 w-4" /> Sujets abordés :
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                           <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag)}`}>
                              <Badge variant="outline" className="hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] cursor-pointer py-1.5 px-3 text-sm font-normal text-slate-600">
                                 #{tag}
                              </Badge>
                           </Link>
                        ))}
                     </div>
                  </div>
               )}

               {/* CTA Share */}
               <div className="mt-12 bg-slate-100 rounded-2xl p-8 text-center">
                  <h3 className="font-bold text-lg mb-2">Vous avez aimé cet article ?</h3>
                  <p className="text-slate-600 mb-6 text-sm">Partagez-le avec votre réseau ou découvrez nos formations liées.</p>
                  <div className="flex justify-center gap-4">
                     <Button variant="outline" className="gap-2 bg-white">
                        <Share2 className="h-4 w-4" /> Partager
                     </Button>
                     <Button className="gap-2 bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white">
                        Voir nos formations
                     </Button>
                  </div>
               </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
               {/* Newsletter Box */}
               <div className="bg-[var(--primary)] text-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-2">Newsletter Pro</h3>
                  <p className="text-blue-100 text-sm mb-4">
                     Recevez nos conseils sur la formation et la réglementation chaque mois.
                  </p>
                  <div className="space-y-2">
                     <input 
                        type="email" 
                        placeholder="Votre email professionnel" 
                        className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)]"
                     />
                     <Button className="w-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white">
                        Je m'abonne
                     </Button>
                  </div>
               </div>

               {/* Related Posts */}
               {related.length > 0 && (
                  <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                     <h3 className="font-bold text-slate-900 mb-4">Articles similaires</h3>
                     <ul className="space-y-4">
                        {related.map((r) => (
                           <li key={r.slug} className="group">
                              <Link href={`/blog/${r.slug}`} className="block">
                                 <div className="text-xs text-slate-500 mb-1">{new Date(r.date).toLocaleDateString("fr-FR")}</div>
                                 <div className="font-semibold text-slate-800 group-hover:text-[var(--brand-orange)] transition-colors line-clamp-2">
                                    {r.title}
                                 </div>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               )}
            </aside>

         </div>
      </div>
      
      {/* Back to Blog */}
      <div className="mx-auto w-full max-w-screen-xl px-4 pb-12">
         <Button variant="ghost" asChild className="hover:bg-slate-100 text-slate-600">
            <Link href="/blog">
               <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
            </Link>
         </Button>
      </div>
    </div>
  );
}
