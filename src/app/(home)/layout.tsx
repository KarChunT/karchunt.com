import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { APPNAME } from '@/constants';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="bg-fd-card mt-auto border-t py-12">
      <div className="container mx-auto flex flex-col gap-4 text-center">
        <div>
          <p className="text-sm font-semibold">
            Copyright © {new Date().getFullYear()} {APPNAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
