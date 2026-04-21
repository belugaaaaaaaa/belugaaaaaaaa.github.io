const STORAGE_KEY = "archive-language";
const DEFAULT_LANGUAGE = "en";

const pageMeta = {
  index: {
    en: {
      title: "The Archive of Civilization",
      description: "A five-page archival website contrasting elite historical narratives with fragmented records of anonymous labor."
    },
    zh: {
      title: "文明档案馆",
      description: "一个五页静态档案网站，以精英历史叙事与无名劳动者的残缺记录形成对照。"
    }
  },
  figures: {
    en: { title: "Great Figures | The Archive of Civilization" },
    zh: { title: "伟人档案 | 文明档案馆" }
  },
  workers: {
    en: { title: "Unnamed Workers | The Archive of Civilization" },
    zh: { title: "无名劳动者 | 文明档案馆" }
  },
  projects: {
    en: { title: "Historic Projects | The Archive of Civilization" },
    zh: { title: "历史工程 | 文明档案馆" }
  },
  missing: {
    en: { title: "Missing Records | The Archive of Civilization" },
    zh: { title: "空白档案室 | 文明档案馆" }
  }
};

const searchData = {
  en: {
    emperor: [
      "42 catalogue entries located",
      "Imperial decrees, portrait inventories, lineage charts",
      "Court correspondence and ceremonial records cross-indexed"
    ],
    dynasty: [
      "31 catalogue entries located",
      "Succession charts, military campaigns, reform edicts",
      "Restoration narratives prioritized in featured archives"
    ],
    war: [
      "57 catalogue entries located",
      "Maps, victory bulletins, general staff reports",
      "Casualty totals available; rank-and-file names incomplete"
    ],
    worker: [
      "Few catalogued results found",
      "3 fragmentary references in payroll and census records",
      "No personal files survive in the central archive"
    ],
    porter: [
      "Few catalogued results found",
      "2 logistics references found in construction tallies",
      "Recorded as quantity, not as individuals"
    ],
    maid: [
      "Few catalogued results found",
      "1 domestic labor notation found in household expenditure sheets",
      "No correspondence deemed preservable"
    ],
    peasant: [
      "Few catalogued results found",
      "Agricultural quotas available, names absent",
      "Oral histories not preserved in official transfer"
    ]
  },
  zh: {
    emperor: [
      "已定位 42 条目录记录",
      "包含皇帝诏令、肖像目录、世系图",
      "宫廷通信与典礼记录已完成交叉索引"
    ],
    dynasty: [
      "已定位 31 条目录记录",
      "包含王朝继承图、军事行动、改革诏令",
      "复兴叙事在精选档案中被优先展示"
    ],
    war: [
      "已定位 57 条目录记录",
      "包含战争地图、胜利公报、参谋报告",
      "伤亡总数可查，但普通士兵姓名并不完整"
    ],
    worker: [
      "已编目结果很少",
      "仅发现 3 条工资册与人口记录碎片",
      "中央档案中没有保留下来的人物个人档案"
    ],
    porter: [
      "已编目结果很少",
      "仅在工程运料统计中发现 2 条零碎记录",
      "被记录为数量，而非个人"
    ],
    maid: [
      "已编目结果很少",
      "仅在家庭支出表中发现 1 条家务劳动记载",
      "没有通信被认为值得保存"
    ],
    peasant: [
      "已编目结果很少",
      "可见农业配额数据，但缺少姓名",
      "口述历史未在官方移交中得到保存"
    ]
  }
};

const searchUi = {
  en: {
    emptyTitle: "Search the catalogue",
    emptyBody: "Terms like <em>emperor</em> retrieve dense records. Terms like <em>worker</em> return the archive's silence.",
    queryLabel: "Query",
    missingTitle: "No indexed record found",
    missingBody: "The absence may reflect archival bias rather than historical absence."
  },
  zh: {
    emptyTitle: "检索目录",
    emptyBody: "像 <em>emperor</em> 这样的词会返回大量记录，而 <em>worker</em> 只会碰到档案系统的沉默。",
    queryLabel: "检索词",
    missingTitle: "未找到已索引记录",
    missingBody: "这种缺失未必意味着历史上不存在，也可能意味着档案编制本身带有偏见。"
  }
};

const getLanguage = () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

const applyLanguage = (language) => {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });

  document.querySelectorAll("[data-en-placeholder][data-zh-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", element.dataset[`${language}Placeholder`]);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  const pageKey = document.body.dataset.page;
  if (pageKey && pageMeta[pageKey] && pageMeta[pageKey][language]) {
    const meta = pageMeta[pageKey][language];
    if (meta.title) {
      document.title = meta.title;
    }
    const description = document.querySelector('meta[name="description"]');
    if (description && meta.description) {
      description.setAttribute("content", meta.description);
    }
  }
};

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    localStorage.setItem(STORAGE_KEY, language);
    applyLanguage(language);
  });
});

applyLanguage(getLanguage());

document.querySelectorAll("[data-archive-search]").forEach((form) => {
  const input = form.querySelector("input");
  const output = form.querySelector("[data-search-output]");
  const results = form.querySelector("[data-search-results]");

  const renderResult = (query) => {
    const language = getLanguage();
    const ui = searchUi[language];
    const key = query.trim().toLowerCase();
    const match = searchData[language][key];

    if (!key) {
      output.innerHTML = `<strong>${ui.emptyTitle}</strong><span>${ui.emptyBody}</span>`;
      results.innerHTML = "";
      return;
    }

    if (match) {
      output.innerHTML = `<strong>${match[0]}</strong><span>${ui.queryLabel}: ${key}</span>`;
      results.innerHTML = match
        .slice(1)
        .map((line) => `<div>${line}</div>`)
        .join("");
      return;
    }

    output.innerHTML = `<strong>${ui.missingTitle}</strong><span>${ui.queryLabel}: ${key}</span>`;
    results.innerHTML = `<div>${ui.missingBody}</div>`;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResult(input.value);
  });

  form.querySelectorAll("[data-fill]").forEach((tag) => {
    tag.addEventListener("click", () => {
      input.value = tag.dataset.fill;
      renderResult(tag.dataset.fill);
    });
  });

  renderResult("");
});
