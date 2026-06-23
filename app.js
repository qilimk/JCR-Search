const DATA_DIR = "中科院分区表及JCR原始数据文件";

const DATASETS = [
  "GJQKYJMD2025.csv",
  "GJQKYJMD2024.csv",
  "GJQKYJMD2023.csv",
  "GJQKYJMD2021.csv",
  "GJQKYJMD2020.csv",
  "JCR2025-UTF8.csv",
  "JCR2024-UTF8.csv",
  "JCR2023-UTF8.csv",
  "JCR2022-UTF8.csv",
  "JCR2021-UTF8.csv",
  "JCR2020-UTF8.csv",
  "CCF2026-UTF8.csv",
  "CCF2022-UTF8.csv",
  "CCF2019-UTF8.csv",
  "CCFChinese2019-UTF8.csv",
  "CCFT2025-UTF8.csv",
  "CCFT2022-UTF8.csv",
  "XR2026-UTF8.csv",
  "XR2026Conferences-UTF8.csv",
  "FQBJCR2025-UTF8.csv",
  "FQBJCR2023-UTF8.csv",
  "FQBJCR2022-UTF8.csv",
  "FQBJCR2021-UTF8.csv"
];

const RECENT_DATASETS = new Set([
  "GJQKYJMD2025.csv",
  "JCR2025-UTF8.csv",
  "JCR2024-UTF8.csv",
  "CCF2026-UTF8.csv",
  "CCFT2025-UTF8.csv",
  "XR2026-UTF8.csv",
  "XR2026Conferences-UTF8.csv",
  "FQBJCR2025-UTF8.csv"
]);

const IMPORTANT_FIELDS = [
  "IF Quartile",
  "IF(",
  "CCF推荐类型",
  "预警",
  "大类分区",
  "Top",
  "标注",
  "T分区",
  "新锐分区"
];

const SEARCH_FIELDS = [
  "Journal",
  "刊物名称",
  "刊物简称",
  "中文刊名",
  "刊名",
  "会议缩写",
  "ISSN",
  "EISSN",
  "eISSN",
  "ISSN/EISSN",
  "CN",
  "CN号"
];

