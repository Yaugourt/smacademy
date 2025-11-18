import { posts } from "@/data/blog";

export async function GET() {
  const site = "https://smacademy.fr";
  const items = posts
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map((p) => {
      const link = `${site}/blog/${p.slug}`;
      return `
<item>
  <title><![CDATA[${p.title}]]></title>
  <link>${link}</link>
  <guid>${link}</guid>
  <pubDate>${new Date(p.date).toUTCString()}</pubDate>
  <description><![CDATA[${p.excerpt}]]></description>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>SM Academy – Blog</title>
    <link>${site}</link>
    <description>Articles SM Academy</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}


