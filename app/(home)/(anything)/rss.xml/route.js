export const dynamic = 'force-static';

import { blog } from '@/lib/source';

const CONFIG = {
  title: 'KarChunt - RSS Feed',
  siteUrl: 'https://karchunt.com',
  description: 'RSS feed for KarChunt blog',
  lang: 'en-us',
};

export async function GET() {
  const allBlogs = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? getName(b.path)).getTime() -
      new Date(a.data.date ?? getName(a.path)).getTime(),
  );

  const posts = allBlogs
    .map(
      (post) => `    <item>
        <title>${post.data.title}</title>
        <description>${post.data.description}</description>
        <link>${CONFIG.siteUrl}${post.url}</link>
        <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
${posts}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