const EXAMPLES = ["National Science Review", "Proceedings of the IEEE", "Nature", "CVPR", "IEEE Trans. Pattern Anal. Mach. Intell."];

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    language: "语言",
    settings: "数据表",
    eyebrow: "静态网页工具",
    searchPlaceholder: "输入期刊、会议、ISSN 或简称",
    searchSuggestions: "搜索建议",
    search: "查询",
    loading: "正在载入数据...",
    loadingProgress: "正在载入数据 {finished}/{total}",
    loaded: "数据已载入",
    loadFailed: "数据载入失败",
    loadError: "无法读取 CSV 文件：{message}。请通过本地服务器或 GitHub Pages 打开本页面。",
    datasetCount: "{selected} 个数据表 · {records} 行",
    cas: "中科院",
    xr: "新锐",
    topList: "Top 期刊 / 会议",
    q1List: "Q1 / 1区 期刊 / 会议",
    resultEyebrow: "结果",
    waiting: "等待查询",
    clear: "清空",
    defaultMeta: "可查询 JCR、中科院升级版、预警名单、CCF 与新锐分区数据。",
    recordsFrom: "{records} 条记录，来自 {datasets} 个数据表",
    uniqueItems: "{filtered} / {total} 个唯一条目 · {description}",
    topDescription: "Top 字段为 Top 或 是 的记录",
    q1Description: "包含 JCR Q1、分区 1、1 区或 T1 的记录",
    noItemsTitle: "没有找到条目",
    noItemsBody: "请在右上角选择更多数据表后重试。",
    noListMatchTitle: "没有匹配条目",
    noListMatchBody: "换一个关键词，或切换期刊/会议筛选。",
    listFilterPlaceholder: "在列表中筛选名称、数据表、类型、分区",
    allCategories: "全部一级分类",
    all: "全部",
    journal: "期刊",
    conference: "会议",
    uncategorized: "未分类",
    matched: "匹配",
    fields: "{count} 个字段",
    noExactMatch: "没有找到匹配项",
    query: "查询：{query}",
    noExactTitle: "没有精确匹配",
    noExactBody: "请检查拼写，或打开右上角数据表选择更多来源。",
    datasets: "数据表",
    chooseDatasets: "选择数据表",
    close: "关闭",
    drawerNote: "推荐数据表适合日常查询；全选会覆盖历史数据，首次载入和搜索会更重。",
    selectAll: "全选",
    recommended: "推荐"
  },
  en: {
    htmlLang: "en",
    language: "Language",
    settings: "Datasets",
    eyebrow: "Static Web App",
    searchPlaceholder: "Search journal, conference, ISSN, or abbreviation",
    searchSuggestions: "Search suggestions",
    search: "Search",
    loading: "Loading data...",
    loadingProgress: "Loading data {finished}/{total}",
    loaded: "Data loaded",
    loadFailed: "Data failed to load",
    loadError: "Could not read CSV files: {message}. Open this page through a local server or GitHub Pages.",
    datasetCount: "{selected} datasets · {records} rows",
    cas: "CAS",
    xr: "XR",
    topList: "Top Journals / Conferences",
    q1List: "Q1 / Zone 1 Journals / Conferences",
    resultEyebrow: "Result",
    waiting: "Waiting for search",
    clear: "Clear",
    defaultMeta: "Search JCR, CAS partitions, warning lists, CCF, and XR data.",
    recordsFrom: "{records} records from {datasets} datasets",
    uniqueItems: "{filtered} / {total} unique items · {description}",
    topDescription: "Records whose Top field is Top or Yes",
    q1Description: "Records with JCR Q1, partition 1, Zone 1, or T1",
    noItemsTitle: "No items found",
    noItemsBody: "Select more datasets in the top-right panel and try again.",
    noListMatchTitle: "No matching items",
    noListMatchBody: "Try another keyword, or switch the journal/conference filter.",
    listFilterPlaceholder: "Filter by name, dataset, type, or partition",
    allCategories: "All first-level categories",
    all: "All",
    journal: "Journal",
    conference: "Conference",
    uncategorized: "Uncategorized",
    matched: "Matched",
    fields: "{count} fields",
    noExactMatch: "No match found",
    query: "Query: {query}",
    noExactTitle: "No exact match",
    noExactBody: "Check spelling, or select more datasets in the top-right panel.",
    datasets: "Datasets",
    chooseDatasets: "Choose Datasets",
    close: "Close",
    drawerNote: "Recommended datasets are best for daily searches. Select all includes historical data and may feel heavier on first load.",
    selectAll: "Select All",
    recommended: "Recommended"
  }
};

const CATEGORY_EN = {
  "会议": "Conference",
  "未分类": "Uncategorized",
  "材料科学": "Materials Science",
  "地球科学": "Earth Science",
  "法学": "Law",
  "工程技术": "Engineering",
  "管理学": "Management",
  "化学": "Chemistry",
  "环境科学与生态学": "Environmental Science & Ecology",
  "计算机科学": "Computer Science",
  "教育学": "Education",
  "经济学": "Economics",
  "历史学": "History",
  "农林科学": "Agricultural & Forestry Science",
  "人文科学": "Humanities",
  "社会学": "Sociology",
  "生物学": "Biology",
  "数学": "Mathematics",
  "文学": "Literature",
  "物理与天体物理": "Physics & Astronomy",
  "心理学": "Psychology",
  "医学": "Medicine",
  "艺术学": "Art",
  "哲学": "Philosophy",
  "综合性期刊": "Multidisciplinary Journals"
};

const state = {
  datasets: [],
  selected: new Set(JSON.parse(localStorage.getItem("showjcr:selected") || "null") || [...RECENT_DATASETS]),
  records: [],
  searchKeys: new Map(),
  activeList: null,
  language: I18N[localStorage.getItem("jcr-search:language")] ? localStorage.getItem("jcr-search:language") : "zh",
  loaded: false
};

