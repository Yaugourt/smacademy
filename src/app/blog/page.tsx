import Link from "next/link";
import Image from "next/image";
import { posts, getAllCategories, getAllTags } from "@/data/blog";
import { CalendarDays, Clock, ChevronRight, Search, Tag, Filter, BookOpen } from "lucide-react";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Blog & Actualités | SM Academy",
  description:
    "Conseils, actualités et guides pratiques sur la formation professionnelle à Nîmes : IRVE, SST, Fibre Optique et réglementation.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const categories = getAllCategories();
  const tags = getAllTags();
  const featured = sorted[0]; // First post is featured
  const others = sorted.slice(1);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Blog Header */}
      <section className="bg-[var(--primary)] text-white py-16 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="mx-auto w-full max-w-screen-xl px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Le Blog SM Academy</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Toute l'actualité de la formation professionnelle, des guides techniques et des conseils pour financer votre avenir.
            </p>
         </div>
      </section>

      <div className="mx-auto w-full max-w-screen-xl px-4 py-12 -mt-8">
         {/* Featured Post */}
         {featured && (
           <Link href={`/blog/${featured.slug}`} className="group block mb-12 relative z-20">
             <div className="grid md:grid-cols-[1.2fr_1fr] bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-transform hover:-translate-y-1">
                <div className="relative h-64 md:h-auto overflow-hidden">
                   <Image
                      src={featured.coverImage || "/blog-placeholder.jpg"}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                   />
                   <div className="absolute top-4 left-4">
                      <Badge className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white border-0">
                        À la une
                      </Badge>
                   </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                   <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {new Date(featured.date).toLocaleDateString("fr-FR", { dateStyle: "long" })}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[var(--brand-orange)] font-medium uppercase tracking-wider text-xs">{featured.category || "Actualité"}</span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-[var(--primary)] transition-colors">
                      {featured.title}
                   </h2>
                   <p className="text-slate-600 mb-6 line-clamp-3 text-lg">
                      {featured.excerpt}
                   </p>
                   <div className="mt-auto flex items-center font-bold text-[var(--primary)]">
                      Lire l'article <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
             </div>
           </Link>
         )}

         <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Grid */}
            <div>
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-[var(--brand-orange)]" />
                    Articles récents
                  </h2>
               </div>

               <div className="grid gap-8 md:grid-cols-2">
                  {others.map((p) => {
                     const wordCount = p.contentHtml.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
                     const reading = Math.max(1, Math.round(wordCount / 200));
                     return (
                        <article key={p.slug} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
                           <Link href={`/blog/${p.slug}`} className="relative h-48 overflow-hidden">
                              <Image
                                 src={p.coverImage || "/blog-placeholder.jpg"}
                                 alt={p.title}
                                 fill
                                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                                 sizes="(min-width: 768px) 50vw, 100vw"
                              />
                              <div className="absolute top-3 right-3">
                                 <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                                    {p.category}
                                 </Badge>
                              </div>
                           </Link>
                           
                           <div className="p-6 flex flex-col flex-1">
                              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                 <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {new Date(p.date).toLocaleDateString("fr-FR")}</span>
                                 <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {reading} min</span>
                              </div>
                              
                              <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                                 <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                              </h3>
                              
                              <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-1">
                                 {p.excerpt}
                              </p>
                              
                              <Link href={`/blog/${p.slug}`} className="text-sm font-semibold text-[var(--primary)] flex items-center mt-auto group-hover:underline underline-offset-4">
                                 Lire la suite
                              </Link>
                           </div>
                        </article>
                     );
                  })}
               </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
               {/* Search Widget (Visual only for now) */}
               <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold mb-4 text-slate-900">Rechercher</h3>
                  <div className="relative">
                     <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                     <Input placeholder="Mots-clés..." className="pl-9 bg-slate-50" />
                  </div>
               </div>

               {/* Categories Widget */}
               <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold mb-4 text-slate-900 flex items-center gap-2">
                    <Filter className="h-4 w-4" /> Catégories
                  </h3>
                  <ul className="space-y-2">
                     {categories.map((c) => (
                        <li key={c}>
                           <Link href={`/blog/categorie/${encodeURIComponent(c)}`} className="flex items-center justify-between text-sm text-slate-600 hover:text-[var(--brand-orange)] hover:bg-slate-50 p-2 rounded-lg transition-colors">
                              <span>{c}</span>
                              <span className="bg-slate-100 text-slate-500 text-xs py-0.5 px-2 rounded-full">
                                 {posts.filter(p => p.category === c).length}
                              </span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Tags Cloud */}
               <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold mb-4 text-slate-900 flex items-center gap-2">
                    <Tag className="h-4 w-4" /> Mots-clés populaires
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     {tags.map((t) => (
                        <Link key={t} href={`/blog/tag/${encodeURIComponent(t)}`}>
                           <Badge variant="outline" className="hover:bg-[var(--brand-orange)] hover:text-white hover:border-[var(--brand-orange)] transition-colors cursor-pointer font-normal text-slate-600">
                              {t}
                           </Badge>
                        </Link>
                     ))}
                  </div>
               </div>

               {/* Newsletter CTA */}
               <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold mb-2">Restez informé</h3>
                  <p className="text-sm text-slate-300 mb-4">
                     Recevez nos derniers guides et actualités directement par email.
                  </p>
                  <div className="space-y-2">
                     <Input placeholder="Votre email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                     <Button className="w-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-600)] text-white">
                        S'abonner
                     </Button>
                  </div>
               </div>
            </aside>
         </div>
      </div>
    </div>
  );
}
