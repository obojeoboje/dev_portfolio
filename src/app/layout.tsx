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
  metadataBase: new URL('https://privalov.dev'),
  title: {
    default: 'Разработка сайтов, ботов и автоматизации с ИИ — Привалов',
    template: '%s — Привалов',
  },
  description:
    'Разработка Telegram-ботов, сайтов и автоматизации с ИИ. Делаю за дни то, на что другим нужны месяцы. Кейсы с результатами.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Привалов — Разработка с ИИ',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Привалов — Разработка сайтов, ботов и автоматизации с ИИ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Привалов — Разработка с ИИ',
  url: 'https://privalov.dev',
  description:
    'Разработка Telegram-ботов, сайтов и автоматизации с использованием нейросетей. Быстрее. Качественнее. Любой сложности.',
  logo: 'https://privalov.dev/favicon.svg',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://t.me/Neznayuusername',
    },
  ],
  sameAs: ['https://t.me/Neznayuusername'],
  areaServed: {
    '@type': 'Country',
    name: 'Russia',
  },
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
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