const els = {
  form: document.querySelector("#searchForm"),
  input: document.querySelector("#journalInput"),
  suggestionPanel: document.querySelector("#suggestionPanel"),
  loadStatus: document.querySelector("#loadStatus"),
  loadProgress: document.querySelector("#loadProgress"),
  datasetCount: document.querySelector("#datasetCount"),
  searchStats: document.querySelector("#searchStats"),
  resultTitle: document.querySelector("#resultTitle"),
  resultMeta: document.querySelector("#resultMeta"),
  resultHighlights: document.querySelector("#resultHighlights"),
  results: document.querySelector("#results"),
  clearButton: document.querySelector("#clearButton"),
  settingsButton: document.querySelector("#settingsButton"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  settingsDrawer: document.querySelector("#settingsDrawer"),
  datasetList: document.querySelector("#datasetList"),
  selectAllButton: document.querySelector("#selectAllButton"),
  selectRecentButton: document.querySelector("#selectRecentButton"),
  topListButton: document.querySelector("#topListButton"),
  q1ListButton: document.querySelector("#q1ListButton"),
  quickExamples: document.querySelector("#quickExamples"),
  languageSelect: document.querySelector("#languageSelect"),
  languageLabel: document.querySelector("#languageLabel"),
  settingsButtonText: document.querySelector("#settingsButtonText"),
  searchButton: document.querySelector("#searchButton")
};

function t(key, params = {}) {
  const template = I18N[state.language][key] || I18N.zh[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => params[name] ?? "");
}

function displayKind(kind) {
  if (kind === "期刊") return t("journal");
  if (kind === "会议") return t("conference");
  return kind;
}

function displayCategory(category) {
  if (state.language === "en") return CATEGORY_EN[category] || category;
  return category;
}

function datasetName(file) {
  return file.replace(/-UTF8|\.csv/g, "");
}

function csvPath(file) {
  return `${DATA_DIR}/${file}`;
}

function normalize(value) {
  return String(value || "")
    .replace(/\uFEFF/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function searchableHeaders(headers) {
  const wanted = new Set(SEARCH_FIELDS);
  return headers.filter((header, index) => wanted.has(header) || index === 0);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(field);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  return rows;
}

async function loadDataset(file) {
  const response = await fetch(encodeURI(csvPath(file)));
  if (!response.ok) throw new Error(`${file}: ${response.status}`);
  const text = await response.text();
  const rows = parseCsv(text);
  const headers = (rows.shift() || []).map((header) => header.replace(/\uFEFF/g, "").trim());
  const primaryKey = headers.includes("Journal") ? "Journal" : headers[0];
  const aliasKey = headers[0] !== "Journal" && headers.includes("Journal") ? headers[0] : null;
  const searchHeaders = searchableHeaders(headers);
  const records = rows.map((row) => {
    const values = {};
    headers.forEach((header, index) => {
      values[header] = (row[index] || "").trim();
    });
    return {
      dataset: datasetName(file),
      file,
      headers,
      primaryKey,
      aliasKey,
      searchHeaders,
      values
    };
  });

  return { file, name: datasetName(file), headers, primaryKey, aliasKey, searchHeaders, records };
}

async function loadAllData() {
  renderDatasetList();
  try {
    let finished = 0;
    els.loadProgress.style.width = "4%";
    const loaded = await Promise.all(DATASETS.map(async (file) => {
      const dataset = await loadDataset(file);
      finished += 1;
      els.loadStatus.textContent = t("loadingProgress", { finished, total: DATASETS.length });
      els.loadProgress.style.width = `${Math.round((finished / DATASETS.length) * 100)}%`;
      return dataset;
    }));
    state.datasets = loaded;
    rebuildRecords();
    state.loaded = true;
    els.loadStatus.textContent = t("loaded");
    els.loadProgress.style.width = "100%";
    renderExamples();
    updateDatasetCount();
  } catch (error) {
    els.loadStatus.textContent = t("loadFailed");
    els.loadProgress.style.width = "100%";
    els.results.innerHTML = `<div class="error-state">${escapeHtml(t("loadError", { message: error.message }))}</div>`;
  }
}

function rebuildRecords() {
  state.records = state.datasets
    .filter((dataset) => state.selected.has(dataset.file))
    .flatMap((dataset) => dataset.records);
  buildSearchKeys();
  updateDatasetCount();
}

function buildSearchKeys() {
  state.searchKeys.clear();
  for (const record of state.records) {
    for (const header of record.searchHeaders) {
      const value = record.values[header];
      const normalized = normalize(value);
      if (!normalized) continue;
      if (!state.searchKeys.has(normalized)) {
        state.searchKeys.set(normalized, {
          label: value,
          field: header,
          journal: record.values.Journal || value,
          dataset: record.dataset
        });
      }
    }
  }
  renderLiveSuggestions();
}

function updateDatasetCount() {
  const selectedCount = state.selected.size;
  const recordCount = state.records.length.toLocaleString();
  els.datasetCount.textContent = t("datasetCount", { selected: selectedCount, records: recordCount });
  const groups = summarizeGroups();
  els.searchStats.innerHTML = `
    <span>JCR ${groups.JCR || 0}</span>
    <span>${t("cas")} ${groups.FQBJCR || 0}</span>
    <span>CCF ${groups.CCF || 0}</span>
    <span>${t("xr")} ${groups.XR || 0}</span>
  `;
}

function renderExamples() {
  els.quickExamples.innerHTML = EXAMPLES.map((name) => `<button type="button" data-example="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("");
}

function summarizeGroups() {
  return state.datasets
    .filter((dataset) => state.selected.has(dataset.file))
    .reduce((summary, dataset) => {
      const key = dataset.name.startsWith("JCR")
        ? "JCR"
        : dataset.name.startsWith("FQBJCR")
          ? "FQBJCR"
          : dataset.name.startsWith("CCF")
            ? "CCF"
            : dataset.name.startsWith("XR")
              ? "XR"
              : "OTHER";
      summary[key] = (summary[key] || 0) + 1;
      return summary;
    }, {});
}

function renderDatasetList() {
  els.datasetList.innerHTML = DATASETS.map((file) => {
    const checked = state.selected.has(file) ? "checked" : "";
    const label = datasetName(file);
    return `
      <label class="dataset-item">
        <input type="checkbox" value="${escapeHtml(file)}" ${checked}>
        <span>
          <span class="dataset-name">${escapeHtml(label)}</span>
          <span class="dataset-detail">${escapeHtml(file)}</span>
        </span>
      </label>
    `;
  }).join("");
}

function search(query) {
  const simplified = query.replace(/\s+/g, " ").trim();
  const normalized = normalize(simplified);
  if (!normalized) return;
  hideSuggestions();

  const results = state.records.filter((record) => {
    return record.searchHeaders.some((header) => normalize(record.values[header]) === normalized);
  });

  if (results.length) {
    const canonical = results.find((record) => record.values.Journal)?.values.Journal || simplified;
    renderResults(canonical, results);
    return;
  }

  const suggestions = findSuggestions(normalized);
  renderEmpty(simplified, suggestions);
}

function findSuggestions(normalized) {
  const terms = normalized.split(" ").filter(Boolean);
  return [...state.searchKeys.entries()]
    .map(([key, value]) => ({ key, ...value, score: suggestionScore(key, normalized, terms) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, 8)
    .map((item) => item);
}

function suggestionScore(key, normalized, terms) {
  if (key === normalized) return 1000;
  if (key.startsWith(normalized)) return 800 - key.length;
  if (key.includes(normalized)) return 600 - key.length;
  const matchedTerms = terms.filter((term) => key.includes(term)).length;
  if (matchedTerms) return matchedTerms * 100 - key.length / 10;
  return 0;
}

function renderResults(title, records) {
  state.activeList = null;
  els.resultTitle.textContent = title;
  els.resultMeta.textContent = t("recordsFrom", {
    records: records.length,
    datasets: new Set(records.map((record) => record.dataset)).size
  });
  els.resultHighlights.innerHTML = renderHighlights(records);
  els.results.innerHTML = records.map(renderRecord).join("");
  if (window.matchMedia("(max-width: 860px)").matches) {
    document.querySelector(".results-panel").scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

function showTopList() {
  if (!state.loaded) return;
  const matches = uniqueListItems(state.records.filter(isTopRecord));
  renderList(t("topList"), matches, t("topDescription"), "top");
}

function showQ1List() {
  if (!state.loaded) return;
  const matches = uniqueListItems(state.records.filter(isQ1Record));
  renderList(t("q1List"), matches, t("q1Description"), "q1");
}

function uniqueListItems(records) {
  const seen = new Map();
  for (const record of records) {
    const title = recordTitle(record);
    const key = normalize(title);
    if (!key) continue;
    const categories = firstLevelCategories(record);
    if (seen.has(key)) {
      const item = seen.get(key);
      for (const category of categories) item.categories.add(category);
      item.searchText = `${item.searchText} ${listSearchText(record)} ${categories.join(" ")}`;
    } else {
      seen.set(key, {
        title,
        kind: isConference(record) ? "会议" : "期刊",
        dataset: record.dataset,
        marker: listMarker(record),
        categories: new Set(categories),
        searchText: `${listSearchText(record)} ${categories.join(" ")}`
      });
    }
  }
  return [...seen.values()]
    .map((item) => ({ ...item, categories: [...item.categories].sort((a, b) => a.localeCompare(b, "zh-CN")) }))
    .sort((a, b) => a.kind.localeCompare(b.kind, "zh-CN") || a.title.localeCompare(b.title, "en"));
}

function renderList(title, items, description, listKind) {
  hideSuggestions();
  els.input.value = "";
  state.activeList = { title, items, description, listKind, type: "all", category: "all", query: "" };
  renderActiveList();
  if (window.matchMedia("(max-width: 860px)").matches) {
    document.querySelector(".results-panel").scrollIntoView({ block: "start", behavior: "smooth" });
  }
}

function renderActiveList() {
  const list = state.activeList;
  if (!list) return;
  const categoryOptions = listCategoryOptions(list.items, list.type);
  if (list.category !== "all" && !categoryOptions.includes(list.category)) {
    list.category = "all";
  }
  const filteredItems = filterListItems(list.items, list.query, list.type, list.category);
  list.title = list.listKind === "top" ? t("topList") : t("q1List");
  list.description = list.listKind === "top" ? t("topDescription") : t("q1Description");
  els.resultTitle.textContent = list.title;
  els.resultMeta.textContent = t("uniqueItems", {
    filtered: filteredItems.length.toLocaleString(),
    total: list.items.length.toLocaleString(),
    description: list.description
  });
  els.resultHighlights.innerHTML = "";
  if (!list.items.length) {
    els.results.innerHTML = `<div class="empty-state"><div class="empty-title">${t("noItemsTitle")}</div>${t("noItemsBody")}</div>`;
    return;
  }
  const listRows = filteredItems.length
    ? renderCompactRows(filteredItems)
    : `<div class="empty-state"><div class="empty-title">${t("noListMatchTitle")}</div>${t("noListMatchBody")}</div>`;
  els.results.innerHTML = `
    <div class="list-filter">
      <input id="listFilterInput" type="search" value="${escapeHtml(list.query)}" placeholder="${escapeHtml(t("listFilterPlaceholder"))}">
      <select id="listCategorySelect" aria-label="一级分类">
        <option value="all">${t("allCategories")}</option>
        ${categoryOptions.map((category) => `<option value="${escapeHtml(category)}" ${category === list.category ? "selected" : ""}>${escapeHtml(displayCategory(category))}</option>`).join("")}
      </select>
      <div class="list-filter-tabs" aria-label="list type filter">
        <button type="button" data-list-type="all" class="${list.type === "all" ? "active" : ""}">${t("all")}</button>
        <button type="button" data-list-type="journal" class="${list.type === "journal" ? "active" : ""}">${t("journal")}</button>
        <button type="button" data-list-type="conference" class="${list.type === "conference" ? "active" : ""}">${t("conference")}</button>
      </div>
    </div>
    <div class="compact-list">
      ${listRows}
    </div>
  `;
}

function renderCompactRows(items) {
  return items.map((item) => `
    <button class="compact-row" type="button" data-suggestion="${escapeHtml(item.title)}">
      <span class="compact-main">
        <span class="compact-title">${escapeHtml(item.title)}</span>
        <span class="compact-meta">${escapeHtml(item.dataset)} · ${escapeHtml(item.marker)}</span>
      </span>
      <span class="compact-tags">
        <span class="compact-kind">${escapeHtml(displayKind(item.kind))}</span>
        ${item.categories.slice(0, 3).map((category) => `<span class="compact-category">${escapeHtml(displayCategory(category))}</span>`).join("")}
      </span>
    </button>
  `).join("");
}

function filterListItems(items, query, type, category) {
  const normalizedQuery = normalize(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  return items.filter((item) => {
    if (type === "journal" && item.kind !== "期刊") return false;
    if (type === "conference" && item.kind !== "会议") return false;
    if (category !== "all" && !item.categories.includes(category)) return false;
    if (!terms.length) return true;
    const haystack = normalize(`${item.title} ${item.kind} ${item.dataset} ${item.marker} ${item.categories.join(" ")} ${item.searchText}`);
    return terms.every((term) => haystack.includes(term));
  });
}

function listCategoryOptions(items, type) {
  const categories = new Set();
  for (const item of items) {
    if (type === "journal" && item.kind !== "期刊") continue;
    if (type === "conference" && item.kind !== "会议") continue;
    for (const category of item.categories) categories.add(category);
  }
  return [...categories].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function recordTitle(record) {
  return record.values.Journal || record.values["刊物名称"] || record.values["刊名"] || record.values["会议缩写"] || record.values[record.primaryKey] || "";
}

function listSearchText(record) {
  return record.searchHeaders
    .map((header) => record.values[header])
    .filter(Boolean)
    .join(" ");
}

function firstLevelCategories(record) {
  const categories = [
    record.values["大类"],
    record.values["大类中文名"],
    record.values["领域"]
  ]
    .filter(Boolean)
    .flatMap(splitCategoryValue)
    .map((category) => category.trim())
    .filter(Boolean);

  if (categories.length) return uniqueStrings(categories);
  if (record.dataset.startsWith("JCR")) return ["JCR"];
  return [isConference(record) ? "会议" : "未分类"];
}

function splitCategoryValue(value) {
  return String(value)
    .split(/[;；|]/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function uniqueStrings(values) {
  const seen = new Set();
  const result = [];
  for (const value of values) {
    const key = normalize(value);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

function isConference(record) {
  return record.dataset.includes("Conferences") ||
    record.values["会议缩写"] ||
    String(record.values["CCF推荐类别（国际学术刊物/会议）"] || "").includes("会议") ||
    String(record.values["CCF推荐类别"] || "").includes("会议");
}

function isTopRecord(record) {
  return record.headers.some((header) => {
    if (header !== "Top" && !header.endsWith("Top")) return false;
    const value = normalize(record.values[header]);
    return value === "top" || value === "是" || value === "yes" || value === "true" || value === "1";
  });
}

function isQ1Record(record) {
  return record.headers.some((header) => {
    const value = normalize(record.values[header]);
    if (!value) return false;
    if (header.includes("IF Quartile")) return value === "q1";
    if (header === "分区" || header === "大类分区" || header.includes("新锐分区") || header.includes("T分区") || header.endsWith("分区")) {
      return value === "1" || value === "1区" || value === "1 区" || value === "t1" || value.startsWith("1 ");
    }
    return false;
  });
}

function listMarker(record) {
  const topField = record.headers.find((header) => (header === "Top" || header.endsWith("Top")) && record.values[header]);
  if (topField && isTopRecord(record)) return `${topField}: ${record.values[topField]}`;
  const q1Field = record.headers.find((header) => {
    const value = normalize(record.values[header]);
    return header.includes("IF Quartile") && value === "q1";
  });
  if (q1Field) return `${q1Field}: ${record.values[q1Field]}`;
  const zoneField = record.headers.find((header) => {
    const value = normalize(record.values[header]);
    return (header === "分区" || header === "大类分区" || header.includes("新锐分区") || header.includes("T分区") || header.endsWith("分区")) &&
      (value === "1" || value === "1区" || value === "1 区" || value === "t1" || value.startsWith("1 "));
  });
  return zoneField ? `${zoneField}: ${record.values[zoneField]}` : t("matched");
}

function renderRecord(record) {
  const rows = record.headers
    .filter((header) => record.values[header])
    .map((header) => {
      const important = IMPORTANT_FIELDS.some((token) => header.includes(token)) ? " class=\"important\"" : "";
      const alert = header.includes("预警") || header.includes("标注") ? " alert" : "";
      const rowClass = important ? ` class="important${alert}"` : alert ? ` class="${alert.trim()}"` : "";
      return `<tr${rowClass}><th>${escapeHtml(header)}</th><td>${linkify(escapeHtml(record.values[header]))}</td></tr>`;
    })
    .join("");

  return `
    <article class="result-card">
      <h3><span>${escapeHtml(record.dataset)}</span><span class="record-count">${escapeHtml(t("fields", { count: record.headers.filter((header) => record.values[header]).length }))}</span></h3>
      <table class="field-table">
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

function renderEmpty(query, suggestions) {
  state.activeList = null;
  els.resultTitle.textContent = t("noExactMatch");
  els.resultMeta.textContent = t("query", { query });
  els.resultHighlights.innerHTML = "";
  const suggestionHtml = suggestions.length
    ? `<div class="suggestions">${suggestions.map((item) => `<button type="button" data-suggestion="${escapeHtml(item.label)}">${escapeHtml(item.label)}</button>`).join("")}</div>`
    : "";
  els.results.innerHTML = `<div class="empty-state"><div class="empty-title">${t("noExactTitle")}</div>${t("noExactBody")}${suggestionHtml}</div>`;
}

function clearResults() {
  state.activeList = null;
  els.input.value = "";
  els.resultTitle.textContent = t("waiting");
  els.resultMeta.textContent = t("defaultMeta");
  els.resultHighlights.innerHTML = "";
  els.results.innerHTML = "";
  hideSuggestions();
  els.input.focus();
}

function renderHighlights(records) {
  const wanted = ["IF(2025)", "IF(2024)", "IF Quartile(2025)_1", "IF Quartile(2024)", "大类分区", "CCF推荐类型", "T分区", "大类新锐分区", "预警原因（2025）", "预警等级（2023）"];
  const seen = new Set();
  const highlights = [];
  for (const record of records) {
    for (const field of wanted) {
      const value = record.values[field];
      const key = `${field}:${value}`;
      if (value && !seen.has(key)) {
        highlights.push(`<span>${escapeHtml(field)}: ${escapeHtml(value)}</span>`);
        seen.add(key);
      }
      if (highlights.length >= 8) return highlights.join("");
    }
  }
  return highlights.join("");
}

function renderLiveSuggestions() {
  if (!state.loaded) return;
  const normalized = normalize(els.input.value);
  if (normalized.length < 2) {
    hideSuggestions();
    return;
  }
  const suggestions = findSuggestions(normalized).slice(0, 7);
  if (!suggestions.length) {
    hideSuggestions();
    return;
  }
  els.suggestionPanel.innerHTML = suggestions.map((item, index) => `
    <button class="suggestion-item${index === 0 ? " active" : ""}" type="button" role="option" data-suggestion="${escapeHtml(item.label)}">
      <span class="suggestion-title">${escapeHtml(item.label)}</span>
      <span class="suggestion-meta">${escapeHtml(item.field)} · ${escapeHtml(item.dataset)}</span>
    </button>
  `).join("");
  els.suggestionPanel.classList.add("open");
}

function hideSuggestions() {
  els.suggestionPanel.classList.remove("open");
  els.suggestionPanel.innerHTML = "";
}

function saveSelection() {
  localStorage.setItem("showjcr:selected", JSON.stringify([...state.selected]));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkify(value) {
  return value.replace(/https?:\/\/[^\s<]+/g, (url) => `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>`);
}

function applyLanguage() {
  document.documentElement.lang = t("htmlLang");
  document.title = "JCR Search";
  els.languageSelect.value = state.language;
  els.languageLabel.textContent = t("language");
  els.settingsButtonText.textContent = t("settings");
  els.settingsButton.setAttribute("aria-label", t("settings"));
  els.settingsButton.setAttribute("title", t("settings"));
  els.input.placeholder = t("searchPlaceholder");
  els.suggestionPanel.setAttribute("aria-label", t("searchSuggestions"));
  els.searchButton.textContent = t("search");
  els.topListButton.textContent = t("topList");
  els.q1ListButton.textContent = t("q1List");
  els.clearButton.textContent = t("clear");

  document.querySelector(".brand-row .eyebrow").textContent = t("eyebrow");
  document.querySelector(".results-head .eyebrow").textContent = t("resultEyebrow");
  document.querySelector(".drawer-head .eyebrow").textContent = t("datasets");
  document.querySelector(".drawer-head h2").textContent = t("chooseDatasets");
  document.querySelector(".drawer-note").textContent = t("drawerNote");
  els.closeSettingsButton.setAttribute("aria-label", t("close"));
  els.closeSettingsButton.setAttribute("title", t("close"));
  els.selectAllButton.textContent = t("selectAll");
  els.selectRecentButton.textContent = t("recommended");

  if (state.loaded) {
    els.loadStatus.textContent = t("loaded");
    updateDatasetCount();
  } else {
    els.loadStatus.textContent = t("loading");
  }

  if (state.activeList) {
    renderActiveList();
    return;
  }

  const waitingLabels = [I18N.zh.waiting, I18N.en.waiting];
  if (waitingLabels.includes(els.resultTitle.textContent) || !els.results.innerHTML.trim()) {
    els.resultTitle.textContent = t("waiting");
    els.resultMeta.textContent = t("defaultMeta");
  }
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.loaded) return;
  search(els.input.value);
});

els.input.addEventListener("input", renderLiveSuggestions);

els.input.addEventListener("focus", renderLiveSuggestions);

els.input.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSuggestions();
    return;
  }
  if (event.key === "ArrowDown" && els.suggestionPanel.classList.contains("open")) {
    event.preventDefault();
    const firstSuggestion = els.suggestionPanel.querySelector(".suggestion-item");
    if (firstSuggestion) {
      els.input.blur();
      firstSuggestion.focus();
    }
  }
});

els.clearButton.addEventListener("click", clearResults);

els.settingsButton.addEventListener("click", () => {
  els.settingsDrawer.classList.add("open");
  els.settingsDrawer.setAttribute("aria-hidden", "false");
});

els.closeSettingsButton.addEventListener("click", () => {
  els.settingsDrawer.classList.remove("open");
  els.settingsDrawer.setAttribute("aria-hidden", "true");
});

els.settingsDrawer.addEventListener("click", (event) => {
  if (event.target === els.settingsDrawer) {
    els.settingsDrawer.classList.remove("open");
    els.settingsDrawer.setAttribute("aria-hidden", "true");
  }
});

els.datasetList.addEventListener("change", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    if (event.target.checked) state.selected.add(event.target.value);
    else state.selected.delete(event.target.value);
    saveSelection();
    rebuildRecords();
  }
});

