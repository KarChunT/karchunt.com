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

  return getIndexPageMap(pageMap).map((pageItem, index) => {
    if (!Array.isArray(pageItem)) {
      return (
        <h2 className="mt-6 text-2xl font-bold" key={index}>
          {pageItem.title}
        </h2>
      );
    }
    return (
      <Cards key={index}>
        {pageItem.map((item) => {
          return (
            <Cards.Card
              key={item.name}
              // @ts-expect-error -- fixme
              title={item.title}
              // @ts-expect-error -- fixme
              href={item.route || item.href}
            />
          );
        })}
      </Cards>
    );
  });
};
