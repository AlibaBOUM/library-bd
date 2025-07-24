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

function openModal(bd) {
  const modal = document.getElementById("bdModal");
  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <img src="${bd.image}" alt="${bd.titre}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
    <h2>${bd.titre}</h2>
    <p><strong>Auteur :</strong> ${bd.auteur}</p>
    <p><strong>Éditeur :</strong> ${bd.editeur}</p>
    <p><strong>Résumé :</strong> ${bd.resume}</p>
    <p><strong>Note :</strong> ${bd.note}</p>
  `;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("bdModal").style.display = "none";
}

sortSelect.addEventListener("change", () => displayBDs(searchInput.value));
searchInput.addEventListener("input", () => displayBDs(searchInput.value));

displayBDs();