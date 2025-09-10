import { normalizePages } from 'nextra/normalize-pages';
import { getPageMap } from 'nextra/page-map';

export async function getProjects() {
  const route = '/hub/projects';
  const { directories } = normalizePages({
    list: await getPageMap(route),
    route: route,
  });
  return directories
    .filter((project) => project.name != 'index')
    .sort(
      (a, b) =>
        new Date(b.frontMatter.lastUpdated).getTime() -
        new Date(a.frontMatter.lastUpdated).getTime(),
    );
}
