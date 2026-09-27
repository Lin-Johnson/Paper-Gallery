const PAPERS = [
  {
    id: "safesteer",
    title: "SafeSteer: A Decoding-level Defense Mechanism for Multimodal Large Language Models",
    authors: "Xinyi Zeng¹, Xue Yang², Jingyuan Zhang³, Huanqian Yan⁴, Xiang Chen⁵, Kaiwen Wei⁶, Hankun Kang⁷, Yu Tian¹*",
    affiliations: "¹ Tsinghua University, Beijing, China\n² Shanghai Jiao Tong University\n³ Kuaishou Technology, Beijing, China\n⁴ School of Computer Science and Technology, Beihang University\n⁵ Nanjing University of Aeronautics and Astronautics\n⁶ Chongqing University\n⁷ Wuhan University",
    year: "2026",
    published: "July 2026",
    venue: "ACL · Findings",
    directions: ["VLM", "Safety", "Steering"],
    memory: "",
    abstract: "SafeSteer studies how multimodal large language models distinguish harmful and harmless inputs during decoding, then uses a Decoding-Probe and a modal semantic alignment vector to steer outputs toward safety without fine-tuning.",
    arxiv: "https://arxiv.org/abs/2605.11716",
    publication: "https://aclanthology.org/2026.findings-acl.916/",
    github: null,
    openReview: null,
    accent: "blue",
    coverImage: "./assets/covers/safesteer-figure-3.png"
  },
  {
    id: "steering-away-from-harm",
    title: "Steering Away from Harm: An Adaptive Approach to Defending Vision Language Model Against Jailbreaks",
    authors: "Han Wang¹, Gang Wang¹, Huan Zhang¹",
    affiliations: "¹ University of Illinois Urbana-Champaign",
    year: "2025",
    published: "June 2025",
    venue: "CVPR",
    presentation: "Poster",
    directions: ["VLM", "Safety", "Steering"],
    memory: "",
    abstract: "ASTRA adaptively steers vision-language models away from harmful feature directions to resist jailbreaks. It constructs transferable steering vectors through image attribution and applies adaptive activation steering at inference time, reducing harmful outputs while preserving benign performance.",
    arxiv: "https://arxiv.org/abs/2411.16721",
    publication: "https://openaccess.thecvf.com/content/CVPR2025/html/Wang_Steering_Away_from_Harm_An_Adaptive_Approach_to_Defending_Vision_CVPR_2025_paper.html",
    github: "https://github.com/ASTRAL-Group/ASTRA",
    openReview: null,
    accent: "purple",
    coverImage: "./assets/covers/astra-figure-1.png"
  },
  {
    id: "attack-as-defense",
    title: "Attack as Defense: Safeguarding Large Vision-Language Models from Jailbreaking by Adversarial Attacks",
    authors: "Chongxin Li, Hanzhang Wang*, Yuchun Fang",
    affiliations: "School of Computer Engineering and Science, Shanghai University",
    year: "2025",
    published: "November 2025",
    venue: "EMNLP · Findings",
    directions: ["VLM", "Safety"],
    memory: "",
    abstract: "Attack as Defense (AsD) proactively defends vision-language models at the cross-modal level by embedding protective perturbations in vision and reinforcing them with system-level prompts, mitigating typographic and adversarial jailbreak attacks.",
    arxiv: null,
    paperPage: "https://aclanthology.org/2025.findings-emnlp.1095/",
    pdf: "https://aclanthology.org/2025.findings-emnlp.1095.pdf",
    publication: null,
    github: "https://github.com/AngelAlita/AsD",
    openReview: null,
    accent: "teal",
    coverImage: "./assets/covers/asd-figure-2.png"
  },
  {
    id: "safety-potential-pruning",
    title: "Safety-Potential Pruning for Enhancing Safety Prompts Against VLM Jailbreaking Without Retraining",
    authors: "Chongxin Li, Hanzhang Wang*, Lian Duan",
    affiliations: "School of Computer Engineering and Science, Shanghai University",
    year: "2026",
    published: "June 2026",
    venue: "TACL",
    directions: ["VLM", "Safety", "Pruning"],
    memory: "",
    abstract: "Safety-Potential Pruning is a one-shot pruning framework that amplifies safety-relevant activations by removing weights that are less responsive to safety prompts, strengthening VLM jailbreak defenses without additional retraining.",
    arxiv: "https://arxiv.org/abs/2603.14219",
    paperPage: "https://aclanthology.org/2026.tacl-1.53/",
    pdf: "https://aclanthology.org/2026.tacl-1.53.pdf",
    publication: null,
    github: "https://github.com/AngelAlita/Safety-Potential-Pruning",
    openReview: null,
    accent: "orange",
    coverImage: "./assets/covers/safety-potential-pruning-figure-2.png"
  },
  {
    id: "inferaligner",
    title: "InferAligner: Inference-Time Alignment for Harmlessness through Cross-Model Guidance",
    authors: "Pengyu Wang, Dong Zhang, Linyang Li, Chenkun Tan, Xinghao Wang, Mozhi Zhang, Ke Ren, Botian Jiang, Xipeng Qiu*",
    affiliations: "School of Computer Science, Fudan University\nShanghai Key Laboratory of Intelligent Information Processing, Fudan University",
    year: "2024",
    published: "November 2024",
    venue: "EMNLP",
    presentation: "Poster",
    directions: ["VLM", "Safety", "Steering"],
    memory: "",
    abstract: "InferAligner performs harmlessness alignment at inference time by extracting safety steering vectors from aligned models and applying them selectively to target-model activations when harmful intent is detected. The method reduces attack success rates while preserving downstream task performance, including in multimodal models such as LLaVA.",
    arxiv: "https://arxiv.org/abs/2401.11206",
    paperPage: "https://aclanthology.org/2024.emnlp-main.585/",
    pdf: "https://aclanthology.org/2024.emnlp-main.585.pdf",
    publication: "https://aclanthology.org/2024.emnlp-main.585/",
    github: "https://github.com/Jihuai-wpy/InferAligner",
    openReview: null,
    accent: "pink",
    coverImage: "./assets/covers/inferaligner-figure-2.png"
  },
  {
    id: "hiddendetect",
    title: "HiddenDetect: Detecting Jailbreak Attacks against Large Vision-Language Models via Monitoring Hidden States",
    authors: "Yilei Jiang²,¹, Xinyan Gao¹, Tianshuo Peng¹, Yingshui Tan², Xiaoyong Zhu², Bo Zheng², Xiangyu Yue¹",
    affiliations: "¹ MMLab, The Chinese University of Hong Kong\n² Future Lab, Alibaba Group",
    year: "2025",
    published: "July 2025",
    venue: "ACL",
    presentation: "Poster",
    directions: ["VLM", "Safety"],
    memory: "",
    abstract: "HiddenDetect is a tuning-free framework that monitors safety-relevant signals in LVLM hidden states to detect jailbreak attacks. It constructs a multimodal refusal vector and measures cosine similarity at safety-aware layers, enabling efficient detection while preserving model utility.",
    arxiv: "https://arxiv.org/abs/2502.14744",
    paperPage: "https://aclanthology.org/2025.acl-long.724/",
    pdf: "https://arxiv.org/pdf/2502.14744",
    publication: "https://aclanthology.org/2025.acl-long.724/",
    github: "https://github.com/leigest519/HiddenDetect",
    openReview: null,
    accent: "red",
    coverImage: "./assets/covers/hiddendetect-figure-4.png"
  }
];

