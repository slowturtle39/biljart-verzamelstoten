const STORAGE_KEYS = {
  progress: "biljart-verzamelstoten-progress-v1",
  custom: "biljart-verzamelstoten-custom-v1",
  videoTimes: "biljart-verzamelstoten-video-times-v1",
  difficulty: "biljart-verzamelstoten-difficulty-v1",
};

const failureReasons = [
  "carambole gemist",
  "te dik",
  "te dun",
  "te hard",
  "te zacht",
  "verkeerd effect",
  "niet verzameld",
];

const ballLabels = {
  cue: "1",
  second: "2",
  third: "3",
};

const ballNames = {
  cue: "speelbal",
  second: "bal 2",
  third: "bal 3",
};

const state = {
  activeTab: "practice",
  category: "all",
  currentIndex: 0,
  failedIndex: 0,
  showHint: false,
  showSolution: false,
  showReasons: false,
  librarySearch: "",
  editor: {
    balls: {
      cue: { x: 26, y: 27 },
      second: { x: 52, y: 23 },
      third: { x: 75, y: 31 },
    },
  },
};

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  bindEvents();
  renderAll();
  registerServiceWorker();
});

function bindElements() {
  elements.tabs = Array.from(document.querySelectorAll(".tab"));
  elements.summaryPill = document.querySelector("#summaryPill");
  elements.practicePanel = document.querySelector("#practicePanel");
  elements.failedPanel = document.querySelector("#failedPanel");
  elements.libraryPanel = document.querySelector("#libraryPanel");
  elements.addPanel = document.querySelector("#addPanel");
  elements.practiceView = document.querySelector("#practiceView");
  elements.failedView = document.querySelector("#failedView");
  elements.libraryView = document.querySelector("#libraryView");
  elements.librarySearch = document.querySelector("#librarySearch");
  elements.categoryFilter = document.querySelector("#categoryFilter");
  elements.positionForm = document.querySelector("#positionForm");
  elements.editorTable = document.querySelector("#editorTable");
  elements.editorCoords = document.querySelector("#editorCoords");
  elements.exportBox = document.querySelector("#exportBox");
  elements.refreshExport = document.querySelector("#refreshExport");
  elements.emptyTemplate = document.querySelector("#emptyStateTemplate");
}

function bindEvents() {
  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.activeTab = tab.dataset.tab;
      state.showHint = false;
      state.showSolution = false;
      state.showReasons = false;
      renderAll();
    });
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.currentIndex = 0;
    state.showHint = false;
    state.showSolution = false;
    renderPractice();
  });

  elements.librarySearch.addEventListener("input", (event) => {
    state.librarySearch = event.target.value.trim().toLowerCase();
    renderLibrary();
  });

  elements.positionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCustomPosition(new FormData(elements.positionForm));
  });

  elements.refreshExport.addEventListener("click", renderExport);
}

function renderAll() {
  renderTabs();
  renderCategoryFilter();
  renderSummary();
  renderPractice();
  renderFailed();
  renderLibrary();
  renderEditor();
  renderExport();
}

function renderTabs() {
  elements.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === state.activeTab);
  });

  const panelMap = {
    practice: elements.practicePanel,
    failed: elements.failedPanel,
    library: elements.libraryPanel,
    add: elements.addPanel,
  };

  Object.entries(panelMap).forEach(([key, panel]) => {
    panel.classList.toggle("is-active", key === state.activeTab);
  });
}

function renderSummary() {
  const positions = getAllPositions();
  const progress = getProgress();
  const failed = positions.filter((position) => {
    const positionProgress = progress[position.id] || {};
    return positionProgress.lastResult === "mislukt";
  });
  elements.summaryPill.textContent = `${positions.length} stoten, ${failed.length} mislukt`;
}

function renderCategoryFilter() {
  const categories = Array.from(new Set(getAllPositions().map((position) => position.category))).sort();
  elements.categoryFilter.innerHTML = [
    `<option value="all">Alle types</option>`,
    ...categories.map((category) => `<option value="${escapeHtml(category)}">${formatCategory(category)}</option>`),
  ].join("");
  elements.categoryFilter.value = state.category;
}

