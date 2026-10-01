const MINIMAL_PAPERS = [
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
    coverImage: "./assets/covers/astra-figure-1.png"
  },
  {
    id: "argus",
    title: "ARGUS: Defending Against Multimodal Indirect Prompt Injection via Steering Instruction-Following Behavior",
    authors: "Weikai Lu, Ziqian Zeng, Kehua Zhang, Haoran Li, Huiping Zhuang, Ruidong Wang, Cen Chen, Hao Peng",
    affiliations: "",
    year: "2026",
    published: "2026",
    venue: "CVPR",
    presentation: "Oral",
    directions: ["MLLM", "Safety", "Steering"],
    memory: "",
    abstract: "ARGUS defends multimodal large language models against multimodal indirect prompt injection by identifying an instruction-following subspace, searching for a safety-aware defense direction, and combining adaptive steering with lightweight injection detection and post-filtering.",
    arxiv: "https://arxiv.org/abs/2512.05745",
    pdf: "https://arxiv.org/pdf/2512.05745",
    paperPage: "https://arxiv.org/html/2512.05745",
    publication: null,
    github: null,
    openReview: null,
    coverImage: "./assets/covers/argus-figure-user.png"
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
    coverImage: "./assets/covers/asd-figure-2.png"
  },
  {
    id: "geometry-of-refusal",
    title: "The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence",
    authors: "Tom Wollschläger, Jannes Elstner, Simon Geisler, Vincent Cohen-Addad, Stephan Günnemann, Johannes Gasteiger",
    affiliations: "",
    year: "2025",
    published: "2025",
    venue: "ICML",
    presentation: "Poster",
    directions: ["LLM", "Safety"],
    memory: "",
    abstract: "This work studies the geometry of refusal mechanisms in large language models. It identifies multiple independent refusal directions and multidimensional concept cones, and introduces representational independence to account for both linear and nonlinear intervention effects.",
    arxiv: "https://arxiv.org/abs/2502.17420",
    pdf: "https://arxiv.org/pdf/2502.17420",
    paperPage: "https://arxiv.org/html/2502.17420",
    publication: null,
    github: null,
    openReview: null,
    coverImage: "./assets/covers/geometry-of-refusal-user.png"
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
    coverImage: "./assets/covers/hiddendetect-figure-4.png"
  },
  {
    id: "mp-senet",
    title: "Explicit Estimation of Magnitude and Phase Spectra in Parallel for High-Quality Speech Enhancement",
    authors: "Ye-Xin Lu, Yang Ai, Zhen-Hua Ling",
    affiliations: "National Engineering Research Center of Speech and Language Information Processing, University of Science and Technology of China, Hefei, China",
    year: "2025",
    published: "May 2025",
    venue: "Neural Networks",
    directions: ["Speech", "Enhancement"],
    memory: "",
    abstract: "MP-SENet explicitly estimates magnitude and phase spectra in parallel for speech denoising, dereverberation, and bandwidth extension. Its Transformer-embedded encoder-decoder uses multi-level spectral losses and a metric discriminator to improve perceptual quality.",
    arxiv: "https://arxiv.org/abs/2308.08926",
    paperPage: "https://www.sciencedirect.com/science/article/pii/S0893608025004411",
    pdf: "https://arxiv.org/pdf/2308.08926",
    publication: "https://www.sciencedirect.com/science/article/pii/S0893608025004411",
    github: "https://github.com/yxlu-0102/MP-SENet",
    openReview: null,
    coverImage: "./assets/covers/mp-senet-figure-1.png"
  },
  {
    id: "sense",
    title: "SenSE: Semantic-Aware High-Fidelity Universal Speech Enhancement",
    authors: "Xingchen Li¹, Hanke Xie¹, Ziqian Wang¹, Zihan Zhang², Longshuai Xiao², Shuai Wang³, Lei Xie¹*",
    affiliations: "¹ Audio, Speech and Language Processing Group (ASLP@NPU), School of Computer Science, Northwestern Polytechnical University, China\n² Huawei Technologies Co., Ltd., China\n³ Nanjing University, China",
    year: "2026",
    published: "2026",
    venue: "ICME",
    directions: ["Speech", "Enhancement", "Generative"],
    memory: "",
    abstract: "SenSE is a two-stage generative universal speech enhancement framework that models semantic priors with a language model and guides flow matching with semantic tokens and optional reference speech.",
    arxiv: "https://arxiv.org/abs/2509.24708",
    paperPage: null,
    pdf: "https://arxiv.org/pdf/2509.24708",
    publication: null,
    github: "https://github.com/ASLP-lab/SenSE",
    openReview: null,
    coverImage: "./assets/covers/sense-figure-1.png"
  },
  {
    id: "unipase",
    title: "UniPASE: A Generative Model for Universal Speech Enhancement with High Fidelity and Low Hallucinations",
    authors: "Xiaobin Rong, Zheng Wang, Yushi Wang, Jun Gao, Jing Lu*",
    affiliations: "Key Laboratory of Modern Acoustics, Institute of Acoustics, Nanjing University, Nanjing, China\nNJU-Horizon Intelligent Audio Lab, Horizon Robotics, Beijing, China",
    year: "2026",
    published: "2026",
    venue: "TASLP",
    directions: ["Speech", "Enhancement"],
    memory: "",
    abstract: "UniPASE extends the low-hallucination PASE framework to universal speech enhancement with a DeWavLM-Omni phonetic enhancement module, an acoustic adapter, a vocoder, and a PostNet for flexible sampling rates.",
    arxiv: "https://arxiv.org/abs/2604.14606",
    paperPage: null,
    pdf: "https://arxiv.org/pdf/2604.14606",
    publication: null,
    github: "https://github.com/xiaobin-rong/unipase",
    openReview: null,
    coverImage: "./assets/covers/unipase-figure-1.png"
  }
];

