
  const elements = document.querySelectorAll('section, .hero-full, .services-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // Apply staggered delay for services cards
        if (el.classList.contains('services-card')) {
          const index = parseInt(el.dataset.index, 10);
          el.style.transitionDelay = `${index * 0.1}s`;
        }
        el.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
  document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("show");
  });