function renderPractice() {
  const queue = getPracticeQueue(false);
  if (!queue.length) {
    elements.practiceView.innerHTML = emptyStateHtml();
    return;
  }

  state.currentIndex = clampIndex(state.currentIndex, queue.length);
  const position = queue[state.currentIndex];
  elements.practiceView.innerHTML = renderPracticeCard(position, queue.length, state.currentIndex, "practice");
  bindPracticeCardEvents("practice", queue);
}

function renderFailed() {
  const queue = getPracticeQueue(true);
  if (!queue.length) {
    elements.failedView.innerHTML = `
      <div class="empty-state">
        <strong>Nog geen mislukte stoten.</strong>
        <p>Markeer een positie als mislukt, dan verschijnt hij hier voor herhaling.</p>
      </div>
    `;
    return;
  }

  state.failedIndex = clampIndex(state.failedIndex, queue.length);
  const position = queue[state.failedIndex];
  elements.failedView.innerHTML = renderPracticeCard(position, queue.length, state.failedIndex, "failed");
  bindPracticeCardEvents("failed", queue);
}

function renderPracticeCard(position, total, index, mode) {
  const progress = getProgress()[position.id] || {};
  const source = position.source || {};
  const media = position.media || {};
  const solution = position.solution || {};
  const sourceLink = source.url
    ? `<a href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title || "Bron")}</a>`
    : escapeHtml(source.title || "Geen bron");
  const videoTime = getVideoTime(position) || media.videoStart || "";
  const videoLink = media.videoUrl
    ? `<p><strong>Video:</strong> <a href="${escapeAttribute(buildVideoUrl(media.videoUrl, videoTime))}" target="_blank" rel="noreferrer">open video${videoTime ? " vanaf tijdcode" : ""}</a></p>`
    : "";
  const pdfLine = [media.pdfFile, media.pdfPage ? `pagina ${media.pdfPage}` : "", media.figure]
    .filter(Boolean)
    .join(", ");

  return `
    <article class="practice-card">
      <div class="shot-stage">
        <div class="shot-meta">
          <span class="chip">${escapeHtml(formatCategory(position.category))}</span>
          <span class="chip">${escapeHtml(getDifficultyLabel(position))}</span>
          <span class="source-chip">${escapeHtml(position.status || "concept")}</span>
          <span class="chip">${index + 1} / ${total}</span>
        </div>
        ${renderDiagram(position)}
      </div>

      <div class="practice-side">
        <div>
          <h3>${escapeHtml(position.title)}</h3>
          <p class="goal">${escapeHtml(position.goal || "")}</p>
        </div>

        <div class="stats-grid">
          <div class="stat"><strong>${progress.attempts || 0}</strong><span>pogingen</span></div>
          <div class="stat"><strong>${progress.successes || 0}</strong><span>gelukt</span></div>
          <div class="stat"><strong>${progress.failures || 0}</strong><span>mislukt</span></div>
        </div>

        ${renderDifficultyPicker(position)}

        <div class="button-row">
          <button type="button" data-action="prev">Vorige</button>
          <button type="button" data-action="next">Volgende</button>
          <button type="button" class="ghost-action" data-action="hint">Hint</button>
          <button type="button" class="ghost-action" data-action="solution">Oplossing</button>
        </div>

        <div class="button-row">
          <button type="button" class="primary-action" data-action="success">Gelukt</button>
          <button type="button" class="danger-action" data-action="fail">Niet gelukt</button>
          <button type="button" data-action="later">Later opnieuw</button>
        </div>

        ${state.showHint ? `<div class="reveal-box"><h3>Hint</h3><p>${escapeHtml(position.hint || "Geen hint ingevuld.")}</p></div>` : ""}

        ${
          state.showSolution
            ? `<div class="reveal-box">
                <h3>Oplossing</h3>
                <p><strong>Raakpunt:</strong> ${escapeHtml(solution.hitPoint || "nog invullen")}</p>
                <p><strong>Aanspeeldikte:</strong> ${escapeHtml(solution.thickness || "nog invullen")}</p>
                <p><strong>Tempo:</strong> ${escapeHtml(solution.speed || "nog invullen")}</p>
                <p>${escapeHtml(solution.explanation || "Nog geen uitleg ingevuld.")}</p>
                ${renderTechnicalDetails(solution.technicalDetails)}
              </div>`
            : ""
        }

        ${
          state.showReasons
            ? `<div class="reveal-box">
                <h3>Wat ging mis?</h3>
                <div class="reason-row">
                  ${failureReasons
                    .map((reason) => `<button type="button" data-reason="${escapeAttribute(reason)}">${escapeHtml(reason)}</button>`)
                    .join("")}
                </div>
              </div>`
            : ""
        }

        <div class="stats-box">
          <h3>Bron</h3>
          <p>${sourceLink}</p>
          ${source.note ? `<p>${escapeHtml(source.note)}</p>` : ""}
          ${pdfLine ? `<p><strong>PDF/figuur:</strong> ${escapeHtml(pdfLine)}</p>` : ""}
          ${videoLink}
          ${renderOriginalDiagramLink(position)}
          ${renderGeneratedNote(position)}
        </div>

        ${renderVideoTimestampEditor(position)}
      </div>
    </article>
  `;
}

