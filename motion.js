document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".section-content, .contact-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.18
  });

  targets.forEach((el) => observer.observe(el));
});
