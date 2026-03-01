'use client';

import Link from 'next/link';
import type { CaseData } from '@/data/cases';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function CaseCard({ data }: { data: CaseData }) {
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) return;
    window.location.href = `/cases/${data.slug}`;
  };

  return (
    <article className="case fade-up" onClick={handleClick}>
      <div className="case__header">
        <span className="case__number">{data.number}</span>
        <span className="case__category">{data.category}</span>
        {data.detailedCase && (
          <span
            className="case__detailed-badge"
            data-tooltip="Владелец проекта дал разрешение раскрывать подробности"
          >
            Подробный кейс
          </span>
        )}
        {data.demoUrl && (
          <a
            href={data.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case__demo-badge"
            onClick={(e) => e.stopPropagation()}
          >
            Демо сайт ↗
          </a>
        )}
      </div>
      <h3 className="case__title">{data.title}</h3>
      <div className="case__meta">
        {data.card.meta.flatMap((m, i) =>
          i > 0
            ? [<span key={`dot-${i}`} className="case__dot"></span>, <span key={i}>{m}</span>]
            : [<span key={i}>{m}</span>]
        )}
      </div>
      <div className="case__body">
        <div className="case__block">
          <h4>Задача</h4>
          <p>{data.card.task}</p>
        </div>
        <div className="case__block">
          <h4>Решение</h4>
          <p>{data.card.solution}</p>
        </div>
        <div className="case__block">
          <h4>Результат</h4>
          <ul className="case__results">
            {data.card.results.map((r, i) => (
              <li key={i}>
                <strong>{r.bold}</strong>{r.text ? ` ${r.text}` : ''}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="case__compare">
        <div className="case__compare-col case__compare-col--old">
          <span className="case__compare-label">Фриланс</span>
          <span className="case__compare-value">{data.compare.freelance.time}</span>
          <span className="case__compare-value">{data.compare.freelance.price}</span>
        </div>
        <div className="case__compare-col case__compare-col--new">
          <span className="case__compare-label">Я + ИИ</span>
          <span className="case__compare-value">{data.compare.ai.time}</span>
          <span className="case__compare-value">{data.compare.ai.price}</span>
        </div>
      </div>
      <div className="case__stack">
        {data.card.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <Link href={`/cases/${data.slug}`} className="case__link">
        Подробнее <ArrowIcon />
      </Link>
    </article>
  );
}
