export interface CaseData {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  heroImage: string;
  solutionImage: string;
  solutionImageWide: boolean;
  metaTitle: string;
  metaDescription: string;
  situation: { text: string; points: string[] };
  solution: string;
  stack: { name: string; icon?: string }[];
  results: { value: string; label: string }[];
  compare: {
    freelance: { time: string; price: string };
    ai: { time: string; price: string };
  };
  quote: { text: string; author: string };
  cta: { title: string; text: string };
  card: {
    meta: string[];
    task: string;
    solution: string;
    results: { bold: string; text: string }[];
    stack: string[];
  };
}

export const cases: CaseData[] = [
  {
    slug: 'flower-shop',
    number: '01',
    category: 'Telegram-бот + ИИ',
    title: 'ИИ-бот для сети цветочных магазинов',
    subtitle: 'Telegram-бот на GPT, который консультирует клиентов, подбирает букеты и оформляет заказы 24/7. Менеджер подключается только на сложные случаи.',
    heroImage: '/cases/flower-shop-hero.png',
    solutionImage: '/cases/flower-shop-solution.png',
    solutionImageWide: false,
    metaTitle: 'ИИ-бот для цветочного магазина - Кейс - Привалов',
    metaDescription: 'Telegram-бот на GPT для сети цветочных магазинов. 73% обращений закрывает без менеджера, +340 000 руб/мес выручки.',
    situation: {
      text: 'Сеть цветочных магазинов с доставкой. Основной канал заказов - Telegram и WhatsApp. Один менеджер на всё.',
      points: [
        'Менеджер отвечал вручную, среднее время ответа - 15 минут',
        'Ночью и в выходные никто не отвечал - клиенты уходили',
        'Ассортимент большой - менеджер путался в наличии и ценах',
        'Клиенты не дожидались ответа и уходили к конкурентам',
      ],
    },
    solution: 'Разработал Telegram-бота на GPT, обученного на ассортименте магазина. Бот знает каждый букет, цену, наличие и сроки доставки. Ведёт диалог как живой консультант, оформляет заказ и отправляет ссылку на оплату. Доставка запускается автоматически после оплаты.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'aiogram 3' },
      { name: 'OpenAI GPT-4o-mini' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
      { name: 'ЮKassa API' },
    ],
    results: [
      { value: '8 сек', label: 'Время ответа клиенту\n(было 15 минут)' },
      { value: '73%', label: 'Обращений бот закрывает\nбез менеджера' },
      { value: '+340К', label: 'Рублей в месяц\nдополнительной выручки' },
      { value: '24/7', label: 'Бот работает без\nвыходных и праздников' },
    ],
    compare: {
      freelance: { time: '4-6 недель', price: '120 - 200 тыс. \u20BD' },
      ai: { time: '10 дней', price: '25 - 50 тыс. \u20BD' },
    },
    quote: {
      text: '\u201CЯ думал, бот - это кнопки и шаблонные ответы. А он реально разговаривает с клиентами.\u201D',
      author: 'Владелец бизнеса',
    },
    cta: {
      title: 'Нужен бот для вашего бизнеса?',
      text: 'Расскажите задачу - предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Доставка цветов', 'Несколько точек'],
      task: 'Автоматизировать приём заказов и\u00A0консультации в\u00A0Telegram. Менеджеры не\u00A0успевали отвечать\u00A0- клиенты уходили к\u00A0конкурентам.',
      solution: 'Telegram-бот на\u00A0GPT, который ведёт диалог, помогает выбрать букет по\u00A0поводу и\u00A0бюджету, оформляет заказ и\u00A0передаёт данные в\u00A0CRM. Менеджер подключается только для сложных случаев.',
      results: [
        { bold: '73%', text: 'обращений закрывает бот без менеджера' },
        { bold: '15 мин \u2192 8 секунд', text: '' },
        { bold: '+340 000 руб/мес', text: '' },
      ],
      stack: ['Python', 'aiogram 3', 'OpenAI GPT-4o-mini', 'PostgreSQL', 'Redis'],
    },
  },
  {
    slug: 'yoga-studio',
    number: '02',
    category: 'Веб-разработка',
    title: 'Лендинг + CRM-интеграция для сети студий йоги',
    subtitle: 'Новый лендинг с онлайн-записью, интеграцией оплаты и CRM. Конверсия выросла почти в 3 раза за 5 дней разработки.',
    heroImage: '/cases/yoga-studio-hero.png',
    solutionImage: '/cases/yoga-studio-solution.png',
    solutionImageWide: true,
    metaTitle: 'Лендинг для студии йоги - Кейс - Привалов',
    metaDescription: 'Лендинг с онлайн-записью для сети студий йоги. Конверсия выросла с 2.1% до 5.8%, скорость загрузки 0.8 сек.',
    situation: {
      text: 'Сеть студий йоги с несколькими точками. Старый сайт на конструкторе, морально устаревший.',
      points: [
        'Сайт грузился 4.2 секунды - посетители уходили, не дождавшись',
        'Конверсия 2.1% - из 100 посетителей записывались только 2',
        'Запись только по телефону - клиентам неудобно',
        'Дизайн не отражал атмосферу студии',
      ],
    },
    solution: 'Новый лендинг с адаптивным дизайном, онлайн-записью, интеграцией платёжной системы и CRM. Автоматические напоминания клиентам в Telegram.',
    stack: [
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
      { name: 'ЮKassa API' },
      { name: 'amoCRM API' },
    ],
    results: [
      { value: '0.8 сек', label: 'Скорость загрузки\n(было 4.2 сек)' },
      { value: '5.8%', label: 'Конверсия в запись\n(было 2.1%)' },
      { value: 'x3', label: 'Рост конверсии\nза 5 дней' },
      { value: '40%', label: 'Записей теперь\nпроходят онлайн' },
    ],
    compare: {
      freelance: { time: '2-3 недели', price: '60 - 100 тыс. \u20BD' },
      ai: { time: '5 дней', price: '15 - 30 тыс. \u20BD' },
    },
    quote: {
      text: '\u201CЯ думала, сайт - это просто визитка. Оказалось, это канал продаж.\u201D',
      author: 'Владелица студии',
    },
    cta: {
      title: 'Нужен современный лендинг?',
      text: 'Расскажите задачу - предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Фитнес и wellness', 'Несколько студий'],
      task: 'Заменить устаревший сайт на\u00A0Tilda. Добавить онлайн-запись на\u00A0занятия, подключить оплату, синхронизировать с\u00A0amoCRM.',
      solution: 'Быстрый современный лендинг с\u00A0расписанием, онлайн-записью, интеграцией с\u00A0ЮKassa и\u00A0amoCRM. Автоматические напоминания клиентам в\u00A0Telegram.',
      results: [
        { bold: '2.1% \u2192 5.8%', text: '' },
        { bold: '40%', text: 'записей теперь онлайн' },
        { bold: '0.8 сек', text: '(было 4.2 сек)' },
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ЮKassa API', 'amoCRM API'],
    },
  },
  {
    slug: 'marketplace-seller',
    number: '03',
    category: 'Автоматизация',
    title: 'Автоматизация для селлера на маркетплейсе',
    subtitle: 'Динамическое ценообразование, генерация карточек через ИИ и единый дашборд. 25 часов экономии каждую неделю.',
    heroImage: '/cases/marketplace-hero.png',
    solutionImage: '/cases/marketplace-solution.png',
    solutionImageWide: true,
    metaTitle: 'Автоматизация для селлера на маркетплейсе - Кейс - Привалов',
    metaDescription: 'Система автоматизации для селлера на маркетплейсе. Экономия 25 часов в неделю, рост выручки +18%.',
    situation: {
      text: 'Селлер на маркетплейсе, 200+ товаров. Всю рутину делал вручную.',
      points: [
        '25 часов в неделю на рутину: обновление цен, карточки, мониторинг',
        'Создание одной карточки товара занимало 40 минут',
        'Цены обновлялись вручную раз в неделю - терял маржу',
        'Аналитика раскидана по 10 вкладкам браузера',
      ],
    },
    solution: 'Парсер цен конкурентов с автоматическим обновлением по заданным правилам. Генерация описаний и инфографики через ИИ. Единый дашборд с аналитикой.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Marketplace API' },
      { name: 'OpenAI' },
      { name: 'Pillow' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'APScheduler' },
    ],
    results: [
      { value: '25 ч', label: 'Экономия ручной\nработы в неделю' },
      { value: '2 мин', label: 'На создание карточки\n(было 40 минут)' },
      { value: '+18%', label: 'Рост выручки за счёт\nдинамических цен' },
      { value: '14 дней', label: 'Срок разработки\nвсей системы' },
    ],
    compare: {
      freelance: { time: '4-8 недель', price: '150 - 300 тыс. \u20BD' },
      ai: { time: '14 дней', price: '30 - 70 тыс. \u20BD' },
    },
    quote: {
      text: '\u201CЯ наконец занимаюсь развитием бизнеса, а не копипастом в карточках.\u201D',
      author: 'Владелец бизнеса',
    },
    cta: {
      title: 'Нужна автоматизация?',
      text: 'Расскажите задачу - предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['E-commerce', 'Средний селлер, 200+ товаров'],
      task: 'Селлер тратил 30+ часов в\u00A0неделю на\u00A0ручное обновление цен, отслеживание остатков и\u00A0создание карточек товаров.',
      solution: 'Парсер цен конкурентов + автоматическое обновление цен по\u00A0заданным правилам. Генерация описаний и\u00A0инфографики для карточек через ИИ. Дашборд с\u00A0аналитикой.',
      results: [
        { bold: '25 часов в неделю', text: '' },
        { bold: '+18%', text: 'за счёт динамического ценообразования' },
        { bold: '2 минуты', text: 'вместо 40' },
      ],
      stack: ['Python', 'Marketplace API', 'OpenAI', 'Pillow', 'PostgreSQL', 'APScheduler'],
    },
  },
  {
    slug: 'hr-bot',
    number: '04',
    category: 'ИИ-бот + RAG',
    title: 'HR-бот с базой знаний для IT-компании',
    subtitle: 'Telegram-бот на RAG, обученный на документах компании. Отвечает на вопросы сотрудников по регламентам, политикам и процедурам.',
    heroImage: '/cases/hr-bot-hero.png',
    solutionImage: '/cases/hr-bot-solution.png',
    solutionImageWide: false,
    metaTitle: 'HR-бот с базой знаний для IT-компании - Кейс - Привалов',
    metaDescription: 'Telegram-бот с RAG для IT-компании. 85% типовых HR-вопросов закрывает бот, 15 часов экономии в неделю.',
    situation: {
      text: 'IT-компания, 50+ сотрудников. HR-отдел из 2 человек.',
      points: [
        '80% вопросов к HR одинаковые: отпуска, ДМС, больничные, оформление',
        'HR тратил 15+ часов в неделю на типовые ответы',
        'Новые сотрудники не знали куда обращаться - спрашивали всех подряд',
        'Регламенты лежали в Google Docs - никто не находил нужный',
      ],
    },
    solution: 'Telegram-бот с RAG: загружены все внутренние документы, регламенты и FAQ. Бот находит релевантный фрагмент и формирует точный ответ. Админ-панель для обновления базы знаний.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'aiogram' },
      { name: 'LangChain' },
      { name: 'ChromaDB' },
      { name: 'OpenAI Embeddings' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
    ],
    results: [
      { value: '85%', label: 'Типовых вопросов\nзакрывает бот' },
      { value: '15 ч', label: 'Экономия HR-отдела\nв неделю' },
      { value: '4.7/5', label: 'Удовлетворённость\nсотрудников' },
      { value: '21 день', label: 'Срок разработки\nи внедрения' },
    ],
    compare: {
      freelance: { time: '6-10 недель', price: '200 - 400 тыс. \u20BD' },
      ai: { time: '21 день', price: '40 - 80 тыс. \u20BD' },
    },
    quote: {
      text: '\u201CHR-ы теперь занимаются людьми, а не пересказыванием регламентов.\u201D',
      author: 'Руководитель HR-отдела',
    },
    cta: {
      title: 'Нужен корпоративный бот?',
      text: 'Расскажите задачу - предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['IT-сфера', 'Компания 50+ сотрудников'],
      task: 'HR-отдел тонул в\u00A0однотипных вопросах: отпуска, больничные, политики компании, онбординг. Нужно было разгрузить людей, не\u00A0потеряв качество ответов.',
      solution: 'Telegram-бот с\u00A0RAG (Retrieval-Augmented Generation): загружены внутренние документы, регламенты и\u00A0FAQ. Бот находит релевантный фрагмент и\u00A0формирует точный ответ.',
      results: [
        { bold: '85%', text: 'типовых вопросов закрывает бот' },
        { bold: '15 часов в\u00A0неделю', text: '' },
        { bold: '4.7/5', text: '' },
      ],
      stack: ['Python', 'aiogram', 'LangChain', 'ChromaDB', 'OpenAI Embeddings', 'Docker'],
    },
  },
];

export function getCaseBySlug(slug: string): CaseData | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAdjacentCases(slug: string): { prev?: CaseData; next?: CaseData } {
  const index = cases.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? cases[index - 1] : undefined,
    next: index < cases.length - 1 ? cases[index + 1] : undefined,
  };
}
