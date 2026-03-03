'use client';

import Link from 'next/link';
import Script from 'next/script';
import type { CaseData } from '@/data/cases';
import Lightbox, { LightboxImage, useLightbox } from '@/components/Lightbox';

/* ─── Icons ─── */
const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
  </svg>
);

/* ─── Feature section with real image ─── */
function FeatureSection({
  title,
  children,
  imageSrc,
  imageAlt,
  reverse,
  onOpen,
}: {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <section className={`cd-feature fade-up${reverse ? ' cd-feature--reverse' : ''}`}>
      <div className="cd-feature__text">
        <h2 className="cd-feature__title">{title}</h2>
        {children}
      </div>
      <div className="cd-feature__visual">
        <LightboxImage
          src={imageSrc}
          alt={imageAlt}
          className="cd-feature__img"
          onOpen={onOpen}
        />
      </div>
    </section>
  );
}

/* ─── Main component ─── */
export default function BonaqaDetailPage({
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
      <Script id="case-view-bonaqa" strategy="afterInteractive">
        {`if(typeof gtag==='function'){gtag('event','case_view',{case_name:'bonaqa-tech'});}`}
      </Script>

      <div className="container cd-page cd-page--wide">
        {/* ── Back ── */}
        <Link href="/cases" className="cd-back fade-up">
          <BackIcon /> Все кейсы
        </Link>

        {/* ══════════════════════════════════════
            HERO
           ══════════════════════════════════════ */}
        <section className="cd-hero">
          <span className="cd-hero__badge fade-up">{caseData.category}</span>
          <span
            className="cd-detailed-badge fade-up"
            data-tooltip="Мой собственный продукт, в активной разработке"
          >
            Собственный проект
          </span>
          <h1 className="cd-hero__title fade-up">{caseData.title}</h1>
          <p className="cd-hero__subtitle fade-up">{caseData.subtitle}</p>

          {caseData.demoUrl && (
            <a
              href={caseData.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cd-hero__demo-btn fade-up"
            >
              Открыть платформу &#8599;
            </a>
          )}

          <LightboxImage
            src="/cases/bonaqa-hero.png"
            alt="bonaqa — каталог курсов"
            className="cd-hero__visual fade-up"
            onOpen={lightbox.open}
          />
        </section>

        {/* ══════════════════════════════════════
            О ПРОЕКТЕ
           ══════════════════════════════════════ */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">О проекте</h2>
          <p className="cd-section__text">
            <strong>bonaqa</strong> — полнофункциональная образовательная платформа для подготовки QA-автоматизаторов.
            Включает систему курсов с интерактивными упражнениями, проверку заданий через AI (GPT-4o),
            тренажёры веб-элементов для практики автоматизации, геймификацию и полноценную админ-панель для управления контентом.
          </p>
        </section>

        {/* ══════════════════════════════════════
            СТЕК ТЕХНОЛОГИЙ
           ══════════════════════════════════════ */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Стек технологий</h2>
          <div className="cd-stack-table">
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">Frontend</span>
              <span className="cd-stack-table__value">React, Vite, React Router, Lottie-react, PostHog</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">Backend</span>
              <span className="cd-stack-table__value">Node.js, Express.js, Prisma ORM</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">База данных</span>
              <span className="cd-stack-table__value">PostgreSQL</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">AI</span>
              <span className="cd-stack-table__value">OpenAI GPT-4o (проверка кода, оценка ответов)</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">Авторизация</span>
              <span className="cd-stack-table__value">JWT, bcrypt, Telegram Login Widget, email-верификация</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">Инфраструктура</span>
              <span className="cd-stack-table__value">Docker, Docker Compose, Nginx, GitLab CI/CD</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">Мониторинг</span>
              <span className="cd-stack-table__value">PostHog (трекинг, идентификация пользователей)</span>
            </div>
            <div className="cd-stack-table__row">
              <span className="cd-stack-table__label">API Docs</span>
              <span className="cd-stack-table__value">Swagger / OpenAPI 3.0</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ФУНКЦИОНАЛЬНОСТЬ — FEATURE SECTIONS
           ══════════════════════════════════════ */}
        <div className="cd-section-divider fade-up">
          <h2 className="cd-section__title">Что внутри платформы</h2>
          <p className="cd-section__text" style={{ textAlign: 'center' }}>
            5 ключевых модулей, превращающих платформу из простой LMS в интерактивную среду обучения
          </p>
        </div>

        {/* 1. Система курсов */}
        <FeatureSection
          title="1. Система курсов с прогрессом"
          imageSrc="/cases/bonaqa-courses.png"
          imageAlt="bonaqa — структура курса и Learning Path"
          onOpen={lightbox.open}
        >
          <ul className="cd-feature__list">
            <li>Структура: <strong>Курс → Блоки → Уроки → Упражнения</strong></li>
            <li>Последовательная разблокировка — следующий блок открывается только после полного завершения предыдущего</li>
            <li>Интерактивная карта прогресса <strong>Learning Path</strong> с анимированным маскотом на текущем уроке</li>
            <li>Уроки с Markdown-контентом: блоки кода, таблицы, инлайн-код</li>
            <li>Бейджи «новый контент» и «завершён» на карточках курсов</li>
          </ul>
        </FeatureSection>

        {/* 2. Упражнения */}
        <FeatureSection
          title="2. Четыре типа интерактивных упражнений"
          imageSrc="/cases/bonaqa-exercises.png"
          imageAlt="bonaqa — 4 типа упражнений"
          onOpen={lightbox.open}
          reverse
        >
          <ul className="cd-feature__list">
            <li><strong>Fill the Blank</strong> — заполнение пропусков в коде</li>
            <li><strong>Multiple Choice</strong> — выбор правильного варианта</li>
            <li><strong>Code Order</strong> — drag-and-drop расстановка строк кода в правильном порядке</li>
            <li><strong>Read Code</strong> — свободный текстовый ответ с проверкой через AI (GPT-4o оценивает по критериям, даёт score 0-100, указывает сильные/слабые стороны)</li>
          </ul>
        </FeatureSection>

        {/* 3. AI-проверка */}
        <FeatureSection
          title="3. AI-проверка кода через GPT-4o"
          imageSrc="/cases/bonaqa-ai-review.png"
          imageAlt="bonaqa — результат AI-проверки кода"
          onOpen={lightbox.open}
        >
          <p className="cd-feature__text">
            Упражнения типа <strong>Read Code</strong> и <strong>AI Tasks</strong> отправляют свободный ответ студента в GPT-4o.
            Модель оценивает код по заданным критериям и возвращает структурированный feedback:
          </p>
          <ul className="cd-feature__list">
            <li><strong>Score 0-100</strong> — числовая оценка</li>
            <li><strong>Summary</strong> — краткий разбор</li>
            <li><strong>Strengths</strong> — что сделано хорошо</li>
            <li><strong>Improvements</strong> — что улучшить</li>
            <li><strong>Missing test cases</strong> — пропущенные сценарии</li>
            <li><strong>Recommendations</strong> — рекомендации</li>
          </ul>
          <p className="cd-feature__text">
            Rate limiting на пользователя защищает от перерасхода API.
          </p>
        </FeatureSection>

        {/* 4. Тренажёр */}
        <FeatureSection
          title="4. Тренажёр веб-элементов (13 элементов)"
          imageSrc="/cases/bonaqa-trainer.png"
          imageAlt="bonaqa — тренажёр веб-элементов"
          onOpen={lightbox.open}
          reverse
        >
          <p className="cd-feature__text">
            Интерактивные песочницы, на которых студенты практикуют автоматизацию реальных UI-компонентов:
          </p>
          <ul className="cd-feature__list">
            <li>Select, Checkboxes, Radio Buttons, Inputs, Buttons</li>
            <li>File Upload, Date Picker, Tabs, Modals</li>
            <li>Dropdowns, Tooltips, Drag &amp; Drop, Tables</li>
          </ul>
          <p className="cd-feature__text">
            <strong>3 готовые формы</strong> для end-to-end практики: регистрация, заказ, бронирование.
          </p>
        </FeatureSection>

        {/* 5. Геймификация */}
        <FeatureSection
          title="5. Геймификация"
          imageSrc="/cases/bonaqa-gamification.png"
          imageAlt="bonaqa — лидерборд, лиги, достижения"
          onOpen={lightbox.open}
          reverse
        >
          <ul className="cd-feature__list">
            <li><strong>XP-система:</strong> очки за уроки (10), упражнения (5), квизы (20-30), AI-задания (30-50), streak-бонусы</li>
            <li><strong>10 уровней:</strong> Новичок → Практикант → Ученик → ... → Мастер → Гуру → Легенда</li>
            <li><strong>Лидерборд</strong> с системой лиг: Bronze → Silver → Gold → Sapphire → Ruby → Diamond</li>
            <li><strong>Streak-система:</strong> бонусный XP за непрерывную ежедневную активность</li>
            <li><strong>Дневные квесты:</strong> 3 рандомных задания каждый день + бонус за выполнение всех трёх</li>
            <li><strong>Достижения:</strong> скрытые и открытые, по категориям</li>
            <li><strong>Combo-система:</strong> счётчик серии правильных ответов с визуальными эффектами и конфетти</li>
          </ul>
        </FeatureSection>

        {/* ══════════════════════════════════════
            НЕСТАНДАРТНЫЕ РЕШЕНИЯ
           ══════════════════════════════════════ */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Нестандартные решения</h2>
          <div className="cd-highlights">
            <div className="cd-highlight">
              <span className="cd-highlight__number">01</span>
              <div>
                <h4>AI-проверка открытых ответов</h4>
                <p>GPT-4o оценивает свободный код студента по заданным критериям — платформа из тестировщика превращается в интеллектуального репетитора</p>
              </div>
            </div>
            <div className="cd-highlight">
              <span className="cd-highlight__number">02</span>
              <div>
                <h4>Тренажёр как sandbox</h4>
                <p>13 интерактивных элементов + 3 формы, созданные специально чтобы студенты писали автотесты для реальных UI-компонентов</p>
              </div>
            </div>
            <div className="cd-highlight">
              <span className="cd-highlight__number">03</span>
              <div>
                <h4>Геймификация с лигами</h4>
                <p>XP, 10 уровней, лидерборд с 6 лигами, дневные квесты, combo-система и достижения — мотивация через соревнование</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            ИНФРАСТРУКТУРА
           ══════════════════════════════════════ */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Инфраструктура</h2>
          <div className="cd-infra-grid">
            <div className="cd-infra-item">
              <i className="devicon-docker-plain colored"></i>
              <span>Docker Compose</span>
              <small>Dev и production</small>
            </div>
            <div className="cd-infra-item">
              <i className="devicon-gitlab-plain colored"></i>
              <span>GitLab CI/CD</span>
              <small>Автоматический деплой</small>
            </div>
            <div className="cd-infra-item">
              <i className="devicon-nginx-original colored"></i>
              <span>Nginx</span>
              <small>Reverse proxy + SSL</small>
            </div>
            <div className="cd-infra-item">
              <i className="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
              <small>Prisma ORM + миграции</small>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            О ПРОЕКТЕ — ЛИЧНАЯ ЗАМЕТКА
           ══════════════════════════════════════ */}
        <section className="cd-section fade-up">
          <h2 className="cd-section__title">Об этом проекте</h2>
          <div className="cd-quote">
            <p className="cd-quote__text">{caseData.quote.text}</p>
            <span className="cd-quote__author">{caseData.quote.author}</span>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CTA
           ══════════════════════════════════════ */}
        <div className="cd-cta fade-up">
          <h2 className="cd-cta__title">{caseData.cta.title}</h2>
          <p className="cd-cta__text">{caseData.cta.text}</p>
          <div className="cd-cta__buttons">
            <a
              href="https://t.me/Neznayuusername"
              target="_blank"
              rel="noopener"
              className="btn btn--primary btn--lg"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>
            <a
              href="mailto:obojealexanderwork@gmail.com"
              className="btn btn--ghost btn--lg"
            >
              <EmailIcon />
              Написать на Email
            </a>
          </div>
        </div>

        {/* ── Nav ── */}
        <nav className="cd-nav">
          {prev ? (
            <Link href={`/cases/${prev.slug}`} className="cd-nav__link">
              <span className="cd-nav__label">&larr; Предыдущий кейс</span>
              <span className="cd-nav__title">{prev.title}</span>
            </Link>
          ) : <div></div>}
          {next ? (
            <Link href={`/cases/${next.slug}`} className="cd-nav__link cd-nav__link--next">
              <span className="cd-nav__label">Следующий кейс &rarr;</span>
              <span className="cd-nav__title">{next.title}</span>
            </Link>
          ) : <div></div>}
        </nav>
      </div>

      <Lightbox src={lightbox.src} alt={lightbox.alt} isOpen={lightbox.isOpen} onClose={lightbox.close} />
    </>
  );
}