const MINIMAL_FILTERS = ["All papers", "VLM", "Speech", "NLP", "Vision"];
const minimalState = { query: "", category: "All papers" };
let minimalLastRoute = null;
const minimalCustomCovers = JSON.parse(localStorage.getItem("paper-gallery-covers") || localStorage.getItem("paper-atlas-covers") || "{}");
const minimalApp = document.querySelector("#minimal-app");
const minimalToast = document.querySelector("#minimal-toast");

function escapeHtml(value = "") {
  return String(value).replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&#39;", '"': "&quot;" }[char]));
}

function icon(name, size = 16) {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path>',
    external: '<path d="M14 5h5v5M19 5l-9 9"></path><path d="M18 13v5H5V5h5"></path>',
    chevron: '<path d="m9 18 6-6-6-6"></path>',
    back: '<path d="m15 18-6-6 6-6"></path>',
    edit: '<path d="m12 20 8-8-4-4-8 8-1 5zM14 6l4 4"></path>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

function paperById(id) { return MINIMAL_PAPERS.find((paper) => paper.id === id); }
function directionsFor(paper) { return (paper.directions || []).slice(0, 3); }
function directionText(paper) { return directionsFor(paper).join(" · "); }
function slug(value) { return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function venueLabel(paper) { return `${escapeHtml(paper.venue)}${paper.presentation ? ` · ${escapeHtml(paper.presentation)}` : ""}`; }
function coverFor(paper) { return minimalCustomCovers[paper.id] || paper.coverImage; }
function pdfFor(paper) {
  if (paper.pdf) return paper.pdf;
  if (paper.arxiv?.includes("arxiv.org/abs/")) return paper.arxiv.replace("/abs/", "/pdf/");
  return null;
}
function primaryPaperPage(paper) { return paper.arxiv || paper.paperPage; }
function publicationName(paper) {
  if (paper.venue.includes("CVPR")) return "CVPR Open Access";
  if (paper.venue.includes("Neural Networks")) return "Neural Networks";
  if (paper.venue.includes("arXiv")) return "arXiv";
  return "ACL Anthology";
}
const directionColorCache = new Map();
const directionColorPresets = {
  VLM: "hsl(214 58% 42%)",
  Safety: "hsl(5 58% 45%)",
  Speech: "hsl(171 61% 32%)",
  Steering: "hsl(39 78% 34%)",
  Pruning: "hsl(273 43% 44%)",
  NLP: "hsl(76 63% 30%)",
  Vision: "hsl(192 51% 36%)"
};
const directionColorPalette = [
  "hsl(214 58% 42%)",
  "hsl(5 58% 45%)",
  "hsl(39 78% 34%)",
  "hsl(273 43% 44%)",
  "hsl(171 61% 32%)",
  "hsl(76 63% 30%)",
  "hsl(192 51% 36%)",
  "hsl(331 49% 42%)",
  "hsl(106 42% 34%)",
  "hsl(23 66% 39%)",
  "hsl(246 49% 46%)",
  "hsl(353 48% 38%)"
];
function directionColor(direction) {
  if (directionColorPresets[direction]) return directionColorPresets[direction];
  if (directionColorCache.has(direction)) return directionColorCache.get(direction);
  let hash = 0;
  for (const character of direction) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  let index = hash % directionColorPalette.length;
  const used = new Set([...Object.values(directionColorPresets), ...directionColorCache.values()]);
  while (used.has(directionColorPalette[index]) && used.size < directionColorPalette.length) {
    index = (index + 1) % directionColorPalette.length;
  }
  const color = directionColorPalette[index];
  directionColorCache.set(direction, color);
  return color;
}
function directionMarkup(paper) {
  return directionsFor(paper).map((direction, index) => `${index ? "<span aria-hidden=\"true\">·</span>" : ""}<span class="direction-auto" style="--direction-color: ${directionColor(direction)}">${escapeHtml(direction)}</span>`).join("");
}

function navigation() {
  return `<nav class="site-nav"><div class="nav-inner"><a class="wordmark" href="#/" aria-label="Paper Gallery home"><span class="wordmark-dot"></span><span>Paper Gallery</span></a><div class="nav-actions"><span class="nav-count">${MINIMAL_PAPERS.length} papers</span><a class="nav-link" href="./original.html">${icon("back", 13)} <span>Original design</span></a></div></div></nav>`;
}

function paperCard(paper, index) {
  const pdf = pdfFor(paper);
  return `<article class="paper-card"><div class="cover-area"><button class="paper-open" data-open="${paper.id}" aria-label="Open details for ${escapeHtml(paper.title)}"><img class="cover-image" src="${coverFor(paper)}" alt="Cover of ${escapeHtml(paper.title)}" /><span class="index-pill">${String(index + 1).padStart(2, "0")}</span></button>${pdf ? `<a class="pdf-pill" href="${pdf}" target="_blank" rel="noreferrer" aria-label="Open PDF for ${escapeHtml(paper.title)}">${icon("external", 13)}</a>` : ""}</div><button class="paper-open" data-open="${paper.id}"><div class="card-body"><div class="card-publication"><span>${venueLabel(paper)}</span><span>${escapeHtml(paper.year)}</span></div><h2>${escapeHtml(paper.title)}</h2><div class="card-footer"><span class="direction-list">${directionMarkup(paper)}</span><span class="detail-cue">Details ${icon("chevron", 12)}</span></div></div></button></article>`;
}

function homePage() {
  const filtered = MINIMAL_PAPERS.filter((paper) => {
    const categoryMatches = minimalState.category === "All papers" || directionsFor(paper).includes(minimalState.category);
    const query = minimalState.query.toLowerCase().trim();
    const queryMatches = !query || [paper.title, paper.authors, paper.venue, directionText(paper), paper.memory].join(" ").toLowerCase().includes(query);
    return categoryMatches && queryMatches;
  });

  return `${navigation()}<main class="page-shell"><section class="hero"><div class="hero-copy"><p class="hero-kicker">Research index / 2024—2026</p><h1>Paper Gallery</h1><p class="hero-description">Research papers indexed by cover, venue, year, and direction. Search by title or author to retrieve a paper directly.</p></div><div class="hero-total"><strong>${String(MINIMAL_PAPERS.length).padStart(2, "0")}</strong><span>papers in the index</span></div></section><section class="control-bar" aria-label="Paper filters"><label class="search-field"><span class="sr-only">Search papers</span>${icon("search", 16)}<input class="search-input" type="search" value="${escapeHtml(minimalState.query)}" placeholder="Search title, author, or direction" /></label><div class="segments">${MINIMAL_FILTERS.map((filter) => `<button class="segment ${minimalState.category === filter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}</div></section><section class="paper-grid" aria-live="polite">${filtered.length ? filtered.map(paperCard).join("") : `<div class="empty-state"><p>No papers match this search.</p><button class="segment active" data-clear>Clear filters</button></div>`}</section></main>`;
}

function affiliationMarkup(paper) {
  return (paper.affiliations || "").split("\n").filter(Boolean).map((line) => `<span>${escapeHtml(line)}</span>`).join("");
}

function detailLinks(paper) {
  return `${primaryPaperPage(paper) ? `<a class="action-link" href="${primaryPaperPage(paper)}" target="_blank" rel="noreferrer">Open Paper ${icon("external", 13)}</a>` : ""}${paper.publication ? `<a class="action-link secondary" href="${paper.publication}" target="_blank" rel="noreferrer">${publicationName(paper)} ${icon("external", 13)}</a>` : ""}${paper.openReview ? `<a class="action-link secondary" href="${paper.openReview}" target="_blank" rel="noreferrer">OpenReview ${icon("external", 13)}</a>` : ""}${paper.github ? `<a class="action-link secondary" href="${paper.github}" target="_blank" rel="noreferrer">GitHub ${icon("external", 13)}</a>` : ""}`;
}

function detailPage(paper) {
  if (!paper) return `${navigation()}<main class="detail-page"><a class="back-link" href="#/">${icon("back", 15)} Return</a><section class="detail-hero"><p class="detail-overline">Not found</p><h1>This paper is not in the gallery.</h1></section></main>`;
  return `${navigation()}<main class="detail-page"><a class="back-link" href="#/">${icon("back", 15)} Return</a><section class="detail-hero"><p class="detail-overline">${venueLabel(paper)} · ${escapeHtml(paper.year)}</p><h1>${escapeHtml(paper.title)}</h1><p class="detail-authors">${escapeHtml(paper.authors)}</p>${paper.affiliations ? `<div class="detail-affiliations">${affiliationMarkup(paper)}</div>` : ""}</section><section class="detail-content"><section class="detail-visual"><img src="${coverFor(paper)}" alt="Cover of ${escapeHtml(paper.title)}" /><button class="cover-change" data-upload="${paper.id}">${icon("edit", 13)} Change cover</button><input class="sr-only" type="file" accept="image/*" data-file-input="${paper.id}" /></section><section class="detail-lower"><div><p class="summary-label">Summary</p><p class="detail-summary">${escapeHtml(paper.abstract)}</p></div><aside><ul class="fact-list"><li><span>Direction</span><strong>${directionMarkup(paper)}</strong></li><li><span>Published</span><strong>${escapeHtml(paper.published || paper.year)}</strong></li>${paper.memory ? `<li><span>Memory</span><strong>${escapeHtml(paper.memory)}</strong></li>` : ""}</ul></aside><div class="detail-links">${detailLinks(paper)}</div></section></section></main>`;
}

function showToast(message) {
  minimalToast.textContent = message;
  minimalToast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => minimalToast.classList.remove("show"), 2400);
}

function saveCover(id, file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.onload = () => {
    minimalCustomCovers[id] = reader.result;
    localStorage.setItem("paper-gallery-covers", JSON.stringify(minimalCustomCovers));
    renderMinimal();
    showToast("Cover saved in this browser");
  };
  reader.readAsDataURL(file);
}

function bindMinimalEvents() {
  document.querySelectorAll("[data-open]").forEach((button) => button.addEventListener("click", () => { location.hash = `#/paper/${button.dataset.open}`; }));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => { minimalState.category = button.dataset.filter; renderMinimal(); }));
  document.querySelector("[data-clear]")?.addEventListener("click", () => { minimalState.query = ""; minimalState.category = "All papers"; renderMinimal(); });
  document.querySelector(".search-input")?.addEventListener("input", (event) => {
    minimalState.query = event.target.value;
    renderMinimal();
    const field = document.querySelector(".search-input");
    field?.focus();
    field?.setSelectionRange(minimalState.query.length, minimalState.query.length);
  });
  document.querySelectorAll("[data-upload]").forEach((button) => button.addEventListener("click", () => document.querySelector(`[data-file-input="${button.dataset.upload}"]`)?.click()));
  document.querySelectorAll("[data-file-input]").forEach((input) => input.addEventListener("change", (event) => saveCover(input.dataset.fileInput, event.target.files[0])));
}

function renderMinimal() {
  const hash = location.hash || "#/";
  const id = hash.startsWith("#/paper/") ? hash.replace("#/paper/", "") : null;
  const route = id ? `paper:${id}` : "home";
  const shouldScrollToTop = minimalLastRoute === null || minimalLastRoute !== route;
  minimalApp.innerHTML = id ? detailPage(paperById(id)) : homePage();
  bindMinimalEvents();
  minimalLastRoute = route;
  if (shouldScrollToTop) window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", renderMinimal);
renderMinimal();
