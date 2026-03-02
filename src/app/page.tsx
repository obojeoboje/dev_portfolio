import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ, { faqJsonLd } from '@/components/FAQ';
import Contacts from '@/components/Contacts';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Telegram-боты и чат-боты с ИИ',
        description:
          'Разработка Telegram-ботов на GPT: консультанты, продажи, HR-боты с базой знаний. Интеграция с CRM и платёжными системами.',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Привалов — Разработка с ИИ',
          url: 'https://privalov.dev',
        },
        areaServed: 'Russia',
        priceRange: '25 000 - 80 000 ₽',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Веб-разработка',
        description:
          'Сайты, лендинги, веб-приложения на Next.js и React. Быстрая загрузка, адаптивный дизайн, интеграция с CRM.',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Привалов — Разработка с ИИ',
          url: 'https://privalov.dev',
        },
        areaServed: 'Russia',
        priceRange: '15 000 - 100 000 ₽',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Автоматизация бизнес-процессов',
        description:
          'Парсеры, интеграции API, автоматизация маркетплейсов, дашборды аналитики. Экономия десятков часов ручной работы.',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Привалов — Разработка с ИИ',
          url: 'https://privalov.dev',
        },
        areaServed: 'Russia',
        priceRange: '30 000 - 150 000 ₽',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <FAQ />
      <Contacts />
    </>
  );
}
