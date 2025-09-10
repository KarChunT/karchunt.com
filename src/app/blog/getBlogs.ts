import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';

export async function getBlogs() {
  const route = '/blog';
  const { directories } = normalizePages({
    list: await getPageMap(route),
    route: route,
  });
  return directories
    .filter((project) => project.name != 'index')
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime(),
    );
}
