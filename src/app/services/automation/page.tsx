import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Автоматизация бизнес-процессов',
  description:
    'Автоматизация рутины: парсинг данных, интеграции API, дашборды аналитики, автоматизация маркетплейсов. От 30 000 ₽, срок 1-3 недели.',
  alternates: {
    canonical: '/services/automation',
  },
};

const features = [
  {
    title: 'Автоматизация маркетплейсов',
    text: 'Динамическое ценообразование, генерация карточек через ИИ, мониторинг конкурентов. WB, Ozon, Яндекс.Маркет.',
  },
  {
    title: 'Парсинг и сбор данных',
    text: 'Автоматический сбор данных с сайтов, маркетплейсов, соцсетей. Обработка и загрузка в вашу систему.',
  },
  {
    title: 'Интеграции API',
    text: 'Связываю CRM, мессенджеры, платёжные системы, складские программы. Данные ходят между системами автоматически.',
  },
  {
    title: 'Дашборды и аналитика',
    text: 'Единая панель с ключевыми метриками бизнеса. Автоматические отчёты, уведомления по триггерам.',
  },
];

const relatedCases = [
  { slug: 'marketplace-seller', title: 'Автоматизация для селлера', result: 'Экономия 25 ч/неделю' },
];

export default function AutomationPage() {
  return (
    <section style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="section-title fade-up">Автоматизация бизнес-процессов</h1>
        <p className="section-subtitle fade-up">
          Убираю рутину и экономлю десятки часов в неделю
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
            Нужна автоматизация?
          </h2>
          <p className="section-subtitle">
            От 30 000 ₽. Срок - 1-3 недели. Напишите - оценю задачу бесплатно.
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
