const steps = [
  {
    number: '01',
    title: 'Обсуждаем задачу',
    text: 'Бесплатная консультация. Разбираю вашу задачу, предлагаю варианты, оцениваю сроки и\u00A0бюджет.',
  },
  {
    number: '02',
    title: 'Предлагаю решение',
    text: 'Готовлю краткое ТЗ с\u00A0описанием решения, стеком технологий и\u00A0этапами. Согласовываем и\u00A0стартуем.',
  },
  {
    number: '03',
    title: 'Разрабатываю',
    text: 'Показываю промежуточные результаты. Вы видите прогресс и\u00A0можете корректировать на\u00A0ходу.',
  },
  {
    number: '04',
    title: 'Сдаю + поддержка',
    text: 'Передаю готовый проект, инструкции и\u00A0доступы. Поддержка 14\u00A0дней после сдачи бесплатно.',
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <h2 className="section-title fade-up">Как я работаю</h2>
        <p className="section-subtitle fade-up">От идеи до готового продукта - 4 простых шага</p>

        <div className="process__grid">
          {steps.map((step) => (
            <div className="process__step fade-up" key={step.number}>
              <div className="process__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
