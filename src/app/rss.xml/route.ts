import { listPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 300;

export async function GET() {
  const { data } = await listPosts({ pageSize: 50 });
  const items = data
    .map((post) => {
      return `\n    <item>\n      <title><![CDATA[${post.title}]]></title>\n      <link>${absoluteUrl(`/articles/${post.slug}`)}</link>\n      <guid>${absoluteUrl(`/articles/${post.slug}`)}</guid>\n      <pubDate>${post.published_at || new Date().toISOString()}</pubDate>\n      <description><![CDATA[${post.description || ""}]]></description>\n    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Fiitsa Blog</title>\n    <link>${absoluteUrl("/")}</link>\n    <description>Strategies et operations pour restaurants.</description>\n    ${items}\n  </channel>\n</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
