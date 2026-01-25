const projects = [];


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
