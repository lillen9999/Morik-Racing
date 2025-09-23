
    const pages = [
      { name: "Hem", url: "index.html" },
      { name: "Tjänster", url: "tjanster.html" },
      { name: "Kontakt", url: "kontakt.html" },
      { name: "Bästsäljare", url: "Tjansterbast.html" },
      { name: "Priser", url: "prislista.html" },
      { name: "Services", url: "Service.html" },
      { name: "Motor", url: "tjanster.html" }
    ];

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    function toggleMenu() {
      const open = mobileMenu.classList.toggle('open');
      mobileMenu.setAttribute('aria-hidden', !open);
      hamburgerBtn.setAttribute('aria-expanded', open);
      hamburgerBtn.textContent = open ? '✕' : '☰';
    }

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', true);
        hamburgerBtn.setAttribute('aria-expanded', false);
        hamburgerBtn.textContent = '☰';
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        if (mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', true);
          hamburgerBtn.setAttribute('aria-expanded', false);
          hamburgerBtn.textContent = '☰';
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', true);
        hamburgerBtn.setAttribute('aria-expanded', false);
        hamburgerBtn.textContent = '☰';
      }
    });

    function searchPages(event) {
      const input = event.target;
      const query = (input.value || '').toLowerCase().trim();
      const wrapper = input.closest('.search-wrapper');
      const resultsDiv = wrapper.querySelector('.results');
      resultsDiv.innerHTML = "";

      if (!query) return;

      const results = pages.filter(page => page.name.toLowerCase().includes(query));
      results.forEach(page => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.textContent = page.name;
        div.onclick = () => window.location.href = page.url;
        resultsDiv.appendChild(div);
      });

      if (results.length === 0) {
        const none = document.createElement("div");
        none.classList.add("result-item");
        none.textContent = "No results found";
        resultsDiv.appendChild(none);
      }

      if (event.key === "Enter" && results.length > 0) {
        window.location.href = results[0].url;
      }
    }