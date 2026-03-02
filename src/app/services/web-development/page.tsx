import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Разработка сайтов и лендингов',
  description:
    'Быстрые современные сайты на Next.js: лендинги, корпоративные сайты, веб-приложения. От 15 000 ₽, срок 3-7 дней. Кейсы с результатами.',
  alternates: {
    canonical: '/services/web-development',
  },
};

const features = [
  {
    title: 'Лендинги с высокой конверсией',
    text: 'Продающие страницы для услуг и продуктов. Адаптивный дизайн, быстрая загрузка, интеграция с аналитикой.',
  },
  {
    title: 'Корпоративные сайты',
    text: 'Современные сайты для компаний: портфолио, каталоги, блоги. SEO-оптимизация из коробки.',
  },
  {
    title: 'Интеграция с CRM и оплатой',
    text: 'Подключение amoCRM, Bitrix24, ЮKassa, Stripe. Онлайн-запись, формы обратной связи, автоматические уведомления.',
  },
  {
    title: 'Доработка существующих сайтов',
    text: 'Ускорение загрузки, исправление ошибок, добавление функций. Миграция с Tilda, WordPress, конструкторов.',
  },
];

const relatedCases = [
  { slug: 'yoga-studio', title: 'Лендинг для студии йоги', result: 'Конверсия 2.1% → 5.8%' },
  { slug: 'bonaqa-tech', title: 'EdTech-платформа bonaqa', result: 'Полная платформа за 1 неделю' },
];

export default function WebDevelopmentPage() {
  return (
    <section style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="section-title fade-up">Разработка сайтов и лендингов</h1>
        <p className="section-subtitle fade-up">
          Быстрые современные сайты на Next.js - от лендинга до веб-приложения
        </p>

        <div className="services__grid" style={{ marginTop: 48 }}>
          {features.map((f, i) => (
            <div className="card fade-up" key={i}>
              <h3 className="card__title">{f.title}</h3>
              <p className="card__text">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ marginTop: 64 }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Кейсы
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
            {relatedCases.map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="card"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{c.title}</span>
                <span className="accent" style={{ fontWeight: 700 }}>{c.result}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="contacts__cta fade-up" style={{ marginTop: 64, marginBottom: 80 }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Нужен современный сайт?
          </h2>
          <p className="section-subtitle">
            От 15 000 ₽. Срок - 3-7 дней. Напишите - оценю задачу бесплатно.
          </p>
          <div className="contacts__buttons" style={{ marginTop: 24 }}>
            <a href="https://t.me/Neznayuusername" target="_blank" rel="noopener" className="btn btn--primary btn--lg">
              Обсудить проект
            </a>
            <Link href="/cases" className="btn btn--ghost btn--lg">
              Смотреть все кейсы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
