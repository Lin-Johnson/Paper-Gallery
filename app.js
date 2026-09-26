const PAPERS = [
  {
    id: "safesteer",
    title: "SafeSteer: A Decoding-level Defense Mechanism for Multimodal Large Language Models",
    authors: "Xinyi Zeng, Xue Yang, Jingyuan Zhang, Huanqian Yan, Xiang Chen, Kaiwen Wei, Hankun Kang, Yu Tian",
    year: "2026",
    published: "July 2026",
    venue: "Findings of ACL",
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
    id: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar 等",
    year: "2017",
    venue: "NeurIPS",
    directions: ["NLP"],
    memory: "Transformer 架构的起点。",
    abstract: "提出 Transformer：一种完全基于注意力机制、摒弃循环与卷积结构的序列转换模型。它在机器翻译任务上实现了更好的质量，同时显著提升了并行训练效率。",
    arxiv: "https://arxiv.org/abs/1706.03762",
    github: "https://github.com/tensorflow/tensor2tensor",
    accent: "lime",
    cover: "cover-transformer"
  },
  {
    id: "lora",
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Edward J. Hu, Yelong Shen, Phillip Wallis 等",
    year: "2021",
    venue: "ICLR",
    directions: ["LLM"],
    memory: "参数高效微调的常用基线。",
    abstract: "提出低秩适配方法 LoRA，在冻结预训练权重的同时注入可训练的低秩矩阵，从而大幅减少下游任务微调所需的参数量与显存。",
    arxiv: "https://arxiv.org/abs/2106.09685",
    openReview: "https://openreview.net/forum?id=nZeVKeeFYf9",
    github: "https://github.com/microsoft/LoRA",
    accent: "coral",
    cover: "cover-lora"
  },
  {
    id: "segment-anything",
    title: "Segment Anything",
    authors: "Alexander Kirillov, Eric Mintun, Nikhila Ravi 等",
    year: "2023",
    venue: "ICCV",
    directions: ["Vision"],
    memory: "通用视觉分割模型。",
    abstract: "介绍 Segment Anything Model（SAM）和 SA-1B 数据集，探索一种能够通过点、框或掩码提示对图像中任意对象进行分割的基础模型。",
    arxiv: "https://arxiv.org/abs/2304.02643",
    github: "https://github.com/facebookresearch/segment-anything",
    accent: "blue",
    cover: "cover-sam"
  },
  {
    id: "denoising-diffusion",
    title: "Denoising Diffusion Probabilistic Models",
    authors: "Jonathan Ho, Ajay Jain, Pieter Abbeel",
    year: "2020",
    venue: "NeurIPS",
    directions: ["Generative"],
    memory: "扩散模型的关键基石。",
    abstract: "提出一种通过逐步去噪来生成样本的概率模型，并展示了扩散模型在图像生成上具有与 GAN 相当的高质量表现。",
    arxiv: "https://arxiv.org/abs/2006.11239",
    github: "https://github.com/hojonathanho/diffusion",
    accent: "purple",
    cover: "cover-diffusion"
  },
  {
    id: "sora",
    title: "Video generation models as world simulators",
    authors: "OpenAI",
    year: "2024",
    venue: "Technical Report",
    directions: ["Generative"],
    memory: "文本到视频的世界模拟视角。",
    abstract: "讨论通过大规模视频训练得到的视频生成模型，并展示其在生成复杂场景、长时序动作与不同画幅视频方面的能力。",
    arxiv: null,
    paperPage: "https://openai.com/index/video-generation-models-as-world-simulators/",
    github: null,
    accent: "orange",
    cover: "cover-sora"
  },
  {
    id: "in-context-learning",
    title: "Language Models are Few-Shot Learners",
    authors: "Tom B. Brown, Benjamin Mann, Nick Ryder 等",
    year: "2020",
    venue: "NeurIPS",
    directions: ["LLM"],
    memory: "大语言模型 few-shot 能力的代表工作。",
    abstract: "研究 GPT-3 这类大规模自回归语言模型在不更新梯度的情况下，通过上下文示例完成下游任务的能力，并系统分析模型规模与任务表现之间的关系。",
    arxiv: "https://arxiv.org/abs/2005.14165",
    github: null,
    accent: "teal",
    cover: "cover-gpt"
  },
  {
    id: "clip",
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Alec Radford, Jong Wook Kim, Chris Hallacy 等",
    year: "2021",
    venue: "ICML",
    directions: ["Vision"],
    memory: "视觉-语言预训练的标志性工作。",
    abstract: "从互联网上收集的图文对中学习图像与文本的联合表示，展示了自然语言监督如何帮助视觉模型实现零样本迁移。",
    arxiv: "https://arxiv.org/abs/2103.00020",
    github: "https://github.com/openai/CLIP",
    accent: "pink",
    cover: "cover-clip"
  },
  {
    id: "rlhf",
    title: "Training language models to follow instructions with human feedback",
    authors: "Long Ouyang, Jeffrey Wu, Xu Jiang 等",
    year: "2022",
    venue: "NeurIPS",
    directions: ["Alignment"],
    memory: "InstructGPT 的训练方法。",
    abstract: "提出通过监督微调、奖励模型和近端策略优化，让语言模型更好地遵循用户意图；结果显示较小的对齐模型也可以获得更受偏好的输出。",
    arxiv: "https://arxiv.org/abs/2203.02155",
    github: null,
    accent: "red",
    cover: "cover-rlhf"
  }
];

