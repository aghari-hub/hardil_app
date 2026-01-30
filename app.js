/* ===============================
   HarDil App JS
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- APP BUTTON REDIRECT ---------- */
  document.querySelectorAll(".app-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank"); // open official site
      }
    });
  });

  /* ---------- DRAWER ELEMENTS ---------- */
  const menuBtn = document.querySelector(".top-app-menu");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("closeMenu");
  const backdrop = document.getElementById("backdrop");

  /* ---------- OPEN DRAWER ---------- */
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      drawer.classList.add("open");
      backdrop.classList.add("show");
    });
  }

  /* ---------- CLOSE DRAWER ---------- */
  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("show");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  /* ---------- SCROLL TO SECTION ---------- */
  document.querySelectorAll("[data-scroll]").forEach(link => {
    link.addEventListener("click", () => {
      const targetClass = link.getAttribute("data-scroll");
      const section = document.querySelector("." + targetClass);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      closeDrawer();
    });
  });

});
