import type { Metadata } from 'next';
import Script from 'next/script';
import { JetBrains_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { createMetadata } from '@/lib/metadata';
import './globals.css';
import 'katex/dist/katex.css';
import SearchDialog from '@/components/search';

export const metadata: Metadata = createMetadata({
  title: {
    template: '%s | KarChunT',
    default: 'KarChunT',
  },
  description: "KarChunT's personal website",
  metadataBase: new URL('https://karchunt.com'),
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const GOOGLE_ADSENSE_ID = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jetbrainsMono.className} dark`}
    >
      <head>
        {GOOGLE_ADSENSE_ID && (
          <meta name="google-adsense-account" content={GOOGLE_ADSENSE_ID} />
        )}
      </head>

      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
          {/* Google Analytics Script */}
          {GOOGLE_ANALYTICS_ID && (
            <>
              <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
              />
              <Script id="google-analytics">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GOOGLE_ANALYTICS_ID}');
                `}
              </Script>
            </>
          )}
        </RootProvider>
      </body>
    </html>
  );
}
