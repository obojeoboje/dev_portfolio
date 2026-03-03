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
  compareSource?: string;
  quote: { text: string; author: string };
  cta: { title: string; text: string };
  card: {
    meta: string[];
    task: string;
    solution: string;
    results: { bold: string; text: string }[];
    stack: string[];
  };
  detailedCase?: boolean;
  ownProject?: boolean;
  demoProject?: boolean;
  demoUrl?: string;
  cardDescription?: string;
}

export const cases: CaseData[] = [
  {
    slug: 'bonaqa-tech',
    number: '01',
    category: 'Образовательная платформа',
    title: 'bonaqa — платформа для подготовки QA-автоматизаторов',
    subtitle: 'Полнофункциональная EdTech-платформа с интерактивными упражнениями, AI-проверкой кода через GPT-4o, тренажёрами веб-элементов, геймификацией и админ-панелью.',
    heroImage: '/cases/bonaqa-hero.png',
    solutionImage: '/cases/bonaqa-solution.png',
    solutionImageWide: true,
    metaTitle: 'bonaqa — образовательная платформа для QA — Кейс',
    metaDescription: 'Образовательная платформа bonaqa: интерактивные курсы, AI-проверка кода, тренажёры, геймификация. React, Node.js, PostgreSQL, GPT-4o.',
    situation: {
      text: 'Компания готовит QA-автоматизаторов. Обучение велось через разрозненные инструменты, не было единой среды для практики.',
      points: [
        'Материалы раскиданы по Google Docs, Notion и Telegram',
        'Нет интерактивной практики — студенты только читали теорию',
        'Проверка заданий вручную преподавателем — медленно и не масштабируется',
        'Нет геймификации — студенты теряли мотивацию и бросали курсы',
        'Нет тренажёра для практики автоматизации реальных UI-элементов',
      ],
    },
    solution: 'Разработал полноценную образовательную платформу: система курсов с 4 типами интерактивных упражнений, AI-проверка открытых ответов через GPT-4o, тренажёр из 13 веб-элементов для практики автоматизации, Practice API с Swagger, геймификация с XP/уровнями/лигами/достижениями, анимированный маскот Bonnie и полная админ-панель.',
    stack: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Prisma' },
      { name: 'OpenAI GPT-4o' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Nginx', icon: 'devicon-nginx-original colored' },
      { name: 'GitLab CI/CD', icon: 'devicon-gitlab-plain colored' },
    ],
    results: [
      { value: '4 типа', label: 'Интерактивных\nупражнений' },
      { value: '13', label: 'Тренажёров\nвеб-элементов' },
      { value: 'AI', label: 'Проверка кода\nчерез GPT-4o' },
      { value: '10', label: 'Уровней\nгеймификации' },
    ],
    compare: {
      freelance: { time: '3-4 месяца', price: '400 - 700 тыс. \u20BD' },
      ai: { time: '1 неделя', price: '150 тыс. \u20BD' },
    },
    quote: {
      text: 'Это мой собственный продукт, над которым я продолжаю работать. bonaqa показывает, как я подхожу к созданию сложных систем: от архитектуры и AI-интеграции до геймификации и UX. Проект в активной разработке.',
      author: 'Привалов, автор проекта',
    },
    cta: {
      title: 'Нужна образовательная платформа?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['EdTech', 'QA-автоматизация'],
      task: 'Создать платформу для подготовки QA-автоматизаторов с\u00A0интерактивной практикой, AI-проверкой кода и\u00A0геймификацией. Заменить разрозненные Google Docs и\u00A0Notion единой средой.',
      solution: 'Полная EdTech-платформа: 4\u00A0типа упражнений, AI-проверка через GPT-4o, 13\u00A0тренажёров веб-элементов, Practice API, геймификация с\u00A0XP/лигами/достижениями, маскот Bonnie и\u00A0админ-панель.',
      results: [
        { bold: '4 типа упражнений', text: '+ AI-проверка кода' },
        { bold: '13 тренажёров', text: 'веб-элементов для автоматизации' },
        { bold: '10 уровней', text: '+ лиги + достижения' },
      ],
      stack: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'GPT-4o', 'Docker'],
    },
    detailedCase: true,
    ownProject: true,
    demoUrl: 'https://bonaqa.tech',
    cardDescription: 'EdTech-платформа: интерактивные упражнения, AI-проверка кода, тренажёры веб-элементов, геймификация.',
  },
  {
    slug: 'beauty-mesto',
    number: '02',
    category: 'Сайт для бизнеса',
    title: 'Сайт для бьюти-студии «Бьюти Место»',
    subtitle: 'Сайт-визитка для бьюти-студии в Петербурге: услуги, кнопки записи к мастерам, ссылки на соцсети, адрес. Адаптивный дизайн, сделан за 2 дня.',
    heroImage: '/cases/beauty-mesto-hero.png',
    solutionImage: '/cases/beauty-mesto-solution.png',
    solutionImageWide: false,
    metaTitle: 'Сайт для бьюти-студии «Бьюти Место» — Кейс',
    metaDescription: 'Реальный клиентский проект: сайт-визитка для бьюти-студии с кнопками записи к мастерам, соцсетями и адаптивным дизайном. Сделан за 2 дня.',
    situation: {
      text: 'Бьюти-студия в Петербурге с двумя мастерами. Запись через сторонний сервис уже была, но у студии не было своей страницы — клиенты не могли найти информацию об услугах и ценах.',
      points: [
        'Нет своего сайта — клиенты не могли найти студию в поиске',
        'Нет единой страницы с услугами и мастерами',
        'Два мастера (Аделина и Арина) — у каждой свои услуги, нужно разделение',
        'Ссылки на запись приходилось отправлять вручную каждому клиенту',
      ],
    },
    solution: 'Сайт-визитка с информацией о студии и кнопками записи к каждому мастеру (ведут на существующий сервис записи). Ссылки на Telegram и VK, карта с адресом. Адаптивный дизайн под мобильные — 90% клиентов заходят с телефона.',
    stack: [
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'Vercel', icon: 'devicon-vercel-original' },
    ],
    results: [
      { value: '2 дня', label: 'От идеи\nдо запуска' },
      { value: '2', label: 'Мастера с\nотдельной записью' },

      { value: 'Mobile', label: 'Адаптивный\nдизайн' },
      { value: 'SEO', label: 'Находится\nпо адресу' },
    ],
    compare: {
      freelance: { time: '2-3 недели', price: '40 - 80 тыс. \u20BD' },
      ai: { time: '2 дня', price: '5 - 10 тыс. \u20BD' },
    },
    compareSource: 'Средние цены на сайты-визитки на FL.ru и Kwork, 2024',
    quote: {
      text: 'Сайт сделали за два дня — я даже не ожидала, что так быстро. Теперь скидываю клиентам одну ссылку, и они сами выбирают мастера и записываются. Очень удобно!',
      author: 'Аделина, владелица «Бьюти Место»',
    },
    cta: {
      title: 'Нужен сайт для вашего бизнеса?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Бьюти-студия', 'Реальный клиент'],
      task: 'У\u00A0бьюти-студии не\u00A0было своего сайта\u00A0— клиенты не\u00A0могли найти услуги, цены и\u00A0ссылку на\u00A0запись.',
      solution: 'Сайт-визитка с\u00A0кнопками записи к\u00A0каждому мастеру, ссылки на\u00A0Telegram и\u00A0VK, карта с\u00A0адресом. Адаптивный дизайн под\u00A0мобильные.',
      results: [
        { bold: '2 дня', text: 'от идеи до запуска' },
        { bold: 'Кнопки записи', text: 'к каждому мастеру отдельно' },
        { bold: 'Telegram + VK', text: 'ссылки на соцсети' },
      ],
      stack: ['Next.js', 'TypeScript', 'CSS', 'Vercel'],
    },
    detailedCase: true,
    demoUrl: 'https://beauty-mesto.ru',
    cardDescription: 'Реальный клиент: сайт-визитка с кнопками записи к мастерам, соцсети, адаптивный дизайн. Готов за 2 дня.',
  },
  {
    slug: 'flower-shop',
    number: '03',
    category: 'Telegram-бот + ИИ',
    title: 'ИИ-бот для сети цветочных магазинов',
    subtitle: 'Демо-проект: Telegram-бот на GPT, который консультирует клиентов, подбирает букеты по поводу и бюджету, оформляет заказы и принимает оплату 24/7.',
    heroImage: '/cases/flower-shop-hero.png',
    solutionImage: '/cases/flower-shop-solution.png',
    solutionImageWide: false,
    metaTitle: 'ИИ-бот для цветочного магазина — Демо',
    metaDescription: 'Демо-проект: Telegram-бот на GPT для цветочного магазина. Диалоговый AI, подбор букетов, оформление заказов, интеграция с оплатой.',
    situation: {
      text: 'Типичная задача для цветочного бизнеса: менеджер не успевает отвечать клиентам, ночью и в выходные заказы теряются.',
      points: [
        'Менеджер отвечает вручную — среднее время ответа 15 минут',
        'Ночью и в выходные никто не отвечает — клиенты уходят',
        'Большой ассортимент — сложно помнить наличие и цены',
        'Клиенты не дожидаются ответа и уходят к конкурентам',
      ],
    },
    solution: 'Telegram-бот на GPT, обученный на ассортименте магазина. Бот знает каждый букет, цену, наличие и сроки доставки. Ведёт диалог как живой консультант, оформляет заказ и отправляет ссылку на оплату.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'aiogram 3' },
      { name: 'OpenAI GPT-4o-mini' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
      { name: 'ЮKassa API' },
    ],
    results: [
      { value: 'GPT', label: 'Диалоговый AI\nна базе GPT-4o-mini' },
      { value: 'ЮKassa', label: 'Интеграция\nс платёжной системой' },
      { value: '24/7', label: 'Бот работает без\nвыходных и праздников' },
      { value: 'CRM', label: 'Передача заказов\nменеджеру' },
    ],
    compare: {
      freelance: { time: '4-6 недель', price: '120 - 200 тыс. \u20BD' },
      ai: { time: '10 дней', price: '25 - 50 тыс. \u20BD' },
    },
    compareSource: 'Средние цены на разработку Telegram-ботов на FL.ru и Kwork, 2024',
    quote: {
      text: 'Демо-проект, разработанный для демонстрации навыков. Показывает интеграцию GPT с Telegram, обработку заказов, подключение платёжной системы и работу с каталогом товаров в реальном времени.',
      author: 'Демо-проект для портфолио',
    },
    cta: {
      title: 'Нужен бот для вашего бизнеса?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Доставка цветов', 'Демо-проект'],
      task: 'Автоматизировать приём заказов и\u00A0консультации в\u00A0Telegram. Менеджеры не\u00A0успевают отвечать\u00A0— клиенты уходят к\u00A0конкурентам.',
      solution: 'Telegram-бот на\u00A0GPT, который ведёт диалог, помогает выбрать букет по\u00A0поводу и\u00A0бюджету, оформляет заказ и\u00A0принимает оплату через ЮKassa.',
      results: [
        { bold: 'GPT-4o-mini', text: 'диалоговый AI-консультант' },
        { bold: 'ЮKassa', text: 'интеграция с оплатой' },
        { bold: '24/7', text: 'автоматический приём заказов' },
      ],
      stack: ['Python', 'aiogram 3', 'OpenAI GPT-4o-mini', 'PostgreSQL', 'Redis'],
    },
    demoProject: true,
    cardDescription: 'Telegram-бот на GPT: подбор букетов, оформление заказов, оплата через ЮKassa 24/7.',
  },
  {
    slug: 'yoga-studio',
    number: '04',
    category: 'Веб-разработка',
    title: 'Лендинг для студии йоги с онлайн-записью',
    subtitle: 'Демо-проект: быстрый лендинг на Next.js с онлайн-записью на занятия, интеграцией оплаты через ЮKassa и CRM. Есть рабочее демо.',
    heroImage: '/cases/yoga-studio-hero.png',
    solutionImage: '/cases/yoga-studio-solution.png',
    solutionImageWide: true,
    metaTitle: 'Лендинг для студии йоги — Демо',
    metaDescription: 'Демо-проект: лендинг для студии йоги на Next.js. Онлайн-запись, интеграция ЮKassa и amoCRM, адаптивный дизайн, загрузка 0.8 сек.',
    situation: {
      text: 'Типичная задача для фитнес-бизнеса: старый сайт на конструкторе тормозит, нет онлайн-записи, клиенты звонят вместо того, чтобы записаться сами.',
      points: [
        'Медленная загрузка — посетители уходят, не дождавшись',
        'Нет онлайн-записи — запись только по телефону',
        'Нет интеграции с CRM — менеджер ведёт всё вручную',
        'Дизайн не отражает атмосферу студии',
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
      { value: '0.8 сек', label: 'Скорость загрузки\n(Lighthouse)' },
      { value: '95+', label: 'Баллов PageSpeed\n(Performance)' },
      { value: 'CRM', label: 'Интеграция\nс amoCRM' },
      { value: 'ЮKassa', label: 'Онлайн-оплата\nзанятий' },
    ],
    compare: {
      freelance: { time: '2-3 недели', price: '60 - 100 тыс. \u20BD' },
      ai: { time: '5 дней', price: '15 - 30 тыс. \u20BD' },
    },
    compareSource: 'Средние цены на лендинги на FL.ru и Kwork, 2024',
    quote: {
      text: 'Демо-проект с рабочим лендингом. Показывает скорость разработки, адаптивный дизайн, интеграцию с платёжной системой и CRM, оптимизацию производительности (Lighthouse 95+).',
      author: 'Демо-проект для портфолио',
    },
    cta: {
      title: 'Нужен современный лендинг?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Фитнес и wellness', 'Демо-проект'],
      task: 'Заменить устаревший сайт на\u00A0конструкторе. Добавить онлайн-запись, подключить оплату, синхронизировать с\u00A0CRM.',
      solution: 'Быстрый лендинг на\u00A0Next.js с\u00A0расписанием, онлайн-записью, интеграцией с\u00A0ЮKassa и\u00A0amoCRM. Автоматические напоминания в\u00A0Telegram.',
      results: [
        { bold: '0.8 сек', text: 'загрузка (Lighthouse)' },
        { bold: 'ЮKassa + amoCRM', text: 'интеграции' },
        { bold: 'Есть демо', text: 'рабочий лендинг' },
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ЮKassa API', 'amoCRM API'],
    },
    demoProject: true,
    demoUrl: '/demos/yoga-studio/index.html',
    cardDescription: 'Быстрый лендинг на Next.js с онлайн-записью, интеграцией ЮKassa и amoCRM.',
  },
  {
    slug: 'marketplace-seller',
    number: '05',
    category: 'Автоматизация',
    title: 'Автоматизация для селлера на Wildberries',
    subtitle: 'Демо-проект: динамическое ценообразование через WB API, генерация карточек товаров через ИИ, единый дашборд с аналитикой продаж и остатков.',
    heroImage: '/cases/marketplace-hero.png',
    solutionImage: '/cases/marketplace-solution.png',
    solutionImageWide: true,
    metaTitle: 'Автоматизация для селлера на Wildberries — Демо',
    metaDescription: 'Демо-проект: система автоматизации для селлера на Wildberries. Парсинг цен, AI-генерация карточек, дашборд аналитики.',
    situation: {
      text: 'Типичная задача селлера на маркетплейсе: рутина съедает всё время — обновление цен, создание карточек, мониторинг конкурентов.',
      points: [
        '25+ часов в неделю на рутину: обновление цен, карточки, мониторинг',
        'Создание одной карточки товара занимает 40 минут',
        'Цены обновляются вручную раз в неделю — теряется маржа',
        'Аналитика раскидана по 10 вкладкам браузера',
      ],
    },
    solution: 'Парсер цен конкурентов через WB API с автоматическим обновлением по заданным правилам. Генерация описаний и инфографики через ИИ. Единый дашборд с аналитикой продаж, остатков и рекламы.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Wildberries API' },
      { name: 'OpenAI' },
      { name: 'Pillow' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'APScheduler' },
    ],
    results: [
      { value: 'WB API', label: 'Парсинг цен\nи автообновление' },
      { value: 'GPT', label: 'AI-генерация\nкарточек товаров' },
      { value: 'Pillow', label: 'Автоматическая\nинфографика' },
      { value: '14 дней', label: 'Срок разработки\nвсей системы' },
    ],
    compare: {
      freelance: { time: '4-8 недель', price: '150 - 300 тыс. \u20BD' },
      ai: { time: '14 дней', price: '30 - 70 тыс. \u20BD' },
    },
    compareSource: 'Средние цены на автоматизацию для маркетплейсов на FL.ru, 2024',
    quote: {
      text: 'Демо-проект, показывающий работу с Wildberries API, динамическое ценообразование, AI-генерацию контента для карточек и построение аналитического дашборда.',
      author: 'Демо-проект для портфолио',
    },
    cta: {
      title: 'Нужна автоматизация для маркетплейса?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['Wildberries', 'Демо-проект'],
      task: 'Селлер тратит 25+ часов в\u00A0неделю на\u00A0ручное обновление цен, создание карточек и\u00A0мониторинг конкурентов на\u00A0Wildberries.',
      solution: 'Парсер цен конкурентов через WB\u00A0API + автообновление цен. AI-генерация описаний и\u00A0инфографики для карточек. Дашборд с\u00A0аналитикой.',
      results: [
        { bold: 'WB API', text: 'парсинг цен и автообновление' },
        { bold: 'GPT', text: 'генерация карточек товаров' },
        { bold: '14 дней', text: 'разработка всей системы' },
      ],
      stack: ['Python', 'WB API', 'OpenAI', 'Pillow', 'PostgreSQL', 'APScheduler'],
    },
    demoProject: true,
    cardDescription: 'Парсинг цен через WB API, AI-генерация карточек товаров, дашборд аналитики.',
  },
  {
    slug: 'hr-bot',
    number: '06',
    category: 'ИИ-бот + RAG',
    title: 'HR-бот с базой знаний на RAG',
    subtitle: 'Демо-проект: Telegram-бот с RAG-пайплайном на LangChain + ChromaDB. Находит ответы в корпоративных документах и формирует точный ответ. Админ-панель для управления базой знаний.',
    heroImage: '/cases/hr-bot-hero.png',
    solutionImage: '/cases/hr-bot-solution.png',
    solutionImageWide: false,
    metaTitle: 'HR-бот с RAG на LangChain — Демо',
    metaDescription: 'Демо-проект: Telegram-бот с RAG-пайплайном на LangChain и ChromaDB. Поиск по корпоративным документам, админ-панель, Docker.',
    situation: {
      text: 'Типичная задача для HR-отдела: 80% вопросов одинаковые, ответы есть в документах, но сотрудники не могут их найти.',
      points: [
        '80% вопросов к HR одинаковые: отпуска, ДМС, больничные, оформление',
        'HR тратит часы на пересказ регламентов',
        'Новые сотрудники не знают куда обращаться — спрашивают всех подряд',
        'Регламенты лежат в Google Docs — никто не находит нужный',
      ],
    },
    solution: 'Telegram-бот с RAG-пайплайном: документы индексируются через OpenAI Embeddings в ChromaDB. При вопросе бот находит релевантный фрагмент и формирует точный ответ через LangChain. Админ-панель для обновления базы знаний.',
    stack: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'aiogram' },
      { name: 'LangChain' },
      { name: 'ChromaDB' },
      { name: 'OpenAI Embeddings' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
    ],
    results: [
      { value: 'RAG', label: 'Пайплайн на\nLangChain + ChromaDB' },
      { value: 'Admin', label: 'Панель управления\nбазой знаний' },
      { value: 'Docker', label: 'Контейнеризация\nи деплой' },
      { value: '21 день', label: 'Срок разработки\nвсей системы' },
    ],
    compare: {
      freelance: { time: '6-10 недель', price: '200 - 400 тыс. \u20BD' },
      ai: { time: '21 день', price: '40 - 80 тыс. \u20BD' },
    },
    compareSource: 'Средние цены на разработку чат-ботов с RAG на FL.ru, 2024',
    quote: {
      text: 'Демо-проект, демонстрирующий полный RAG-пайплайн: индексация документов, векторный поиск через ChromaDB, генерация ответов через LangChain, админ-панель для управления базой знаний.',
      author: 'Демо-проект для портфолио',
    },
    cta: {
      title: 'Нужен корпоративный бот?',
      text: 'Расскажите задачу — предложу решение и оценю сроки. Бесплатно.',
    },
    card: {
      meta: ['RAG / LangChain', 'Демо-проект'],
      task: 'HR-отдел тонет в\u00A0однотипных вопросах: отпуска, больничные, политики компании, онбординг. Ответы есть в\u00A0документах, но сотрудники их не\u00A0находят.',
      solution: 'Telegram-бот с\u00A0RAG (LangChain + ChromaDB): индексирует документы, находит релевантный фрагмент и\u00A0формирует точный ответ. Админ-панель для базы знаний.',
      results: [
        { bold: 'RAG-пайплайн', text: 'LangChain + ChromaDB' },
        { bold: 'Админ-панель', text: 'управление базой знаний' },
        { bold: 'Docker', text: 'контейнеризация и деплой' },
      ],
      stack: ['Python', 'aiogram', 'LangChain', 'ChromaDB', 'OpenAI Embeddings', 'Docker'],
    },
    demoProject: true,
    cardDescription: 'RAG-пайплайн на LangChain + ChromaDB: поиск по документам, AI-ответы, админ-панель.',
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
