'use client';

import Link from 'next/link';
import Script from 'next/script';
import type { CaseData } from '@/data/cases';
import Lightbox, { LightboxImage, useLightbox } from '@/components/Lightbox';

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export default function CasePageContent({
  caseData,
  prev,
  next,
}: {
  caseData: CaseData;
  prev?: CaseData;
  next?: CaseData;
}) {
  const lightbox = useLightbox();

  return (
    <>
      <Script id={`case-view-${caseData.slug}`} strategy="afterInteractive">
        {`if(typeof gtag==='function'){gtag('event','case_view',{case_name:'${caseData.slug}'});}`}
      </Script>

      <div className="container cd-page">
        {/* Back */}
        <Link href="/cases" className="cd-back fade-up">
          <BackIcon />
          Все кейсы
        </Link>

        {/* Hero */}
        <section className="cd-hero">
          <span className="cd-hero__badge fade-up">{caseData.category}</span>
          {caseData.detailedCase && (
            <span
              className="cd-detailed-badge fade-up"
              data-tooltip="Владелец проекта дал разрешение раскрывать подробности"
            >
              Подробный кейс
            </span>
          )}
          <h1 className="cd-hero__title fade-up">{caseData.title}</h1>
          <p className="cd-hero__subtitle fade-up">{caseData.subtitle}</p>

          {caseData.demoUrl && (
            <a
              href={caseData.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cd-hero__demo-btn fade-up"
            >
              Смотреть демо ↗
            </a>
          )}

          <LightboxImage
            src={caseData.heroImage}
            alt={`${caseData.title} - скриншот`}
            className="cd-hero__visual fade-up"
            onOpen={lightbox.open}
          />

          <div className="cd-compare fade-up">
            <div className="cd-compare__col cd-compare__col--old">
              <span className="cd-compare__label">Фриланс</span>
              <span className="cd-compare__val">{caseData.compare.freelance.time}</span>
              <span className="cd-compare__val">{caseData.compare.freelance.price}</span>
            </div>
            <div className="cd-compare__col cd-compare__col--new">
              <span className="cd-compare__label">Я + ИИ</span>
              <span className="cd-compare__val">{caseData.compare.ai.time}</span>
              <span className="cd-compare__val">{caseData.compare.ai.price}</span>
            </div>
          </div>
        </section>

        {/* Ситуация */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Ситуация</h2>
          <p className="cd-section__text">{caseData.situation.text}</p>
          <ul className="cd-section__list">
            {caseData.situation.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

        {/* Решение */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Что сделали</h2>
          <p className="cd-section__text">{caseData.solution}</p>

          <LightboxImage
            src={caseData.solutionImage}
            alt={`${caseData.title} - скриншот решения`}
            className={`cd-solution-img fade-up${caseData.solutionImageWide ? ' cd-solution-img--wide' : ''}`}
            onOpen={lightbox.open}
          />

          <h3 className="cd-section__title" style={{ marginTop: 32 }}>Технологии</h3>
          <div className="cd-stack">
            {caseData.stack.map((s) => (
              <span className="cd-stack__item" key={s.name}>
                {s.icon && <i className={s.icon}></i>} {s.name}
              </span>
            ))}
          </div>
        </section>

        {/* Результаты */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Результаты</h2>

          <div className="cd-metrics">
            {caseData.results.map((r, i) => (
              <div className="cd-metric" key={i}>
                <div className="cd-metric__value">{r.value}</div>
                <div
                  className="cd-metric__label"
                  dangerouslySetInnerHTML={{ __html: r.label.replace(/\n/g, '<br/>') }}
                />
              </div>
            ))}
          </div>

          <div className="cd-quote fade-up">
            <p className="cd-quote__text">{caseData.quote.text}</p>
            <span className="cd-quote__author">{caseData.quote.author}</span>
          </div>
        </section>

        {/* CTA */}
        <div className="cd-cta fade-up">
          <h2 className="cd-cta__title">{caseData.cta.title}</h2>
          <p className="cd-cta__text">{caseData.cta.text}</p>
          <a
            href="https://t.me/Neznayuusername"
            target="_blank"
            rel="noopener"
            className="btn btn--primary btn--lg"
          >
            <TelegramIcon />
            Написать в Telegram
          </a>
        </div>

        {/* Nav */}
        <nav className="cd-nav">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="cd-nav__link">
              <span className="cd-nav__label">&larr; Предыдущий кейс</span>
              <span className="cd-nav__title">{prev.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="cd-nav__link cd-nav__link--next">
              <span className="cd-nav__label">Следующий кейс &rarr;</span>
              <span className="cd-nav__title">{next.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
        </nav>
      </div>

      <Lightbox
        src={lightbox.src}
        alt={lightbox.alt}
        isOpen={lightbox.isOpen}
        onClose={lightbox.close}
      />
    </>
  );
}
