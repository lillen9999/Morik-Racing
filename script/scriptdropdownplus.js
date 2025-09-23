// Mobile dropdown toggle
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('open');
      });
    });
