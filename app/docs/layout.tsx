import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
// import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
// import { DocsLayout } from 'fumadocs-ui/layouts/flux';
import { baseOptions } from '@/lib/layout.shared';
import Footer from '@/components/Footer';
// import { DOCUMENTATION } from '@/app/constants';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions();
  return (
    <div className="flex flex-col">
      <DocsLayout
        {...base}
        // links={base.links?.filter(
        //   (link) => 'text' in link && link.text === 'Docs',
        // )}
        links={[]}
        tree={source.getPageTree()}
        sidebar={{
          tabs: [], // sidebar set to empty
          // tabs: Object.values(DOCUMENTATION).map((doc) => ({
          //   title: doc.title,
          //   url: doc.href,
          //   icon: (
          //     <div className="flex size-full items-center justify-center rounded-lg text-(--tab-color) max-md:border max-md:bg-(--tab-color)/10 max-md:p-1.5 [&_svg]:size-full">
          //       <doc.icon />
          //     </div>
          //   ),
          // })),
        }}
      >
        {children}
      </DocsLayout>
      <Footer />
    </div>
  );
}
