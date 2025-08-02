// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const { links, ...optionsWithoutLink } = baseOptions; // Exclude the 'link' property
  return (
    <DocsLayout
      tree={source.pageTree}
      {...optionsWithoutLink}
      tabMode="sidebar"
      nav={{ ...baseOptions.nav, mode: 'top' }}
      themeSwitch={{
        enabled: false,
      }}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta || !meta.data.icon) return option;

            return {
              ...option,
              icon: (
                <div className="rounded-lg border p-2">{meta.data.icon}</div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
