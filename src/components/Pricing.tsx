const pricingData = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M10 21h4" />
      </svg>
    ),
    title: 'Telegram-боты и\u00A0чат-боты',
    items: [
      { name: 'Бот-визитка / каталог', price: '10 - 15 тыс. \u20BD', time: 'от 2 дней' },
      { name: 'ИИ-бот для клиентского сервиса', price: '25 - 50 тыс. \u20BD', time: 'от 7 дней' },
      { name: 'HR-бот / бот с базой знаний (RAG)', price: '40 - 80 тыс. \u20BD', time: 'от 7 дней' },
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: 'Веб-разработка',
    items: [
      { name: 'Лендинг под ключ', price: '15 - 30 тыс. \u20BD', time: 'от 2 дней' },
      { name: 'Корпоративный сайт', price: '30 - 60 тыс. \u20BD', time: 'от 7 дней' },
      { name: 'Интернет-магазин', price: '50 - 120 тыс. \u20BD', time: 'от 14 дней' },
      { name: 'Доработка сайта', price: 'от 5 тыс. \u20BD', time: 'от 1 дня' },
    ],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
      </svg>
    ),
    title: 'Автоматизация',
    items: [
      { name: 'Парсер данных', price: '10 - 25 тыс. \u20BD', time: 'от 3 дней' },
      { name: 'Автоматизация маркетплейсов', price: '30 - 70 тыс. \u20BD', time: 'от 7 дней' },
      { name: 'Интеграция сервисов / API', price: '15 - 40 тыс. \u20BD', time: 'от 5 дней' },
      { name: 'ИИ-генерация контента', price: 'от 5 тыс. \u20BD', time: 'от 1 дня' },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title fade-up">Цены</h2>
        <p className="section-subtitle fade-up">
          Фиксированная стоимость, фиксированные сроки. Предоплата 50%, остаток после сдачи.
        </p>

        <div className="pricing__grid">
          {pricingData.map((col, i) => (
            <div className="pricing__column fade-up" key={i}>
              <div className="pricing__header">
                {col.icon}
                <h3>{col.title}</h3>
              </div>
              <ul className="pricing__list">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <div className="pricing__item-head">
                      <span className="pricing__name">{item.name}</span>
                      <span className="pricing__price">{item.price}</span>
                    </div>
                    <span className="pricing__time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pricing__note fade-up">
          Точная стоимость - после обсуждения задачи. Поддержка 14 дней после сдачи бесплатно.
        </p>
      </div>
    </section>
  );
}