function renderDifficultyPicker(position) {
  const value = getDifficultyValue(position);

  return `
    <form class="difficulty-box" data-difficulty-form="${escapeAttribute(position.id)}">
      <label>
        Moeilijkheid volgens speler
        <select name="difficulty">
          <option value=""${value ? "" : " selected"}>Nog kiezen</option>
          ${[1, 2, 3, 4, 5]
            .map((level) => `<option value="${level}"${String(value) === String(level) ? " selected" : ""}>${level}</option>`)
            .join("")}
        </select>
      </label>
    </form>
  `;
}

function renderDiagram(position) {
  if (position.renderMode === "table" && position.balls) {
    return `
      <div class="converted-diagram-label">${escapeHtml(getConvertedDiagramLabel(position))}</div>
      <div class="table-wrap">${renderTable(position)}</div>
      ${renderInlineOriginalDiagram(position)}
    `;
  }

  if (position.diagramImage) {
    return `
      <figure class="diagram-figure">
        <figcaption>Origineel PDF-diagram</figcaption>
        <a href="${escapeAttribute(position.diagramImage)}" target="_blank" rel="noreferrer">
          <img class="diagram-image" src="${escapeAttribute(position.diagramImage)}" alt="${escapeAttribute(position.title)}" loading="lazy" />
        </a>
      </figure>
    `;
  }

  return `<div class="table-wrap">${renderTable(position)}</div>`;
}

function getConvertedDiagramLabel(position) {
  if (position.lineStatus === "concept") {
    return "Ballen omgezet naar app-diagram; lijnen nog controleren";
  }

  if (position.lineStatus === "improved") {
    return "Ballen en hoofdlijnen omgezet naar app-diagram";
  }

  if (position.lineStatus === "diamond") {
    return "Ballen en looplijnen gecalibreerd op de witte railpunten";
  }

  return "Omgezet naar app-diagram";
}

function renderInlineOriginalDiagram(position) {
  const image = position.originalDiagramImage;
  if (!image) return "";

  return `
    <details class="source-diagram-details" open>
      <summary>Origineel PDF-diagram controleren</summary>
      <a href="${escapeAttribute(image)}" target="_blank" rel="noreferrer">
        <img class="diagram-image" src="${escapeAttribute(image)}" alt="Origineel PDF-diagram voor ${escapeAttribute(position.title)}" loading="lazy" />
      </a>
    </details>
  `;
}

function renderTechnicalDetails(details) {
  if (!Array.isArray(details) || !details.length) return "";

  return `
    <ul class="technical-list">
      ${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
    </ul>
  `;
}

function renderOriginalDiagramLink(position) {
  const image = position.originalDiagramImage || position.diagramImage;
  if (!image) return "";

  return `<p><strong>Bronbeeld:</strong> <a href="${escapeAttribute(image)}" target="_blank" rel="noreferrer">bekijk vergroot diagram</a></p>`;
}

