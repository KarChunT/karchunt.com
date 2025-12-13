import type { MetadataRoute } from 'next';
import { getPageMap } from 'nextra/page-map';

export const dynamic = 'force-static';

function collectRoutes(node: any, baseUrl = ''): string[] {
  let routes: string[] = [];

  if (Array.isArray(node)) {
    for (const child of node) {
      routes = routes.concat(collectRoutes(child, baseUrl));
    }
    return routes;
  }

  if (typeof node === 'object' && node !== null) {
    // If this node has a route, add it
    if (node.route && typeof node.route === 'string') {
      routes.push(node.route);
    }
    // If this node has children, traverse them
    if (node.children) {
      routes = routes.concat(collectRoutes(node.children, baseUrl));
    }
    // Some nodes may have 'items' with more children (like docs)
    if (node.items && typeof node.items === 'object') {
      for (const key in node.items) {
        routes = routes.concat(collectRoutes(node.items[key], baseUrl));
      }
    }
    // Some nodes may have 'data' with more children (root node)
    if (node.data && typeof node.data === 'object') {
      for (const key in node.data) {
        routes = routes.concat(collectRoutes(node.data[key], baseUrl));
      }
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageMap = await getPageMap();
  const allRoutes = collectRoutes(pageMap);
  const uniqueRoutes = Array.from(new Set(allRoutes)).filter(Boolean);

  // Generate sitemap entries
  const baseUrl = 'https://karchunt.com';
  const now = new Date();

  return uniqueRoutes.map((route) => ({
    url: baseUrl + route,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
