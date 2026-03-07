import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import YandexMetrika from '@/components/YandexMetrika';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oboje.dev'),
  title: {
    default: 'oboje.dev — строю продукты с AI, делюсь процессом',
    template: '%s — oboje.dev',
  },
  description:
    'Developer-creator. Строю свои продукты с нейросетями параллельно с наймом. Build in public: цифры, код, факапы — всё открыто.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'oboje.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'oboje.dev — строю продукты с AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'obojedev',
  url: 'https://oboje.dev',
  description:
    'Developer-creator. Строю продукты с AI, делюсь процессом открыто.',
  sameAs: [
    'https://www.threads.net/@obojedev',
    'https://instagram.com/obojedev',
    'https://t.me/obojedev',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
      </head>
      <body>
        <GoogleAnalytics />
        <YandexMetrika />
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