function renderGeneratedNote(position) {
  if (!position.generatedFromImage && !position.originalDiagramImage) return "";

  return `
    <p class="generated-note">
      Let op: de tekst is gegenereerd op basis van het PDF-diagram. Klik op het bronbeeld als je de exacte
      effect-, power- of raakpuntinformatie wilt controleren.
    </p>
  `;
}

function renderVideoTimestampEditor(position) {
  if (!position.media || !position.media.videoUrl) return "";

  const savedTime = getVideoTime(position);

  return `
    <form class="timestamp-box" data-timestamp-form="${escapeAttribute(position.id)}">
      <label>
        YouTube-tijdcode voor deze stoot
        <span>Vul bijvoorbeeld <strong>12:34</strong> of <strong>1:02:10</strong> in.</span>
        <input name="videoTime" placeholder="mm:ss" value="${escapeAttribute(savedTime)}" />
      </label>
      <div class="button-row">
        <button type="submit" class="primary-action">Tijdcode bewaren</button>
        ${savedTime ? `<button type="button" data-action="clear-time">Wissen</button>` : ""}
      </div>
    </form>
  `;
}

function bindPracticeCardEvents(mode, queue) {
  const root = mode === "practice" ? elements.practiceView : elements.failedView;
  root.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const indexKey = mode === "practice" ? "currentIndex" : "failedIndex";

      if (action === "prev") {
        state[indexKey] = wrapIndex(state[indexKey] - 1, queue.length);
      }

      if (action === "next" || action === "later") {
        state[indexKey] = wrapIndex(state[indexKey] + 1, queue.length);
      }

      if (action === "hint") {
        state.showHint = !state.showHint;
      }

      if (action === "solution") {
        state.showSolution = !state.showSolution;
      }

      if (action === "success") {
        recordResult(queue[state[indexKey]], true);
        state.showSolution = true;
        state.showReasons = false;
      }

      if (action === "fail") {
        recordResult(queue[state[indexKey]], false);
        state.showSolution = true;
        state.showReasons = true;
      }

      if (action === "clear-time") {
        saveVideoTime(queue[state[indexKey]], "");
      }

      renderSummary();
      if (mode === "practice") renderPractice();
      if (mode === "failed") renderFailed();
    });
  });

  root.querySelectorAll("[data-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      const indexKey = mode === "practice" ? "currentIndex" : "failedIndex";
      addFailureReason(queue[state[indexKey]], button.dataset.reason);
      state.showReasons = false;
      if (mode === "practice") renderPractice();
      if (mode === "failed") renderFailed();
    });
  });

  root.querySelectorAll("[data-difficulty-form]").forEach((form) => {
    form.addEventListener("change", () => {
      const indexKey = mode === "practice" ? "currentIndex" : "failedIndex";
      const formData = new FormData(form);
      saveDifficulty(queue[state[indexKey]], String(formData.get("difficulty") || ""));
      renderSummary();
      if (mode === "practice") renderPractice();
      if (mode === "failed") renderFailed();
    });
  });

  root.querySelectorAll("[data-timestamp-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const indexKey = mode === "practice" ? "currentIndex" : "failedIndex";
      const formData = new FormData(form);
      saveVideoTime(queue[state[indexKey]], String(formData.get("videoTime") || ""));
      if (mode === "practice") renderPractice();
      if (mode === "failed") renderFailed();
    });
  });
}

