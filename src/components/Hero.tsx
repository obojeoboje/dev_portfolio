export default function Hero() {
  return (
    <section className="hero hero--centered" id="hero">
      <div className="hero__grid-bg"></div>
      <div className="hero__glow"></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__tag fade-up">developer &middot; builder &middot; build&nbsp;in&nbsp;public</p>
          <h1 className="hero__title fade-up">
            oboje<span className="accent">.</span>dev
          </h1>
          <p className="hero__subtitle fade-up">
            Строю продукты с&nbsp;AI. <span className="accent">Один.</span> По&nbsp;вечерам.
          </p>
          <p className="hero__description fade-up">
            Работаю в&nbsp;найме, параллельно шиппю свои проекты с&nbsp;нейросетями.
            Один человек&nbsp;+ AI&nbsp;= целая продуктовая команда <em>(ну, почти)</em>.
            Весь процесс открыто: цифры, код, факапы&nbsp;&mdash; всё как&nbsp;есть.
          </p>
          <div className="hero__actions fade-up">
            <a href="#projects" className="btn btn--primary">Что строю</a>
            <a
              href="https://www.threads.net/@obojedev"
              target="_blank"
              rel="noopener"
              className="btn btn--ghost"
            >
              Threads &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
