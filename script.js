const bdGrid = document.getElementById("bdGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let currentIndex = -1;

function displayBDs(query = "") {
  const topTitle = document.getElementById("topTitle");
  if (topTitle) topTitle.textContent = "";
  bdGrid.innerHTML = "";
  let filteredBDs = [...bds];

  if (query.trim() !== "") {
    const q = query.toLowerCase();
    filteredBDs = filteredBDs.filter(bd =>
      bd.titre.toLowerCase().includes(q) ||
      bd.auteur.toLowerCase().includes(q) ||
      bd.editeur.toLowerCase().includes(q)
    );
  }

  const sortBy = sortSelect.value;
  filteredBDs.sort((a, b) => {
    if (sortBy === 'note') return (b.note || '').localeCompare(a.note || '');
    return (a[sortBy] || '').localeCompare(b[sortBy] || '');
  });

  const counter = document.getElementById('counter');
  if (counter) counter.textContent = `${filteredBDs.length} BD affichées`;

  filteredBDs.forEach(bd => {
    const card = document.createElement("div");
    card.className = "bd-card";
    card.innerHTML = `
      <img src="${bd.image}" alt="${bd.titre}">
      <div class="bd-info">
        <h2>${bd.titre}</h2>${bd.signe ? '<span class="badge-signe">Signée</span>' : ''}
        <p><strong>Auteur :</strong> ${bd.auteur}</p>
        <p><strong>Éditeur :</strong> ${bd.editeur}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      currentIndex = filteredBDs.indexOf(bd);
      openModal(bd);
    });
    bdGrid.appendChild(card);
  });
}

function openModal(bd) {
  const modal = document.getElementById("bdModal");
  const content = document.getElementById("modalContent");
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.classList.add("showing");
  modal.classList.remove("fadeOut");
  modal.classList.add("fadeIn");
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.classList.add('modal-open');
  document.body.style.overflow = "hidden";
  document.body.classList.add('modal-open');
  content.innerHTML = `
    <img src="${bd.image}" alt="${bd.titre}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
    <div style="display:flex; justify-content: space-between; margin-bottom: 1rem;">
      <button onclick="navigateModal(-1)">← Précédent</button>
      <button onclick="navigateModal(1)">Suivant →</button>
    </div>
    <h2>${bd.titre}</h2>${bd.signe ? '<span class="badge-signe">Signée</span>' : ''}
    <p><strong>Auteur :</strong> ${bd.auteur}</p>
    <p><strong>Éditeur :</strong> ${bd.editeur}</p>
    <p><strong>Résumé :</strong> ${bd.resume}</p>
    <p><strong>Note :</strong> ${bd.note}</p>${bd.signe ? '<p><strong>✨ Exemplaire signé</strong></p>' : ''}
  `;
}

function closeModal() {
  const modal = document.getElementById("bdModal");
  modal.classList.remove("fadeIn");
  modal.classList.remove("showing");
  modal.classList.add("fadeOut");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.classList.remove('modal-open');
  }, 300);
}

function navigateModal(direction) {
  if (currentIndex === -1) return;
  const cards = [...bds].filter(bd =>
    bd.titre.toLowerCase().includes(searchInput.value.toLowerCase()) ||
    bd.auteur.toLowerCase().includes(searchInput.value.toLowerCase()) ||
    bd.editeur.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  const sortBy = sortSelect.value;
  cards.sort((a, b) => {
    if (sortBy === 'note') return (b.note || '').localeCompare(a.note || '');
    return (a[sortBy] || '').localeCompare(b[sortBy] || '');
  });
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < cards.length) {
    currentIndex = newIndex;
    openModal(cards[newIndex]);
  }
}

document.getElementById("bdModal").addEventListener("click", (e) => {
  if (e.target.id === "bdModal") {
    closeModal();
  }
});

sortSelect.addEventListener("change", () => displayBDs(searchInput.value));
searchInput.addEventListener("input", () => displayBDs(searchInput.value));

displayBDs();

function filterTop(name) {
  const topTitle = document.getElementById("topTitle");
  if (topTitle) topTitle.textContent = "TOP 5 de " + (name === "mathilde" ? "Mathilde" : "Sofiane");
  let topTitles = [];
  if (name === "mathilde") {
    topTitles = ["Adieu triste amour", "C’est comme ça que je disparais", "Culottées"];
  } else if (name === "sofiane") {
    topTitles = ["L'Aimant", "Alyte", "The Boy, The Mole, The Fox and The Horse"];
  }
  searchInput.value = ""; // clear search
  const filtered = bds.filter(bd => topTitles.includes(bd.titre));
  displayFilteredBDs(filtered);
}

function clearSearch() {
  const topTitle = document.getElementById("topTitle");
  if (topTitle) topTitle.textContent = "";
  searchInput.value = "";
  displayBDs();
}

function displayFilteredBDs(list) {
  bdGrid.innerHTML = "";
  const sortBy = sortSelect.value;
  list.sort((a, b) => {
    if (sortBy === 'note') return (b.note || '').localeCompare(a.note || '');
    return (a[sortBy] || '').localeCompare(b[sortBy] || '');
  });

  const counter = document.getElementById('counter');
  if (counter) counter.textContent = `${list.length} BD affichées`;

  list.forEach(bd => {
    const card = document.createElement("div");
    card.className = "bd-card";
    card.innerHTML = `
      <img src="${bd.image}" alt="${bd.titre}">
      <div class="bd-info">
        <h2>${bd.titre}</h2>${bd.signe ? '<span class="badge-signe">Signée</span>' : ''}
        <p><strong>Auteur :</strong> ${bd.auteur}</p>
        <p><strong>Éditeur :</strong> ${bd.editeur}</p>
      </div>
    `;
    card.addEventListener("click", () => {
    const modal = document.getElementById("bdModal");
    const content = document.getElementById("modalContent");
    modal.classList.remove("fadeOut");
    modal.classList.add("fadeIn");
    modal.classList.add("showing");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.classList.add('modal-open');
    content.innerHTML = `
      <img src="${bd.image}" alt="${bd.titre}" style="width:100%; border-radius: 10px; margin-bottom: 1rem;">
      <h2>${bd.titre}</h2>${bd.signe ? '<span class="badge-signe">Signée</span>' : ''}
      <p><strong>Auteur :</strong> ${bd.auteur}</p>
      <p><strong>Éditeur :</strong> ${bd.editeur}</p>
      <p><strong>Résumé :</strong> ${bd.resume}</p>
      <p><strong>Note :</strong> ${bd.note}</p>${bd.signe ? '<p><strong>✨ Exemplaire signé</strong></p>' : ''}
    `;
  });
    bdGrid.appendChild(card);
  });
}