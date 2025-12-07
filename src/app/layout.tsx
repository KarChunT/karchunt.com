import './globals.css';
import Script from 'next/script';
import { Layout } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { JetBrains_Mono } from 'next/font/google';
import { getUpdatedAt, generateRandomKey } from '@/lib/utils';
import { DOCS_REPO_BASE } from '@/constants';
import 'nextra-theme-docs/style.css';
import { createMetadata } from '@/lib/metadata';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const metadata = createMetadata({
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

export default async function RootLayout({ children }) {
  const updatedAt = await getUpdatedAt();
  const pageMap = await getPageMap();

  const banner = (
    <Banner storageKey={generateRandomKey()}>
      Last repository update {updatedAt} 🎉
    </Banner>
  );

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${jetbrainsMono.className} dark`}
    >
      <Head
        color={{
          hue: {
            light: 47.9,
            dark: 47.9,
          },
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {GOOGLE_ADSENSE_ID && (
          <meta name="google-adsense-account" content={GOOGLE_ADSENSE_ID} />
        )}
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          sidebar={{
            autoCollapse: true,
          }}
          // banner={banner}
          navbar={<NavBar pageMap={pageMap} />}
          pageMap={pageMap}
          docsRepositoryBase={DOCS_REPO_BASE}
          footer={<Footer />}
          // footer={footer}
          darkMode={true}
          nextThemes={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
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
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('DOMContentLoaded', function() {
                  // Hide <a> links with text "Blog1"
                  document.querySelectorAll('nav a[href^="/blog"]').forEach(function(a) {
                    if (a.textContent.trim() === 'Blog1') {
                      a.style.display = 'none';
                    }
                  });

                  // Hide <li> containing <button data-href="/blog"> with text "Blog1"
                  document.querySelectorAll('li button[data-href="/blog"]').forEach(function(btn) {
                    if (btn.textContent.trim().startsWith('Blog1')) {
                      var li = btn.closest('li');
                      if (li) li.style.display = 'none';
                      else btn.style.display = 'none';
                    }
                  });
                });
              `,
            }}
          /> */}
        </Layout>
      </body>
    </html>
  );
}
