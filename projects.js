const projects = [
  {
    title: "Applied Statistics for Data Science Modelling Final (R)",
    description:
      "(1) high-dimensional regression with regularization (lasso/ridge/elastic net), (2) count data Poisson → Negative Binomial, and (3) imbalanced binary classification with CART/Random Forest/XGBoost.",
    tags: ["R", "GLM", "Lasso/Ridge", "NegBin", "Random Forest", "XGBoost"],
    links: {
      code: "assets/stats-final/", 
      writeup: "assets/stats-final/final_report.pdf",
      demo: "stats-final.html"
    }
  }
];



function makeLink(label, url) {
  if (!url) return "";
  return `<a class="button ghost" href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function render() {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = projects.map(p => `
    <article class="card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="actions">
        ${makeLink("Code", p.links.code)}
        ${makeLink("Write-up", p.links.writeup)}
        ${makeLink("Demo", p.links.demo)}
      </div>
    </article>
  `).join("");

  document.getElementById("year").textContent = new Date().getFullYear();
}

render();
