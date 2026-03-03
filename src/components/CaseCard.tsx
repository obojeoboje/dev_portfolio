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
      <div className="case__thumbnail">
        <img src={data.heroImage} alt={data.title} loading="lazy" />
      </div>
      <div className="case__header">
        <span className="case__number">{data.number}</span>
        <span className="case__category">{data.category}</span>
        {data.ownProject ? (
          <span
            className="case__detailed-badge"
            data-tooltip="Мой собственный продукт, в активной разработке"
          >
            Собственный проект
          </span>
        ) : data.demoProject ? (
          <span
            className="case__demo-project-badge"
            data-tooltip="Проект разработан для демонстрации навыков и стека технологий"
          >
            Демо-проект
          </span>
        ) : data.detailedCase ? (
          <span
            className="case__detailed-badge"
            data-tooltip="Владелец проекта дал разрешение раскрывать подробности"
          >
            Подробный кейс
          </span>
        ) : null}
        {data.demoUrl && (
          <a
            href={data.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="case__demo-badge"
            onClick={(e) => e.stopPropagation()}
          >
            Демо сайт
          </a>
        )}
      </div>
      <h3 className="case__title">{data.title}</h3>
      <p className="case__description">{data.cardDescription || data.subtitle}</p>
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
