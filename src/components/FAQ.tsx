'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'Сколько стоит разработка сайта или бота?',
    answer:
      'Telegram-бот - от 25 000 ₽, лендинг - от 15 000 ₽, автоматизация - от 30 000 ₽. Точная цена зависит от задачи. Напишите - оценю бесплатно за 1 день.',
  },
  {
    question: 'Какие сроки разработки?',
    answer:
      'Лендинг - 3-7 дней. Telegram-бот - 5-14 дней. Сложная автоматизация - 2-3 недели. Использую ИИ-инструменты, поэтому делаю в 2-3 раза быстрее традиционной разработки.',
  },
  {
    question: 'Почему так быстро? Не будет ли халтура?',
    answer:
      'Скорость - за счёт ИИ-инструментов, а не за счёт качества. Я использую нейросети для генерации кода, дизайна и контента, но каждый элемент проверяю и дорабатываю вручную. Все проекты работают в продакшене - смотрите кейсы.',
  },
  {
    question: 'Что если что-то сломается после сдачи?',
    answer:
      '14 дней бесплатной поддержки после сдачи проекта. Если что-то не работает - исправлю. Дальше можем договориться о постоянной поддержке.',
  },
  {
    question: 'Как проходит работа?',
    answer:
      '4 шага: обсуждаем задачу → готовлю решение и ТЗ → разрабатываю с промежуточными показами → сдаю проект + поддержка. Вы видите прогресс на каждом этапе.',
  },
];

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq__item ${open ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <svg
          className="faq__chevron"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="faq__answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title fade-up">Частые вопросы</h2>
        <p className="section-subtitle fade-up">Ответы на популярные вопросы о работе со мной</p>

        <div className="faq__list fade-up">
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
