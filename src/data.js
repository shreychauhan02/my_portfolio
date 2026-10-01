// Shrey Chauhan — portfolio content (from his resume + public GitHub).
// Icons hotlinked from devicon / simple-icons CDNs.

export const profile = {
  name: 'Shrey Chauhan',
  firstName: 'Shrey',
  statusLine: '21 | ML ENGINEER · BUILDER · DATA WRANGLER',
  location: 'Ahmedabad, Gujarat, India',
  email: 'chauhan.shrey2005@gmail.com',
  phone: '+91 70433 77562',
  github: 'https://github.com/shreychauhan02',
  linkedin: 'https://linkedin.com/in/shreychauhan02',
  avatar: 'https://github.com/shreychauhan02.png?size=400',
  resumeHref: '/Shrey_MLAI.pdf',
  heroBlurb:
    'I take messy data, train honest models, and ship them behind real APIs — not notebooks that die in silence.',
}

export const iconUrl = (spec) => {
  const [slug, variant = 'original'] = spec.split('|')
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`
}

export const heroNotes = [
  {
    text: 'Move these sticky notes around — I move datasets the same way 😆',
    color: 'pink', top: '10%', left: '66%', rot: 3, big: true, wide: true,
  },
  {
    text: 'ML & Data @', logos: ['pytorch', 'fastapi', 'scikitlearn'],
    color: 'beige', top: '24%', left: '3%', rot: -4,
  },
  {
    text: 'Previously @', logos: ['django|plain', 'pandas', 'postgresql'],
    color: 'green', top: '46%', left: '5%', rot: 4,
  },
  {
    text: "B.Tech '27 🎓 (the stats actually check out)",
    color: 'aqua', top: '50%', left: '73%', rot: -3,
  },
  {
    text: '50+ Optuna trials. Zero regrets.',
    color: 'cream', top: '76%', left: '14%', rot: 5,
  },
]

export const stripNotes = [
  { pre: 'Training models so you don\'t', bold: 'RAGE QUIT', color: 'pink', rot: -3 },
  { pre: 'My models generalize.', bold: 'My sleep schedule doesn\'t.', color: 'aqua', rot: 2 },
  { pre: 'It\'s not overfitting —', bold: 'it\'s commitment.', color: 'cream', rot: -4 },
  { pre: '98% accuracy.', bold: 'The other 2% is my life.', color: 'green', rot: 3 },
  { pre: 'B.Tech by schedule.', bold: 'Builder by obsession.', color: 'beige', rot: -2 },
  { pre: 'IND 🇮 · Ahmedabad', bold: null, color: 'violet', rot: -2 },
]

export const metrics = [
  { value: 9.81, suffix: '/10', label: 'CGPA, Computer Engineering' },
  { value: 3900, suffix: '+', label: 'Transactions analyzed' },
  { value: 680, suffix: '', label: 'Job posts scraped' },
  { value: 6, suffix: '', label: 'Models benchmarked' },
  { value: 50, suffix: '+', label: 'Optuna trials run' },
]

export const socials = [
  { name: 'LinkedIn', url: profile.linkedin, si: 'linkedin' },
  { name: 'GitHub', url: profile.github, si: 'github' },
  { name: 'DS Portfolio', url: 'https://www.datascienceportfol.io/gauridsml23', si: 'chartdotjs' },
  { name: 'Email', url: `mailto:${profile.email}`, si: 'gmail' },
]

export const siUrl = (name) =>
  `https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${name}.svg`

export const toolkit = [
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'Scikit-learn', icon: 'scikitlearn' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'NumPy', icon: 'numpy' },
  { name: 'XGBoost', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/XGBoost_logo.svg' },
  { name: 'LightGBM', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/LightGBM_logo_black_text.svg' },
  { name: 'MLflow', icon: 'si:mlflow' },
  { name: 'DVC', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Data_Version_Control._Official_Logo_by_Iterative.ai.png' },
  { name: 'Optuna', icon: null, letter: 'O', tint: '#dcfccc' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GitHub Actions', icon: 'githubactions' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Django', icon: 'django|plain' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'vercel' },
  { name: 'Streamlit', icon: 'streamlit' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Hugging Face', icon: null, letter: '🤗', tint: '#faefcc' },
  { name: 'Gemini', icon: 'si:googlegemini' },
  { name: 'Claude', icon: 'si:claude' },
  { name: 'Power BI', icon: 'si:powerbi' },
  { name: 'Tableau', icon: 'si:tableau' },
  { name: 'Scrapy', icon: 'si:scrapy' },
]

// resolves toolkit icon: full URL | "si:name" (simple-icons) | devicon slug (+variant)
export const toolIcon = (icon) => {
  if (icon.startsWith('http')) return icon
  if (icon.startsWith('si:')) return siUrl(icon.slice(3))
  return iconUrl(icon)
}

export const featuredProjects = [
  {
    title: 'The Job Matchmaker',
    realName: 'Resume ⇄ Job Matcher',
    badge: 'LIVE ON RENDER & VERCEL',
    img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=85',
    imgAlt: 'Laptop with notes and code — resume matching workspace',
    blurb:
      'Scraped 680 live Indeed postings and ranked them against an uploaded PDF resume — TF-IDF + semantic embeddings (FastEmbed · ChromaDB) in a hybrid score, with skill-gap analysis and Gemini explaining "why this match?".',
    punch: 'Turns out the perfect job was hiding in the long tail. So was my confidence.',
    stack: ['Python', 'FastAPI', 'Scrapy', 'ChromaDB', 'Gemini', 'Next.js'],
    link: 'https://github.com/shreychauhan02/job_recommeder',
  },
  {
    title: 'The Vibe Reader',
    realName: 'YouTube Comment Sentiment',
    badge: 'LIVE ON CHROME',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85',
    imgAlt: 'Phone surrounded by chat bubbles — real time comment sentiment',
    blurb:
      'A Chrome extension that reads YouTube comment sentiment in real time. 6 models benchmarked across 5 imbalance techniques, LightGBM tuned with 50+ Optuna trials, tracked in MLflow + DVC, retrained via CI/CD.',
    punch: 'Now comments can be classified — so you never have to read them.',
    stack: ['LightGBM', 'Optuna', 'MLflow', 'DVC', 'FastAPI'],
    link: 'https://github.com/shreychauhan02/comment_sentiment_analysis_project',
  },
  {
    title: 'The Cart Decoder',
    realName: 'Customer Shopping Behavior',
    badge: 'INTERACTIVE DASHBOARD',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85',
    imgAlt: 'Contactless payment at a store counter — shopping behavior data',
    blurb:
      '3,900+ shopping transactions decoded into customer segments, discount sensitivity and repeat-purchase drivers. Python feature engineering, SQL on PostgreSQL, shipped as an interactive Power BI dashboard.',
    punch: 'Learned why people buy 3 soaps and never a second toothbrush. Still buying 3 soaps.',
    stack: ['Python', 'PostgreSQL', 'Power BI'],
    link: 'https://github.com/shreychauhan02/customer_behavior_analysis',
  },
]

// Business case studies — images hotlinked from the DS portfolio host.
// All 10 case studies live in one GitHub repo — each card links to its folder.
const REPO = 'https://github.com/shreychauhan02/ml_based_case_studies/tree/main'
const DSP = 'https://www.datascienceportfol.io/gauridsml23'
const U = (id) => `https://images.unsplash.com/photo-${id}?w=1400&q=85&auto=format&fit=crop`
export const caseStudies = [
  {
    title: 'OLA — Ensemble Learning',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr6_68554B2BED72AA859BAB.png',
    tags: ['Bagging', 'Boosting', 'KNN Imputation', 'Class Imbalance', 'ROC-AUC'],
    desc: 'Driver churn is Ola\'s leaky bucket — predicting which drivers quit, with ensemble models, imbalance handling and confusion-matrix autopsies.',
    link: `${REPO}/09_Ensemble_Learning_OLA`,
  },
  {
    title: 'Yulu — Hypothesis Testing',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr7_BC06F307C634730BCB37.jpeg',
    tags: ['Bi-variate Analysis', '2-sample t-test', 'ANOVA', 'Chi-square'],
    desc: 'India\'s micro-mobility hero, interrogated statistically — separating real riding patterns from random noise with t-tests, ANOVA and chi-square.',
    link: `${REPO}/05_Hypothesis_Testing_Yulu`,
  },
  {
    title: 'Delhivery — Feature Engineering',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr4_CBED87045CC1DFB97C45.png',
    tags: ['Hypothesis Testing', 'Normalization', 'Standardization', 'Outlier Treatment'],
    desc: 'Logistics data shaped until it behaved — feature relationships, categorical encoding, and a full missing-value & outlier operation.',
    link: `${REPO}/06_Feature_Engineering_Delhivery`,
  },
  {
    title: 'Jamboree Education — Linear Regression',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr5_F02688D08F4B99D373E8.jpg',
    tags: ['EDA', 'VIF', 'Homoscedasticity', 'MAE / RMSE', 'R² & Adj R²'],
    desc: 'Predicting study-abroad exam scores the honest way — full regression diagnostics before trusting a single coefficient.',
    link: `${REPO}/07_Linear_Regression_Jamboree`,
  },
  {
    title: 'Aerofit — Descriptive Statistics & Probability',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr2_85A8870EDABA6EB504BD.jpeg',
    tags: ['Outlier Detection', 'Data Shapes', 'Statistical Summary'],
    desc: 'Who actually buys treadmills? Buyer profiling with statistical summaries and data-shape forensics for the right recommendations.',
    link: `${REPO}/03_Descriptive_Stats_Aerofit`,
  },
  {
    title: 'Walmart — Confidence Interval & CLT',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr3_0011A95B9757BBE1554E.jpg',
    tags: ['Central Limit Theorem', 'Confidence Intervals', 'Univariate & Bivariate'],
    desc: 'Do spending habits differ by gender? 100M+ customers answered with the central limit theorem instead of vibes.',
    link: `${REPO}/04_Confidence_Intervals_Walmart`,
  },
  {
    title: 'Scaler — Clustering',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr8_DF7F1F0F111D71545719.jpg',
    tags: ['K-means', 'Hierarchical', 'Unsupervised'],
    desc: 'Slicing an ed-tech learner base into natural groups — first by hand, then letting K-means and hierarchical clustering show off.',
    link: `${REPO}/10_Clustering_Scaler`,
  },
  {
    title: 'Zee — Recommender Systems',
    img: 'https://www.datascienceportfol.io/static/profile_pics/pr9_175903AF3BE74E418312.jpeg',
    tags: ['Collaborative Filtering', 'Pearson & Cosine', 'Matrix Factorization'],
    desc: 'Personalized movie picks from ratings — user-based & item-based collaborative filtering with similarity math that actually fits.',
    link: DSP,
  },
  {
    title: 'LoanTap — Logistic Regression',
    img: U('1560518883-ce09059eeffa'),
    tags: ['Logistic Regression', 'ROC-AUC', 'Precision / Recall', 'Underwriting'],
    desc: 'Who actually repays a personal loan? A credit model that says yes to good borrowers and awkwardly no to risky ones.',
    link: `${REPO}/08_Logistic_Regression_LoanTap`,
  },
  {
    title: 'Target — SQL Analysis',
    img: U('1586528116311-ad8dd3c8310d'),
    tags: ['SQL Joins', 'Window Functions', 'CTEs', 'Aggregations'],
    desc: '100k+ Brazilian e-commerce orders, eight tables, one query at a time — logistics, payments and seasonality extracted with pure SQL.',
    link: `${REPO}/01_SQL_Target`,
  },
  {
    title: 'Netflix — Data Exploration',
    img: U('1536440136628-849c177e76a1'),
    tags: ['EDA', 'Matplotlib', 'Seaborn', 'Storytelling'],
    desc: 'The whole Netflix catalog grilled like a content analyst: genres, countries and rating myths, settled with charts.',
    link: `${REPO}/02_Data_Exploration_Netflix`,
  },
]

export const moreWork = [
  { name: 'AI-News-Chatbot', desc: 'LLM news digest. Reads so you don\'t have to.', link: 'https://github.com/shreychauhan02/AI-News-Chatbot' },
  { name: 'TackBoard', desc: 'Virtual pinboard in TypeScript. Drag everything.', link: 'https://github.com/shreychauhan02/TackBoard' },
  { name: 'Complaint Classifier', desc: 'ML that routes grievances faster than an IVR.', link: 'https://github.com/shreychauhan02/consumer-complaint-classifier' },
  { name: 'Gig Profit Optimizer', desc: 'Freelance math: rates, tax, tears included.', link: 'https://github.com/shreychauhan02/gig-worker-profit-optimizer' },
  { name: 'Amazon Review Study', desc: 'Star ratings vs. actual opinions. They disagree.', link: 'https://github.com/shreychauhan02/amazon-product-review-analysis' },
  { name: 'Zomato Success Classifier', desc: 'Predicts which restaurants survive the algorithm.', link: 'https://github.com/shreychauhan02/zomato-success-classifier' },
  { name: 'Salesflow CRM', desc: 'Client relationships, minus the spreadsheet chaos.', link: 'https://github.com/shreychauhan02/salesflow-crm' },
  { name: '8-Week SQL Challenge', desc: '80 queries, 8 weeks, 0 excuses.', link: 'https://github.com/shreychauhan02/8_WEEK_SQL_CHALLENGE' },
]

export const impact = [
  {
    org: 'HN Techno',
    tag: '💻',
    role: 'Python, Django & Data Science Trainee',
    when: "Hands-on · Ahmedabad",
    lines: [
      'Built web apps in Django with database integration and RESTful APIs.',
      'Ran real ML workflows on messy datasets with Pandas & Scikit-learn.',
    ],
  },
  {
    org: 'Achievements',
    tag: '🏆',
    role: 'Hackathons & competitive building',
    when: 'Indus Hackathon 2025 · Ingenium 2026 (Ahmedabad University)',
    lines: [
      'Full-stack + ML problem solving under a deadline — chaos, coffee, demos.',
      'Shipped projects end-to-end rather than leaving notebooks half-dead.',
    ],
  },
  {
    org: 'Programs',
    tag: '📜',
    role: 'ML Program — Teachnook · DS & ML — MyJob Grow × IIT Bombay Techfest',
    when: 'Certified & caffeinated',
    lines: [
      'Preprocessing → model development → end-to-end ML workflows.',
      'EDA, predictive modeling and visualization tracks; 8 business case studies solved.',
    ],
  },
]
