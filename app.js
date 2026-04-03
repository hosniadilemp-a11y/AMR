const reportData = window.reportData;
if (!reportData) {
  throw new Error("site_data.js did not define window.reportData.");
}

const isFrench = document.documentElement.lang === "fr";
const numberLocale = isFrench ? "fr-FR" : "en-US";

const classTranslations = {
  "aminoglycoside": "Aminoside",
  "beta-lactam": "B&ecirc;ta-lactamine",
  "phenicol": "Ph&eacute;nicol",
  "sulfonamide": "Sulfamide",
  "tetracycline": "T&eacute;tracycline",
  "trimethoprim": "Trim&eacute;thoprime",
  "quaternary ammonium": "Ammonium quaternaire"
};

const subclassTranslations = {
  "streptomycin": "Streptomycine",
  "chloramphenicol": "Chloramph&eacute;nicol",
  "sulfonamide": "Sulfamide",
  "trimethoprim": "Trim&eacute;thoprime",
  "beta-lactam": "B&ecirc;ta-lactamine",
  "kanamycin": "Kanamycine",
  "tetracycline": "T&eacute;tracycline",
  "quaternary ammonium": "Ammonium quaternaire"
};

const antibioticPalette = {
  "aminoglycoside": "#4d7a5c",
  "beta-lactam": "#b55b3a",
  "phenicol": "#c89f4a",
  "sulfonamide": "#3c6150",
  "tetracycline": "#8aa37b",
  "trimethoprim": "#6c4f3d",
  "quaternary ammonium": "#8f6f90"
};

let activeFilter = "all";

function formatNumber(value) {
  return new Intl.NumberFormat(numberLocale).format(value);
}

function statusClass(status) {
  return `status-${String(status || "na").toLowerCase().replace(/\s+/g, "-")}`;
}