const FILTERS = ["All papers", "VLM", "Speech", "NLP", "Vision"];
const customCovers = JSON.parse(localStorage.getItem("paper-gallery-covers") || localStorage.getItem("paper-atlas-covers") || "{}");
const state = { query: "", category: "All papers" };
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");

function icon(name, size = 16) {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"></path>',
    back: '<path d="m15 18-6-6 6-6"></path>',
    edit: '<path d="m12 20 8-8-4-4-8 8-1 5zM14 6l4 4"></path>',
    external: '<path d="M14 5h5v5M19 5l-9 9"></path><path d="M18 13v5H5V5h5"></path>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z"></path><path d="M4 5.5v16M8 7h8M8 11h8"></path>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

function escapeXml(text) {
  return text.replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[char]));
}

function defaultCover(paper) {
  const palettes = {
    lime: ["#f3ee64", "#d9ed57", "#0e1726"], coral: ["#ef735f", "#f4a07e", "#0e1726"], blue: ["#627dea", "#9caeff", "#f5f2ea"], purple: ["#b58af1", "#6d51cc", "#fffdf8"], orange: ["#f4a14b", "#f6d06f", "#172338"], teal: ["#68d7c1", "#d3f294", "#0e1726"], pink: ["#f28db0", "#f9c0cf", "#0e1726"], red: ["#ed5e59", "#8c202e", "#fffdf8"]
  };
  const [a, b, ink] = palettes[paper.accent] || palettes.lime;
  const label = (paper.directions?.[0] || "").toUpperCase();
  const shortTitle = paper.title.length > 34 ? `${paper.title.slice(0, 34)}…` : paper.title;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 980"><defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><pattern id="p" width="36" height="36" patternUnits="userSpaceOnUse" patternTransform="rotate(20)"><path d="M0 0v36" stroke="${ink}" stroke-opacity=".1" stroke-width="2"/></pattern></defs><rect width="800" height="980" fill="url(#g)"/><rect width="800" height="980" fill="url(#p)"/><circle cx="595" cy="300" r="220" fill="none" stroke="${ink}" stroke-opacity=".25" stroke-width="3"/><circle cx="595" cy="300" r="145" fill="none" stroke="${ink}" stroke-opacity=".3" stroke-width="19"/><path d="M360 82v680M90 760h620" stroke="${ink}" stroke-opacity=".18" stroke-width="2"/><text x="75" y="92" fill="${ink}" font-family="Arial,sans-serif" font-weight="700" font-size="26" letter-spacing="4">${label}</text><text x="75" y="820" fill="${ink}" font-family="Arial,sans-serif" font-weight="700" font-size="43">${escapeXml(shortTitle)}</text><text x="75" y="885" fill="${ink}" font-family="monospace" font-size="22">PAPER GALLERY / ${paper.year}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getCover(paper) { return customCovers[paper.id] || paper.coverImage || defaultCover(paper); }
function directionsFor(paper) { return (paper.directions || []).slice(0, 3); }
function directionText(paper, separator = " · ") { return directionsFor(paper).join(separator); }
function styleSlug(text) { return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function directionBadges(paper) { return directionsFor(paper).map((direction, index) => `${index ? `<span class="direction-separator">·</span>` : ""}<span class="direction-badge direction-${styleSlug(direction)}">${escapeXml(direction)}</span>`).join(""); }
function venueLabel(paper) { return `${escapeXml(paper.venue)}${paper.presentation ? ` · ${escapeXml(paper.presentation)}` : ""}`; }
function yearLabel(paper) { return escapeXml(paper.year); }
function publicationMetaLabel(paper) { return `${venueLabel(paper)} · ${yearLabel(paper)}`; }
function venueClass(paper) {
  const venue = (paper.venue || "").toLowerCase();
  if (venue.includes("findings")) return "findings";
  if (venue.includes("cvpr")) return "cvpr";
  if (venue.includes("tacl")) return "tacl";
  return "standard";
}
function affiliationText(paper) { return (paper.affiliations || "").split("\n").map((affiliation) => `<span class="affiliation-item">${escapeXml(affiliation)}</span>`).join(""); }
function pdfUrl(paper) {
  if (paper.pdf) return paper.pdf;
  if (paper.arxiv?.includes("arxiv.org/abs/")) return paper.arxiv.replace("/abs/", "/pdf/");
  return null;
}
function paperPageUrl(paper) { return paper.arxiv || paper.paperPage; }
function paperPageLabel() { return "Open Paper"; }
function publicationLabel(paper) { return paper.venue?.includes("CVPR") ? "CVPR Open Access" : "ACL Anthology"; }
function paperById(id) { return PAPERS.find((paper) => paper.id === id); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600); }

function header() {
  return `<header class="topbar"><a class="brand" href="#/" aria-label="Back to Paper Gallery home"><span class="brand-mark"></span><span class="brand-name">PAPER <span>GALLERY</span></span></a><div class="topbar-meta"><span>personal paper library</span><b>local covers</b></div></header>`;
}

function card(paper, index) {
  const pdf = pdfUrl(paper);
  return `<article class="paper-card venue-${venueClass(paper)}"><div class="cover-stage"><button class="cover-button" data-open="${paper.id}" aria-label="Open details for ${escapeXml(paper.title)}"><div class="cover-frame"><img class="cover-image" src="${getCover(paper)}" alt="Cover of ${escapeXml(paper.title)}" /><span class="paper-index">${String(index + 1).padStart(2, "0")}</span><span class="cover-overlay"><strong>${escapeXml(paper.title)}</strong></span></div></button>${pdf ? `<a class="edit-cover pdf-link" href="${pdf}" target="_blank" rel="noreferrer" aria-label="Open PDF for ${escapeXml(paper.title)}">${icon("external", 15)}</a>` : ""}</div><div class="paper-card-info"><div class="paper-card-meta"><span class="paper-publication"><span class="paper-venue">${venueLabel(paper)}</span><span class="paper-year">${yearLabel(paper)}</span></span><span class="direction-list">${directionBadges(paper)}</span></div></div></article>`;
}

function home() {
  const filtered = PAPERS.filter((paper) => {
    const matchesCategory = state.category === "All papers" || directionsFor(paper).includes(state.category);
    const q = state.query.toLowerCase().trim();
    const matchesQuery = !q || [paper.title, paper.authors, directionText(paper, " "), paper.venue, paper.memory].join(" ").toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });
  return `${header()}<main class="main"><section class="view-header"><div><p class="eyebrow">01 / library</p><h1>Paper Gallery</h1><p class="lede">Browse research papers by cover, then use the title, author, or research area to find what you need.</p></div><div class="count-chip"><strong>${String(PAPERS.length).padStart(2, "0")}</strong><span>papers<br />in gallery</span></div></section><section class="toolbar" aria-label="Paper filters"><label class="search-wrap"><span class="sr-only">Search papers</span>${icon("search", 17)}<input class="search" type="search" value="${escapeXml(state.query)}" placeholder="Search by title, author, or area…" /></label><div class="filters">${FILTERS.map((filter) => `<button class="filter-btn ${state.category === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div></section><section class="paper-grid" aria-live="polite">${filtered.length ? filtered.map(card).join("") : `<div class="empty-state"><p>No papers match your search.</p><button class="filter-btn active" data-clear>Clear filters</button></div>`}</section></main>`;
}

function detail(paper) {
  if (!paper) return `${header()}<main class="main not-found"><p class="eyebrow">404 / not in gallery</p><h1>This paper is not in the gallery.</h1><a class="back-link" href="#/">${icon("back")} Back to Paper Gallery</a></main>`;
  return `${header()}<main class="main"><a class="back-link" href="#/">${icon("back")} Return</a><div class="detail-layout"><aside class="detail-cover"><div class="cover-frame"><img class="cover-image" src="${getCover(paper)}" alt="Cover of ${escapeXml(paper.title)}" /></div><button class="external-link secondary" style="margin-top:12px;width:100%;justify-content:center" data-upload="${paper.id}">${icon("edit", 15)} 更换我的封面</button><input class="sr-only" type="file" accept="image/*" data-file-input="${paper.id}" /></aside><article class="detail-content"><p class="eyebrow">${publicationMetaLabel(paper)}</p><h1>${escapeXml(paper.title)}</h1><p class="detail-authors">${escapeXml(paper.authors)}</p>${paper.affiliations ? `<p class="detail-affiliations">${affiliationText(paper)}</p>` : ""}<p class="detail-rule"></p><p class="detail-abstract">${escapeXml(paper.abstract)}</p><div class="meta-grid"><div class="meta-box"><span>Direction</span><strong>${directionText(paper)}</strong></div><div class="meta-box"><span>${paper.published ? "Published" : "Year"}</span><strong>${escapeXml(paper.published || paper.year)}</strong></div><div class="meta-box"><span>Memory</span><strong>${escapeXml(paper.memory || "")}</strong></div></div><p class="eyebrow">read / inspect</p><div class="link-row">${paperPageUrl(paper) ? `<a class="external-link" href="${paperPageUrl(paper)}" target="_blank" rel="noreferrer">${paperPageLabel(paper)} ${icon("external", 15)}</a>` : ""}${paper.publication ? `<a class="external-link secondary" href="${paper.publication}" target="_blank" rel="noreferrer">${publicationLabel(paper)} ${icon("external", 15)}</a>` : ""}${paper.openReview ? `<a class="external-link secondary" href="${paper.openReview}" target="_blank" rel="noreferrer">OpenReview ${icon("external", 15)}</a>` : ""}${paper.github ? `<a class="external-link secondary" href="${paper.github}" target="_blank" rel="noreferrer">GitHub ${icon("external", 15)}</a>` : ""}</div></article></div></main>`;
}

function render() {
  const hash = location.hash || "#/";
  const id = hash.startsWith("#/paper/") ? hash.replace("#/paper/", "") : null;
  app.innerHTML = id ? detail(paperById(id)) : home();
  bindEvents();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function uploadCover(id, file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => { customCovers[id] = reader.result; localStorage.setItem("paper-gallery-covers", JSON.stringify(customCovers)); render(); showToast("封面已保存到当前浏览器"); };
  reader.readAsDataURL(file);
}

function bindEvents() {
  document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => { location.hash = `#/paper/${button.dataset.open}`; }));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { state.category = button.dataset.filter; render(); }));
  document.querySelector("[data-clear]")?.addEventListener("click", () => { state.category = "All papers"; state.query = ""; render(); });
  document.querySelector(".search")?.addEventListener("input", (event) => { state.query = event.target.value; render(); const search = document.querySelector(".search"); search?.focus(); search?.setSelectionRange(state.query.length, state.query.length); });
  document.querySelectorAll("[data-upload]").forEach((button) => {
    button.addEventListener("click", (event) => { event.stopPropagation(); document.querySelector(`[data-file-input="${button.dataset.upload}"]`)?.click(); });
    button.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); document.querySelector(`[data-file-input="${button.dataset.upload}"]`)?.click(); } });
  });
  document.querySelectorAll("[data-file-input]").forEach((input) => input.addEventListener("change", (event) => uploadCover(input.dataset.fileInput, event.target.files[0])));
}

window.addEventListener("hashchange", render);
render();
