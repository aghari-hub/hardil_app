document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (url) window.location.assign(url);
    });
  });
});
