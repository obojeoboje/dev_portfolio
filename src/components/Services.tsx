const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M10 21h4" />
        <path d="M12 18v3" />
      </svg>
    ),
    title: 'Telegram-боты и чат-боты с\u00A0ИИ',
    text: 'Умные боты, которые ведут диалог как живой оператор. Приём заказов, консультации, HR-помощники, боты для обучения. Интеграция с\u00A0GPT, базами знаний и\u00A0CRM.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: 'Веб-разработка',
    text: 'Лендинги, корпоративные сайты, интернет-магазины. Современный стек, адаптивный дизайн, интеграция с\u00A0платёжными системами и\u00A0CRM. Доработка существующих сайтов.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    ),
    title: 'Автоматизация бизнес-процессов',
    text: 'Интеграции API, CRM, парсинг данных, автоматические отчёты. n8n-пайплайны, генерация контента через ИИ, мониторинг и\u00A0аналитика.',
  },
];

const badges = [
  'Python', 'OpenAI', 'Telegram API', 'React', 'Next.js',
  'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'LangChain',
  'FastAPI', 'n8n',
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title fade-up">Что я делаю</h2>
        <p className="section-subtitle fade-up">Три направления, в которых ИИ даёт максимальный результат</p>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="card fade-up" key={i}>
              <div className="card__icon">{s.icon}</div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="tech-badges fade-up">
          {badges.map((b) => (
            <span className="badge" key={b}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
