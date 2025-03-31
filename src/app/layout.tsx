import './global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Lora } from 'next/font/google';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: {
    template: '%s | KarChunT',
    default: 'KarChunT',
  },
  description: "KarChunT's personal website",
  metadataBase: new URL('https://karchunt.com'),
});

const lora = Lora({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lora.className} dark`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              type: 'static',
              defaultTag: 'docs',
              tags: [
                {
                  name: 'Docs',
                  value: 'docs',
                },
                {
                  name: 'Blog',
                  value: 'blog',
                },
              ],
            },
          }}
          theme={{
            enabled: false,
            enableSystem: true,
            defaultTheme: 'dark',
            forcedTheme: 'dark',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
