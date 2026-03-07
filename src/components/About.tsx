export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title fade-up">Обо мне</h2>
        <p className="section-subtitle fade-up">
          Не&nbsp;инфоцыган. Не&nbsp;промпт-инженер. Инженер с&nbsp;продуктовым опытом в&nbsp;бигтехе.
        </p>

        <div className="about__bio fade-up">
          <p>
            В&nbsp;IT с&nbsp;2021. Начинал тестировщиком, дорос до&nbsp;лида в&nbsp;бигтехе.
            В&nbsp;2023 написал первую в&nbsp;рунете статью про ChatGPT в&nbsp;тестировании&nbsp;&mdash;
            <strong>40&nbsp;000+ просмотров</strong> на&nbsp;Хабре.
          </p>
          <p>
            Потом понял: один человек с&nbsp;AI может закрывать задачи целой продуктовой команды.
            Теперь строю свои продукты параллельно с&nbsp;наймом и&nbsp;делюсь процессом.
          </p>
        </div>

        <div className="about__pillars">
          <div className="about__pillar fade-up">
            <span className="about__number">01</span>
            <h3>Scratch Your Own Itch</h3>
            <p>
              Все продукты из&nbsp;личной боли. Не&nbsp;market research&nbsp;&mdash;
              конкретная проблема, которую решаю для&nbsp;себя.
            </p>
          </div>
          <div className="about__pillar fade-up">
            <span className="about__number">02</span>
            <h3>Ship Fast</h3>
            <p>
              Один&nbsp;+ AI&nbsp;= скорость, которая раньше требовала команду.
              Не&nbsp;ждать идеальности&nbsp;&mdash; запускать.
            </p>
          </div>
          <div className="about__pillar fade-up">
            <span className="about__number">03</span>
            <h3>Build in Public</h3>
            <p>
              Весь процесс открыт: что строю, как строю, где облажался.
              Прозрачность&nbsp;= доверие.
            </p>
          </div>
          <div className="about__pillar fade-up">
            <span className="about__number">04</span>
            <h3>Vibe Coding</h3>
            <p>
              AI не&nbsp;заменит разработчика&nbsp;&mdash; он&nbsp;превращает одного
              в&nbsp;целую команду. Это инженерия с&nbsp;AI, а&nbsp;не&nbsp;промпт-инженерия.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
