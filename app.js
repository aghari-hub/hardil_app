// CLICK HANDLING
document.querySelectorAll(".app-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.dataset.url;
    if (url) {
      window.open(url, "_blank");
    }
  });
});

// REVEAL ANIMATION FIX (IMPORTANT)
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(el => observer.observe(el));
