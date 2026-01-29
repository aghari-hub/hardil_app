// HarDil App Launcher
// Handles click on app buttons using data-url

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".app-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
