import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Connect from '@/components/Connect';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(personJsonLd)}
      </script>
      <Hero />
      <Projects />
      <About />
      <Connect />
    </>
  );
}