function renderLibrary() {
  const progress = getProgress();
  const query = state.librarySearch;
  const positions = getAllPositions().filter((position) => {
    if (!query) return true;
    const haystack = [
      position.title,
      position.category,
      position.status,
      position.source && position.source.title,
      ...(position.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  if (!positions.length) {
    elements.libraryView.innerHTML = emptyStateHtml();
    return;
  }

  elements.libraryView.innerHTML = positions
    .map((position) => {
      const stats = progress[position.id] || {};
      const source = position.source && position.source.title ? position.source.title : "geen bron";
      return `
        <article class="library-item">
          <div>
            <div class="shot-meta">
              <span class="chip">${escapeHtml(formatCategory(position.category))}</span>
              <span class="chip">${escapeHtml(getDifficultyLabel(position))}</span>
              <span class="source-chip">${escapeHtml(position.status || "concept")}</span>
            </div>
            <h3>${escapeHtml(position.title)}</h3>
            <p>${escapeHtml(position.goal || "")}</p>
            <p>Bron: ${escapeHtml(source)}. Pogingen: ${stats.attempts || 0}, mislukt: ${stats.failures || 0}.</p>
          </div>
          <div class="library-actions">
            <button type="button" data-practice-id="${escapeAttribute(position.id)}">Oefen</button>
          </div>
        </article>
      `;
    })
    .join("");

  elements.libraryView.querySelectorAll("[data-practice-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.practiceId;
      const queue = getPracticeQueue(false);
      const index = queue.findIndex((position) => position.id === id);
      state.currentIndex = index >= 0 ? index : 0;
      state.activeTab = "practice";
      state.showHint = false;
      state.showSolution = false;
      renderAll();
    });
  });
}

function renderEditor() {
  const editorPosition = {
    id: "editor",
    balls: state.editor.balls,
    paths: [],
  };
  elements.editorTable.innerHTML = renderTable(editorPosition, true);
  renderEditorCoords();
  attachEditorDrag();
}

function renderEditorCoords() {
  elements.editorCoords.innerHTML = Object.entries(state.editor.balls)
    .map(([key, ball]) => `<span>${ballNames[key]}: ${ball.x.toFixed(1)}, ${ball.y.toFixed(1)}</span>`)
    .join("");
}

function attachEditorDrag() {
  const svg = elements.editorTable.querySelector("svg");
  if (!svg) return;
  let activeBall = null;

  svg.querySelectorAll("[data-editor-ball]").forEach((ball) => {
    ball.addEventListener("pointerdown", (event) => {
      activeBall = ball.dataset.editorBall;
      svg.setPointerCapture(event.pointerId);
    });
  });

  svg.addEventListener("pointermove", (event) => {
    if (!activeBall) return;
    const point = pointerToSvgPoint(svg, event);
    state.editor.balls[activeBall] = {
      x: clamp(point.x, 4, 96),
      y: clamp(point.y, 4, 46),
    };
    updateEditorBall(svg, activeBall);
    renderEditorCoords();
  });

  svg.addEventListener("pointerup", () => {
    activeBall = null;
  });

  svg.addEventListener("pointercancel", () => {
    activeBall = null;
  });
}

function updateEditorBall(svg, key) {
  const group = svg.querySelector(`[data-editor-ball="${key}"]`);
  const ball = state.editor.balls[key];
  if (!group || !ball) return;

  const circle = group.querySelector("circle");
  const label = group.querySelector("text");
  circle.setAttribute("cx", ball.x);
  circle.setAttribute("cy", ball.y);
  label.setAttribute("x", ball.x);
  label.setAttribute("y", ball.y + 0.05);
}

function renderExport() {
  const exportData = {
    schema: "biljart-verzamelstoten-v1",
    exportedAt: new Date().toISOString(),
    positions: getAllPositions(),
    progress: getProgress(),
  };
  elements.exportBox.value = JSON.stringify(exportData, null, 2);
}

function saveCustomPosition(formData) {
  const title = String(formData.get("title") || "").trim();
  if (!title) return;

  const url = String(formData.get("url") || "").trim();
  const sourceType = String(formData.get("sourceType") || "pdf");
  const sourceTitle = String(formData.get("sourceTitle") || "").trim();
  const page = String(formData.get("page") || "").trim();
  const figure = String(formData.get("figure") || "").trim();
  const hint = String(formData.get("hint") || "").trim();
  const explanation = String(formData.get("explanation") || "").trim();

  const customPosition = {
    id: `eigen-${Date.now()}`,
    title,
    category: String(formData.get("category") || "verzamelen"),
    difficulty: Number(formData.get("difficulty") || 3),
    status: "concept",
    tags: ["libre", "eigen invoer"],
    goal: "Speel de carambole en beoordeel of de ballen bruikbaar verzameld liggen.",
    hint,
    solution: {
      hitPoint: "nog invullen",
      thickness: "nog invullen",
      speed: "nog invullen",
      explanation,
    },
    balls: cloneBalls(state.editor.balls),
    paths: [],
    source: {
      type: sourceType,
      title: sourceTitle || "Eigen bron",
      url,
      note: "Handmatig ingevoerd. Controleer de positie met de originele bron.",
    },
    media: {
      videoUrl: sourceType === "video" ? url : "",
      videoStart: "",
      pdfFile: sourceType === "pdf" ? sourceTitle : "",
      pdfPage: page,
      figure,
    },
  };

  const custom = loadJson(STORAGE_KEYS.custom, []);
  custom.push(customPosition);
  saveJson(STORAGE_KEYS.custom, custom);
  elements.positionForm.reset();
  state.activeTab = "library";
  renderAll();
}

function renderTable(position, editor = false) {
  const markerId = `arrow-${position.id}`;
  const paths = (position.paths || [])
    .map((path) => {
      const className =
        path.ball === "second"
          ? "path-second"
          : path.ball === "third"
            ? "path-third"
            : path.ball === "stick"
              ? "path-stick"
              : "path-cue";
      const points = path.points.map((point) => `${point.x},${point.y}`).join(" ");
      return `<polyline class="shot-path aim-line ${className}" points="${points}" marker-end="url(#${markerId})"></polyline>`;
    })
    .join("");

  const balls = Object.entries(position.balls || {})
    .map(([key, ball]) => {
      const labelClass = key === "third" ? "ball-label third" : "ball-label";
      const editorAttr = editor ? `data-editor-ball="${key}"` : "";
      return `
        <g ${editorAttr} role="img" aria-label="${escapeAttribute(ballNames[key] || key)}">
          <circle class="ball ball-${key}" cx="${ball.x}" cy="${ball.y}" r="2.55"></circle>
          <text class="${labelClass}" x="${ball.x}" y="${ball.y + 0.05}">${ballLabels[key] || ""}</text>
        </g>
      `;
    })
    .join("");

  return `
    <svg class="billiard-table" viewBox="0 0 100 50" aria-label="Biljartpositie" preserveAspectRatio="none">
      <defs>
        <marker id="${markerId}" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="currentColor"></path>
        </marker>
      </defs>
      <rect class="table-bed" x="0" y="0" width="100" height="50"></rect>
      ${renderDiamonds()}
      ${paths}
      ${balls}
    </svg>
  `;
}

function renderDiamonds() {
  const topBottom = [12.5, 25, 37.5, 50, 62.5, 75, 87.5]
    .map((x) => `<circle class="diamond" cx="${x}" cy="1.5" r="0.45"></circle><circle class="diamond" cx="${x}" cy="48.5" r="0.45"></circle>`)
    .join("");
  const sides = [12.5, 25, 37.5]
    .map((y) => `<circle class="diamond" cx="1.5" cy="${y}" r="0.45"></circle><circle class="diamond" cx="98.5" cy="${y}" r="0.45"></circle>`)
    .join("");
  return topBottom + sides;
}

function getPracticeQueue(onlyFailed) {
  const progress = getProgress();
  return getAllPositions().filter((position) => {
    if (!onlyFailed && state.category !== "all" && position.category !== state.category) return false;
    if (onlyFailed) {
      const positionProgress = progress[position.id] || {};
      if (positionProgress.lastResult !== "mislukt") return false;
    }
    return true;
  });
}

function getAllPositions() {
  const importedPositions = typeof pdfPositions === "undefined" ? [] : pdfPositions;
  return [...importedPositions, ...seedPositions, ...loadJson(STORAGE_KEYS.custom, [])].map(applyPositionOverride);
}

function applyPositionOverride(position) {
  const overrides = typeof positionOverrides === "undefined" ? {} : positionOverrides;
  const override = overrides[position.id];

  if (!override) return position;

  return deepMerge(position, override);
}

function deepMerge(base, override) {
  const output = { ...base };

  Object.entries(override).forEach(([key, value]) => {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      base[key] &&
      typeof base[key] === "object" &&
      !Array.isArray(base[key])
    ) {
      output[key] = deepMerge(base[key], value);
    } else {
      output[key] = value;
    }
  });

  return output;
}

