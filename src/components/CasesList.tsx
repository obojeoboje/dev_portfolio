import { cases } from '@/data/cases';
import CaseCard from './CaseCard';

export default function CasesList() {
  return (
    <section className="cases" id="cases">
      <div className="container">
        <h2 className="section-title fade-up">Кейсы</h2>
        <p className="section-subtitle fade-up">Собственные и демо-проекты: от идеи до работающего решения</p>

        <div className="cases__grid">
          {cases.map((c) => (
            <CaseCard key={c.slug} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
