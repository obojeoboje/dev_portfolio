import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Telegram-боты с ИИ для бизнеса',
  description:
    'Разработка Telegram-ботов на GPT: консультанты, приём заказов, HR-боты с базой знаний. От 25 000 ₽, срок 5-14 дней. Кейсы с результатами.',
  alternates: {
    canonical: '/services/telegram-bots',
  },
};

const features = [
  {
    title: 'Консультант на GPT',
    text: 'Бот знает ваш ассортимент, цены, условия. Ведёт диалог как живой оператор и закрывает до 80% обращений без менеджера.',
  },
  {
    title: 'Приём заказов 24/7',
    text: 'Автоматический приём заказов, интеграция с оплатой и CRM. Клиенты не уходят из-за долгого ожидания.',
  },
  {
    title: 'HR-бот с базой знаний',
    text: 'RAG-бот, обученный на внутренних документах компании. Отвечает сотрудникам по регламентам и политикам.',
  },
  {
    title: 'Бот для записи',
    text: 'Запись на услуги с выбором даты, времени, специалиста. Автоматические напоминания клиентам.',
  },
];

const relatedCases = [
  { slug: 'flower-shop', title: 'ИИ-бот для цветочного магазина', result: '+340К/мес выручки' },
  { slug: 'hr-bot', title: 'HR-бот с базой знаний', result: '85% вопросов закрывает бот' },
];

export default function TelegramBotsPage() {
  return (
    <section style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="section-title fade-up">Telegram-боты с ИИ для бизнеса</h1>
        <p className="section-subtitle fade-up">
          Умные боты на GPT, которые консультируют, продают и экономят время вашей команды
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
            Нужен бот для вашего бизнеса?
          </h2>
          <p className="section-subtitle">
            От 25 000 ₽. Срок - 5-14 дней. Напишите - оценю задачу бесплатно.
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
