// Click handling
document.querySelectorAll(".hub-app, .app-btn").forEach(el => {
  el.addEventListener("click", () => {
    const url = el.dataset?.url;
    el.animate(
      [{ transform: "scale(1)" }, { transform: "scale(0.95)" }, { transform: "scale(1)" }],
      { duration: 200 }
    );
    if (url) setTimeout(() => window.open(url, "_blank"), 120);
  });
});

// Scroll reveal (THIS IS WHAT YOU WERE MISSING)
const revealElements = document.querySelectorAll(".hub-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Auto horizontal movement (SuperHub feel)
document.querySelectorAll(".hub-scroll").forEach(scroll => {
  let dir = 1;
  setInterval(() => {
    scroll.scrollBy({ left: 120 * dir, behavior: "smooth" });
    if (
      scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth ||
      scroll.scrollLeft <= 0
    ) dir *= -1;
  }, 2800);
});