function getProgress() {
  return loadJson(STORAGE_KEYS.progress, {});
}

function getDifficultyMap() {
  return loadJson(STORAGE_KEYS.difficulty, {});
}

function isPdfPosition(position) {
  return String(position.id || "").startsWith("dirk-acx-");
}

function getDifficultyValue(position) {
  const saved = getDifficultyMap()[position.id];
  if (saved) return saved;
  if (isPdfPosition(position)) return "";
  return position.difficulty || "";
}

function getDifficultyLabel(position) {
  const value = getDifficultyValue(position);
  return value ? `niveau ${value}` : "niveau kiezen";
}

function saveDifficulty(position, value) {
  const difficulties = getDifficultyMap();

  if (value) {
    difficulties[position.id] = value;
  } else {
    delete difficulties[position.id];
  }

  saveJson(STORAGE_KEYS.difficulty, difficulties);
}

function getVideoTime(position) {
  return loadJson(STORAGE_KEYS.videoTimes, {})[position.id] || "";
}

function saveVideoTime(position, value) {
  const videoTimes = loadJson(STORAGE_KEYS.videoTimes, {});
  const normalized = normalizeTimestamp(value);

  if (normalized) {
    videoTimes[position.id] = normalized;
  } else {
    delete videoTimes[position.id];
  }

  saveJson(STORAGE_KEYS.videoTimes, videoTimes);
}

