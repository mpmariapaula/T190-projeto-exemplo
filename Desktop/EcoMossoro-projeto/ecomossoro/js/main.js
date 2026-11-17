document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano do rodapé automaticamente.
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Menu responsivo com suporte a teclado e leitores de tela.
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector("#main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      mainNav.classList.toggle("is-open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        mainNav.classList.remove("is-open");
      });
    });
  }

  // Filtros do diretório de pontos de coleta.
  const pointsList = document.querySelector("#points-list");
  const searchInput = document.querySelector("#search-point");
  const materialSelect = document.querySelector("#filter-material");
  const filterForm = document.querySelector("#point-filters");

  if (pointsList && searchInput && materialSelect) {
    const cards = [...pointsList.querySelectorAll(".point-card")];
    const count = document.querySelector("#result-count");
    const emptyState = document.querySelector("#empty-state");

    const filterPoints = () => {
      const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
      const material = materialSelect.value;
      let visible = 0;

      cards.forEach((card) => {
        const searchable = `${card.dataset.name} ${card.dataset.neighborhood}`.toLocaleLowerCase("pt-BR");
        const materials = (card.dataset.materials || "").split(/\s+/);
        const matchesText = !query || searchable.includes(query);
        const matchesMaterial = !material || materials.includes(material);
        const show = matchesText && matchesMaterial;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (count) count.textContent = String(visible);
      if (emptyState) emptyState.hidden = visible !== 0;
    };

    searchInput.addEventListener("input", filterPoints);
    materialSelect.addEventListener("change", filterPoints);
    filterForm?.addEventListener("reset", () => window.setTimeout(filterPoints, 0));

    // Permite que a busca da página inicial selecione um material.
    const params = new URLSearchParams(window.location.search);
    const initialMaterial = params.get("material");
    if (initialMaterial && [...materialSelect.options].some((option) => option.value === initialMaterial)) {
      materialSelect.value = initialMaterial;
      filterPoints();
    }
  }

  // O formulário demonstra a validação, mas ainda não envia os dados.
  const contactForm = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  if (contactForm && feedback) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      feedback.textContent = "Formulário validado! Para receber sugestões, conecte este formulário a um backend PHP ou a um serviço de envio antes de publicar.";
      feedback.setAttribute("tabindex", "-1");
      feedback.focus();
    });
  }
});
