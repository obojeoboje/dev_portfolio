const projects = [
  {
    tag: 'EdTech',
    title: 'BonAQA',
    url: 'https://bonaqa.tech',
    description:
      'Платформа для подготовки QA-автоматизаторов. 4\u00A0типа упражнений, 13\u00A0тренажёров, AI-проверка кода через GPT-4o, геймификация с\u00A0XP и\u00A0лигами.',
    highlight: 'Собрал за\u00A0неделю. Один. Студия запросила\u00A0бы 400\u2013700K и\u00A03\u00A0месяца.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'GPT-4o', 'Docker'],
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title fade-up">Что строю</h2>
        <p className="section-subtitle fade-up">
          Свои продукты. С&nbsp;нуля. С&nbsp;AI. В&nbsp;свободное время <em>(которого нет)</em>
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <a
              href={p.url}
              target="_blank"
              rel="noopener"
              className="projects__card fade-up"
              key={i}
            >
              <span className="projects__tag">{p.tag}</span>
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__desc">{p.description}</p>
              <p className="projects__highlight">{p.highlight}</p>
              <div className="projects__stack">
                {p.stack.map((s) => (
                  <span className="badge" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
