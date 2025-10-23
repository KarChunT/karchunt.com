import { Cards } from 'nextra/components';
import { getIndexPageMap, getPageMap } from 'nextra/page-map';
import type { FC } from 'react';

export const DocsOverview: FC<{
  filePath: string;
}> = async ({ filePath }) => {
  const currentRoute = filePath
    .replace(/^src\/app/, '') // Remove 'src/app'
    .replace('/page.mdx', ''); // Remove '/page.mdx'
  const pageMap = await getPageMap(currentRoute);

  const groups = getIndexPageMap(pageMap).map((pageItem, index) => {
    if (!Array.isArray(pageItem)) {
      return (
        <h2 className="mt-6 text-2xl font-bold" key={index}>
          {pageItem.title}
        </h2>
      );
    }

    // pageItem is an array of items; each item may have children
    const cards = pageItem.flatMap((item) => {
      // if item has children, render each child as a card
      if (
        'children' in item &&
        Array.isArray(item.children) &&
        item.children.length > 0
      ) {
        return item.children
          .slice(1)
          .map((child) => (
            <Cards.Card
              key={child.name}
              title={child.title ?? child.name}
              href={child.route ?? child.href}
            />
          ));
      }

      return (
        <Cards.Card
          key={item.name}
          title={(item as any).title ?? item.name}
          href={(item as any).route ?? (item as any).href}
        />
      );
    });

    return <Cards key={index}>{cards}</Cards>;
  });

  return <>{groups}</>;
};
