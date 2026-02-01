import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/src/lib/layout.shared';
import type { ReactNode } from 'react';
import Footer from '@/src/components/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions()}>
      {children}
      <Footer />
    </HomeLayout>
  );
}
