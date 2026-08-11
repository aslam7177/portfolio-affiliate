export const projects = [
  {
    id: 1,
    title: 'AirSense India — AI Urban Air Quality Intelligence System',
    stack: 'Python | Flask | OpenRouter (GPT-4o-mini) | WAQI, NASA FIRMS, TomTom, OpenWeatherMap APIs',
    description:
      'Built for the ET AI Hackathon 2026. An AI-powered platform that doesn\'t just show AQI numbers — it explains why air quality is bad and what to do about it. Integrates 5 real-time data sources through a deterministic evidence-scoring engine, then uses GPT-4o-mini to generate scientific reasoning, government policy recommendations, and citizen health alerts in English, Hindi, Telugu, and Kannada. Covers 8 major Indian cities with neighborhood-level tracking.',
    highlights: [
      'Multi-API orchestration',
      'Explainable AI (no hallucinated numbers)',
      'Multi-lingual alerts',
      'Modular architecture',
    ],
    githubLink: 'https://github.com/aslam7177/air-quality-intelligence',
    liveLink: null,
    isPrivate: true,
    privateNote: 'Private — available on request',
  },
  {
    id: 2,
    title: 'Flash Notes — Full-Stack Web App',
    stack: 'Flask | SQLite | Docker | Selenium',
    description:
      'A full-stack notes management app built from scratch with secure user authentication, session management, and a clean MVC backend architecture with REST API endpoints. Includes an automated Selenium test suite simulating real user logins and interactions. Fully Dockerized for consistent deployment — and along the way, identified and fixed a hardcoded credential vulnerability using OWASP Top 10 principles.',
    highlights: ['Auth system', 'Dockerized', 'Automated E2E testing', 'Security fix (OWASP)'],
    githubLink: 'https://github.com/aslam7177/flash-notes-app',
    liveLink: null,
  },
  {
    id: 3,
    title: 'SMS Spam Detection — Machine Learning',
    stack: 'Python | Scikit-learn | NLP | Streamlit',
    description:
      'A binary spam classifier trained on 5,500+ real SMS messages. Built a full NLP preprocessing pipeline (tokenization, stop-word removal, stemming, TF-IDF), tested 7 different models, and selected the best performer — achieving 100% precision on held-out test data. Deployed as a live web app with Streamlit.',
    highlights: ['7 models compared', '100% precision', 'EDA with word clouds', 'Live web deployment'],
    githubLink: 'https://github.com/aslam7177/spam-message-detection-project-main',
    liveLink: null,
  },
  {
    id: 4,
    title: 'Binance Futures Trading Bot',
    stack: 'Python | python-binance | CLI',
    description:
      'A CLI trading bot for Binance Futures (Demo Trading/Testnet) that places MARKET, LIMIT, and STOP_MARKET orders with full input validation and structured logging. Clean separation between API layer, order logic, and validation — with a mocked unit test suite that runs instantly with no live credentials needed.',
    highlights: [
      '3 order types',
      'Mocked test suite',
      'Real exchange-rule error handling',
      'Clean modular design',
    ],
    githubLink: 'https://github.com/aslam7177/binance-futures-trading-bot',
    liveLink: null,
  },
  {
    id: 5,
    title: 'SQL Business Data Analysis — Sakila Database',
    stack: 'MySQL | Advanced SQL | Business Intelligence',
    description:
      'An end-to-end business analytics study on the Sakila sample database, simulating a real DVD rental company. Structured like a professional analytics repo — modular SQL scripts, schema documentation, and written business-insight reports across 6 analysis areas. Used advanced SQL (multi-table joins, CTEs, window functions, Pareto analysis, customer segmentation).',
    highlights: [
      '12+ SQL analysis scripts',
      'Window functions & CTEs',
      'Business insight reports',
      'Professional repo structure',
    ],
    githubLink: 'https://github.com/aslam7177/sql-business-data-analysis',
    liveLink: null,
  },
  {
    id: 6,
    title: 'Bitcoin Market Sentiment vs Trader Performance',
    stack: 'Python | Pandas | NumPy | Matplotlib/Seaborn',
    description:
      'Analyzed the relationship between Bitcoin market sentiment (Fear & Greed Index) and real trader performance using historical Hyperliquid trading data. Full workflow: data cleaning, feature engineering, dataset merging, and exploratory analysis with 10+ visualizations.',
    highlights: [
      'Real trading data',
      '10+ visualizations',
      'Correlation & profitability analysis',
      'Actionable business insights',
    ],
    githubLink: 'https://github.com/aslam7177/bitcoin-market-sentiment-analysis',
    liveLink: null,
  },
  {
    id: 7,
    title: 'IoT Smart Parking System — Team Capstone Project',
    stack: 'NodeMCU (ESP8266) | RFID | IR Sensors | Blynk IoT',
    description:
      'A team capstone project (Batch 33, GITAM CSE) building a smart parking system with RFID-based secure entry authentication, IR sensor slot detection, and real-time status updates on both an LCD display and the Blynk IoT mobile app. Designed as a scalable prototype with the vision of extending to multi-level facilities, automated payments, and usage analytics.',
    highlights: [
      'RFID + IoT integration',
      'Real-time mobile monitoring',
      'Team project (4 members)',
      'Scalable prototype design',
    ],
    githubLink: null,
    liveLink: null,
    isAcademic: true,
    academicNote: 'Academic Capstone — no public repo',
  },
];
