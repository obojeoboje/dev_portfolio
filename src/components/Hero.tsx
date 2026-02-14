export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__grid-bg"></div>
      <div className="hero__glow"></div>
      <div className="container hero__content">
        <p className="hero__tag fade-up">Fullstack-разработчик &middot; ИИ-интеграции</p>
        <h1 className="hero__title fade-up">
          Александр<br />Привалов
        </h1>
        <p className="hero__subtitle fade-up">
          Разрабатываю с&nbsp;ИИ. <span className="accent">Быстрее.</span> Качественнее. Любой&nbsp;сложности.
        </p>
        <p className="hero__description fade-up">
          Использую нейросети на каждом этапе разработки&nbsp;- от&nbsp;проектирования до&nbsp;тестирования.
          Это позволяет создавать продукты <strong>в&nbsp;2&ndash;3 раза быстрее</strong> без потери качества.
          Боты, сайты, автоматизация&nbsp;- любая задача.
        </p>
        <div className="hero__actions fade-up">
          <a href="#contacts" className="btn btn--primary">Обсудить проект</a>
          <a href="#cases" className="btn btn--ghost">Смотреть кейсы</a>
        </div>
      </div>
    </section>
  );
}
