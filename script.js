document.addEventListener('DOMContentLoaded', () => {
  const autoTargets = document.querySelectorAll(
    '.card, .listing, .hero-grid, .nav-blue, .banner-mock, .stats-card'
  );
  autoTargets.forEach((el) => el.classList.add('reveal'));

  const items = document.querySelectorAll('.reveal');
  if (items.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
  }

  // Dropdown toggle
  document.querySelectorAll('.dropdown-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wrap = btn.closest('.dropdown');
      document.querySelectorAll('.dropdown.open').forEach((d) => {
        if (d !== wrap) d.classList.remove('open');
      });
      wrap.classList.toggle('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach((d) => d.classList.remove('open'));
  });
});