function titleCase(text) {
  return String(text)
    .split(/[\s-]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function displayClass(text) {
  return isFrench ? (classTranslations[text] || text) : titleCase(text);
}

function displaySubclass(text) {
  return isFrench ? (subclassTranslations[text] || text) : titleCase(text);
}

function displayReadLabel(text) {
  if (!isFrench) {
    return text;
  }
  const mapping = {
    "Raw R1": "Brut R1",
    "Raw R2": "Brut R2",
    "Trimmed R1": "Trim&eacute; R1",
    "Trimmed R2": "Trim&eacute; R2"
  };
  return mapping[text] || text;
}

function buildHeroBadges() {
  const badges = isFrench
    ? [
        "MDR OUI",
        `${reportData.summary.antibioticClassCount} classes antibiotiques`,
        `${reportData.summary.amrGeneCount} g&egrave;nes AMR`,
        `${reportData.summary.organismCall} ${reportData.summary.mlstType}`
      ]
    : [
        `MDR ${reportData.summary.mdrStatus}`,
        `${reportData.summary.antibioticClassCount} antibiotic classes`,
        `${reportData.summary.amrGeneCount} AMR genes`,
        `${reportData.summary.organismCall} ${reportData.summary.mlstType}`
      ];
  document.getElementById("hero-badges").innerHTML = badges
    .map((label) => `<span class="badge"><span class="dot"></span>${label}</span>`)
    .join("");
}

function buildMetrics() {
  const metrics = isFrench
    ? [
        { label: "Appel MDR", value: "OUI", detail: "La MDR g&eacute;notypique est positive car les g&egrave;nes de r&eacute;sistance couvrent six classes antibiotiques." },
        { label: "Lign&eacute;e assign&eacute;e", value: reportData.summary.mlstType, detail: `Le sch&eacute;ma MLST ${reportData.summary.mlstScheme} classe l'assemblage comme ${reportData.summary.mlstType}.` },
        { label: "Classes AMR", value: String(reportData.summary.antibioticClassCount), detail: "T&eacute;tracycline, aminosides, ph&eacute;nicol, sulfamides, trim&eacute;thoprime et b&ecirc;ta-lactamines." },
        { label: "R&eacute;sultats PlasmidFinder", value: String(reportData.summary.plasmidReplicons), detail: "Aucun r&eacute;plicon plasmidique n'a &eacute;t&eacute; d&eacute;tect&eacute; dans l'assemblage r&eacute;cup&eacute;r&eacute;." }
      ]
    : [
        { label: "MDR call", value: reportData.summary.mdrStatus, detail: "Genotypic MDR is positive because resistance genes span six antibiotic classes." },
        { label: "Assigned lineage", value: reportData.summary.mlstType, detail: `MLST scheme ${reportData.summary.mlstScheme} classified the assembly as ${reportData.summary.mlstType}.` },
        { label: "AMR classes", value: String(reportData.summary.antibioticClassCount), detail: "Tetracycline, aminoglycoside, phenicol, sulfonamide, trimethoprim, and beta-lactam." },
        { label: "PlasmidFinder hits", value: String(reportData.summary.plasmidReplicons), detail: "No plasmid replicon hits were detected in the recovered assembly." }
      ];
  document.getElementById("metrics-grid").innerHTML = metrics.map((metric) => `
    <article class="metric-card">
      <span class="label">${metric.label}</span>
      <span class="value">${metric.value}</span>
      <p class="detail">${metric.detail}</p>
    </article>
  `).join("");
}

function buildQcMatrix() {
  const headers = isFrench
    ? ["Fichier", "Qualit&eacute; par base", "Contenu GC", "Contenu adaptateur", "Lectures"]
    : ["File", "Per-base quality", "GC content", "Adapter content", "Reads"];
  const rows = reportData.qc.map((entry) => `
    <tr>
      <td><strong>${displayReadLabel(entry.label)}</strong><br><span class="small">${entry.sequenceLength} bp</span></td>
      <td><span class="status-chip ${statusClass(entry.perBaseQuality)}">${entry.perBaseQuality}</span></td>
      <td><span class="status-chip ${statusClass(entry.gcContent)}">${entry.gcContent}</span></td>
      <td><span class="status-chip ${statusClass(entry.adapterContent)}">${entry.adapterContent}</span></td>
      <td>${formatNumber(entry.totalSequences)}</td>
    </tr>
  `).join("");

  document.getElementById("qc-matrix").innerHTML = `
    <table class="qc-table">
      <thead>
        <tr>
          ${headers.map((header) => `<th>${header}</th>`).join("")}
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function drawReadChart() {
  const svg = document.getElementById("read-chart");
  const width = 420;
  const height = 260;
  const margin = { top: 30, right: 26, bottom: 42, left: 74 };
  const max = reportData.summary.rawReadPairs * 1.08;
  const bars = [
    { label: isFrench ? "Paires brutes" : "Raw pairs", value: reportData.summary.rawReadPairs, color: "#4d7a5c" },
    { label: isFrench ? "Paires trim&eacute;es" : "Trimmed pairs", value: reportData.summary.trimmedReadPairs, color: "#b55b3a" }
  ];
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const step = innerWidth / bars.length;
  const barWidth = 86;

  const grid = [0.25, 0.5, 0.75, 1].map((fraction) => {
    const y = margin.top + innerHeight - innerHeight * fraction;
    const value = Math.round((max * fraction) / 1000) * 1000;
    return `
      <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(23,37,31,0.1)" />
      <text x="${margin.left - 12}" y="${y + 4}" text-anchor="end" fill="#53655c" font-size="11">${formatNumber(value)}</text>
    `;
  }).join("");

  const barsMarkup = bars.map((bar, index) => {
    const x = margin.left + step * index + (step - barWidth) / 2;
    const barHeight = (bar.value / max) * innerHeight;
    const y = margin.top + innerHeight - barHeight;
    return `
      <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="18" fill="${bar.color}" opacity="0.92" />
      <text x="${x + barWidth / 2}" y="${y - 10}" text-anchor="middle" fill="#17251f" font-size="12" font-weight="700">${formatNumber(bar.value)}</text>
      <text x="${x + barWidth / 2}" y="${height - 16}" text-anchor="middle" fill="#53655c" font-size="12">${bar.label}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent" />
    ${grid}
    <line x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${width - margin.right}" y2="${margin.top + innerHeight}" stroke="rgba(23,37,31,0.28)" />
    ${barsMarkup}
  `;
}

function buildAssembly() {
  const cards = isFrench
    ? [
        { label: "Taille d'assemblage", value: `${(reportData.summary.assemblyBp / 1000000).toFixed(2)} Mb`, detail: "Dans la plage attendue pour un g&eacute;nome d'isolat de type E. coli." },
        { label: "Contigs", value: String(reportData.summary.contigCount), detail: "Assemblage draft fragment&eacute; mais interpr&eacute;table apr&egrave;s r&eacute;cup&eacute;ration manuelle SPAdes." },
        { label: "N50", value: `${formatNumber(reportData.summary.n50Bp)} bp`, detail: "Au-dessus du seuil de 10 kb utilis&eacute; dans le filtre de compatibilit&eacute;." },
        { label: "Contenu GC", value: `${reportData.summary.gcPct}%`, detail: "Compatible avec un assemblage de type E. coli." }
      ]
    : [
        { label: "Assembly size", value: `${(reportData.summary.assemblyBp / 1000000).toFixed(2)} Mb`, detail: "Inside the expected range for an isolate-style E. coli genome." },
        { label: "Contigs", value: String(reportData.summary.contigCount), detail: "Fragmented but interpretable draft assembly after manual SPAdes recovery." },
        { label: "N50", value: `${formatNumber(reportData.summary.n50Bp)} bp`, detail: "Above the 10 kb suitability gate used in the pipeline." },
        { label: "GC content", value: `${reportData.summary.gcPct}%`, detail: "Consistent with an E. coli-like assembly." }
      ];
  document.getElementById("assembly-grid").innerHTML = cards.map((card) => `
    <article class="assembly-card">
      <span class="label">${card.label}</span>
      <span class="value">${card.value}</span>
      <p class="detail">${card.detail}</p>
    </article>
  `).join("");
  document.getElementById("gate-ring-label").textContent = isFrench ? "WGS\nOK" : "WGS\nPASS";
}

function amrOnlyGenes() {
  return reportData.amrGenes.filter((gene) => gene.role === "AMR");
}

function classCounts() {
  const counts = {};
  amrOnlyGenes().forEach((gene) => {
    counts[gene.class] = (counts[gene.class] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, color: antibioticPalette[name] || "#4d7a5c" }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));
}

function drawClassChart() {
  const svg = document.getElementById("class-chart");
  const width = 420;
  const height = 280;
  const margin = { top: 28, right: 24, bottom: 26, left: 114 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const data = classCounts();
  const max = Math.max(...data.map((item) => item.count)) + 0.5;
  const rowHeight = innerHeight / data.length;

  const bars = data.map((item, index) => {
    const y = margin.top + index * rowHeight + 10;
    const barHeight = rowHeight - 18;
    const barWidth = (item.count / max) * innerWidth;
    return `
      <text x="${margin.left - 12}" y="${y + barHeight / 2 + 4}" text-anchor="end" fill="#17251f" font-size="12">${displayClass(item.name)}</text>
      <rect x="${margin.left}" y="${y}" width="${innerWidth}" height="${barHeight}" rx="12" fill="rgba(23,37,31,0.06)" />
      <rect x="${margin.left}" y="${y}" width="${barWidth}" height="${barHeight}" rx="12" fill="${item.color}" />
      <text x="${margin.left + barWidth - 10}" y="${y + barHeight / 2 + 4}" text-anchor="end" fill="white" font-size="12" font-weight="700">${item.count}</text>
    `;
  }).join("");

  svg.innerHTML = `<rect x="0" y="0" width="${width}" height="${height}" fill="transparent" />${bars}`;
  document.getElementById("class-legend").innerHTML = data.map((item) => `
    <span class="legend-item"><span class="dot" style="background:${item.color}"></span>${displayClass(item.name)} (${item.count})</span>
  `).join("");
}

function drawScatterChart() {
  const svg = document.getElementById("scatter-chart");
  const width = 420;
  const height = 280;
  const margin = { top: 28, right: 22, bottom: 48, left: 56 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const genes = amrOnlyGenes();
  const xMin = 92;
  const xMax = 100;
  const yMin = 90;
  const yMax = 100;
  const xScale = (value) => margin.left + ((value - xMin) / (xMax - xMin)) * innerWidth;
  const yScale = (value) => margin.top + innerHeight - ((value - yMin) / (yMax - yMin)) * innerHeight;

  const grid = [92, 94, 96, 98, 100].map((value) => `
    <line x1="${xScale(value)}" y1="${margin.top}" x2="${xScale(value)}" y2="${margin.top + innerHeight}" stroke="rgba(23,37,31,0.08)" />
    <text x="${xScale(value)}" y="${height - 18}" text-anchor="middle" fill="#53655c" font-size="11">${value}</text>
  `).join("") + [90, 92, 94, 96, 98, 100].map((value) => `
    <line x1="${margin.left}" y1="${yScale(value)}" x2="${width - margin.right}" y2="${yScale(value)}" stroke="rgba(23,37,31,0.08)" />
    <text x="${margin.left - 10}" y="${yScale(value) + 4}" text-anchor="end" fill="#53655c" font-size="11">${value}</text>
  `).join("");

  const points = genes.map((gene) => {
    const cx = xScale(gene.identity);
    const cy = yScale(gene.coverage);
    const color = antibioticPalette[gene.class] || "#4d7a5c";
    return `
      <circle cx="${cx}" cy="${cy}" r="7.5" fill="${color}" stroke="white" stroke-width="2">
        <title>${gene.gene}: ${gene.identity}% identity, ${gene.coverage}% coverage</title>
      </circle>
      <text x="${cx + 10}" y="${cy - 8}" fill="#17251f" font-size="11">${gene.gene}</text>
    `;
  }).join("");

  svg.innerHTML = `
    <rect x="0" y="0" width="${width}" height="${height}" fill="transparent" />
    ${grid}
    <text x="${width / 2}" y="${height - 4}" text-anchor="middle" fill="#53655c" font-size="12">${isFrench ? "Pourcentage d'identit&eacute;" : "Identity percent"}</text>
    <text x="18" y="${height / 2}" transform="rotate(-90 18 ${height / 2})" text-anchor="middle" fill="#53655c" font-size="12">${isFrench ? "Pourcentage de couverture" : "Coverage percent"}</text>
    ${points}
  `;
}

function buildFilters() {
  const classes = ["all", ...new Set(reportData.amrGenes.map((gene) => gene.class))];
  document.getElementById("filter-row").innerHTML = classes.map((className) => `
    <button class="filter-button ${className === activeFilter ? "active" : ""}" data-filter="${className}">
      ${className === "all" ? (isFrench ? "Tous les g&egrave;nes" : "All genes") : displayClass(className)}
    </button>
  `).join("");
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      buildFilters();
      buildGeneTable();
    });
  });
}

function buildGeneTable() {
  const filtered = reportData.amrGenes.filter((gene) => activeFilter === "all" || gene.class === activeFilter);
  document.getElementById("gene-table-body").innerHTML = filtered.map((gene) => `
    <tr>
      <td><span class="gene-tag">${gene.gene}</span></td>
      <td>${displayClass(gene.class)}</td>
      <td>${displaySubclass(gene.subclass)}</td>
      <td>${gene.method}</td>
      <td>${gene.identity.toFixed(2)}%</td>
      <td>${gene.coverage.toFixed(2)}%</td>
      <td><code>${gene.contig}</code></td>
      <td>${gene.role === "AMR" ? (isFrench ? "Compte pour la MDR" : "Counts toward MDR") : (isFrench ? "Contexte de stress ou biocide uniquement" : "Stress/biocide context only")}</td>
    </tr>
  `).join("");
}

function drawGeneArrow(svgWidth, y, gene, contigLength) {
  const startX = 42 + (gene.start / contigLength) * (svgWidth - 84);
  const stopX = 42 + (gene.stop / contigLength) * (svgWidth - 84);
  const left = Math.min(startX, stopX);
  const right = Math.max(startX, stopX);
  const top = y;
  const bottom = y + 28;
  const arrow = 14;
  const color = antibioticPalette[gene.class] || "#4d7a5c";

  if (gene.strand === "+") {
    return `
      <polygon points="${left},${top} ${right - arrow},${top} ${right},${top + 14} ${right - arrow},${bottom} ${left},${bottom}" fill="${color}" opacity="0.95">
        <title>${gene.gene}: ${gene.start}-${gene.stop}</title>
      </polygon>
      <text x="${left + 6}" y="${top - 4}" fill="#17251f" font-size="12">${gene.gene}</text>
    `;
  }

  return `
    <polygon points="${right},${top} ${left + arrow},${top} ${left},${top + 14} ${left + arrow},${bottom} ${right},${bottom}" fill="${color}" opacity="0.95">
      <title>${gene.gene}: ${gene.start}-${gene.stop}</title>
    </polygon>
    <text x="${left + 4}" y="${top - 4}" fill="#17251f" font-size="12">${gene.gene}</text>
  `;
}

function buildClusters() {
  const genesByName = Object.fromEntries(reportData.amrGenes.map((gene) => [gene.gene, gene]));
  const clusterTranslations = [
    {
      title: "NODE_37, &icirc;lot de type cassette multir&eacute;sistance",
      note: "Le bloc aadA2-cmlA1-aadA1-qacL-sul3 correspond &agrave; un motif d&eacute;j&agrave; connu de r&eacute;gion multir&eacute;sistante associ&eacute;e &agrave; sul3. C'est important pour la surveillance, mais ce n'est pas la preuve d'une cassette nouvelle."
    },
    {
      title: "NODE_41, segment de r&eacute;sistance de type int&eacute;gron",
      note: "L'arrangement dfrA7-qacEdelta1-sul1 est compatible avec une structure associ&eacute;e &agrave; un int&eacute;gron de classe 1. Sans s&eacute;quen&ccedil;age en longues lectures, il est plus prudent de parler d'une structure de type int&eacute;gron plut&ocirc;t que d'une architecture totalement r&eacute;solue."
    },
    {
      title: "NODE_42, unit&eacute; b&ecirc;ta-lactamase",
      note: "blaTEM-1 appara&icirc;t sur un contig court comme une b&ecirc;ta-lactamase compl&egrave;te d&eacute;j&agrave; connue. Le contexte mobile voisin reste non r&eacute;solu."
    },
    {
      title: "NODE_46, unit&eacute; phosphotransf&eacute;rase d'aminosides",
      note: "aph(3')-Ia contribue &agrave; la r&eacute;sistance aux aminosides et appara&icirc;t seul sur ce fragment de contig court."
    },
    {
      title: "NODE_30, r&eacute;gion d'efflux de t&eacute;tracycline",
      note: "tet(A) est pr&eacute;sent comme d&eacute;terminant complet et exact d'efflux de t&eacute;tracycline sur un contig plus long, ce qui renforce l'appel MDR."
    }
  ];
  document.getElementById("cluster-stack").innerHTML = reportData.clusters.map((cluster) => {
    const svgWidth = 860;
    const svgHeight = 128;
    const trackY = 60;
    const lineLeft = 42;
    const lineRight = svgWidth - 42;
    const genes = cluster.genes.map((geneName) => genesByName[geneName]).filter(Boolean);
    const arrows = genes.map((gene) => drawGeneArrow(svgWidth, trackY, gene, cluster.length)).join("");
    const countLabel = genes.filter((gene) => gene.role === "AMR").length;
    const clusterText = isFrench
      ? clusterTranslations[reportData.clusters.indexOf(cluster)]
      : { title: cluster.title, note: cluster.note };
    const contigLabel = isFrench ? "Contig" : "Contig";
    const lengthLabel = isFrench ? "Longueur" : "Length";
    const geneLabel = isFrench ? "G&egrave;nes AMR" : "AMR genes";
    return `
      <article class="cluster-card">
        <h3>${clusterText.title}</h3>
        <div class="cluster-meta">
          <span><strong>${contigLabel}:</strong> <code>${cluster.contig}</code></span>
          <span><strong>${lengthLabel}:</strong> ${formatNumber(cluster.length)} bp</span>
          <span><strong>${geneLabel}:</strong> ${countLabel}</span>
        </div>
        <p>${clusterText.note}</p>
        <div class="chart-shell">
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" aria-label="${clusterText.title}">
            <line x1="${lineLeft}" y1="${trackY + 14}" x2="${lineRight}" y2="${trackY + 14}" stroke="rgba(23,37,31,0.3)" stroke-width="4" stroke-linecap="round" />
            <text x="${lineLeft}" y="24" fill="#53655c" font-size="12">0 bp</text>
            <text x="${lineRight}" y="24" text-anchor="end" fill="#53655c" font-size="12">${formatNumber(cluster.length)} bp</text>
            ${arrows}
          </svg>
        </div>
      </article>
    `;
  }).join("");
}

function buildNovelty() {
  const noveltyItems = isFrench ? reportData.novelty.cardsFr : reportData.novelty.cardsEn;
  document.getElementById("novelty-grid").innerHTML = noveltyItems.map((item) => `
    <article class="novelty-card">
      <span class="label">${item.label}</span>
      <div class="score">${item.score}</div>
      <div class="evidence-bar"><div class="evidence-fill" style="width:${item.support}%"></div></div>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function noveltyStageLabel(stageName) {
  const mapping = {
    known_gene_baseline: isFrench ? "Filtrage des gènes connus" : "Known-gene baseline",
    gene_prediction: isFrench ? "Prédiction des gènes" : "Gene prediction",
    homology_screen: isFrench ? "Homologie Swiss-Prot" : "Swiss-Prot homology",
    domain_inference: isFrench ? "Domaines Pfam" : "Pfam domains",
    read_validation: isFrench ? "Validation par profondeur" : "Read validation",
    comparative_context: isFrench ? "Contexte comparatif" : "Comparative context",
    phylogeny: isFrench ? "Phylogénie" : "Phylogeny"
  };
  return mapping[stageName] || stageName;
}

function buildNoveltyMethods() {
  const methods = reportData.novelty.methods || [];
  const target = document.getElementById("novelty-methods");
  target.innerHTML = methods.map((method) => `
    <article class="research-card">
      <div class="research-card-head">
        <h3>${isFrench ? method.title_fr : method.title_en}</h3>
      </div>
      <div class="research-block">
        <span class="research-label">${isFrench ? "Description" : "Description"}</span>
        <p>${isFrench ? method.text_fr : method.text_en}</p>
      </div>
      <div class="research-block">
        <span class="research-label">${isFrench ? "Outils" : "Tools"}</span>
        <p>${method.tools}</p>
      </div>
      <div class="research-block">
        <span class="research-label">${isFrench ? "Bases de données" : "Databases"}</span>
        <p>${method.databases}</p>
      </div>
    </article>
  `).join("");
}

function buildNoveltyStageStatus() {
  const statuses = reportData.novelty.stageStatus || [];
  const headers = isFrench ? ["Étape", "Statut", "Détail"] : ["Stage", "Status", "Detail"];
  const rows = statuses.map((item) => `
    <tr>
      <td>${noveltyStageLabel(item.stageName)}</td>
      <td><span class="status-chip ${statusClass(item.status)}">${item.status}</span></td>
      <td>${isFrench ? item.detailFr : item.detailEn}</td>
    </tr>
  `).join("");
  document.getElementById("novelty-stage-status").innerHTML = `
    <table class="qc-table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function buildNoveltyCandidates() {
  const candidates = reportData.novelty.candidates || [];
  const target = document.getElementById("novelty-candidates");
  if (!candidates.length) {
    target.innerHTML = `<p>${isFrench ? "Aucun candidat classé n'est actuellement disponible dans cette livraison." : "No ranked novelty candidates are currently available in this bundle."}</p>`;
    return;
  }
  const headers = isFrench
    ? ["Candidat", "Produit", "Niveau", "Score", "Identité", "Couverture", "Domaines", "Support profondeur"]
    : ["Candidate", "Product", "Tier", "Score", "Identity", "Coverage", "Domains", "Depth support"];
  const rows = candidates.map((item) => `
    <tr>
      <td><code>${item.candidateId}</code></td>
      <td>${item.product || ""}</td>
      <td>${item.tier || ""}</td>
      <td>${item.score != null ? item.score : ""}</td>
      <td>${item.identity != null ? `${item.identity}%` : ""}</td>
      <td>${item.coverage != null ? `${item.coverage}%` : ""}</td>
      <td>${item.domains || ""}</td>
      <td>${item.depthConsistent ? (isFrench ? "Oui" : "Yes") : (isFrench ? "Non" : "No")}</td>
    </tr>
  `).join("");
  target.innerHTML = `
    <table class="gene-table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function buildNoveltyConclusion() {
  document.getElementById("novelty-conclusion").innerHTML = isFrench
    ? reportData.novelty.conclusionFr
    : reportData.novelty.conclusionEn;
}

function init() {
  buildHeroBadges();
  buildMetrics();
  buildQcMatrix();
  drawReadChart();
  buildAssembly();
  drawClassChart();
  drawScatterChart();
  buildFilters();
  buildGeneTable();
  buildClusters();
  buildNovelty();
  buildNoveltyMethods();
  buildNoveltyStageStatus();
  buildNoveltyCandidates();
  buildNoveltyConclusion();
}

init();
