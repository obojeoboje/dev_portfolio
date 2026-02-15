import type { Metadata } from 'next';
import { cases } from '@/data/cases';
import CaseCard from '@/components/CaseCard';

export const metadata: Metadata = {
  title: 'Кейсы — Привалов',
  description: 'Реальные проекты: Telegram-боты, сайты, автоматизация. Смотрите результаты и технологии.',
};

export default function CasesPage() {
  return (
    <section className="cases" id="cases" style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="section-title fade-up">Кейсы</h1>
        <p className="section-subtitle fade-up">
          Проекты, которые решили реальные задачи бизнеса
        </p>

        <div className="cases__grid">
          {cases.map((c) => (
            <CaseCard key={c.slug} data={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