function normalizeTimestamp(value) {
  const clean = String(value || "").trim();
  if (!clean) return "";
  if (/^\d+$/.test(clean)) return clean;
  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(clean)) return clean;
  return clean;
}

function timestampToSeconds(value) {
  const clean = String(value || "").trim();
  if (!clean) return 0;
  if (/^\d+$/.test(clean)) return Number(clean);

  const parts = clean.split(":").map((part) => Number(part));
  if (parts.some((part) => Number.isNaN(part))) return 0;

  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];

  return 0;
}

function buildVideoUrl(url, time) {
  if (!time) return url || "";

  const seconds = timestampToSeconds(time);
  if (!seconds) return url || "";

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("t", `${seconds}s`);
    return parsed.toString();
  } catch (error) {
    const joiner = String(url).includes("?") ? "&" : "?";
    return `${url}${joiner}t=${seconds}s`;
  }
}

function recordResult(position, succeeded) {
  const progress = getProgress();
  const previous = progress[position.id] || {
    attempts: 0,
    successes: 0,
    failures: 0,
    streak: 0,
    lastReason: "",
  };

  const next = {
    ...previous,
    attempts: previous.attempts + 1,
    successes: previous.successes + (succeeded ? 1 : 0),
    failures: previous.failures + (succeeded ? 0 : 1),
    streak: succeeded ? Math.max(0, previous.streak) + 1 : -1,
    lastResult: succeeded ? "gelukt" : "mislukt",
    lastPracticedAt: new Date().toISOString(),
  };

  progress[position.id] = next;
  saveJson(STORAGE_KEYS.progress, progress);
}

function addFailureReason(position, reason) {
  const progress = getProgress();
  progress[position.id] = {
    ...(progress[position.id] || {}),
    lastReason: reason,
  };
  saveJson(STORAGE_KEYS.progress, progress);
}

function formatCategory(category) {
  return String(category || "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function emptyStateHtml() {
  return elements.emptyTemplate.innerHTML;
}

function cloneBalls(balls) {
  return Object.fromEntries(
    Object.entries(balls).map(([key, ball]) => [key, { x: Number(ball.x), y: Number(ball.y) }]),
  );
}

function pointerToSvgPoint(svg, event) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function clampIndex(index, length) {
  if (!length) return 0;
  return clamp(index, 0, length - 1);
}

function wrapIndex(index, length) {
  if (!length) return 0;
  return (index + length) % length;
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn(`Kon ${key} niet lezen`, error);
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}
