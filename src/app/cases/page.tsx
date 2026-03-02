import type { Metadata } from 'next';
import { cases } from '@/data/cases';
import CaseCard from '@/components/CaseCard';

export const metadata: Metadata = {
  title: 'Кейсы разработки: боты, сайты, автоматизация',
  description:
    'Реальные проекты с результатами: Telegram-боты с ИИ, сайты, автоматизация бизнеса. Кейсы с цифрами и отзывами клиентов.',
  alternates: {
    canonical: '/cases',
  },
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
