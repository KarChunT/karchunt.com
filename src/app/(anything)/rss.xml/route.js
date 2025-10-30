export const dynamic = 'force-static';

import { getBlogs } from '../../blog/getBlogs';

const CONFIG = {
  title: 'KarChunt - RSS Feed',
  siteUrl: 'https://karchunt.com',
  description: 'RSS feed for KarChunt blog',
  lang: 'en-us',
};

export async function GET() {
  const allBlogs = await getBlogs();
  const posts = allBlogs
    .map(
      (post) => `    <item>
        <title>${post.title}</title>
        <description>${post.frontMatter.description}</description>
        <link>${CONFIG.siteUrl}${post.route}</link>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
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
