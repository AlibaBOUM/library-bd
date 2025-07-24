const bdGrid = document.getElementById("bdGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function displayBDs(query = "") {
  bdGrid.innerHTML = "";
  let filteredBDs = [...bds];

  // Recherche
  if (query.trim() !== "") {
    const q = query.toLowerCase();
    filteredBDs = filteredBDs.filter(bd =>
      bd.titre.toLowerCase().includes(q) ||
      bd.auteur.toLowerCase().includes(q) ||
      bd.editeur.toLowerCase().includes(q)
    );
  }

  // Tri
  const sortBy = sortSelect.value;
  filteredBDs.sort((a, b) => {
    if (sortBy === 'note') return (b.note || '').localeCompare(a.note || '');
    return (a[sortBy] || '').localeCompare(b[sortBy] || '');
  });

  filteredBDs.forEach(bd => {
    const card = document.createElement("div");
    card.className = "bd-card";
    card.innerHTML = `
      <img src="${bd.image}" alt="${bd.titre}">
      <div class="bd-info">
        <h2>${bd.titre}</h2>
        <p><strong>Auteur :</strong> ${bd.auteur}</p>
        <p><strong>Éditeur :</strong> ${bd.editeur}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(bd));
    bdGrid.appendChild(card);
  });
}

let currentIndex = -1;

function openModal(bd) {
  const modal = document.getElementById("bdModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <img src="${bd.image}" alt="${bd.titre}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
    <div style="display:flex; justify-content: space-between; margin-bottom: 1rem;">
      <button onclick="navigateModal(-1)">← Précédent</button>
      <button onclick="navigateModal(1)">Suivant →</button>
    </div>`;
    <h2>${bd.titre}</h2>
    <p><strong>Auteur :</strong> ${bd.auteur}</p>
    <p><strong>Éditeur :</strong> ${bd.editeur}</p>
    <p><strong>Résumé :</strong> ${bd.resume}</p>
    <p><strong>Note :</strong> ${bd.note}</p>
  `;
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById("bdModal");
modal.classList.remove("fadeIn");
modal.classList.add("fadeOut");
setTimeout(() => {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';
}, 300);
  document.body.style.overflow = 'auto';
}

sortSelect.addEventListener("change", () => displayBDs(searchInput.value));
searchInput.addEventListener("input", () => displayBDs(searchInput.value));

displayBDs();

document.getElementById("bdModal").addEventListener("click", (e) => {
  if (e.target.id === "bdModal") {
    closeModal();
  }
});


function navigateModal(direction) {
  if (currentIndex === -1) return;
  const filteredBDs = [...bds].filter(bd =>
    bd.titre.toLowerCase().includes(searchInput.value.toLowerCase()) ||
    bd.auteur.toLowerCase().includes(searchInput.value.toLowerCase()) ||
    bd.editeur.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  const sortBy = sortSelect.value;
  filteredBDs.sort((a, b) => {
    if (sortBy === 'note') return (b.note || '').localeCompare(a.note || '');
    return (a[sortBy] || '').localeCompare(b[sortBy] || '');
  });

  currentIndex = filteredBDs.findIndex(bd => bd.titre === document.querySelector("#modalContent h2").textContent);
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < filteredBDs.length) {
    openModal(filteredBDs[newIndex]);
  }
}
