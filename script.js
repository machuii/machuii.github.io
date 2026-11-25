(() => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

  root.setAttribute("data-theme", initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  const techStack = [
    {
      name: "BigQuery",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/><path d="M8 12v-2M10.5 12V8.5M13 12v-3"/></svg>'
    },
    {
      name: "Cloud Run",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4l14 8-14 8 3.5-8L5 4z"/><path d="M8.5 12H19"/></svg>'
    },
    {
      name: "Workflows",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="4" width="6" height="6" rx="1.5"/><rect x="9" y="14" width="6" height="6" rx="1.5"/><path d="M6 10v2a2 2 0 0 0 2 2h1M18 10v2a2 2 0 0 1-2 2h-1"/></svg>'
    },
    {
      name: "Eventarc",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17a8 8 0 0 1 16 0"/><path d="M7.5 17a4.5 4.5 0 0 1 9 0"/><circle cx="12" cy="17" r="1.5" fill="currentColor"/><path d="M12 4v3"/></svg>'
    },
    {
      name: "Cloud Trace",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h10M8 10h12M6 14h9M11 18h9"/></svg>'
    },
    {
      name: "Pub/Sub",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.7 7.5 10 10.3M17.3 7.5 14 10.3M6.7 16.5 10 13.7M17.3 16.5 14 13.7"/></svg>'
    },
    {
      name: "Bigtable",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9.5h18M3 14.5h18M9.5 9.5V20M15 9.5V20"/></svg>'
    },
    {
      name: "Dataproc",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3z"/><path d="M12 8v8M8.5 10l7 4M15.5 10l-7 4"/></svg>'
    },
    {
      name: "GitHub",
      svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>'
    },
    {
      name: "Bitbucket",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3.5 5h17l-2.1 14H5.6L3.5 5z"/><path d="M9.5 10h5l-.6 4h-3.8l-.6-4z"/></svg>'
    },
    {
      name: "Cloud Build",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5z"/><path d="M12 12l8-4.5M12 12v9.5M12 12 4 7.5"/></svg>'
    },
    {
      name: "Django",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 5v11.5a2.5 2.5 0 0 1-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5v-2A2.5 2.5 0 0 1 7 12h3.5"/><path d="M15.5 9.5v6a3.5 3.5 0 0 1-2.5 3.3"/><circle cx="15.5" cy="6" r="0.8" fill="currentColor"/></svg>'
    },
    {
      name: "Python",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3.5 0-3.5 1.7-3.5 3.5V9h7v1.5H7.2C5 10.5 3.5 12 3.5 14.5S5 18 7.2 18H9v-2.5c0-1.7 1.3-3 3-3h4.2c1.8 0 3.3-1.4 3.3-3.2V6.5C19.5 4.5 17 3 12 3z"/><path d="M12 21c3.5 0 3.5-1.7 3.5-3.5V15h-7v-1.5h8.3c2.2 0 3.7-1.5 3.7-4S19 6 16.8 6H15v2.5c0 1.7-1.3 3-3 3H7.8c-1.8 0-3.3 1.4-3.3 3.2v2.8C4.5 19.5 7 21 12 21z"/></svg>'
    },
    {
      name: "C",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5z"/><path d="M15 9.3a4 4 0 1 0 0 5.4"/></svg>'
    },
    {
      name: "C++",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5z"/><path d="M10.5 9.5a3 3 0 1 0 0 5"/><path d="M12.5 12h3M14 10.5v3M16.5 12h2M17.5 11v2"/></svg>'
    },
    {
      name: "Rust",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/><path d="M9.5 15.5v-7h3.2a2 2 0 0 1 0 4H9.5m3 0 2.2 3"/></svg>'
    },
    {
      name: "Google ADK",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7.8 17.2 11 14.5M16.2 17.2 13 14.5"/></svg>'
    },
    {
      name: "PyTorch",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 7.5A6.5 6.5 0 1 1 8.2 7.2L12 3.5"/><circle cx="15.5" cy="5.5" r="1" fill="currentColor"/></svg>'
    },
    {
      name: "Snowflake",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17"/><path d="M9.5 4.5 12 7l2.5-2.5M9.5 19.5 12 17l2.5 2.5"/></svg>'
    },
    {
      name: "Apache NiFi",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s5 5.5 5 10a5 5 0 1 1-10 0c0-4.5 5-10 5-10z"/><path d="M9.5 13.5l2.5-2.5 2.5 2.5"/></svg>'
    },
    {
      name: "GCS",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="6" rx="1.5"/><rect x="4" y="13" width="16" height="6" rx="1.5"/><circle cx="8" cy="8" r="0.8" fill="currentColor"/><circle cx="8" cy="16" r="0.8" fill="currentColor"/></svg>'
    },
    {
      name: "Azure Service Bus",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="3.5" rx="1"/><rect x="4" y="10.25" width="16" height="3.5" rx="1"/><rect x="4" y="15.5" width="16" height="3.5" rx="1"/></svg>'
    },
    {
      name: "AWS EC2",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>'
    },
    {
      name: "Kubernetes",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.2"/><path d="M12 2.5v7.3M19.5 7l-5.6 3.7M19.5 17l-5.6-3.7M12 21.5v-7.3M4.5 17l5.6-3.7M4.5 7l5.6 3.7"/></svg>'
    },
    {
      name: "Docker",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13h14c1.5 0 2.5-.8 3-2-1-.6-2.2-.5-3 .1-.3-1.2-1-2-2-2.6"/><path d="M4 13c0 4 3 7 8 7s8-3 8-7"/><rect x="6" y="9" width="2.5" height="2.5"/><rect x="9.5" y="9" width="2.5" height="2.5"/><rect x="13" y="9" width="2.5" height="2.5"/><rect x="9.5" y="5.5" width="2.5" height="2.5"/></svg>'
    },
    {
      name: "HashiCorp Vault",
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 5h17L12 20.5 3.5 5z"/><circle cx="12" cy="10.5" r="1.2" fill="currentColor"/></svg>'
    }
  ];

  const bgTech = document.getElementById("bg-tech");
  if (bgTech) {
    const rowCount = 5;
    for (let r = 0; r < rowCount; r += 1) {
      const row = document.createElement("div");
      row.className = r % 2 === 1 ? "tech-row tech-row--reverse" : "tech-row";

      const offset = (r * 5) % techStack.length;
      const ordered = [...techStack.slice(offset), ...techStack.slice(0, offset)];

      ordered.forEach((item) => {
        const chip = document.createElement("div");
        chip.className = "tech-chip";
        chip.innerHTML = `${item.svg}<span>${item.name}</span>`;
        row.appendChild(chip);
      });

      bgTech.appendChild(row);
    }
  }

  const projects = [
    {
      index: "01",
      meta: "IEEE Paper",
      title: "Swarm-Intelligence-Driven Model Aggregation for Accelerated Federated Learning",
      summary:
        "Implemented FedPSO & FedCPSO on Flower, cutting on-device memory by 70% and network communication by 49%.",
      description:
        "Implemented and optimized two swarm-based federated learning algorithms—Google's FedPSO and FedCPSO—on the open-source Flower framework.",
      highlights: [
        "Implemented FedPSO and FedCPSO on the Flower federated learning framework",
        "Optimized FedCPSO to achieve a 70% reduction in on-device memory usage",
        "Reduced network communication costs by 49% across federated rounds"
      ],
      tags: ["Python", "Flower", "FedPSO", "FedCPSO"]
    },
    {
      index: "02",
      meta: "Micron India",
      title: "InFLY (Intelligent Forecasting and Learning of Yields)",
      summary:
        "Self-correcting semiconductor yield forecasting platform with stateful CD across 42 components and FastAPI.",
      description:
        "Micron data-science and engineering platform that produces and continuously self-corrects semiconductor yield forecasts for production planning and financial goal-setting.",
      highlights: [
        "Built a stateful GitHub CD setup using file fingerprinting and delta matching for 42 components",
        "Automated initial production provisioning and incremental code deployments",
        "Migrated a C#-based backend to a production FastAPI architecture in 3 weeks"
      ],
      tags: ["GitHub", "Cloud Run Job", "Workflows", "FastAPI"]
    },
    {
      index: "03",
      meta: "Micron India",
      title: "Distributed Cloud Data Processing & Batch Routing Pipeline",
      summary:
        "High-throughput cloud ingestion pipeline processing 1M+ daily semiconductor telemetry files with automated reprocessing and monitoring.",
      description:
        "Micron's global semiconductor telemetry ingestion and processing platform, handling over a million files daily to support chip quality decisions for shipping.",
      highlights: [
        "Engineered a reprocessing pipeline cutting daily missing summaries from 3,000+ to under 100",
        "Integrated a reusable Cloud Function standardizing batch routing to downstream AVRO and extraction flows",
        "Built hourly Parquet monitoring that detected a GCP switchover failure early"
      ],
      tags: ["GKE", "Pub/Sub", "BigQuery", "Bigtable", "Bash"]
    }
  ];

  const projectsTrack = document.getElementById("projects-track");
  const popupBackdrop = document.getElementById("project-popup-backdrop");
  const popupEl = document.getElementById("project-popup");
  const popupMeta = document.getElementById("popup-meta");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-description");
  const popupHighlights = document.getElementById("popup-highlights");
  const popupTags = document.getElementById("popup-tags");
  const popupLinks = document.getElementById("popup-links");
  const popupClose = document.getElementById("popup-close");

  let openTimer = null;
  let closeTimer = null;
  let hasEnteredPopup = false;

  const isPopupOpen = () =>
    Boolean(popupBackdrop && popupBackdrop.classList.contains("is-open"));

  const openPopup = (project) => {
    if (!popupBackdrop) return;
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    hasEnteredPopup = false;

    popupMeta.textContent = project.meta;
    popupTitle.textContent = project.title;
    popupDesc.textContent = project.description;

    popupHighlights.innerHTML = "";
    project.highlights.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      popupHighlights.appendChild(li);
    });

    popupTags.innerHTML = "";
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "project-tag";
      span.textContent = tag;
      popupTags.appendChild(span);
    });

    popupLinks.innerHTML = "";
    const links = project.links || [];
    popupLinks.style.display = links.length ? "flex" : "none";
    links.forEach((link) => {
      const a = document.createElement("a");
      a.className = "popup-link";
      a.href = link.url;
      a.textContent = `${link.label} ↗`;
      if (link.url !== "#") {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      popupLinks.appendChild(a);
    });

    popupBackdrop.classList.add("is-open");
    popupBackdrop.setAttribute("aria-hidden", "false");
  };

  const scheduleOpenPopup = (project) => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    openTimer = setTimeout(() => {
      openPopup(project);
    }, 400);
  };

  const cancelPendingOpen = () => {
    if (!isPopupOpen()) {
      clearTimeout(openTimer);
    }
  };

  const scheduleClosePopup = () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      if (!popupBackdrop) return;
      popupBackdrop.classList.remove("is-open");
      popupBackdrop.setAttribute("aria-hidden", "true");
      hasEnteredPopup = false;
    }, 120);
  };

  const closePopupNow = () => {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    if (!popupBackdrop) return;
    popupBackdrop.classList.remove("is-open");
    popupBackdrop.setAttribute("aria-hidden", "true");
    hasEnteredPopup = false;
  };

  if (projectsTrack) {
    projects.forEach((project) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "project-card";

      const previewTags = project.tags
        .slice(0, 2)
        .map((t) => `<span class="project-tag">${t}</span>`)
        .join("");

      card.innerHTML = `
        <div class="project-card-top">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-summary">${project.summary}</p>
        </div>
        <div class="project-tags">${previewTags}</div>
      `;

      card.addEventListener("mouseenter", () => scheduleOpenPopup(project));
      card.addEventListener("mouseleave", cancelPendingOpen);
      card.addEventListener("click", () => openPopup(project));

      projectsTrack.appendChild(card);
    });
  }

  if (popupEl) {
    popupEl.addEventListener("mouseenter", () => {
      hasEnteredPopup = true;
      clearTimeout(closeTimer);
    });
    popupEl.addEventListener("mouseleave", () => {
      if (hasEnteredPopup) {
        scheduleClosePopup();
      }
    });
  }

  if (popupClose) {
    popupClose.addEventListener("click", closePopupNow);
  }

  if (popupBackdrop) {
    popupBackdrop.addEventListener("click", (event) => {
      if (event.target === popupBackdrop) {
        closePopupNow();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopupNow();
    }
  });

  if (window.matchMedia("(pointer: fine)").matches) {
    let glowRaf = null;
    window.addEventListener("pointermove", (event) => {
      if (glowRaf) return;
      glowRaf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${event.clientX}px`);
        root.style.setProperty("--my", `${event.clientY}px`);
        glowRaf = null;
      });
    });
  }
})();
