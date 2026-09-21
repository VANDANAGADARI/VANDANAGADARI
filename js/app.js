const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const sectionOrder = ["home", "about", "education", "projects", "internship", "skills", "maps", "documents", "certifications", "contact"];
let currentSection = "home";

function showSection(id, pushState = true) {
  if (!sectionOrder.includes(id)) id = "home";

  $$(".page-section").forEach(section => section.classList.remove("active-section"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active-section");

  $$(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.section === id));
  currentSection = id;
  $("#sidebar").classList.remove("mobile-open");

  const index = sectionOrder.indexOf(id);
  $("#backSection").disabled = index <= 0;
  $("#forwardSection").disabled = index >= sectionOrder.length - 1;

  if (pushState && location.hash !== `#${id}`) {
    history.pushState({ section: id }, "", `#${id}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveSection(direction) {
  const index = sectionOrder.indexOf(currentSection);
  const nextIndex = index + direction;
  if (nextIndex >= 0 && nextIndex < sectionOrder.length) {
    showSection(sectionOrder[nextIndex]);
  }
}

function renderHome() {
  const featured = portfolioData.projects.slice(0, 3);
  $("#featuredProjects").innerHTML = featured.map(project => `
    <article class="featured-project-row" data-go="projects">
      <div class="featured-project-thumb">
        ${project.image ? `<img src="${project.image}" alt="">` : ""}
      </div>
      <div class="featured-project-copy">
        <span>${project.category} · ${project.year}</span>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      </div>
      <b>→</b>
    </article>
  `).join("");

  const recentMaps = portfolioData.maps.slice(0, 3);
  $("#recentMaps").innerHTML = recentMaps.map(map => `
    <article class="recent-map-row" data-go="maps">
      <div class="recent-map-thumb">
        ${map.image ? `<img src="${map.image}" alt="">` : ""}
      </div>
      <div>
        <span>${map.type || "Map"}</span>
        <h4>${map.title}</h4>
        <p>${map.description}</p>
      </div>
      <b>→</b>
    </article>
  `).join("");
}
function renderAbout() {
  $("#profileSummary").textContent = portfolioData.profile.summary;
  $("#interestTags").innerHTML = portfolioData.profile.interests.map(x => `<span>${x}</span>`).join("");
}

function renderEducation() {
  $("#educationGrid").innerHTML = portfolioData.education.map(e => `
    <article class="education-card">
      <div class="edu-top"><span>${e.level}</span><span>${e.period}</span></div>
      <h3>${e.title}</h3>
      <p>${e.institution}</p>
      <div class="edu-result"><strong>${e.result}</strong><small>${e.resultType}</small></div>
    </article>
  `).join("");
}

function renderSkills() {
  $("#skillsGrid").innerHTML = portfolioData.skills.map(group => `
    <article class="skill-card">
      <p class="card-heading">${group.category}</p>
      <div class="skill-tags">${group.items.map(x => `<span>${x}</span>`).join("")}</div>
    </article>
  `).join("");
}

let activeFilter = "All";

function renderProjectFilters() {
  const cats = ["All", ...new Set(portfolioData.projects.map(p => p.category))];
  $("#projectFilters").innerHTML = cats.map(c => `
    <button class="${c === activeFilter ? "active" : ""}" data-filter="${c}">${c}</button>
  `).join("");

  $$("#projectFilters button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const list = activeFilter === "All" ? portfolioData.projects : portfolioData.projects.filter(p => p.category === activeFilter);
  $("#projectGrid").innerHTML = list.map((p, i) => `
    <article class="project-card">
      <div class="project-number">0${i + 1}</div>
      <p class="project-category">${p.category} · ${p.year}</p>
      <h3>${p.title}</h3>
      <p class="project-description">${p.description}</p>
      <div class="project-tags">${p.technologies.slice(0, 5).map(t => `<span>${t}</span>`).join("")}</div>
      <button class="details-button" data-project="${portfolioData.projects.indexOf(p)}">View details →</button>
    </article>
  `).join("");

  $$("[data-project]").forEach(btn => btn.addEventListener("click", () => openProject(Number(btn.dataset.project))));
}

function openProject(index) {
  const p = portfolioData.projects[index];
  $("#modalCategory").textContent = `${p.category} · ${p.year} · ${p.status}`;
  $("#modalTitle").textContent = p.title;
  $("#modalDescription").textContent = p.details;
  $("#modalTags").innerHTML = p.technologies.map(t => `<span>${t}</span>`).join("");
  const actions = [];
  if (p.github) actions.push(`<a class="button outline" href="${p.github}" target="_blank" rel="noopener">GitHub →</a>`);
  if (p.live) actions.push(`<a class="button primary" href="${p.live}" target="_blank" rel="noopener">Live Demo →</a>`);
  $("#modalButtons").innerHTML = actions.join("");
  $("#projectModal").classList.add("open");
  $("#projectModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#projectModal").classList.remove("open");
  $("#projectModal").setAttribute("aria-hidden", "true");
}
function renderInternships() {
  const grid = document.getElementById("internshipGrid");

  if (!grid || !portfolioData.internships) return;

  grid.innerHTML = portfolioData.internships.map((item, index) => `
    <article class="project-card">

      <div class="project-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="project-category">
        ${item.type}
      </div>

      <h3>${item.title}</h3>

      <p class="project-description">
        ${item.description}
      </p>

      <div class="project-tags">
        ${item.mode ? `<span>${item.mode}</span>` : ""}
        ${item.duration ? `<span>${item.duration}</span>` : ""}
        ${item.status ? `<span>${item.status}</span>` : ""}
      </div>

      <button
        class="details-button"
        onclick="openInternship(${index})">
        View Details →
      </button>

    </article>
  `).join("");
}
renderInternships();
function openInternship(index) {
  const item = portfolioData.internships[index];

  document.getElementById("modalCategory").textContent =
    `${item.type} · ${item.status}`;

  document.getElementById("modalTitle").textContent =
    item.title;

  document.getElementById("modalDescription").textContent =
    `${item.details} ${item.mode ? `Mode: ${item.mode}.` : ""} ${item.duration ? `Duration: ${item.duration}.` : ""}`;

  document.getElementById("modalTags").innerHTML =
    item.technologies.map(tech => `<span>${tech}</span>`).join("");

  const buttons = document.getElementById("modalButtons");

  buttons.innerHTML = item.certificate
    ? `<a class="button primary" href="${item.certificate}" target="_blank">
         View Certificate →
       </a>`
    : "";

  document.getElementById("projectModal").classList.add("open");
  document.getElementById("projectModal").setAttribute("aria-hidden", "false");
}
function renderMaps() {
  $("#mapGrid").innerHTML = portfolioData.maps.map(m => `
    <article class="map-card">
      <div class="map-image">
        <img src="${m.image}" alt="${m.title}" onerror="this.parentElement.classList.add('map-placeholder'); this.style.display='none'">
        <span>MAP PREVIEW</span>
      </div>
      <div class="map-info">
        <div><p>${m.category}</p><h3>${m.title}</h3><small>${m.subtitle}</small></div>
      </div>
    </article>
  `).join("");
}

function renderDocuments() {
  $("#documentGrid").innerHTML = portfolioData.documents.map(d => `
    <article class="document-card">
      <div class="document-icon">${d.type === "CV" ? "CV" : "✓"}</div>
      <p class="card-heading">${d.type}</p>
      <h3>${d.title}</h3>
      <p>${d.description}</p>
      <a class="details-button" href="${d.file}" target="_blank" rel="noopener">Open document →</a>
    </article>
  `).join("");
}

function renderCertifications() {
  const certificates = portfolioData.certifications || [];
  $("#certificateGrid").innerHTML = certificates.length
    ? certificates.map(cert => `
      <article class="certificate-card">
        <div>
          <span class="certificate-label">${cert.issuer || "Credential"}</span>
          <h3>${cert.title}</h3>
          <p>${cert.description || ""}</p>
          ${cert.date ? `<small>${cert.date}</small>` : ""}
        </div>
        ${cert.file ? `<a class="details-button" href="${cert.file}" target="_blank" rel="noopener">View Certificate →</a>` : ""}
      </article>
    `).join("")
    : `<div class="empty-state">Certificates will be added here.</div>`;
}

function renderContact() {
  $("#emailLink").href = `mailto:${portfolioData.contact.email}`;
  $("#emailLink strong").textContent = portfolioData.contact.email;
  $("#githubLink").href = portfolioData.contact.github;

  $("#orcidLink").href = portfolioData.contact.orcid;
  $("#osmLink").href = portfolioData.contact.openstreetmap;

  if (portfolioData.contact.linkedin) {
    $("#linkedinLink").href = portfolioData.contact.linkedin;
  } else {
    $("#linkedinLink").classList.add("disabled-link");
    $("#linkedinLink").removeAttribute("href");
  }

  $("#socialLinks").innerHTML = `
    <a href="${portfolioData.contact.github}" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
    <a href="${portfolioData.contact.orcid}" target="_blank" rel="noopener" aria-label="ORCID">iD</a>
    <a href="${portfolioData.contact.openstreetmap}" target="_blank" rel="noopener" aria-label="OpenStreetMap">⌖</a>
    <a href="mailto:${portfolioData.contact.email}" aria-label="Email">@</a>
  `;
}

function setupNavigation() {
  $$(".nav-item").forEach(btn => btn.addEventListener("click", () => showSection(btn.dataset.section)));
  $$("[data-go]").forEach(btn => btn.addEventListener("click", () => showSection(btn.dataset.go)));

  $("#backSection").addEventListener("click", () => moveSection(-1));
  $("#forwardSection").addEventListener("click", () => moveSection(1));

  $("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("mobile-open"));
  $$("[data-close-modal]").forEach(x => x.addEventListener("click", closeModal));

  window.addEventListener("popstate", () => {
    const id = location.hash.replace("#", "") || "home";
    showSection(id, false);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if ((e.altKey || e.metaKey) && e.key === "ArrowLeft") moveSection(-1);
    if ((e.altKey || e.metaKey) && e.key === "ArrowRight") moveSection(1);
  });
}

function init() {
  renderHome();
  renderAbout();
  renderEducation();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderMaps();
  renderDocuments();
  renderCertifications();
  renderContact();
  setupNavigation();

  const initialSection = location.hash.replace("#", "") || "home";
  showSection(initialSection, false);

  $("#year").textContent = new Date().getFullYear();
}
document.addEventListener("DOMContentLoaded", init);
