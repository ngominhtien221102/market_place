document.addEventListener('DOMContentLoaded', () => {
  const autoTargets = document.querySelectorAll(
    '.card, .listing, .hero-grid, .nav-blue, .banner-mock, .stats-card'
  );
  autoTargets.forEach((el) => el.classList.add('reveal'));

  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

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
});
