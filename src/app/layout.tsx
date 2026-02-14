import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Александр Привалов - Разработка с ИИ',
  description:
    'Разработка Telegram-ботов, сайтов и автоматизации с использованием нейросетей. Быстрее. Качественнее. Любой сложности.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <ScrollReveal />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
