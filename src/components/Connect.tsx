const socials = [
  {
    name: 'Threads',
    url: 'https://www.threads.net/@obojedev',
    description: 'Основной контент, hot takes, build in public',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/obojedev',
    description: 'Закулисье, быстрые мысли, общение',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/obojedev',
    description: 'Визуальный контент, карусели, рилсы',
  },
  {
    name: 'Habr',
    url: 'https://habr.com',
    description: 'Технические статьи и deep dives',
  },
];

export default function Connect() {
  return (
    <section className="connect" id="connect">
      <div className="container">
        <h2 className="section-title fade-up">Подписывайся</h2>
        <p className="section-subtitle fade-up">
          Весь процесс в&nbsp;открытом доступе. Выбирай платформу.
        </p>

        <div className="connect__grid fade-up">
          {socials.map((s) => (
            <a
              href={s.url}
              target="_blank"
              rel="noopener"
              className="connect__card"
              key={s.name}
            >
              <h3 className="connect__name">{s.name}</h3>
              <p className="connect__desc">{s.description}</p>
            </a>
          ))}
        </div>

        <p className="connect__email fade-up">
          По&nbsp;делу: <a href="mailto:obojealexanderwork@gmail.com">obojealexanderwork@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