els.selectAllButton.addEventListener("click", () => {
  state.selected = new Set(DATASETS);
  saveSelection();
  renderDatasetList();
  rebuildRecords();
});

els.selectRecentButton.addEventListener("click", () => {
  state.selected = new Set(RECENT_DATASETS);
  saveSelection();
  renderDatasetList();
  rebuildRecords();
});

els.languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  localStorage.setItem("jcr-search:language", state.language);
  applyLanguage();
});

els.topListButton.addEventListener("click", showTopList);

els.q1ListButton.addEventListener("click", showQ1List);

els.quickExamples.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-example]");
  if (!button) return;
  els.input.value = button.dataset.example;
  search(button.dataset.example);
});

els.suggestionPanel.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-suggestion]");
  if (!button) return;
  els.input.value = button.dataset.suggestion;
  search(button.dataset.suggestion);
});

els.suggestionPanel.addEventListener("keydown", (event) => {
  const current = event.target.closest(".suggestion-item");
  if (!current) return;
  if (event.key === "Enter") {
    event.preventDefault();
    current.click();
  }
  if (event.key === "Escape") {
    hideSuggestions();
    els.input.focus();
  }
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const items = [...els.suggestionPanel.querySelectorAll(".suggestion-item")];
    const index = items.indexOf(current);
    const nextIndex = event.key === "ArrowDown" ? Math.min(index + 1, items.length - 1) : Math.max(index - 1, 0);
    items[nextIndex].focus();
  }
});

els.results.addEventListener("click", (event) => {
  const typeButton = event.target.closest("button[data-list-type]");
  if (typeButton && state.activeList) {
    state.activeList.type = typeButton.dataset.listType;
    renderActiveList();
    return;
  }

  const button = event.target.closest("button[data-suggestion]");
  if (!button) return;
  els.input.value = button.dataset.suggestion;
  search(button.dataset.suggestion);
});

els.results.addEventListener("input", (event) => {
  if (!event.target.matches("#listFilterInput") || !state.activeList) return;
  state.activeList.query = event.target.value;
  renderActiveList();
  const filterInput = document.querySelector("#listFilterInput");
  if (filterInput) {
    filterInput.focus();
    const length = filterInput.value.length;
    filterInput.setSelectionRange(length, length);
  }
});

els.results.addEventListener("change", (event) => {
  if (!event.target.matches("#listCategorySelect") || !state.activeList) return;
  state.activeList.category = event.target.value;
  renderActiveList();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-field")) hideSuggestions();
});

applyLanguage();
loadAllData();
