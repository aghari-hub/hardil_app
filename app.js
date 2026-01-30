// SIMPLE CLICK HANDLER (FAIL-SAFE)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
const dotsBtn = document.getElementById("dotsBtn");
const dotsMenu = document.getElementById("dotsMenu");

if (dotsBtn && dotsMenu) {
  dotsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dotsMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    dotsMenu.classList.remove("show");
  });
}