const FILTERS = ["All papers", ...new Set(PAPERS.flatMap((paper) => paper.directions || []).filter(Boolean))];
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
function indexText(paper) { return [directionText(paper, " / "), paper.year].filter(Boolean).join(" / "); }
function pdfUrl(paper) {
  if (paper.pdf) return paper.pdf;
  if (paper.arxiv?.includes("arxiv.org/abs/")) return paper.arxiv.replace("/abs/", "/pdf/");
  return null;
}
function paperPageUrl(paper) { return paper.arxiv || paper.paperPage; }
function paperPageLabel() { return "Open Paper"; }
function paperById(id) { return PAPERS.find((paper) => paper.id === id); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600); }

function header() {
  return `<header class="topbar"><a class="brand" href="#/" aria-label="Back to Paper Gallery home"><span class="brand-mark"></span><span class="brand-name">PAPER <span>GALLERY</span></span></a><div class="topbar-meta"><span>personal paper library</span><b>local covers</b></div></header>`;
}

function card(paper, index) {
  const pdf = pdfUrl(paper);
  return `<article class="paper-card"><div class="cover-stage"><button class="cover-button" data-open="${paper.id}" aria-label="Open details for ${escapeXml(paper.title)}"><div class="cover-frame"><img class="cover-image" src="${getCover(paper)}" alt="Cover of ${escapeXml(paper.title)}" /><span class="paper-index">${String(index + 1).padStart(2, "0")}</span><span class="cover-overlay"><small>${[directionText(paper), paper.year].filter(Boolean).join(" · ")}</small><strong>${escapeXml(paper.title)}</strong></span></div></button>${pdf ? `<a class="edit-cover pdf-link" href="${pdf}" target="_blank" rel="noreferrer" aria-label="Open PDF for ${escapeXml(paper.title)}">${icon("external", 15)}</a>` : ""}</div><div class="paper-card-info"><h2 class="paper-card-title">${escapeXml(paper.title)}</h2><div class="paper-card-meta"><span>${paper.venue}</span><span class="tag">${directionText(paper)}</span></div></div></article>`;
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
  return `${header()}<main class="main"><a class="back-link" href="#/">${icon("back")} Return</a><div class="detail-layout"><aside class="detail-cover"><div class="cover-frame"><img class="cover-image" src="${getCover(paper)}" alt="Cover of ${escapeXml(paper.title)}" /><span class="paper-index">${indexText(paper)}</span></div><button class="external-link secondary" style="margin-top:12px;width:100%;justify-content:center" data-upload="${paper.id}">${icon("edit", 15)} 更换我的封面</button><input class="sr-only" type="file" accept="image/*" data-file-input="${paper.id}" /></aside><article class="detail-content"><p class="eyebrow">${paper.venue} · ${paper.year}</p><h1>${escapeXml(paper.title)}</h1><p class="detail-authors">${escapeXml(paper.authors)}</p><p class="detail-rule"></p><p class="detail-abstract">${escapeXml(paper.abstract)}</p><div class="meta-grid"><div class="meta-box"><span>Direction</span><strong>${directionText(paper)}</strong></div><div class="meta-box"><span>${paper.published ? "Published" : "Year"}</span><strong>${escapeXml(paper.published || paper.year)}</strong></div><div class="meta-box"><span>Memory</span><strong>${escapeXml(paper.memory || "")}</strong></div></div><p class="eyebrow">read / inspect</p><div class="link-row">${paperPageUrl(paper) ? `<a class="external-link" href="${paperPageUrl(paper)}" target="_blank" rel="noreferrer">${paperPageLabel(paper)} ${icon("external", 15)}</a>` : ""}${paper.publication ? `<a class="external-link secondary" href="${paper.publication}" target="_blank" rel="noreferrer">ACL Anthology ${icon("external", 15)}</a>` : ""}${paper.openReview ? `<a class="external-link secondary" href="${paper.openReview}" target="_blank" rel="noreferrer">OpenReview ${icon("external", 15)}</a>` : ""}${paper.github ? `<a class="external-link secondary" href="${paper.github}" target="_blank" rel="noreferrer">GitHub ${icon("external", 15)}</a>` : ""}</div></article></div></main>`;
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
